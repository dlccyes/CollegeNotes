---
title: Gitlab CICD
layout: meth
parent: Programming
---
# Gitlab CICD
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## intro
### What does it do?
Whenever you push code to your gitlab repo, gitlab's CI/CD pipeline would be triggered. First it will create a docker image, if succesful, it will push the docker image to your Google Container Registry (GCR) & Google Kubernetes Engine (GKE).

### guides followed
- main
	- <https://blog.cloud-ace.tw/application-modernization/devops/devops-gitlab-asp-net-core-kubernetes-engine-ci-cd/>
		- contain some mistakes
		- his repo
			- <https://gitlab.com/kevin354/gitlab-iis-k8s-deploy-sample/-/tree/master>
- supplementary
	- <https://ludusrusso.space/blog/2020/09/gitlab-ci-gcr>
	- <https://medium.com/@tasslin/隨手寫寫-gcp-5-gitlab-ci-gke-7c7b1c4e9eec>
	- <https://ithelp.ithome.com.tw/articles/10266722?sc=iThomeR>
- troubleshooting
	- Cannot connect to the Docker daemon at . Is the docker daemon running?
		- <https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566#note_199261985>
	- dial tcp: lookup docker on : no such host
		- <https://forum.gitlab.com/t/error-during-connect-post-http-docker-2375-v1-40-auth-dial-tcp-lookup-docker-on-169-254-169-254-no-such-host/28678/4>

## create GCP VM and install Gitlab
(Not really necessarily, you can just use your own machine and <https://gitlab.com/>. If you're using your local machine, just do all the steps involving GCP VM on your local machine instead.)

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

`sudo apt-get install -y postfix`  
Internet Site → Ok

install gitlab  
official doc: <https://about.gitlab.com/install/#ubuntu>  
```
curl [https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh](https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh) | sudo bash
sudo EXTERNAL_URL="http://EXTERNAL_IP" apt-get install gitlab-ee
```
would take some time

then go to `http://external_ip`  
you should see  
![](https://i.imgur.com/AHK8MCg.png)

- To login as admin, use the username `root` and the password in `/etc/gitlab/initial_root_password`
- To use a new account, first register and then login.
- If you see you account is pending approval, login as admin and go menu → admin → settings → sign-up restrictions and uncheck `Require admin approval for new sign-up` and save changes.    
	- <https://docs.gitlab.com/ee/user/admin_area/settings/sign_up_restrictions.html#require-administrator-approval-for-new-sign-ups>

(in gcp) Search `service accounts` and create a new service account.

Assign the `Storage Admin` & `Kubernetes Enginer Developer` role to it and hit `done`.

## create gitlab repo

Login to gitlab (not with admin)

Go to  `edit profile`(in avatar dropdown) →  `user settings` → `SSH Keys` and add your ssh public key in your local computer, may be in `~/.ssh`).

Create a new project.

(in local) Clone the repo and try push something.


## set gitlab CI/CD environmental variables
(in repo) `Settings` → `CI/CD` → `Variables`
![](https://i.imgur.com/wiVNpvW.png)

(in GCP) go to the service account you've created, and go to manage keys → add key → create new key → json → download it (used in next step)

(back to Gitlab)  
Add `GCP_SERVICE_KEY`, the value is the key json file you've just downloaded. Uncheck `Protect variable` also.
![](https://i.imgur.com/MfXI2kA.png)


Add `GCP_PROJECT`, the value is your GCP project ID.  
![](https://i.imgur.com/TkEzmts.png)

Add `GCP_ZONE`, the value is the zone your VM's in (I think)  
![](https://i.imgur.com/OhhOTv0.png)

go to GCP shell and create a GKE cluster  
`gcloud container clusters create [cluster_name] --num-nodes=2 --machine-type=n1-standard-1 --zone=us-east1-b`  
It would take a few minutes, but you can just leave it and carry on.

Back to Gitlab and add `GCP_CLUSTER_NAME`, the value is the name of the cluster you've just created.  
![](https://i.imgur.com/W7mMI42.png)

Add `GCP_GCR`, the value is `gcr.io/[GCP_project_ID]/[Gitlab_repo_name]`  
![](https://i.imgur.com/tsAw5Zv.png)
GCR means Google Container Registry, set this up so that later on your docker images would be pushed to GCR also.

Now you have 5 variables set.  
![](https://i.imgur.com/iuLqolO.png)

## install docker on GCP VM
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

## add necessary files in gitlab repo
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
    - kubectl apply -f deployment.yaml
  script:
    - kubectl set image deployment/app-deployment app=$GCP_GCR:$CI_COMMIT_SHA
```
as defined in `stages`, it will first execute `docker-build`, then (if successful) `gke-deploy`

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

Pull sample codes from <https://github.com/dotnet/dotnet-docker/tree/main/samples/aspnetapp> and delete everything except `aspnetapp` &  `Dockerfile` & `aspnetapp.sln`.  
(you can partial clone like [this](https://stackoverflow.com/a/43902478/15493213))  

## install & register Gitlab Runner on GCP VM
official doc: https://docs.gitlab.com/runner/install/linux-repository.html

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
  --docker-image docker:19.03.12 \
  --description "[whatever]" \
  --tag-list "gke" \
  --run-untagged="true" \
  –-docker-privilege="true"
```
- registration token can be found in (your gitlab repo) `Settings` → `CI/CD` → `Runners` → `Specific runners`
- executor = `docker`
- default docker image = `docker:19.03.12`
- tag-list: the tag you use should be the same as what you wrote in `.gitlab-ci.yml`, as the runner would only run the jobs with the matching tag
	- alternatively, you can go to `Settings` → `CI/CD` → `Runners` → edit your runner and uncheck `Indicates whether this runner can pick jobs without tags` so that the runner would run all jobs regardless of if the tag matches

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
image = "docker:stable"
privileged = true
```

![](https://i.imgur.com/bkK5hhy.png)

ref:  
<https://forum.gitlab.com/t/error-during-connect-post-http-docker-2375-v1-40-auth-dial-tcp-lookup-docker-on-169-254-169-254-no-such-host/28678/4>

for more troubleshooting:  
<https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566#note_199261985>

## push and trigger CI/CD
push codes  

In your repo, go to `CI/CD` → `Jobs` to see what happened.

![](https://i.imgur.com/awhlYSX.png)

If succeed, go to  [GCP → Kubernetes Engine](https://console.cloud.google.com/kubernetes/) to see if your image is up.

Go to [GCP → Container Registry](https://console.cloud.google.com/gcr/imagess), a repo containing your docker images should appear.

go to `Services and Ingress` (in GKE) and click the endpoint, you should see this  
![](https://i.imgur.com/tPcX7yy.png)


## troubleshooting
### gitlab CI/CD job pending forever
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