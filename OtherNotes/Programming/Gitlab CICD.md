---
title: Gitlab CICD
layout: meth
parent: Programming
---
# Gitlab CICD
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

guides followed
- https://blog.cloud-ace.tw/application-modernization/devops/devops-gitlab-asp-net-core-kubernetes-engine-ci-cd/

create a computing engine instance with boot disk size >= 30GB

```
sudo apt-get update 
sudo apt-get install -y curl openssh-server ca-certificates tzdata
```

`sudo apt-get install -y postfix`
Internet Site → Ok

install gitlab  
official doc: https://about.gitlab.com/install/#ubuntu  
```
curl [https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh](https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh) | sudo bash
sudo EXTERNAL_URL="http://EXTERNAL_IP" apt-get install gitlab-ee
```
would take some time

then go to `http://external_ip`  
you should see  
![](https://i.imgur.com/AHK8MCg.png)

to login as admin, use the username `root` and the password in `/etc/gitlab/initial_root_password`

to use a new account, first register and the login  

If you see you account is pending approval, login as admin and go menu → admin → settings → sign-up restrictions and uncheck `Require admin approval for new sign-up` and save changes.  
https://docs.gitlab.com/ee/user/admin_area/settings/sign_up_restrictions.html#require-administrator-approval-for-new-sign-ups

(in gcp) search `service accounts` and create a new service account

assign the `Storage Admin` & `Kubernetes Enginer Developer` role to it and hit `done`

go to manage keys → add key → create new key → json → download it (not sure what it does and when you need it)

login to gitlab (not with admin)

go to `user settings` → `SSH Keys` and add your ssh public key (in you computer, may be in `~/.ssh`)

create a new project


