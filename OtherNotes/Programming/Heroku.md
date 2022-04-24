---
title: Heroku
layout: meth
parent: Programming
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
- set buildstack
	- `heroku buildpacks:set heroku/python -a playlastify`
- see log
	- `heroku logs --tail -a <appname>`
- add remote
	- `heroku git:remote -a <appname>`
	- <https://devcenter.heroku.com/articles/git#for-an-existing-app>
- go into console
	- `heroku ps:exec -a <appname>`
- restart
	- `heroku restart -a <appname>`