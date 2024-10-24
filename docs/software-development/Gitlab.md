---
layout: meth
parent: Software Development
---
# Gitlab

## self-host gitlab

### start/stop

<https://docs.gitlab.com/omnibus/maintenance/#starting-and-stopping>

start

```
sudo gitlab-ctl start
```

stop

```
sudo gitlab-ctl stop
```

enable autostart

```
systemctl enable gitlab-runsvdir
```

<https://stackoverflow.com/a/47891691/15493213>

disable autostart

```
sudo systemctl disable gitlab-runsvdir.service
```

<https://stackoverflow.com/a/35902817/15493213>

### install

official doc: <https://about.gitlab.com/install/#ubuntu>  

install required packages

```
sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
sudo apt-get install -y postfix
```

install

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

setup desired url

```
sudo EXTERNAL_URL="<url>" apt-get install gitlab-ee
```

if `Unable to locate package gitlab-ce`, do

```
curl -L -o gitlab-ee_13.0.6.deb https://packages.gitlab.com/gitlab/gitlab-ee/packages/debian/buster/gitlab-ee_13.0.6-ee.0_amd64.deb/download.deb

sudo EXTERNAL_URL="<url>" apt install ./gitlab-ee_13.0.6.deb
```

[ref](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/5176#note_352348985)

then go to `<url>`  
you should see  

![[gitlab-welcome.png]]

- To login as admin, use the username `root` and the password in `/etc/gitlab/initial_root_password`
- To use a new account, first register and then login.
- If you see you account is pending approval, login as admin and go menu → admin → settings → sign-up restrictions and uncheck `Require admin approval for new sign-up` and save changes.    
	- <https://docs.gitlab.com/ee/user/admin_area/settings/sign_up_restrictions.html#require-administrator-approval-for-new-sign-ups>

repos you've committed would be stored in `/var/opt/gitlab/git-data/repositories`