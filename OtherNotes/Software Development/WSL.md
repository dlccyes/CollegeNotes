---
title: WSL
layout: meth
parent: Software Development
---
# WSL
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## install
### doc
<https://docs.microsoft.com/en-us/windows/wsl/install#update-to-wsl-2>

### update
```
wsl --update
```

### wsl2
to check version  
```sh
# in command line
wsl -l -v

# in wsl
uname -r
```

to change to WSL2
- `wsl --set-version Ubuntu 2`
- troubleshoot
	- the virtual environment problem
		- search `turn windows features on or off` and check `virtual machine platform`
	- <https://github.com/microsoft/WSL/issues/5363>

### wslg
<https://github.com/microsoft/wslg>

- requirements
	- Windows build 21364+
		- check with `ver` in cmd

## X server
See <https://hackmd.io/@billsun/SyL3pzzQm>

or just use [wslg](#wslg)


## troubleshooting
### x server
- <https://github.com/microsoft/wslg/wiki/Diagnosing-%22cannot-open-display%22-type-issues-with-WSLg>
- `echo $DISPLAY` → `:0`
	- `export DISPLAY=:0`
- `ls -la /tmp/.X11-unix` → `lrwxrwxrwx 1 root root 19 Dec 29 01:04 /tmp/.X11-unix -> /mnt/wslg/.X11-unix`
	- x11 display socket
	- `ln -s /mnt/wslg/.X11-unix /tmp/.X11-unix` to recreate
- `ls /tmp/.X11-unix` → `X0`
	- check if x server's running

### temporary resolution error
**Behavior**

For WSL2, `/etc/resolv.conf` will be removed on every start up, however, it need to know how to resolve your request to work.

**Solution**

You can give it `nameserver 8.8.8.8` to use Google's DNS service.

```
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "[network]" > /etc/wsl.conf'
sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'
sudo chattr +i /etc/resolv.conf
```
and then restart wsl

<https://github.com/microsoft/WSL/issues/5420#issuecomment-646479747>