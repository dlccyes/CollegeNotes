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

## installation for newbie
Kubuntu (Ubuntu with KDE) for example

### procedure
from win10/11

1. install kubuntu iso
2. [flash iso to usb](#flash%20iso%20to%20usb) -> bootable USB drive
	- use [Ventoy](#ventoy)
	- use [Etcher](https://www.balena.io/etcher/ )
	- use linux terminal
		- steps
			1. `lsblk` to see what's your USB's called
			2. `sudo dd bs=4M if=<iso file> of=/dev/<USB disk e.g. sdb> conv=fdatasync status=progress`
			3. wait until it terminated itself, then you're done
		- <https://www.howtogeek.com/414574/how-to-burn-an-iso-file-to-a-usb-drive-in-linux/>
3. partition your disk
	- use 3rd party tool
		- [Partition Wizard](https://www.partitionwizard.com/free-partition-manager.html)
			1. move/resize
			2. drag to resize
			3. apply
			4. works like a charm
	- do it yourself
		-  disk management -> shrink volume
		-  if only very little is available
			1. advanced system settings -> performance -> advanced -> virtual memory -> unchech auto xxx -> set no paging file
			2. advanced system settings -> performance -> advanced -> system protection -> configure -> disable system protection
			3. restart
			4. shrink volume
			5. redo those things after you've shrinked the volume
4. disable fast restart
5. reboot and enter bios menu (press f10 for HP, hold f2 for ASUS)
6. select kubuntu
	- (for HP) boot option -> move "boot with USB" to the top -> save and exit
	- (for ASUS) boot menu
7. install kubuntu
8. remove USB stick and enter bios menu again
9. boot option -> move "boot with USB" back -> save and exit
10. if still boot to Windows (no grub menu) -> cmd as admin -> `bcdedit /set {bootmgr} path \EFI\kubuntu\grubx64.efi` -> reboot
11. you should see grub menu, now select kubuntu

### troubleshooting
- stuck on install "Updates and other software" step
	- reflash the kubuntu iso to your usb
	- use the LTS version

### references
- install with partition
	- <https://medium.com/linuxforeveryone/how-to-install-ubuntu-20-04-and-dual-boot-alongside-windows-10-323a85271a73>
	- <https://www.tecmint.com/install-ubuntu-alongside-with-windows/>
- shrink space too small
	- <https://superuser.com/questions/1017764/how-can-i-shrink-a-windows-10-partition>
	- <https://superuser.com/questions/561605/how-can-i-increase-my-shrink-space-in-disk-management/1086485>
	- <https://superuser.com/questions/88131/how-to-shrink-windows-7-boot-partition-with-unmovable-files>
- no grub menu
	- <https://itsfoss.com/no-grub-windows-linux/> 
 
## flash iso to usb
### dd

### ventoy
[tutorial](https://linuxkamarada.com/en/2020/07/29/ventoy-create-a-multiboot-usb-drive-by-simply-copying-iso-images-to-it/)

download ventoy  
<https://github.com/ventoy/Ventoy/releases>

```
tar -xf <ventoy.tar.gz>
```

check what is your USB called with `lsblk` 

go inside and run
```
. Ventoy2Disk -i /dev/<USB disk e.g. sdb>
```
 
And then your Ventoy is ready. When booting with this USB, ventoy will search all ISOs in the USB, so you can out your ISO whenever you want (inside the USB). You can also store normal files.

## Ubuntu
### system upgrade
for normal release
```
sudo do-release-upgrade
```

for development release
```
sudo do-release-upgrade -d
```

to change between LTS & normal  
go to `/etc/update-manager/release-upgrades` 
- `prompt=lts` for lts
- `prompt=normal` for normal

<https://ubuntu.com/blog/how-to-upgrade-from-ubuntu-18-04-lts-to-20-04-lts-today>

## networking
### ifconfig
```
sudo pacman -S net-tools
```

### tcpdump
<https://homepage.ntu.edu.tw/~pollyhuang/teach/net-simtest-spring-08/slides.html>

see your interfaces with `ifconfig`

#### flags
> tcpflags are some combination of S (SYN), F (FIN), P (PUSH), R (RST), U (URG), W (ECN CWR), E (ECN-Echo) or . (ACK), or none if no flags are set.

#### read
read packets
```
sudo tcpdump -i <interface>
```

read 5 packets
```
sudo tcpdump -i <interface> -c 5
```

read from file
```
sudo tcpdump -r output.tr
```

#### write
write output to file
```
sudo tcpdump -i <interface> -c 5 output.tr
```

write output to file but limit to 1MB
```
sudo tcpdump -i <interface> -c 5 output.tr -w output.tr -C 1
```
over 1MB -> save to output.tr1

#### expressions
add expression directly
```
sudo tcpdump -i <interface> ip src or dst host 140.112.42.162
```

use expressions in expression.exp
```
sudo tcpdump -i <interface> -F expression.exp
```

get start & end packets
```
sudo tcpdump -i <interface> 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0'
```

get ACK packets
```
sudo tcpdump -i <interface> 'tcp[tcpflags] & (tcp-ack) != 0'
```

examples
```
Expressions:types
tcpdump -r tmp.tr -c 2 host nslab.ee.ntu.edu.tw
tcpdump -r tmp.tr -c 2 net 140.112.154
tcpdump -r tmp.tr -c 2 net 140.112.154.128/25
tcpdump -r tmp.tr -c 2 net 140.112.154.128 mask 255.255.255.128
tcpdump -r tmp.tr -c 2 port 80
tcpdump -r tmp.tr -c 2 port http
tcpdump -r tmp.tr -c 2 port ssh

Expressions:directions
tcpdump -r tmp.tr -c 2 src or dst host nslab.ee.ntu.edu.tw
tcpdump -r tmp.tr -c 2 dst net 140.112.154
tcpdump -r tmp.tr -c 2 dst port 80

Expressions:protocols
tcpdump -r tmp.tr -c 2 ip src or dst host nslab.ee.ntu.edu.tw
tcpdump -r tmp.tr -c 2 arp dst net 140.112.154
tcpdump -r tmp.tr -c 2 tcp dst port 80
tcpdump -r tmp.tr -c 2 udp 
tcpdump -r tmp.tr -c 2 broadcast

Expressions:others
tcpdump -r tmp.tr -c 2 greater 100
tcpdump -r tmp.tr -c 2 less 100

Expressions:operands
tcpdump -r tmp.tr -c 2 dst host nslab.ee.ntu.edu.tw and tcp 
tcpdump -r tmp.tr -c 2 dst host nslab.ee.ntu.edu.tw \&\& tcp 
tcpdump -r tmp.tr -c 2 dst host nslab.ee.ntu.edu.tw and \(tcp or udp\)

Expressions:in a separate file
tcpdump -r tmp.tr -c 2 -F test.exp
```

#### troubleshooting
##### permission
If you run it in Ubuntu, it might say you don't have permission. Do the followings to fix it

```
grep tcpdump /sys/kernel/security/apparmor/profiles
```
If it said `tcpdump (enforce)`, make it in `complain` mode by
```
aa-complain /usr/sbin/tcpdump
# or aa-complain tcpdump
```

You can install `aa-complain` by 
```
sudo apt install apparmor-utils
```
<https://blog.karatos.in/a?ID=01100-68ee7a10-9f07-412a-aa93-e67032182326>

## package related
### apt
#### find package
find package
```
apt-cache search <package>
```

find files in package
```
apt-file search <package>
```

<https://unix.stackexchange.com/q/114533/>  
<https://unix.stackexchange.com/a/330069>

#### The following packages have been kept back
displayed when doing `apt upgrade`

solved by
```
sudo apt dist-upgrade
```
according to <https://askubuntu.com/a/602> this is not an ideal solution

about dist-upgrade:  

> dist-upgrade intelligently handles changing dependencies with new versions of packages

can also use `apt full-upgrade` (es el versión nuevo)

<https://askubuntu.com/a/81594>

### snap
#### install local
```
snap <xxx.snap> --dangerous
```

<https://askubuntu.com/a/1397306>

### flatpak
#### init
install flatpak
```
sudo pacman -S flatpak
```
and reboot

add flathub
```
sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

#### install
install your flatpak app
```
sudo flatpak install flathub <app name on flathub>
```

#### update
update all flatpak packages
```
flatpak update
```

#### autoremove
remove unused packages
```
flatpak uninstall --unused
```

### pacman
[cheatsheet](https://devhints.io/pacman)

#### install package
```
sudo pacman -S <package>
```

install from tar.xz
```
sudo pacman -U <something.tar.xz>
```

#### update & upgrade all
```
sudo pacman -Syu
```

#### remove package
```
sudo pacman -Rsc <package>
```

#### remove cache
remove all uninstalled packages in cache (s.t. you can downgrade easily)
```
sudo pacman -Sc
```

remove all packages in cache
```
sudo pacman -Scc
```

#### autoremove (remove orphan packages)  
```
sudo pacman -Rcns $(pacman -Qdtq)
# or
pacman -Qdtq | sudo pacman -Rcns -
```

<https://wiki.archlinux.org/title/Pacman/Tips_and_tricks#Removing_unused_packages_(orphans)>

#### list all packages  
```
pacman -Ql
```

#### search package
```
# exact match
pacman -Q <pkg>
# match and show description
pacman -Qs <pkg>
# exact match and show details
pacman -Si <pkg>
```

#### troubleshooting
do something with pacman but have this error
```
error: GPGME error: No data
```

do this to fix
```
sudo rm -R /var/lib/pacman/sync
```

<https://stackoverflow.com/a/67850084/15493213>

### yay
to install (unofficial) AUR packages

install
```
yay -S <package>
```

## network related
- edit `/etc/hosts` to change/add the domain name mapping to 127.0.0.1
	- [ref](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-edit-the-Ubnutu-hosts-file-and-ping-a-domain-name-locally)
- edit `/etc/hostname` to edit your hostname
	- can't have underscore
		- <https://kb.iu.edu/d/afqs>

## power related
<https://userbase.kde.org/KDE_Connect/Tutorials/Useful_commands>
<https://www.computernetworkingnotes.com/linux-tutorials/shutdown-reboot-suspend-and-hibernate-a-linux-system.html>

### shutdown
```
shutdown now
```

### sleep
suspend to RAM
```
systemctl suspend
```

to swap
```
systemctl hybrid-sleep
```

### turn off screen
```
xset dpms force off
```

## session
### session settings
- `/etc/environment`
	- .env style
	- set up the variables on session start
- `/etc/profile`
	- run on session start
- `~/.config/plasma-localerc`
	- .env of KDE plasma's GUI session, run after above so will overide them (bruh)

### TTY sessions
`ctrl+alt+f2-6`  
would create session with TTY = tty2-6 respectively

`ctrl+alt+f1` is the GUI session, so press this combination to go back to GUI

`logout` or `exit` to log out


### list sessions
```
loginctl list-sessions
```

### see current session
```
loginctl session-status
```

### lock session
```
loginctl lock-session
```

### unlock session
```
loginctl unlock session <id>
```

### terminate session
```
loginctl terminate session <id>
```

## network connection
`nmcli` for cli  

`nmtui` for gui in terminal  

## ssh
### install ssh server
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

### ssh session
> SSH sessions will be on a pseudo-terminal slave (pts). But keep in mind that not all pts connections are necessarily SSH connections.

### keep ssh session from freezing
<https://unix.stackexchange.com/a/200256>

## port
### see port in use
```
sudo lsof -i -P -n | grep <port>
```

### opening port
```
sudo ufw allow <port num>
```
e.g. 
- `sudo ufw allow 22` -> ssh allowed
- `sudo ufw allow 80` -> http allowed

## ip
- view local ip
	- `hostname -I`
	- `neofetch` (with correct config)
	- `ifconfig | grep inet`
	- `ip addr | grep inet`
	- <https://stackoverflow.com/a/13322549/15493213>

## http
- install
	- `sudo apt httpie` to be able to use
- usage
	- `http GET <url>`

## root shell
- `sudo su` or `su root` to enter
- different home directory `~`

## default apps
config file in `~/.config/mimeapps.list`

### open with default app
```
xdg-open <path/to/file>
```

to open in background
```
xdg-open <path/to/file> &
```

<https://unix.stackexchange.com/questions/74605>

### see default opening app
```
xdg-mime query default <file type>
```
e.g.
```
xdg-mime query default text/html
```

### set default opening app
```
xdg-mime default <app> <file type>
```
e.g.
```
xdg-mime default firefox.desktop text/html
```

<https://unix.stackexchange.com/questions/36380>

### see app name
```
ls /usr/share/applications | less
```

<https://stackoverflow.com/questions/2060284>

### check filetype
```
xdg-mime query filetype <path/to/file>
```

<https://stackoverflow.com/a/5485123/15493213>

## config files locations
- `~/.config`
- `~/.local/share`

some nice dotfiles
- <https://github.com/Anomic-cr/i3_dotfiles>

## change user@host color and stuff
settings located in `~/.bashrc`  
note that enclosing ANSI with `\[` `\]` es necesario for it to behave normally

examples
```bash
# base
PS1='\u@\h:\w\$ '  
# 8-bit color
PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
# 24-bit color
PS1='\[\033[38;2;255;189;243\]m\u@\h\[\033[0m\]:\[\033[01;34m\]\w\[\033[0m\]$ '
# with archbtw
PS1='\[\033[48;2;108;196;255m\033[38;2;0;0;0m\] archbtw \[\033[0m\] \[\033[38;2;255;189;243m\]\u@\h\[\033[0  
m\]:\[\033[01;34m\]\w\[\033[0m\]$ '
# with background
PS1='\[\033[38;2;108;196;255m\]<archbtw>\[\033[0m\033[38;2;255;189;243m\]\u@\h\[\033[0m\]:\[\033[01;34m\]\  
w\[\033[0\]m$ '    
```

see [ANSI](ANSI)  

<https://askubuntu.com/a/123306>

## grub menu customization
- `sudo apt install grub-customizer` for GUI
- everything in `/boot/grub/grub.cfg`
- after modifing `/etc/default/grub`, run `sudo update-grub`
	- auto scan your system generate `/boot/grub/grub.cfg` based on the settings in `/etc/default/grub`
	- will run `grub-mkconfig -o /boot/grub/grub.cfg`
	- <https://www.nixcraft.com/t/how-to-update-grub-on-rhel-or-centos-linux/3824/2>

## partition resize
### principles
- can't directly resize the os partition you're currently on
- the relative starting position of the os parition can't be changed
	- can copy paste to other area but can't directly move starting point

### procedure
for windows-linux dual-boot system
1. create unallocate space in windows
	- disk management (native)
	- partition wizard (3rd party) (very good)
2. reboot with installation USB (of kubuntu)
3. select try kubuntu
4. use GParted to manage partitions
	- you can copy paste your kubuntu partition to the new unallocated space right after Windows -> apply -> delete original kubuntu partition && resize -> apply
	- [about moving partition](https://superuser.com/a/731672) 
5. reboot normally into your kubuntu
	-  may need to `bcdedit /set {bootmgr} path \EFI\kubuntu\grubx64.efi` again to see your grub menu
6. success

## nvidia driver
### install on Arch
```
sudo pacman -S nvidia
```


### install on Ubuntu
<https://linuxconfig.org/how-to-install-the-nvidia-drivers-on-ubuntu-20-04-focal-fossa-linux>

#### check your graphic card
```
ubuntu-drivers devices
```

#### install driver
```
sudo ubuntu-drivers autoinstall
```
and reboot

#### select driver intel or nvidia
```
prime-select nvidia
# or prime-select intel
```
and reboot

to check what you're using
```
prime-select query
```


### check your nvidia GPU info
```
nvidia-smi
```

## KDE Plasma
### config files location
<https://github.com/shalva97/kde-configuration-files>

### language settings
if the langauge displayed is not what you've set, `echo $LANG` & `echo $LANGUAGE` to see if it's set correctly

if it isn't, go to `~/.config/plasma-localerc` to see if it sets the `LANGUAGE` variable for you, delete the "Translations" section if needed

<https://bbs.archlinux.org/viewtopic.php?pid=1839620#p1839620>

### baloo
baloo is for indexing your files for faster search  
It may takes large space tho.

It store its files in `~/.local/share/baloo`.

To disable and clear its files 
```
balooctl disable
balooctl purge
```
enter `balooctl` for more

### troubleshooting
- everything too small -> display configuration -> global scale
- `ctrl+alt+x` not working -> shortcuts -> enable clipboard actions
- `xrandr` won't work in recovery mode
- widget `Genial` makes broke your plasma
	- `vim ~/.config/plasma-org.kde.plasma.desktop-appletsrc`
	- delete `Genial` related things
	- relogin
	- <https://github.com/NathanPB/plasma5-genial/blob/master/README.md>
- evernote weird font
	- install Roboto
- go to web search keywords to set up !bang for krunner
	- it does not recognize `!`

#### animation gone
```
alt+shift+f12
```
to enable compositor

plasma desktop effects need compositor to work 

<https://www.reddit.com/r/kde/comments/hymqco/comment/fzdotuo>

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
- for windows-like show desktop
	- system settings -> window management -> kwin scripts -> enable MinimizeAll
- set windows properties (size, position, bar, etc.)
	- alt+f3 -> more actions -> special windows settings -> add property -> select and set as "Remember"
- to set the shortcut switching traditional/simplified Chinese (for Fcitx5)
	- system settings -> input method -> configure addons
	- <https://amigotechnotes.wordpress.com/2020/04/24/install-and-use-chinese-input-in-ubuntu/>

### good tools
- kio-gdrive
	- google drive network folder

### type accent
1. system settings -> keyboard -> advanced -> Position of Compose key -> select one as your compose key
2. press compose key -> press ` -> press a -> à

<https://askubuntu.com/a/993991>

#### widgets
- event calendar
- win 7 mixer 

#### settings
- nordic (windows decoration)
- nordic (login screen)

## XFCE
### tips
- settings is scattered, the central one is called `xfce4-settings-manager`
- shortcut settings
	- xfce4-settings-manager -> Window Manager -> Keyboard
- to hide windows title/bar
	- Settings -> Window Manager Tweaks -> Accessibility. Enable the option Hide title of window when maximized
		- <https://codeyarns.com/tech/2015-11-05-how-to-hide-window-title-in-xfce.html>

### install
```
sudo pacman -S xfce4 xfce4-goodies
```
and reboot  

if you have multiple DEs, you can choose which to use at the SDDM screen

## i3
<https://github.com/i3/i3>

### install
```
sudo pacman i3-wm
```

### relevant packages
- `i3status`
	- for the status bar at the bottom
- `polybar`
	- prettier status bar than i3status
- `breeze-gtk`
	- breeze theme for gtk
	- and then add `gtk-theme-name = "breeze"` in `~/.config/gtkrc-2.0`
- `qt5ct`
	- apply uniform theme for both gtk & qt (e.g. KDE) apps
- `thunar`
	- dolphin-like file manager but lighter
- `scrot`
	- cli screenshot tool
- `xclip`
	- save something to clipboard
- `feh`
	- `feg --bg-fill <path/to/image>` to set background image
	- <https://www.linuxandubuntu.com/home/set-background-wallpapers-on-i3wm>
- `rofi`
	- application launcher
	- `rofi -show window` to show opened windows
- `i3-volume`
	- very simple volume control in status bar
	- need to write in status bar config

### tips
- screenshot
	- `scrot -e 'xclip -selection clipboard -t image/png -i $f'`
	- <https://unix.stackexchange.com/a/625430>
- execute command on config reload
	- `exec_always <command>`
	- <https://i3wm.org/docs/userguide.html#_automatically_starting_applications_on_i3_startup>

### layout
- standard mode
	- windows side-by-side
	- default `$mod+E`
- stacking mode
	- windows vertically tabbed
	- default `$mod+S`
- tabbed mode
	- windows tabbed
	- default `$mod+W`

<https://unix.stackexchange.com/a/342889>  
<https://i3wm.org/docs/userguide.html#_changing_the_container_layout>

## touchpad gestures
### touchegg
<https://github.com/JoseExposito/touchegg>

[a config file other's wrote](https://github.com/NayamAmarshe/ToucheggKDE) 

config file need to be in `~/.config/touchegg/`

**Installation**  
(arch)  
```
yay -S touchegg
sudo systemctl enable touchegg.service
sudo systemctl start touchegg
```

not running troubleshooting  
<https://github.com/JoseExposito/touchegg/issues/413#issuecomment-748473155>

## set default editor
```
sudo update-alternatives --config editor
```
<https://unix.stackexchange.com/a/204896>

## libre office
### draw
#### redock pane
`ctrl+shift+f10`  

<https://ask.libreoffice.org/t/cant-dock-sidebar/40357/22>

## input method
### ibus
install  
```
sudo pacman -S ibus
sudo apt install ibus
```

to install chewing
```
sudo pacman -S ibus-chewing
sudo apt install ibus-chewing
```

set up variables in `/etc/environment`  
```
GTK_IM_MODULE=ibus
QT_IM_MODULE=ibus
XMODIFIERS=@im=ibus
```

start ibus in background  
```
ibus-daemon -d
```
to use it on startup, put in autostart settings (like cron @reboot) or `~/.bashrc` or autostart settings in KDE or whatever

configure ibus by opening GUI "Ibus Preferences"  
(if you see no langauge available, reboot)

<https://wiki.archlinux.org/title/IBus>  

### fcitx5
you might not have input method preinstalled (if you use archbtw) (it's preinstalled with Kubuntu tho)  

install it
```
sudo pacman -S fctix5 fctix-configtool
```

in `/etc/environment`  
```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
```

then you should be able to see "input method" in your DE's settings

to use chewing  
```
sudo pacman -S fcitx5-chewing
```

<https://wiki.archlinux.org/title/Fcitx5>

## volume control
### pavucontrol
fully functional GUI  

```
pavucontrol
```

<https://archived.forum.manjaro.org/t/how-to-config-sound-output-by-bluetooth-headset-in-manjaro-i3/144163/7>

### amixer
can't make it output to my bluetooth earbud tho

TUI  
```
alsamixer
```

CLI  
```
amixer <something idk>
```

### pulsecontrol
can't make it output to my bluetooth earbud tho

CLI  
```
# list all device
pactl list sinks
# view device volume
pactl get-sink-volume <sink id>
# set device volume
pactl set-sink-volume <sink id>
```

## natural scrolling
to enable natural scrolling for touchpad, in `/usr/share/X11/xorg.conf.d/40-libinput.conf`, add 
```
Option "NaturalScrolling" "True"
```
in the `touchpad` entry

<https://askubuntu.com/a/1122517>

## troubleshooting
### Windows time become UTC
linux will set the hardware time to UTC  
we can make the hardware time be local time with  
(in linux)
```
timedatectl set-local-rtc 1
```

<https://itsfoss.com/wrong-time-dual-boot/>

### grub menu related
#### no grub menu
```
sudo vim /etc/default/grub
```

set `GRUB_TIMEOUT_STYLE` to `menu`  
(may be `hidden` originally)

```
sudo update-grub
```
<https://askubuntu.com/a/1182434>

#### no Windows in grub menu
`sudo os-prober` to see if Windows is identified  
<https://superuser.com/a/1392323>

if there is Windows

```
sudo vim /etc/default/grub
```

add
```
GRUB_DISABLE_OS_PROBER=false
```

```
sudo update-grub
```

<https://forum.manjaro.org/t/warning-os-prober-will-not-be-executed-to-detect-other-bootable-partitions/57849/2>

### kwallet
It is a password manager for KDE plasma, storing your wifi passwords for example. To disable this, go to `~/.config/kwalletrc`

```
Enabled=false
```

Note that this will disable it on statup and you'll have to type the passwords it saved everytime e.g. wifi passwords.

You can also set its password to blank so that you won't be asked for its password even if you've enabled it. To do so, install it

```
sudo pacman -S kwalletmanager
```

and change the password via GUI.

references
- <https://wiki.archlinux.org/title/KDE_Wallet>  
- <https://www.reddit.com/r/kde/comments/a7n0xx/>
- <https://unix.stackexchange.com/a/373877>  
- <https://askubuntu.com/a/1082280>

### keyring
github desktop & vscode may want your keyring everytime  
solution:
```
sudo apt-get install seahorse
```

your keyrings would be displayed in searhorse, right click on "default keyring" and change it (may be blank)

<https://askubuntu.com/a/1270021>

### emoji not shown
#### system
```
sudo pacman -S noto-fonts-emoji
```

#### konsole
create backup emoji font in `~/.config/fontconfig/fonts.conf`

[example file](https://github.com/AndydeCleyre/dotfiles/blob/master/.config/fontconfig/fonts.conf)

[ref](https://www.reddit.com/r/kde/comments/b3xxcz/comment/ej38wwb)

### perl locale warning
(arch)  
warning message:  
```
perl: warning: Please check that your locale settings:
are supported and installed on your system.
```

fix: 
```
sudo locale-gen
```
<https://stackoverflow.com/a/9727654/15493213>

and then run  
```
locale
```
if there are errors, `echo $LANG`, if isn't what you want, run  
```
localectl set-locale LANG=en_US.UTF8
```
to correctly set your `LANG` variable

see <https://wiki.archlinux.org/title/locale#Setting_the_locale>

if the problem still persist, and only in KDE GUI session, go to system settings -> formats and set to en_US (and then restart session)

## good programs
### KDE apps
essential packages that might not come with arch install  

to see all kde applications  
```
sudo pacman -S kde-applications
```

#### kdeplasma-addons
some desktop effects and stuff (e.g. task switcher)

`sudo pacman -S kdeplasma-addons` and reboot

#### online account support
online accounts  
```
sudo pacman -S kaccounts-providers
```
google drive network folder  
```
sudo pacman -S kio-gdrive
```

<https://www.reddit.com/r/kde/comments/o8b73i/why_arch_kde_does_not_have_google_option_in/>

#### system monitor
```
sudo pacman -S plasma-systemmonitor
```

### GParted
```
sudo apt install gparted
```

use it to do any operation regarding partitions with GUI

### bluetooth
(if not preinstalled)

install & enable
```
sudo pacman -S bluez bluez-utils blueman
sudo systemctl enable bluetooth.service
```

<https://www.jeremymorgan.com/tutorials/linux/how-to-bluetooth-arch-linux/>

### htop
- to show only 1 line per process (instead of per thread)
	- setup -> display options -> hide userland process threads
		- <https://askubuntu.com/a/1124990>

### vim
to copy to clipboard in arch
```
# (uninstall vim &) install gvim 
sudo pacman -S gvim
```
and then use `vim` as normal

<https://vi.stackexchange.com/a/3078>

### cron
- `sudo crontab -e` to enter root shell cron
	- different from `crontab -e`
- can't use `source` in cron
	- just use `.`

#### install
```
sudo pacman -S cronie
sudo systemctl enable cronie.service
sudo systemctl start cronie.service
```

### ffmpeg
#### parameters
- scale
	- `scale=iw/2:-2` -> x2
- quality
	- <https://ffmpeg.org/ffmpeg-codecs.html#Options-30>
	- `-quality 75`
		- 0-100

#### speedup video
to speed up to x2 (including audio)
```
ffmpeg -i input.mp4 -filter:v "setpts=PTS/2" -an output.mp4
```

omit `-an` to have audio in original speed (so the video duration will not change)

<https://superuser.com/a/1261681>

#### mp4 to gif
minimalist
```
ffmpeg -i input.mp4 -quality 75 output.webp
```

```
ffmpeg -y -i input.mp4 -filter_complex "fps=10,scale=1080:-1:flags=lanczos,split[s0][s1  
];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer" output.gif
```
<https://superuser.com/a/1695537>

the `split` thing will make it not creating any intermediate files during the process, so it consumes high memory

#### mp4 to webp
minimalist
```
ffmpeg -i input.mp4 -quality 75 output.webp
```
may have bad results

lossless
```
ffmpeg -i input.mp4 -vcodec libwebp -filter:v fps=fps=10 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 1080:720 output_filename.webp

```
omit the `-s` flag to use original scale

sample frames to reduce size
```
ffmpeg -i input.mp4 -vf "select=not(mod(n\,6))" -vsync vfr -quality 50 output.webp
```
`select=not(mod(n\,6))` will select frames with index%6 = 0

<https://stackoverflow.com/a/58188923/15493213>

#### play
```
ffplay <video_file>
```

### xbacklight 
#### install
```
sudo pacman -S xorg-xbacklight
```

#### usage
```
xbacklight -set percentage
```

#### troubleshooting
**SOLVING THIS ISSUE WILL CAUSE ANOTHER**

`No outputs have backlight property`

[This](https://askubuntu.com/a/1060843) will solve the backlight issue, but will make plasma become very unstable, flickering all the time

[This](https://bbs.archlinux.org/viewtopic.php?pid=1595276#p1595276) will solve the plasma flickering issue, but will make [Touchegg](https://github.com/JoseExposito/touchegg) not working

### Remmina - control remote desktop
(with graphical interface)

use RDP & Remmina

#### usage
`remmina` to launch remmina, add a user, and connect

tips
- to use the correct resolution, `basic` tab -> `Resolution` -> `Use client resolution`
- the session would be called `c<0-9>`
- must not have more than 1 session, or you'll only see black screen
	- <https://askubuntu.com/a/623877>

#### installation
(assume you already have a desktop environment on your remote machine)

install RDP
```
sudo apt-get install xrdp
sudo adduser xrdp ssl-cert
sudo ufw allow 3389/tcp
sudo iptables -A INPUT -p tcp --dport 3389 -j ACCEPT
sudo /etc/init.d/xrdp restart
```

install Remmina
```
sudo apt install remmina
```

<https://www.e2enetworks.com/help/knowledge-base/how-to-install-remote-desktop-xrdp-on-ubuntu-18-04/>

### scrcpy - control Android
<https://github.com/Genymobile/scrcpy>

`apt install scrcpy` to install

`scrcpy` to run

connect your phone with USB cable -> on

need to enable USB debugging in your phone's settings first

tips
- right click = back
- wheel click = home

### sdcv
StarDict console version  

[website](http://www.huzheng.org/stardict/)

command line dictionary

`apt install sdcv` to install

find and download dictionaries [here](http://download.huzheng.org/dict.org/)

`tar -xjvf <.bz2 file> -C ~/.stardict/dic` to use your dictionary  
(`mkdir ~/.stardict; mkdir ~/.stardict/dic` first if you haven't)
 
`sdcv word` to search for word

### rclone
#### install  
```
curl https://rclone.org/install.sh | sudo bash
```
and then run `rclone config` to setup your remote

#### sync
```
rclone sync source dest
```
e.g.
```
rclone sync 大學講義筆記 zubar:大學講義筆記
```

for interative use (ask you to do or not to do each time), use `rclone sync -i`

#### ls
list top level things  
```
rclone lsd remote:<path>
```

### drive
it is very very slow, much slower than network folder, use rclone instead

repo  
<https://github.com/odeke-em/drive>

doc  
<http://odeke-em.github.io/drive/>

#### install
install [go](https://go.dev/doc/install)

```
go install github.com/odeke-em/drive/cmd/drive@latest
```

add this to `~/.bashrc` or whatever
```
export GOPATH=$HOME/go
export PATH=$GOPATH:$GOPATH/bin:$PATH
```

#### use
```
drive init
```
at the target folder

```
drive pull -ignore-name-clashes
```

```
drive push -ignore-name-clashes
```

### youtube-dl
download as mp3 with file name = `下著小雨路過的街.mp3`
```
youtube-dl --extract-audio --audio-format mp3 --output "下著小雨路過的街.%(ext)s" https://www.youtube.com/watch?v=AKS-hW2jgk8
```

<https://askubuntu.com/a/630138>

### copyq - clipboard manager
<https://hluk.github.io/CopyQ/>

#### install
```
sudo add-apt-repository ppa:hluk/copyq
sudo apt update
sudo apt install copyq
```

### battery
#### powertop
`tab` and go to "turnables", press enter on "bad" to make it "good"

#### tlp
<https://linrunner.de/tlp/usage/index.html>

to start
```
sudo tlp start
```

check status
```
tlp-stat -s
```

### alacritty 
#### install
- install cargo & rust `curl https://sh.rustup.rs -sSf | sh`
	- <https://doc.rust-lang.org/cargo/getting-started/installation.html>
- install `cargo install alacritty`
- no `cmake` error -> sudo apt install cmake`
- no `fontconfig` error -> `sudo apt install libfontconfig1-dev`
	- <https://unix.stackexchange.com/a/410783>
- `error: linking with cc failed: exit status: 1` <br>`/usr/bin/ld: cannot find -lxcb-render`<br>-> `sudo apt install libxcb-render0-dev`
	- <http://i-pogo.blogspot.com/2010/01/usrbinld-cannot-find-lxxx.html>
	- use `apt-file search` to find what you have
	- cannot find -lxcb-render -> install libxcb-render0-dev
	- cannot find -lxcb-shape -> install libxcb-shape0-dev
	- cannot find -lxcb-xfixes -> install libxcb-xfixes0-dev

#### configuration
put in `~/.config/alacritty/alacritty.yml`  

sample config is in [release page](https://github.com/alacritty/alacritty/releases)

others' configs
- nordic transparent <https://github.com/Anomic-cr/i3_dotfiles/blob/main/.config/alacritty/alacritty.yml>

### polybar
status bar for some WMs
#### install
```
sudo pacman -S polybar
```

default config is at `/etc/polybar/config.ini`  
copy it to `~/.config/polybar/config`

#### configuration
to move it to bottom and other bar settings  
<https://github.com/polybar/polybar/wiki/Configuration#bar-settings>

### create_ap
my comment: I can't find anyway to create a hotspot with password that can be connected by other devices (tried `nmcli`, KDE GUI and others). This tool can create a connectable hotspot, but the it's pretty hard to use. The starting & stopping method is very obscure and don't work most of the time.

see [the GUI of it](#linux-wifi-hotspot)

[repo](https://github.com/oblique/create_ap)

[discovery post](https://unix.stackexchange.com/a/626636)

install
```
git clone https://github.com/oblique/create_ap
cd create_ap
make install
```

create a hotspot from ethernet connection (if wifi interface is `wlo1`, ethernet
 interface is `enx00e04c360138`)  
```
sudo create_ap wlo1 enx00e04c360138 hh 12345678
```

see running instances
```
create_ap --list-running
```
not accurate tho

stop instance associating with an interface  
```
sudo create_ap --stop <interface>
```
useless tho

solving `Failed to initialize lock error`  
```
sudo rm /tmp/create_ap.all.lock
```
<https://github.com/oblique/create_ap/issues/384#issuecomment-467475995>

stop instance or run in daemon (uesless tho)
<https://github.com/oblique/create_ap/issues/58#ref-issue-179140687>

### linux-wifi-hotspot
GUI of [create_ap](#create_ap)

[Github repo](https://github.com/lakinduakash/linux-wifi-hotspot)

[discovery post](https://www.reddit.com/r/kde/comments/co2i1f)

install  
```
sudo add-apt-repository ppa:lakinduakash/lwh
sudo apt install linux-wifi-hotspot
```

launch GUI
1. search "Wifi HotSpot"
2. `wihotspot` in terminal

### github desktop
don't use the AUR `github-desktop` version, but `github-desktop-bin`
```
yay -S github-desktop-bin
```

### PDF Arranger
simple lightweight pdf page-wise editing tool (move, rotate, delete, etc.)

```
sudo apt install pdfarranger
```

<https://unix.stackexchange.com/a/645755>

### vscode
for arch, use `visual-studio-code-bin` from AUR

the official pacman vscode-oss version has some problems 