---
title: Docker
layout: meth
parent: Programming
---
# Docker
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## installation
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

set up the stable repository
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

## commands
### start docker
`sudo service docker start`