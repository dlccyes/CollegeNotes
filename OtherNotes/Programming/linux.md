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
kubuntu is ubuntu with KDE preinstalled

### procedure
from win10/11

1. install kubuntu iso
2. flash the iso to your USB -> bootable USB drive
	- use [Etcher](https://www.balena.io/etcher/ 
		- only used for installation
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

## package related
### apt
#### find package
```
apt-file search <package>
```

<https://unix.stackexchange.com/a/330069>

#### upgrade
for normal release
```
sudo do-release-upgrade
```

for development release
```
sudo do-release-upgrade -d
```

to change between LTS & normal  
```
sudo vim /etc/update-manager/release-upgrades
```
change between `Prompt=normal` & `Prompt=LTS`


<https://ubuntu.com/blog/how-to-upgrade-from-ubuntu-18-04-lts-to-20-04-lts-today>

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

### pacman
install
```
sudo pacman -S <package>
```

update & upgrade all
```
sudo pacman -Syu
```

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
### TTY sessions
`ctrl+alt+f2-6`  
would create session with TTY = tty2-6 respectively

`ctrl+alt+f1` is the GUI session, so press this combination to go back to GUI
l
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

## ssh
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

## cron
- `sudo crontab -e` to enter root shell cron
	- different from `crontab -e`
- can't use `source` in cron
	- just use `.`

## xdg-open
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

## config files locations
- `~/.config`
- `~/.local/share`

some nice dotfiles
- <https://github.com/Anomic-cr/i3_dotfiles>

## change user@host color and stuff
settings located in `~/.bashrc`
```bash
if [ "$color_prompt" = yes ]; then    
 PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```
change the sequence to whatever you want

reference ANSI  
![](https://i.stack.imgur.com/9UVnC.png)

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
<https://linuxconfig.org/how-to-install-the-nvidia-drivers-on-ubuntu-20-04-focal-fossa-linux>

### check your graphic card
```
ubuntu-drivers devices
```

### install driver
```
sudo ubuntu-drivers autoinstall
```
and reboot

### check your nvidia GPU info
```
nvidia-smi
```

### select driver intel or nvidia
```
prime-select nvidia
# or prime-select intel
```
and reboot

to check what you're using
```
prime-select query
```


## KDE Plasma
### config files location
<https://github.com/shalva97/kde-configuration-files>

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
- (arch) some effect's not working (e.g. task switcher)
	- `sudo pacman -S kdeplasma-addons` and reboot
		- <https://bbs.archlinux.org/viewtopic.php?id=218308>

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
- to set the shortcut switching trditional/simplified Chinese
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

## touchpad gestures
### touchegg
<https://github.com/JoseExposito/touchegg>

[a config file other's wrote](https://github.com/NayamAmarshe/ToucheggKDE) 

config file need to be in `~/.config/touchegg/`

troubleshooting  
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

### xbacklight 
**SOLVING THIS ISSUE WILL CAUSE ANOTHER**

`No outputs have backlight property`

[This](https://askubuntu.com/a/1060843) will solve the backlight issue, but will make plasma become very unstable, flickering all the time

[This](https://bbs.archlinux.org/viewtopic.php?pid=1595276#p1595276) will solve the plasma flickering issue, but will make [Touchegg](https://github.com/JoseExposito/touchegg) not working

### keyring
github desktop & vscode may want your keyring everytime  
solution:
```
sudo apt-get install seahorse
```

your keyrings would be displayed in searhorse, right click on "default keyring" and change it (may be blank)

<https://askubuntu.com/a/1270021>

### emoji not shown
solution: create backup emoji font in `~/.config/fontconfig/fonts.conf`

[example file](https://github.com/AndydeCleyre/dotfiles/blob/master/.config/fontconfig/fonts.conf)

[ref](https://www.reddit.com/r/kde/comments/b3xxcz/comment/ej38wwb)

## good programs
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

### ffmpeg
#### mp4 to gif
```
ffmpeg -y -i *.mp4 -filter_complex "fps=10,scale=1080:-1:flags=lanczos,split[s0][s1  
];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer" output.gif
```
<https://superuser.com/a/1695537>

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