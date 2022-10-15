---
layout: meth
parent: Software Development
---

# Drone
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

Another CICD Tool

## Private Repo Handling

<https://docs.drone.io/pipeline/docker/syntax/cloning/auth/>

<https://discourse.drone.io/t/how-does-cloning-private-https-repos-work/2110>

## Local Run

<https://docs.drone.io/quickstart/cli/>


### Install

```
brew install drone-cli
```


### Run 

```
drone exec <path/to/.drone.yml>
```

If you don't specify the path, it will automatically look for `.drone.yml` in the current directory