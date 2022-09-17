---
layout: meth
parent: Software Development
---

# Linux Package Management
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Where is your package?
locate the binary, source, and manual page files for a command
```
whereis <something>
```

## apt

### find package

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

### The following packages have been kept back

tldr:

- `sudo apt dist_upgrade`
- `sudo apt full-upgrade`
- `sudo apt install <kept back packages>`

long:

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

## aptitude

Built on apt-get, apt-mark, and apt-cache, super fast.

- `sudo aptitude update`
- `sudo aptitude fullupgrade`
- `sudo aptitude autoclean`

## pacman
[cheatsheet](https://devhints.io/pacman)

### install package
```
sudo pacman -S <package>
```

install from tar.xz
```
sudo pacman -U <something.tar.xz>
```

### update & upgrade all
```
sudo pacman -Syu
```

### remove package
```
sudo pacman -Rsc <package>
```

### remove cache
remove all uninstalled packages in cache (s.t. you can downgrade easily)
```
sudo pacman -Sc
```

remove all packages in cache
```
sudo pacman -Scc
```

### autoremove (remove orphan packages)  
```
sudo pacman -Rcns $(pacman -Qdtq)
# or
pacman -Qdtq | sudo pacman -Rcns -
```

<https://wiki.archlinux.org/title/Pacman/Tips_and_tricks#Removing_unused_packages_(orphans)>

### list all packages  
```
pacman -Ql
```

### search package
```
# match and show description
pacman -Qs <pkg>
# exact match
pacman -Q <pkg>
# exact match and show details
pacman -Si <pkg>
```

### troubleshooting

#### error: GPGME error: No data

Do something with pacman but have this error
```
error: GPGME error: No data
```

do this to fix
```
sudo rm -R /var/lib/pacman/sync
```

<https://stackoverflow.com/a/67850084/15493213>

#### error: failed to commit transaction (invalid or corrupted package)

When upgrading packages

```
error: failed to commit transaction (invalid or corrupted package)
```

do

```
pacman -Sy archlinux-keyring
```

<https://unix.stackexchange.com/a/574496>

## yay
to install (unofficial) AUR packages

install
```
yay -S <package>
```

## yum

### yum-config-manager

to use `yum-config-manager`

```
yum install yum-utils
```

### see all repos

go to `/etc/yum.repos.d/`

## snap

### install local
```
snap <xxx.snap> --dangerous
```

<https://askubuntu.com/a/1397306>

## flatpak
### init
install flatpak
```
sudo pacman -S flatpak
```
and reboot

add flathub
```
sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

### install
install your flatpak app
```
sudo flatpak install flathub <app name on flathub>
```

### update
update all flatpak packages
```
flatpak update
```

### autoremove
remove unused packages
```
flatpak uninstall --unused
```

## Appimage

### Make Appimage appears as native files

Use [AppimageLauncher](https://github.com/TheAssassin/AppImageLauncher)

Install

```
sudo apt install software-properties-common
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update
sudo apt install appimagelauncher
```

It should be running automatically. Now, open an appimage (directly, can't be from softlink), a window should popup asking if you want to integrate the appimage into your system. Press `Integrate and run`. Now, you'll got a native version of your appimage, which can be searched and can be pinned on your dock.

[ref](https://askubuntu.com/a/1125304)

If you don't want to use this app, you'll need to create a `.desktop` file linking to your appimage.