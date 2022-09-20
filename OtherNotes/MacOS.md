---
layout: meth
parent: Othernotes
---

# MacOS
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

This OS is retarded btw, please use Linux + KDE if you can.

## shortcuts

Some keyboard shortcuts can be changed, some can't. Go to Settings -> Keyboard -> Shortcuts to view the changeable ones.

### command+Q

Command + Q is an unchangeable shortcut key which will close an application. You can't remove it, but you can remap it to harmless stuffs (like Show Notification Center).

<https://apple.stackexchange.com/questions/78948/>

## install/remove applications

After installing, move the `.app` to `Applications` directory.

To remove an app, go to `Applications` and move it to trash.

## Homebrew

package manager for MacOS

### update & upgrade packages

```
brew update
brew upgrade
```

### autoremove

```
brew autoremove
```

## screen edge

`Desktop & Screen Saver` -> `Hot Corners`

## Check CPU temperature

```
sudo powermetrics|grep -i "CPU die temperature"
```

## Wifi Card

`en0`

## Sniffing packets

2 ways

Don't seem to actually work tho, unlike Linux's `airmon-ng`.

You'll be disconnected from the network when you're in monitor mode.

### With Wireless Diagnostics

Wireless Diagnostics -> Window -> Sniffer -> Start

After you stop, the `.pcap` file will be stored in `/var/tmp/`, now you can open the file with `tcpdump -r <file>`.

<https://ask.wireshark.org/question/17812/how-to-enable-monitor-mode-on-mac/?sort=votes#sort-top>

### With airport

`airmon-ng` for MacOS

It's built in but not in system binary path so you can symlink it yourself

```
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
```

<https://stackoverflow.com/a/49000390/15493213>

To show available channels

```
sudo airport -s
```

<https://unix.stackexchange.com/a/49317>

Enable monitor mode and sniff

```
sudo airport en0 sniff <channel>
```

Open the file with `tcpdump -r <file>` afterwards.

## programs

### open VsCode from terminal

1. If you haven't, put your vscode into the `Applications` folder
2. command pallette -> `Shell Command: Install 'code' command in PATH`

<https://stackoverflow.com/a/36882426/15493213>


### windows snapper

[Rectangle](https://github.com/rxhanson/Rectangle) (the successor of [Spectacle](https://github.com/eczarny/spectacle))

```
brew install --cask rectangle
```

### alt+tab with preview thumbnail

[AltTab](https://alt-tab-macos.netlify.app/)

```
brew install --cask alt-tab
```

Default key would be `option+tab`

### clipboard manager

[Maccy](https://maccy.app/)

free + search + image + popup with shortcut (sadly no pin)

(it's $330 in App store but free downloading from the website, just type $0 and a random fake email for receipt and the download will occur)

### screenshot

Snipaste

### music controller in control center

[MiniPlay for Spotify & iTunes](https://apps.apple.com/us/app/miniplay-for-spotify-itunes/id936243210)

### quickly move between displays/monitors

<https://github.com/round/CatchMouse>

and click the link <https://web.archive.org/web/20150502123813/http://ftnew.com:80/catchmouse.html>

[direct downloading link](https://web.archive.org/web/20150502123813/http://ftnew.com/files/CatchMouse.zip)

download -> unzip -> right click on the app -> open -> set your keyboard shortcuts

your cursor will appear right at the middle of the corresponding display after triggering the shortcut key

### use normal scrolling direction

[Scroll Reverser](https://pilotmoon.com/scrollreverser/)

[Scroll Reverser github](https://github.com/pilotmoon/Scroll-Reverser/)

### prevent sleep when lid closed

There is no native way to do this (unless you're connected to an external monitor). Have to install 3rd party app.

1. Install [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704) on App Store.
2. Install [Amphetamine Enhancer](https://github.com/x74353/Amphetamine-Enhancer) from Github
3. Setup Amphetamine Enhancer
4. Click Amphetamine's icon on the menu bar
	1. Quick Preferences -> uncheck "Allow system sleep when display is closed"
	2. Start New Session -> "Indefinitely"
	3. Preferences -> General -> check all boxes under "Launch and Wake behavior"
5. That's it
	- you can still make your computer sleep in the normal way

[ref](https://www.switchingtomac.com/macos/how-to-keep-your-mac-on-even-with-the-lid-closed/)


## troubleshooting

### stop desktop order changed itself

System Preferences > Mission Control  -> uncheck "Automatically rearrange Spaces based on most recent use"

![](https://i.imgur.com/HbJWhT1.png)

<https://apple.stackexchange.com/a/214349>

### make dock appears on another display

When you're using more than one display, you can only make the dock appears on one of them. To make the dock appears on another display:

hide the dock (use the shortcut listed in system preferences -> keyboard -> shortcuts) -> go to another display -> keeps moving your cursor down (bottom screen edge) until the dock appears

### use the normal fullscreen in firefox

When you press f11, the tabs and bookbar bar are still there. To hide them, (when you're still in "fullscreen") right click on the hamburgar menu -> "Hide Toolbars".

To return to the default retarded MacOS behavior, create a new tab (with your hotkey or whatever) to make the tab bar appear, and then right click on the hamburgar menu -> unselect "Hide Toolbars".

Note that the fullscreen after you hide the toolbars is still not the same as it is on Windows & Linux. When your cursor move to the top of the screen, only the bookmark bar & the main bar are show, while the tab bar still remains hidden.

[ref](https://apple.stackexchange.com/a/435191)