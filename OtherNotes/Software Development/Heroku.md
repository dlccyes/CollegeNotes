---
title: Heroku
layout: meth
parent: Software Development
---
# Heroku
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## installation
`curl https://cli-assets.heroku.com/install.sh | sh`

## command
- login
	- `heroku login`
- add `-a` flag to specify the app, otherwise it will be default to the repo you're on
- set buildstack
	- `heroku buildpacks:set heroku/python`
- see log
	- `heroku logs --tail`
- add remote
	- `heroku git:remote`
	- <https://devcenter.heroku.com/articles/git#for-an-existing-app>
- go into console
	- `heroku ps:exec`
- restart
	- `heroku restart`
- check if your app is running
	- `heroku ps`
- make your app run
	- `heroku ps:scale web=1`