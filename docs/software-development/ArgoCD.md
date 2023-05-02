---
layout: meth
parent: Software Development
---

# ArgoCD

## Meta

[Github](https://github.com/argoproj/argo-cd/)

[Doc](https://argo-cd.readthedocs.io/en/stable/)

## Sync

Sync objects following the current version of yamls in your github repo. Only reapply those with changes in the source yaml. 

### Pulling the latest image

If you use `latest` tag for your images, it won't pull the latest images as your yaml including the code always never changes. 

**Solution**

- Use anabsolute tag and update it manually each time or automatically via a CI job. 
- Use 3rd party tools
	- [Keel](https://keel.sh/)
	- [Argo CD Image Updater](https://argocd-image-updater.readthedocs.io)

**See these discussions**

- <https://github.com/argoproj/argo-cd/issues/2532>.
- <https://github.com/argoproj/argo-cd/issues/1648>

### Options

- Prune
	- Delete out of sync (those != your yamls) objects

## Troubleshooting

### existing repository spec is different; use upsert flag to force update;

**Scenario**

You're using Web UI to connect to a repo, but this error message pops up

**Solution**

As the error message said, you'll need a upsert flag. However, the web ui does not provide this option. So what you need to do is to supply it manually

Open dev tool -> Network tab, click "edit and resend" on your failed request, and append `?upsert=true` the the api endpoint

See <https://github.com/argoproj/argo-cd/issues/3464>

### Resource usage over limit

Try deleting the resource and pressing sync to recreate.