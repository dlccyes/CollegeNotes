---
title: Docker
layout: meth
parent: Software Development
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

### MacOS

<https://docs.docker.com/desktop/install/mac-install/>

### Ubuntu

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

### Arch
install
```
sudo pacman -S docker
```

start
```
sudo systemctl start docker
```

## image types

<https://medium.com/swlh/62171ed4531d>

- slim: smaller image
- alpine: even smaller image

## init

### make docker start on boot
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

<https://docs.docker.com/engine/install/linux-postinstall/#configure-docker-to-start-on-boot>

### start docker
```
sudo service docker start
```

or

```
sudo systemctl start docker
```

## container related
### show running containers
```
docker ps
```

### go into a docker container

```
docker exec -it <container_name> /bin/bash
```

or

```
docker exec -it <container_name> /bin/sh
```

<https://github.com/docker/for-linux/issues/246#issuecomment-455010125>

### stop a docker container

```
docker stop <container_id>
```

### remove a docker container

```
docker rm -f <container_id>
```

### container log

```
docker logs <container_id>
```

## run a container - docker run

```
docker run <flags> <image>
```

### run a docker container from an image

```
docker run --name <container_name> -d --rm <image_name/id>
# if it exit immediately, try
docker run --name <container_name> -dit --rm <image_name/id>
```

`--rm` for auto remove when a container with the same name already exist (but only when it is also created with the `--rm` flag)

<https://stackoverflow.com/a/31143261/15493213>

with port forwarding

```
-p <port>:<port>
```

with webcam

```
--device=/dev/video0:/dev/video0
```

### container resource control

- assign to specific cpu(s)
	- `--cpuset-cpus <#cpu>`
	- e.g.
		- `--cpuset-cpus 1`
		- `--cpuset-cpus 1,3`
- limit cpu usage
	- `--cpus <max # of cpu>`
	- e.g.
		- `--cpus 0.5`
- check the cpu related config of a container
	- `docker inspect <container> | grep -i cpu`
	- set 1 `cpus` -> 10^9 `NanoCpus`

[ref](https://www.thorsten-hans.com/docker-container-cpu-limits-explained/)

## image related

### show all docker images
```
docker images
```

### remove a docker image
```
docker image rm -f <image_id>
```

### build a docker image

build a docker image following the `Dockerfile` in the directory

```
docker build -t <name> .
```

rebuild

```
docker build --no-cache -t <name> .
```

### push image to dockerhub

Login to dockerhub if you haven't

```
docker login
```

Tag the image

```
docker tag <image_name> <username>/<repo>:<tag>
```

Push the image

```
docker push <username>/<repo>:<tag>
```

## docker-compose

will use `docker-compose.yml`

### build & start containers

```
docker-compose up -d --build
```

### build containers

```
docker-compose build
```

### start containers

```
docker-compose up -d
```

### stop containers

```
docker-compose stop
```

## device

### use your webcam in docker container

**with docker run**

add `--device=/dev/video0:/dev/video0` when doing docker run

**with docker-compose**

add this to your service in `docker-compose.yml`

```
        devices:
            - /dev/video0:/dev/video0
```

## Dockerize a flask app

```Dockerfile
# syntax=docker/dockerfile:1
FROM python:3.8-slim-buster
WORKDIR /dir_name
ADD . /dir_name
RUN pip3 install -r requirements.txt
CMD python3 application.py
```

## remove unused things

docker images & containers are stored in `/var/lib/docker/`

remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

```
docker system prune
```

remove all images without at least one container associated to them

```
docker image prune --all
```

<https://stackoverflow.com/questions/46672001/>

## Troubleshooting

### ---> [Warning] IPv4 forwarding is disabled. Networking will not work.

restard docker

```
sudo systemctl restart docker
```

<https://stackoverflow.com/a/59135923/15493213>

### express app work when run direclty but not with docker

try listening on host `0.0.0.0` instead of `localhost`

### python cv2 ImportError: libGL.so.1: cannot open shared object file: No such file or directory

Use `opencv-python-headless` instead of `opencv-python`

<https://stackoverflow.com/a/69655111/15493213>

### python app doesn't print things

Use `python3 -u <python-file>` instead of `python3 <python-file>`. If still nothing, add the `PYTHONUNBUFFERED` variable.

**with docker run**

add `PYTHONUNBUFFERED=1` when doing docker run 

**with Dockerfile**

```
ENV PYTHONUNBUFFERED 1
```

**with docker-compose**

in `docker-compose.yml`, add this in your flask service

```
  environment:
    - PYTHONUNBUFFERED=1
```


refs

- <https://stackoverflow.com/questions/29663459/>
- <https://stackoverflow.com/questions/59812009/>

### docker: Error response from daemon: No command specified.

supply a command (e.g. `/bin/bash`) after your `docker run` command

### qemu-x86_64: Could not open '/lib64/ld-linux-x86-64.so.2': No such file or directory

add `--platform linux/amd64` when doing `docker run`

<https://stackoverflow.com/a/71611002/15493213>