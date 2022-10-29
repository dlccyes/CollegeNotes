---
layout: meth
parent: Software Development
---
# Restore a usb bootable disk to normal disk in Win10

reference: <https://www.balena.io/blog/did-etcher-break-my-usb-sd-card/>

1.  cmd/powershell as admin
2.  `diskpart.exe`
3.  `list disk`
4.  `select disk x`
	- Disk1 -> `select disk 1`  
5.  `clean`
6.  `create partition primary`
7.  `select partition 1`
8.  `format quick`

![](https://i.imgur.com/bx7Urae.png)
