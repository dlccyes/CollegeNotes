---
layout: meth
parent: Software Development
---

# GCP
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## SSH to your VM

<https://ithelp.ithome.com.tw/articles/10251134>

1. generate a new ssh key or use existing ssh key and paste (the public one) to your Computing Engine VM (click the VM name → edit → add ssh key → save)
2. `ssh -i [private_key_location] id_ed25519 [username]@[external_IP_of_VM]`
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