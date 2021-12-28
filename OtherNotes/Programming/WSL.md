---
title: WSL
layout: meth
parent: Programming
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

### wsl2
to check version  
```sh
# in command line
wsl -l -b

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


## X server
https://hackmd.io/@billsun/SyL3pzzQm?type=view
