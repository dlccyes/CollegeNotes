---
title: GCP CICD
layout: meth
parent: Software Development
---
# GCP CICD

Guides followed

- <https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build>
- <https://blog.cloud-ace.tw/application-modernization/devops/devops-google-cloud-ci-cd/>

tips
- you can see project ID & number at home page (dashboard)
- you can search products/resources directly instead of finding them in the sidebar
- you can open a new terminal with a project s.t. you don't have to set the project ID yourself

GKE = google kubernetes engine

---
In cloud shell

```
gcloud services enable container.googleapis.com \
    cloudbuild.googleapis.com \
    sourcerepo.googleapis.com \
    artifactregistry.googleapis.com
```

```
```
```
gcloud artifacts repositories create my-repository \  --repository-format=docker \  --location=us-central1
```

create GKE cluster  
```
gcloud container clusters create-auto hello-cloudbuild \    --region us-central1
```
need a few minutes

```
git config --global user.email "YOUR_EMAIL_ADDRESS"
git config --global user.name "YOUR_NAME"
```
can do it parallelly in other shelll

```
gcloud source repos create hello-cloudbuild-app
gcloud source repos create hello-cloudbuild-env
```

clone the repo
```
git clone https://github.com/GoogleCloudPlatform/gke-gitops-tutorial-cloudbuild \
    hello-cloudbuild-app
```

`test_app.py` is unit test

```
cd ~/hello-cloudbuild-app
PROJECT_ID=$(gcloud config get-value project)
git remote add google \
    "https://source.developers.google.com/p/${PROJECT_ID}/r/hello-cloudbuild-app"
```

## create container image
create a container image based on last commit  
(in the directory)
```
COMMIT_ID="$(git rev-parse --short=7 HEAD)"
gcloud builds submit --tag="us-central1-docker.pkg.dev/${PROJECT_ID}/my-repository/hello-cloudbuild:${COMMIT_ID}" .
```

go to https://console.cloud.google.com/artifacts to check if succeed  
![](https://i.imgur.com/zxYqXEp.png)

## create CI pipeline

go to [triggers](https://console.cloud.google.com/cloud-build/triggers/) and create a trigger  
![](https://i.imgur.com/bIfnORr.png)
so it the trigger would be triggered and run `cloudbuild.yaml` when you push something to a branch  
```yaml
# [START cloudbuild]
steps:
# This step runs the unit tests on the app
- name: 'python:3.7-slim'
  id: Test
  entrypoint: /bin/sh
  args:
  - -c
  - 'pip install flask && python test_app.py -v'

# This step builds the container image.
- name: 'gcr.io/cloud-builders/docker'
  id: Build
  args:
  - 'build'
  - '-t'
  - 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:$SHORT_SHA'
  - '.'

# This step pushes the image to Artifact Registry
# The PROJECT_ID and SHORT_SHA variables are automatically
# replaced by Cloud Build.
- name: 'gcr.io/cloud-builders/docker'
  id: Push
  args:
  - 'push'
  - 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:$SHORT_SHA'
# [END cloudbuild]
```
which will run the unit test, build & push the image to artifact registry (the successor of container registry, or GCR)

```shell
cd ~/hello-cloudbuild-app
git push google master
```
now the trigger should run  

go to [build history](https://console.cloud.google.com/cloud-build/builds) to check if succeed  
you can click the build to see log

go to [artifact registry](https://console.cloud.google.com/artifacts/docker/) to see if image is up
![](https://i.imgur.com/iJobrkb.png)

## create CD pipeline
- candidate branch
	- all the deployment attempts
- production branch
	- all the successful deployments
- can rollback

grant access to GKE
(you can see the project number from dashboard (home))
```
PROJECT_NUMBER= 
gcloud projects add-iam-policy-binding ${PROJECT_NUMBER} \
    --member=serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com \
    --role=roles/container.developer
```

clone the `env` repo
```
cd ~
gcloud source repos clone hello-cloudbuild-env
```
which is empty

create a branch `production`
```
cd ~/hello-cloudbuild-env
git checkout -b production
```

copy `cloudbuild.yaml` from `app` directory and commit
```
cp ~/hello-cloudbuild-app/cloudbuild-delivery.yaml ~/hello-cloudbuild-env/cloudbuild.yaml
git add .
git commit -m "Create cloudbuild.yaml for deployment"
```

`cloudbuid.yaml` applies manifest (a list of all resources) to GKE cluster and copy the manifest to production branch if successful
```yaml
# [START cloudbuild-delivery]
steps:
# This step deploys the new version of our container image
# in the hello-cloudbuild Kubernetes Engine cluster.
- name: 'gcr.io/cloud-builders/kubectl'
  id: Deploy
  args:
  - 'apply'
  - '-f'
  - 'kubernetes.yaml'
  env:
  - 'CLOUDSDK_COMPUTE_REGION=us-central1'
  - 'CLOUDSDK_CONTAINER_CLUSTER=hello-cloudbuild'

# This step copies the applied manifest to the production branch
# The COMMIT_SHA variable is automatically
# replaced by Cloud Build.
- name: 'gcr.io/cloud-builders/git'
  id: Copy to production branch
  entrypoint: /bin/sh
  args:
  - '-c'
  - |
    set -x && \
    # Configure Git to create commits with Cloud Build's service account
    git config user.email $(gcloud auth list --filter=status:ACTIVE --format='value(account)') && \
    # Switch to the production branch and copy the kubernetes.yaml file from the candidate branch
    git fetch origin production && git checkout production && \
    git checkout $COMMIT_SHA kubernetes.yaml && \
    # Commit the kubernetes.yaml file with a descriptive commit message
    git commit -m "Manifest from commit $COMMIT_SHA
    $(git log --format=%B -n 1 $COMMIT_SHA)" && \
    # Push the changes back to Cloud Source Repository
    git push origin production
# [END cloudbuild-delivery]
```

create branch `candidate` and push both branches
```
git checkout -b candidate
git push origin production
git push origin candidate
```

grant Source Repository Writer the IAM role
```
cat >/tmp/hello-cloudbuild-env-policy.yaml <<EOF
bindings:
- members:
  - serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com
  role: roles/source.writer
EOF
gcloud source repos set-iam-policy \
    hello-cloudbuild-env /tmp/hello-cloudbuild-env-policy.yaml
```

### create CD trigger
go to triggers and create a trigger  
<!--⚠️Imgur upload failed, check dev console-->
![](https://i.imgur.com/i0MUZuf.png)

#### modify CI to trigger CD

replace `cloudbuild.yaml` with `cloudbuild-trigger-cd.yaml`
```
cd ~/hello-cloudbuild-app
cp cloudbuild-trigger-cd.yaml cloudbuild.yaml
```

`cloudbuild-trigger-cd.yaml` = `cloudbuild.yaml` + generate K8s manifest & trigger CD
```yaml
# [START cloudbuild]
steps:
# This step runs the unit tests on the app
- name: 'python:3.7-slim'
  id: Test
  entrypoint: /bin/sh
  args:
  - -c
  - 'pip install flask && python test_app.py -v'

# This step builds the container image.
- name: 'gcr.io/cloud-builders/docker'
  id: Build
  args:
  - 'build'
  - '-t'
  - 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:$SHORT_SHA'
  - '.'

# This step pushes the image to Artifact Registry
# The PROJECT_ID and SHORT_SHA variables are automatically
# replaced by Cloud Build.
- name: 'gcr.io/cloud-builders/docker'
  id: Push
  args:
  - 'push'
  - 'us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:$SHORT_SHA'
# [END cloudbuild]

# [START cloudbuild-trigger-cd]
# This step clones the hello-cloudbuild-env repository
- name: 'gcr.io/cloud-builders/gcloud'
  id: Clone env repository
  entrypoint: /bin/sh
  args:
  - '-c'
  - |
    gcloud source repos clone hello-cloudbuild-env && \
    cd hello-cloudbuild-env && \
    git checkout candidate && \
    git config user.email $(gcloud auth list --filter=status:ACTIVE --format='value(account)')

# This step generates the new manifest
- name: 'gcr.io/cloud-builders/gcloud'
  id: Generate manifest
  entrypoint: /bin/sh
  args:
  - '-c'
  - |
     sed "s/GOOGLE_CLOUD_PROJECT/${PROJECT_ID}/g" kubernetes.yaml.tpl | \
     sed "s/COMMIT_SHA/${SHORT_SHA}/g" > hello-cloudbuild-env/kubernetes.yaml

# This step pushes the manifest back to hello-cloudbuild-env
- name: 'gcr.io/cloud-builders/gcloud'
  id: Push manifest
  entrypoint: /bin/sh
  args:
  - '-c'
  - |
    set -x && \
    cd hello-cloudbuild-env && \
    git add kubernetes.yaml && \
    git commit -m "Deploying image us-central1-docker.pkg.dev/$PROJECT_ID/my-repository/hello-cloudbuild:${SHORT_SHA}
    Built from commit ${COMMIT_SHA} of repository hello-cloudbuild-app
    Author: $(git log --format='%an < %ae>' -n 1 HEAD)" && \
    git push origin candidate
# [END cloudbuild-trigger-cd]
```

and commit
```
git add cloudbuild.yaml
git commit -m "Trigger CD pipeline"
git push google master
```

go to build history & artifact registry to see if successful

## test complete pipeline
go to Kubernetes Engine → Services & Ingress and click on Endpoints
![](https://i.imgur.com/dvoKmM6.png)

should see Hello World!
![](https://i.imgur.com/YYbd1Cg.png)

go to `hello-cloudbuild-app` and change something, commit push and it should trigger the CI/CD pipeline
```
cd ~/hello-cloudbuild-app
sed -i 's/Hello World/Hello Cloud Build/g' app.py
sed -i 's/Hello World/Hello Cloud Build/g' test_app.py
git add app.py test_app.py
git commit -m "Hello Cloud Build"
git push google master
```

go to the endpoint again and see if the changes are applied (may took some time)

go to build history
![](https://i.imgur.com/rRQ7f6Y.png)

go to https://source.cloud.google.com/repos to see your repos 