---
layout: meth
parent: Software Development
---

# SSH

## ssh into a machine

```
ssh <user>@<host>
```

### About .bashrc

When you ssh into a machine with bash, `/.bashrc` will be sourded. 

However, when you do it in another shell, e.g. zsh, only `~/.bash_profile` will be sourced. So if you want to make `~/.bashrc` sourced automatically in this case, source it in the machine's `~/.bash_profile`.

```
if [ -f ~/.bashrc ]; then
  . ~/.bashrcvi
fi
```

See <https://stackoverflow.com/a/820533/15493213> for discussion, and <http://mywiki.wooledge.org/DotFiles> for how it works under the hood.

> Now, since bash is being invoked as a login shell, it reads `/etc/profile` first. On Linux systems, this will typically also source some or all files in /`etc/profile.d` (as suggested by the [Linux Standard Base](http://refspecs.linuxfoundation.org/LSB_3.2.0/LSB-Core-generic/LSB-Core-generic/sh.html) -- generally /etc/profile should include code for this). Then, bash looks in your home directory for `.bash_profile`, and if it finds it, it reads that. If it doesn't find `.bash_profile`, it looks for .bash_login, and if it doesn't find that, it looks for .profile (the standard Bourne/POSIX/Korn shell configuration file). Otherwise, it stops looking for dot files, and gives you a prompt.

> Now let's take the second-simplest example: an ssh login. This is extremely similar to the text console login, except that instead of using getty and login to handle the initial greeting and password authentication, sshd(8) handles it. sshd in Debian is also linked with PAM, and it will read the `/etc/pam.d/ssh` file (instead of `/etc/pam.d/login`). Otherwise, the handling is the same. Once sshd has run through the PAM steps (if applicable to your system), it "execs" bash as a login shell, which causes it to read `/etc/profile` and then one of `.bash_profile` or `.bash_login` or` .profile`.

### ssh with password in one line

```
sshpass -p <password> ssh <user>@<host>
```
but then your password will be visible for other processes or in the shell history

### ssh without password

if you don't have ssh key on your machine yet
```
ssh-keygen -t rsa -f ~/.ssh/id_rsa
```

copy your ssh key to the target machine
```
ssh-copy-id -i ~/.ssh/id_rsa <user>@<host>
```
<https://apple.stackexchange.com/a/285806>  
<https://www.ssh.com/academy/ssh/copy-id>

## Install ssh server

install
```
sudo apt install openssh-server
```

enable & start
```
sudo systemctl enable ssh
sudo systemctl start ssh
```

open port 22
```
sudo ufw allow 22
```

## ssh session

> SSH sessions will be on a pseudo-terminal slave (pts). But keep in mind that not all pts connections are necessarily SSH connections.

## keep ssh session from freezing

<https://unix.stackexchange.com/a/200256>

## generate ssh key

1. `ssh-keygen -t ed25519 -C [username]`
2. press ok til the end (or type something to set password or change saving location)
3. private key & public key would be in `~/.ssh`