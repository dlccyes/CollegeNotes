---
layout: meth
parent: Programming
---
# linux
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## kubuntu installation
it's ubuntu with KDE preinstalled

1. install kubuntu iso
2. use [Etcher](https://www.balena.io/etcher/) to flash the iso to your USB
	- only used for installation
3. disk management -> partition your disk
4. reboot and enter bios menu (press f10 for HP)
5. boot option -> move "boot with USB" to the top -> save and exit
6. select kubuntu
7. install kubuntu
8. remove USB stick and enter bios menu again
9. boot option -> move "boot with USB" back -> save and exit
10. if still boot to Windows -> cmd as admin -> `bcdedit /set {bootmgr} path \EFI\kubuntu\grubx64.efi` -> reboot
11. you should see grub menu, now select kubuntu

references
- shrink space too small
	- <https://superuser.com/questions/561605/how-can-i-increase-my-shrink-space-in-disk-management/1086485>
- install with partition
	- <https://medium.com/linuxforeveryone/how-to-install-ubuntu-20-04-and-dual-boot-alongside-windows-10-323a85271a73>
	- <https://www.tecmint.com/install-ubuntu-alongside-with-windows/>
- no grub menu
	- <https://itsfoss.com/no-grub-windows-linux/> 

## ubuntu
### troubleshooting
#### xbacklight 
**SOLVING THIS ISSUE WILL CAUSE ANOTHER**

`No outputs have backlight property`

[This](https://askubuntu.com/a/1060843) will solve the backlight issue, but will make plasma become very unstable, flickering all the time

[This](https://bbs.archlinux.org/viewtopic.php?pid=1595276#p1595276) will solve the plasma flickering issue, but will make [Touchegg](https://github.com/JoseExposito/touchegg) not working

## KDE Plasma
### troubleshooting
- everything too small -> display configuration -> global scale
- `ctrl+alt+x` not working -> shortcuts -> enable clipboard actions
- `xrandr` won't work in recovery mode
- widget `Genial` makes broke your plasma
	- `vim ~/.config/plasma-org.kde.plasma.desktop-appletsrc`
	- delete `Genial` related things
	- relogin
	- <https://github.com/NathanPB/plasma5-genial/blob/master/README.md>

### tips
- scroll on battery icon on system tray to adjust brightness
- `ctrl+alt+del` for `alt+f4`-like  menu
- configure `screen edges`
	- push your mouse toward configured screen edges to trigger
- configure shortcuts
- right click anything to configure
- alt+\`  for switching between different windows of same app
- to disable change volume bubble sound
	- right click audio on system tray -> configure audio volume -> uncheck audio feedback
	- <https://askubuntu.com/a/987489>
- long press widget to edit
- `alt+f2` to global search
- `alt+f3` to show options for current window
- `super+left click` on any window to move
- `super+right click` on any window to resize

## touchpad gestures
use [touchegg](https://github.com/JoseExposito/touchegg)

coudn't install the recommended touche gui on my kubuntu, so I just use the [config file](https://github.com/NayamAmarshe/ToucheggKDE) other's wrote

config file need to be in `~/.config/touchegg/`
