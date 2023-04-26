---
title: Gitlab CICD
layout: meth
parent: Software Development
---
# Gitlab CICD

## Intro
### What does it do?
Whenever you push code to your gitlab repo, gitlab's CI/CD pipeline would be triggered. In the first step, it will build a docker image and push the docker image to your Google Container Registry (GCR). In the second step, it will push the image to your Google Kubernetes Engine (GKE).

### Guides followed
- main
	- <https://blog.cloud-ace.tw/application-modernization/devops/devops-gitlab-asp-net-core-kubernetes-engine-ci-cd/>
		- build & push docker image to google container registry
		- push image to google kubernetes engine
		- contain some mistakes
		- his repo
			- <https://gitlab.com/kevin354/gitlab-iis-k8s-deploy-sample/-/tree/master>
- supplementary
	- <https://medium.com/@tasslin/隨手寫寫-gcp-5-gitlab-ci-gke-7c7b1c4e9eec>
		- build & push docker image to google container registry
		- push image to google kubernetes engine
	- <https://ludusrusso.space/blog/2020/09/gitlab-ci-gcr>
		- build image and push to google container registry
	- <https://ithelp.ithome.com.tw/articles/10266722?sc=iThomeR>
		- build & push docker image to Gitlab container registry
	- <https://ikala.cloud/tutorials-kubernetes-engine-load-balancer/>
	- <https://cloud.google.com/architecture/implementing-deployment-and-testing-strategies-on-gke#perform_a_rolling_update_deployment>
- troubleshooting
	- Cannot connect to the Docker daemon at . Is the docker daemon running?
		- <https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566#note_199261985>
	- dial tcp: lookup docker on : no such host
		- <https://forum.gitlab.com/t/error-during-connect-post-http-docker-2375-v1-40-auth-dial-tcp-lookup-docker-on-169-254-169-254-no-such-host/28678/4>

## Create GCP VM and install Gitlab

(Not really necessary, you can just use your own machine and <https://gitlab.com/>. If you're using your local machine, just do all the steps involving GCP VM on your local machine instead.)

Create a computing engine instance
- boot disk size >= 30GB
- better give more memory (like 64GB) to or would be pretty laggy
- you can alter these settings after you created too (need to shutdown first tho)

Reserve the ephemeral external IP to make it static
- go to <https://console.cloud.google.com/networking/addresses/>
- click "Reserve"

```
sudo apt-get update 
sudo apt-get install -y curl openssh-server ca-certificates tzdata
```

```
sudo apt-get install -y postfix
```  
Internet Site → Ok

install [Gitlab](Gitlab)    
official doc: <https://about.gitlab.com/install/#ubuntu>  
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash

sudo EXTERNAL_URL="http://EXTERNAL_IP" apt-get install gitlab-ee
```
would take some time

if `Unable to locate package gitlab-ce`, do
```
curl -L -o gitlab-ee_13.0.6.deb https://packages.gitlab.com/gitlab/gitlab-ee/packages/debian/buster/gitlab-ee_13.0.6-ee.0_amd64.deb/download.deb

sudo EXTERNAL_URL="http://EXTERNAL_IP" apt install ./gitlab-ee_13.0.6.deb
```
[ref](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/5176#note_352348985)

then go to `http://external_ip`  
you should see  
![[gitlab-cicd-1.png]]

- To login as admin, use the username `root` and the password in `/etc/gitlab/initial_root_password`
- To use a new account, first register and then login.
- If you see you account is pending approval, login as admin and go menu → admin → settings → sign-up restrictions and uncheck `Require admin approval for new sign-up` and save changes.    
	- <https://docs.gitlab.com/ee/user/admin_area/settings/sign_up_restrictions.html#require-administrator-approval-for-new-sign-ups>

(gitlab is intalled in `/var/opt/gitlab`)

(in gcp) Search `service accounts` and create a new service account.

Assign the `Storage Admin` & `Kubernetes Enginer Developer` role to it and hit `done`.

## Create gitlab repo

Login to gitlab (not with admin)

Go to  `edit profile`(in avatar dropdown) →  `user settings` → `SSH Keys` and add your ssh public key in your local computer, may be in `~/.ssh`).

Create a new project.

(in local) Clone the repo and try push something.

## Set gitlab CI/CD environmental variables

(in repo) `Settings` → `CI/CD` → `Variables`

![[gitlab-cicd-2.png]]

(in GCP) go to the service account you've created, and go to manage keys → add key → create new key → json → download it (used in next step)

(back to Gitlab)  
Add `GCP_SERVICE_KEY`, the value is the key json file you've just downloaded. Uncheck `Protect variable` also.
![[gitlab-cicd-3.png]]

Add `GCP_PROJECT`, the value is your GCP project ID.  
![[gitlab-cicd-4.png]]

Add `GCP_ZONE`, the value is the zone your VM's in (I think)  
![[gitlab-cicd-5.png]]

go to GCP shell and create a GKE cluster  
`gcloud container clusters create [cluster_name] --num-nodes=2 --machine-type=n1-standard-1 --zone=us-east1-b`  
It would take a few minutes, but you can just leave it and carry on.

Back to Gitlab and add `GCP_CLUSTER_NAME`, the value is the name of the cluster you've just created.  
![[gitlab-cicd-6.png]]

Add `GCP_GCR`, the value is `gcr.io/[GCP_project_ID]/[Gitlab_repo_name]`  
(if the region you use isn't US, you probably should use `asia.gcr.io` `eu.gcr.io` etc. instead)
![[gitlab-cicd-7.png]]
GCR means Google Container Registry, set this up so that later on your docker images would be pushed to GCR also.

Now you have 5 variables set.  
![[gitlab-cicd-8.png]]

## Install docker on GCP VM
Go to GCP VM terminal and install docker.  
official doc: <https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository>

update apt and install necessary packages  
```
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg lsb-release
```

add Docker’s official GPG key
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

set up the stable repository
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

install docker engine  
```
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

test if is installed correctly  
```
sudo docker run hello-world
```
will download the image `hello-world` and pring some messages  
`sudo docker ps -a` to check if it's running

## Add necessary files in gitlab repo
Go to your gitlab repo and add `.gitlab-ci.yml`  
Whenever you push code, Gitlab runner would run your CI/CD pipeline according to this file.  
```yml
variables:
  DOCKER_DRIVER: overlay2
  DOCKER_HOST: tcp://docker:2375
  DOCKER_TLS_CERTDIR: ""
  GCP_SERVICE_KEY: $GCP_SERVICE_KEY
  GCP_PROJECT: $GCP_PROJECT
  GCP_ZONE: $GCP_ZONE
  GCP_CLUSTER_NAME: $GCP_CLUSTER_NAME
  GCP_GCR: $GCP_GCR

stages:
  - docker-build
  - gke-deploy
  - test

docker-build:
  stage: docker-build
  image: docker:latest
  tags:
    - gke
  services:
    - name: docker:dind
  before_script:
    - echo $GCP_SERVICE_KEY | docker login -u _json_key --password-stdin https://gcr.io
  script:
    - docker build -t $GCP_GCR:latest .
    - docker tag $GCP_GCR:latest $GCP_GCR:$CI_COMMIT_SHA
    # push to google container registry
    - docker push $GCP_GCR:latest && docker push $GCP_GCR:$CI_COMMIT_SHA

gke-deploy:
  stage: gke-deploy
  image: google/cloud-sdk
  tags:
    - gke
  before_script:
    - echo $GCP_SERVICE_KEY > ~/service_account_key.json
    - gcloud auth activate-service-account --key-file ~/service_account_key.json
    - gcloud config set project $GCP_PROJECT
    # point kubectl at a specific GKE cluster
    - gcloud container clusters get-credentials $GCP_CLUSTER_NAME --zone $GCP_ZONE --project $GCP_PROJECT
    # apply the configuration in deployment.yaml
    - kubectl apply -f deployment.yaml
  script:
    # rolling update on image
    - kubectl set image deployment/app-deployment app=$GCP_GCR:$CI_COMMIT_SHA
    - kubectl rollout status deployment/app-deployment
```
As defined in `stages`, it will first execute `docker-build`, then (if successful) `gke-deploy`.

Go to your gitlab repo and add `deployment.yaml`  
```yaml
---
# Source: service.yaml
apiVersion: v1
kind: Service
metadata:
  name: app-service
spec:
  selector:
    app: app-service
  type: LoadBalancer
  ports:
  - protocol: TCP
    name: app-80-80
    port: 80
    targetPort: 80
---
# Source: deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: app-service
  template:
    metadata:
      labels:
        app: app-service
    spec:
      containers:
      - image: asia.gcr.io/<gcp_project_id>/<image_name>:latest
        name: app
        ports:
        - containerPort: 80
          name: app-port
        resources:
          requests:
            cpu: 50m
            memory: 50Mi
```

learn more about `deployment.yaml` [here](https://www.mirantis.com/blog/introduction-to-yaml-creating-a-kubernetes-deployment)

Pull sample codes from <https://github.com/dotnet/dotnet-docker/tree/main/samples/aspnetapp> and delete everything except `aspnetapp` &  `Dockerfile` & `aspnetapp.sln`.  
(you can partial clone like [this](https://stackoverflow.com/a/43902478/15493213))  

## Install & register Gitlab Runner on GCP VM
official doc: <https://docs.gitlab.com/runner/install/linux-repository.html>

(go to your GCP VM)  

add official repo
```
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
```

install gitlab runner
```
sudo apt-get install gitlab-runner
```

register gitlab runner  
```
sudo gitlab-runner register \
  --non-interactive \
  --url "[VM's external IP]" \
  --registration-token "[token]" \
  --executor "docker" \
  --docker-image docker:stable \
  --description "[whatever]" \
  --tag-list "gke" \
  –-docker-privileged="true"
```

- registration token can be found in (your gitlab repo) `Settings` → `CI/CD` → `Runners` → `Specific runners`
- executor = `docker`
- default docker image = `docker:19.03.12`
- tag-list: the tag you use should be the same as what you wrote in `.gitlab-ci.yml`, as the runner would only run the jobs with the matching tag
	- alternatively, you can go to `Settings` → `CI/CD` → `Runners` → edit your runner and uncheck `Indicates whether this runner can pick jobs without tags` so that the runner would run all jobs regardless of if the tag matches
	- or just add `--run-untagged="true"` when registering runner

Alternatively, you can run  
```
sudo gitlab-runner register
```

Go to `Settings` → `CI/CD` → `Runners`to find your runner.

Configure gitlab runner  
(in GCP VM)  
```
sudo vim /etc/gitlab-runner/config.toml
```

change original values to this
```
privileged = true
```
(if you've set up your gitlab runner properly it's probably already like this)  
![[gitlab-cicd-9.png]]

ref:  
<https://forum.gitlab.com/t/error-during-connect-post-http-docker-2375-v1-40-auth-dial-tcp-lookup-docker-on-169-254-169-254-no-such-host/28678/4>

for more troubleshooting:  
<https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566#note_199261985>

## Push and trigger CI/CD
push codes  

In your repo, go to `CI/CD` → `Jobs` to see what happened.

![[gitlab-cicd-10.png]]

Go to [GCR](https://console.cloud.google.com/gcr/imagess), a repo containing your docker images should appear.

If succeed, go to  [GKE/workload](https://console.cloud.google.com/kubernetes/workload) to see if your image is up.

Go to [GKE/Services & Ingress](https://console.cloud.google.com/kubernetes/discovery) and click the endpoint, you should see this  
![[gitlab-cicd-11.png]]
you can also get the endpoint by  
```
SERVICE_IP=$(kubectl get svc app-service \
    -o jsonpath="{.status.loadBalancer.ingress[0].ip}")
```
and then check it with  
```
curl "http://${SERVICE_IP}:8080/version"
```

You can open Google cloud shell and  
```
kubectl rollout status deployment/app-deployment
kubectl get deployment
kubectl get pods
kubectl get svc/app-service
```
to see your GKE status.   
Check the official guide for more  
<https://cloud.google.com/kubernetes-engine/docs/how-to/updating-apps#kubectl-set>

## Troubleshooting
### Gitlab CI/CD job pending forever
Your runner can't be picked up. Go to where your gitlab runner is installed and  
```
sudo gitlab-runner start
```

### Is the docker daemon running?
Docker isn't running on where your gitlab runner is at. Start your docker  
```
sudo service docker start
```

if still persist follow <https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566#note_199261985> again 

### dial tcp: lookup docker on : no such host
```
sudo vim /etc/gitlab-runner/config.toml
```
make `privileged` = `true`

as in  
<https://forum.gitlab.com/t/error-during-connect-post-http-docker-2375-v1-40-auth-dial-tcp-lookup-docker-on-169-254-169-254-no-such-host/28678/4>

## More
This part isn't included in the main guide I followed.

### PHP test
official guide: <https://docs.gitlab.com/ee/ci/examples/php.html>

create a new stage in `.gitlab-ci.yml`  

```yml
test:
  stage: test
  image: php:5.6
  tags:
    - gke
  script:
    - php test.php
```
also add this stage to `stages`  

In `test.php`, write your tests.
- `exit(0)` will indicate the test has succeeded
- `exit(1)` will indicate the test has failed
- <https://stackoverflow.com/a/54025268/15493213>

![[gitlab-cicd-12.png]]

### Continue after failure
<https://docs.gitlab.com/ee/ci/yaml/#allow_failure>

```yml
job1:
  stage: test
  script:
    - execute_script_1

job2:
  stage: test
  script:
    - execute_script_2
  allow_failure: true

job3:
  stage: deploy
  script:
    - deploy_to_staging
```

### Conditions to run jobs
#### rules
<https://docs.gitlab.com/ee/ci/yaml/index.html#rules>
```yml
 job1:
  stage: test
  rules:
    - if: '$CI_COMMIT_TITLE =~ /cicd/'
  script:
    - execute_script_1

job2:
  stage: test
  script:
    - execute_script_2
```
For this `.gitlab-ci.yml`, if the commit message contains `cicd`, both jobs would be run, otherwise only job2 would be run.

#### when
<https://docs.gitlab.com/ee/ci/yaml/index.html#when>

```yml
cleanup_build_job:
  stage: cleanup_build
  script:
    - cleanup build when failed
  when: on_failure
```
run when at least one job has failed in previous stages

``
```
cleanup_job:
  stage: cleanup
  script:
    - cleanup after jobs
  when: always
```
run whenever, regardless of any previous failures

```yml
deploy_job:
  stage: deploy
  script:
    - make deploy
  when: manual
```
never run automatically, have to be run manually

### Predefined variables
<https://docs.gitlab.com/ee/ci/variables/predefined_variables.html>

Variables defined by Gitlab. You can just use them directly without first setting them up.

e.g.
- `CI_COMMIT_TITLE` = first line of your commit message
- `CI_COMMIT_BRANCH` = committing branch name

### Job dependencies (Needs)
<https://docs.gitlab.com/ee/ci/yaml/index.html#needs>

### Notified when Job failed
profile (right top avatar) → edit profile → Notifications → right bottom drop down → custom

<https://about.gitlab.com/blog/2020/06/17/notification-on-pipeline-succeeds/>