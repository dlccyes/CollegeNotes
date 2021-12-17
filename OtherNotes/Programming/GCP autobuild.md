---
title: GCP autobuild
layout: meth
parent: Programming
---
# GCP autobuild
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

guides followed
- https://blog.cloud-ace.tw/application-modernization/devops/devops-google-cloud-ci-cd/
- https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build

`gcloud config set project <project-id>`

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

```
git clone https://github.com/GoogleCloudPlatform/gke-gitops-tutorial-cloudbuild \
    hello-cloudbuild-app
```

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