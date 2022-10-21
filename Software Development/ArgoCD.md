---
layout: meth
parent: Software Development
---

# ArgoCD
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Sync

Sync objects following the current version of yamls in your github repo

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