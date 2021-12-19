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

guides followed
- <https://blog.cloud-ace.tw/application-modernization/devops/devops-gitlab-asp-net-core-kubernetes-engine-ci-cd/>

## install gitlab on GCP VM
create a computing engine instance with boot disk size >= 30GB

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

to login as admin, use the username `root` and the password in `/etc/gitlab/initial_root_password`

To use a new account, first register and then login.

If you see you account is pending approval, login as admin and go menu → admin → settings → sign-up restrictions and uncheck `Require admin approval for new sign-up` and save changes.  
<https://docs.gitlab.com/ee/user/admin_area/settings/sign_up_restrictions.html#require-administrator-approval-for-new-sign-ups>

(in gcp) search `service accounts` and create a new service account

assign the `Storage Admin` & `Kubernetes Enginer Developer` role to it and hit `done`

## create a repo

login to gitlab (not with admin)

Go to `user settings` → `SSH Keys` and add your ssh public key in your local computer, may be in `~/.ssh`).

Create a new project.

(in local) Clone the repo and try push something.


## set CI/CD environmental variables
(in repo) `Settings` → `CI/CD` → `Variables`
![](https://i.imgur.com/wiVNpvW.png)

(in GCP) go to the service account you've created, and go to manage keys → add key → create new key → json → download it as `service_account_key.json` to `~` (it will be used in the CI workflow)

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

set up the **stable** repository
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

## create .gitlab-ci.yml
Go to your gitlab repo and add `.gitlab-ci.yml`  

```yml
variables:
  DOCKER_DRIVER: overlay
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
  services:
    - docker-dind
  before_script:
    - echo $GCP_SERVICE_KEY | docker login -u _json_key --password-stdin https://gcr.io
  script:
    - docker build -t $GCP_GCR:latest .
    - docker tag $GCP_GCR:latest $GCP_GCR:$CI_COMMIT_SHA
    - docker push $GCP_GCR:latest && docker push $GCP_GCR:$CI_COMMIT_SHA

gke-deploy:
  stage: gke-deploy
  image: google/cloud-sdk
  before_script:
    - echo $GCP_SERVICE_KEY > ~/service_account.json
    - gcloud auth activate-service-account --key-file -/service_account_key.json
    - gcloud config set project $GCP_PROJECT
    - gcloud container clusters get-credentials $GCP_CLUSTER_NAME --zone $GCP_ZONE --project $GCP_PROJECT
    - kubect apply -f deployment.yaml
  script:
    - kubect set image deployment/app-deployment app=$GCP_GCR:$CI_COMMIT_SHA
```

Pull sample codes from <https://github.com/dotnet/dotnet-docker/tree/main/samples/aspnetapp> and delete everything except `aspnetapp` &  `Dockerfile` & `aspnetapp.sln`.  
(you can partial clone like [this](https://stackoverflow.com/a/43902478/15493213))  


## install Gitlab Runner
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
  --tag-list "[whatever]" \
  --run-untagged="true" \
  –-docker-privilege="true"
```
- registration token can be found in (your gitlab repo) `Settings` → `CI/CD` → `Runners` → `Specific runners`
- executor = `docker`
- default docker image = `docker:19.03.12`

Alternatively, you can run  
```
sudo gitlab-runner register
```

Go to `Settings` → `CI/CD` → `Runners`to find your runner.


## push and trigger CI/CD
push codes  

In your repo, go to `CI/CD` → `Jobs` to see what happened.

 Cannot connect to the Docker daemon ????????????????????????????????????????\
 
sudo gitlab-runner register \
  --non-interactive \
  --url "http://34.138.254.115" \
  --registration-token "sF2sXJZfqx7wAyWyRuYy" \
  --executor "docker" \
  --docker-image docker:19.03.12 \
  --description "pls work" \
  --tag-list "test" \
  --run-untagged="true" \
  –-docker-privilege="true"