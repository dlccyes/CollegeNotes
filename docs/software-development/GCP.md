---
layout: meth
parent: Software Development
---

# GCP

## SSH to your VM

<https://ithelp.ithome.com.tw/articles/10251134>

1. generate a new ssh key or use existing ssh key and paste (the public one) to your Computing Engine VM (click the VM name → edit → add ssh key → save)
2. `ssh -i [private_key_location] id_ed25519 [username]@[external_IP_of_VM]`
	- if successfully go into your VM, go to next step
	- if permission denied, then the public key on the VM and your private key on your machine don't match

to set alias, go to `~/.ssh/config` and add  

```
Host [my_alias]
HostName   [external_ip]
Port 22
IdentitiesOnly yes
IdentityFile [private key location]
User [username]
```

change the `[]`to fit your need

and then just simply `ssh my_alias` to ssh into it

## Cloud Run

GCP's serverless solution

Follow this [guide](https://firebase.google.com/docs/hosting/cloud-run) to deploy you full stack app with a docker image.

Basically, with your `Dockerfile` ready, GCP/Firebase project set up, and google cloud CLI installed, do these to deploy

```makefile
cicd: ci cd
ci:
	gcloud builds submit --tag gcr.io/<project_name>/<image_name>
cd:
	gcloud run deploy --image gcr.io/<project_name>/<image_name>
```

Now it will be deployed to a very ugly domain. You can route Firebase's static site domain to your cloud run app, as they're much cleaner. See the section below.

### Env

Just edit the env in the web UI, and then use the usual way to get the env in your language.

See <https://cloud.google.com/run/docs/configuring/environment-variables>

## Route Firebase domain to Cloud Run App

Download firebase CLI, `firebase init`, and the change edit `firebase.json`

`firebase.json`

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "run": {
          "serviceId": "<project_name>",
          "region": "<region>"
        }
      }
    ]
  }
}
```

Now your app will also be available on
  
- `<project_name>.web.app/` 
- `<project_name>.firebaseapp.com/`

## Github Action

<https://github.com/google-github-actions/setup-gcloud>

Auth

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - id: 'auth'
        uses: 'google-github-actions/auth@v0'
        with:
          credentials_json: ${{ secrets.GCP_CREDENTIALS }}

      - name: GCP auth
        run: gcloud auth configure-docker
```

And then you can `gcloud` commands freely

## Troubleshooting

### The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable.

1. Make sure your app runs on `0.0.0.0` (`127.0.0.1` is not ok)
2. Make sure the port is `8080`

See <https://stackoverflow.com/a/59524363/15493213>

