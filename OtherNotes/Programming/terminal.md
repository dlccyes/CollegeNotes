---
title: terminal
layout: meth
parent: Programming
---
# terminal
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## awk
- substring index
	- `awk 'BEGIN{print index("abcdes","bc")}'` → 2
	- `echo "My name is Deepak" | awk '{print index($0,"Deepak")}'` → 12


## tar
- compress
	- compress `b08901001_pa1` to `b08901001_pa1.tgz`
		- `tar -zcvf b08901001_pa1.tgz b08901001_pa1`
- extract
	- extract `b08901001_pa1.tgz`
		- `tar zxvf b08901001_pa1.tgz`

## zip
- zip `haha` to `haha.zip`
	- `zip -r haha.zip haha`

## ssh
### keygen
1. `ssh-keygen -t ed25519 -C [username]`
2. press ok til the end (or type something to set password or change saving location)
3. private key & public key would be in `~/.ssh`

### gcp
https://ithelp.ithome.com.tw/articles/10251134

1. generate a new ssh key or use existing ssh key and paste (the public one) to your Computing Engine VM (click the VM name → edit → add ssh key → save)
3. `ssh -i [private_key_location] id_ed25519 [username]@[external_IP_of_VM]`
	- if successfully go into your VM, go to next step
	- if permission denied, then the public key on the VM and your private key on your machine don't match

to set alias, go to `~/.ssh/config` and add  
```
Host [my_alias]
HostName   [external_ip]
Port 22
IdentitiesOnly yes
IdentityFile [private key location]
User [username]
```
change the `[]`to fit your need

and then just simply `ssh my_alias` to ssh into it

## other commands
- autocomplete from history
	- `ctrl+R`
- cd to previous directory
	- `cd -`
		
## modules
### cowsay
https://github.com/tnalpgge/rank-amateur-cowsay
`echo "haha" | cowsay -f gnu`

### fortune
`fortune`

### uwuify
`echo "rank" | uwuify`

### lolcat
`fortune | uwuify | cowsay -f gnu | lolcat`

## WSL
### list all running distros
`wsl -l -v` (in command line)

### terminate
`wsl -t DISTRO` to terminate DISTRO

`wsl --shutdown` to terminate all

### memory problem
it won't return your memory once it allocated it, until termination

ref
- <https://blog.simonpeterdebbarma.com/2020-04-memory-and-wsl/>
- <https://github.com/microsoft/WSL/issues/4166>

or `sudo sh -c 'echo 1 > /proc/sys/vm/drop_caches'`

per <https://medium.com/hungys-blog/clear-linux-memory-cache-manually-90bec95ea003>