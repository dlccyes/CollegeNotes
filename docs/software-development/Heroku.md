---
title: Heroku
layout: meth
parent: Software Development
---
# Heroku

Since it isn't free now, I recommend to use [[GCP#Cloud Run]] instead. It's dirt cheap.

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

## deploy

### deploy without git

First install Heroku CLI, and then add the `heroku-builds` plugin

```
heroku plugins:install heroku-builds
```

Use it to deploy your current directory

```
heroku builds:create -a <appname>
```

<https://github.com/heroku/heroku-builds>.

## Redirect to another url

Use this <https://elements.heroku.com/buttons/kenmickles/heroku-redirect>

