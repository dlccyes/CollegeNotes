---
layout: meth
parent: Software Development
---

# Github

## Github CLI

### install

<https://github.com/cli/cli/blob/trunk/docs/install_linux.md>

```
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

## Markdown

### Make an image visible or not depending on user's theme

<https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/>  

append `#gh-light-mode-only` to your image path for light mode  

append `#gh-dark-mode-only` to your image path for dark mode  

e.g.  

```markdown
![GitHub-Mark-Light](https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png#gh-dark-mode-only)
![GitHub-Mark-Dark](https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png#gh-light-mode-only)
```

```markdown
<!-- markdown -->
![light mode only](control-light.png#gh-light-mode-only)
![dark mode only](control-dark.png#gh-dark-mode-only)
<!-- html -->
<p align="center">
    <img src="https://github.com/alwaysmle/Glove-Mouse/blob/main/figure/control-light.png#gh-light-mode-only" width="600">
    <img src="https://github.com/alwaysmle/Glove-Mouse/blob/main/figure/control-dark.png#gh-dark-mode-only" width="600">
    <br>
<p/> 
```

## Github Page

### Generate static site from markdown

Just head to the settings and it will use [[Jekyll]] to do it for you.

### Using other static site generators

Compile your markdown files into a directory or another branch with the static site generator you choose, and specify the directory or branch in the settings so that Github Page can host them.

### Custom Domain

To use custom domain, at a file `CNAME` at your project root specifying your custom domain.

e.g.

`./CNAME`

```
sub.domain.com
```

You can also set in the settings, but what it does is also adding a `CNAME` for you.

See <https://github.com/orgs/community/discussions/21549>

### Verify a domain

<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages>

Add a TXT record Github gives you to your DNS.

## Github Action

[[Github Action]]

## Profile readme

Create a public repo named `<your username>`, the `README.md` of that repo will appear on your github profile page.

## Github badges

<https://github.com/anuraghazra/github-readme-stats>

![Github Stats](https://github-readme-stats.vercel.app/api?username=dlccyes&theme=radical)

![GitHub Streak](http://github-readme-streak-stats.herokuapp.com?user=dlccyes)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=dlccyes&layout=compact)

## Wakatime badges

Not necessarily related to github really

![Wakatime Stats](https://github-readme-stats.vercel.app/api/wakatime?username=dlccyes)

![](https://wakatime.com/share/@dlccyes/6a0c674f-734a-40fc-8307-1f44a59604a6.svg)

## Other badges

### Contribution grid snake

![](github-snake.svg)

Use this in your github action

<https://github.com/marketplace/actions/generate-snake-game-from-github-contribution-grid>

```yaml
name: generate animation

on:
  # run automatically every day
  schedule:
    - cron: "0 0 * * *" 
  
  # allows to manually run the job at any time
  workflow_dispatch:
  
  # run on every push on the main branch
  push:
    branches:
    - main
    
jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    
    steps:
      - uses: actions/checkout@v2
      - name: Gen contribution snake svg
        uses: Platane/snk/svg-only@v2
        with:
          github_user_name: ${{ github.repository_owner }}

          outputs: |
            dist/github-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
      - name: commit push
        run: |
          git config --global user.name 'snake'
          git config --global user.email 'snake@snakey.com'
          git add .
          git commit -m "push contribution snake svg"
          git push
```

### Visitor count

![](https://profile-counter.glitch.me/dlccyes/count.svg)

`https://profile-counter.glitch.me/<github_username>/count.svg`
