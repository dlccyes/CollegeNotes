---
layout: meth
parent: Othernotes
---

# MacOS

This OS is retarded btw, please use Linux + KDE if you can.

## shortcuts

Some keyboard shortcuts can be changed, some can't. Go to Settings -> Keyboard -> Shortcuts to view the changeable ones.

### command+Q

Command + Q is an unchangeable shortcut key which will close an application. You can't remove it, but you can remap it to harmless stuffs (like Show Notification Center).

<https://apple.stackexchange.com/questions/78948/>

### Minimize shortcut

The unchangeable shortcut for minimizing a window is `CMD+M`. To disable it

1. System Preferences > Keyboard > Shortcuts > App Shortcuts
2. Add a shortcut with title = `Minimize` mapping to an obscure shortcut
3. Close the settings window for it to take effect

See <https://apple.stackexchange.com/a/125628>

Or you can reassign `CMD+M` to another shortcut.

## Menubar

The topmost bar

Command + drag to rearrange the items

## Restart audio service

```
sudo pkill coreaudiod
```

Should restart automatically

See `https://apple.stackexchange.com/a/366841`

## Applications

### Install/remove applications

After installing, move the `.app` to `Applications` directory.

To remove an app, go to `Applications` and move it to trash.

### Open app from terminal

```
open -a <app>
```

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

## Screen edge

`Desktop & Screen Saver` -> `Hot Corners`

## Check CPU temperature

```
sudo powermetrics|grep -i "CPU die temperature"
```

## Wifi Card

`en0`

## Sniffing packets

See [Sniffing Packets from Wireless Networks](Software%20Development/Sniffing%20Packets%20from%20Wireless%20Networks)

## Proxy

### Set proxy

<https://www.laptopmag.com/how-to/set-up-a-proxy-on-macos>

### Check your current proxy setting

[Guide](https://docs.telerik.com/fiddler-everywhere/knowledge-base/test-fiddler-network-access-on-macos#troubleshooting-the-proxy-settings)

list services

```
networksetup -listallnetworkservices
```

check proxy setting for http

```
sudo networksetup -getwebproxy <service>
```

for https

```
networksetup -getsecurewebproxy <service>
```

example response when no proxy

```
$ sudo networksetup -getwebproxy Wi-Fi
Password:
Enabled: No
Server: 
Port: 0
Authenticated Proxy Enabled: 0
```

<https://superuser.com/a/48562>

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

### Prevent sleep when lid closed

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

## Troubleshooting

### Stop desktop order from changing itself

System Preferences > Mission Control  -> uncheck "Automatically rearrange Spaces based on most recent use"

![](https://i.imgur.com/HbJWhT1.png)

<https://apple.stackexchange.com/a/214349>

### Stop apps pinning itself on dock

System Preferences -> Dock & Menu Bar -> Uncheck "Show recent applications in Dock"

![](https://i.imgur.com/bYez1IB.png)

<https://apple.stackexchange.com/a/338004>

### make dock appears on another display

When you're using more than one display, you can only make the dock appears on one of them. To make the dock appears on another display:

hide the dock (use the shortcut listed in system preferences -> keyboard -> shortcuts) -> go to another display -> keeps moving your cursor down (bottom screen edge) until the dock appears

### use the normal fullscreen in firefox

When you press f11, the tabs and bookbar bar are still there. To hide them, (when you're still in "fullscreen") right click on the hamburgar menu -> "Hide Toolbars".

To return to the default retarded MacOS behavior, create a new tab (with your hotkey or whatever) to make the tab bar appear, and then right click on the hamburgar menu -> unselect "Hide Toolbars".

Note that the fullscreen after you hide the toolbars is still not the same as it is on Windows & Linux. When your cursor move to the top of the screen, only the bookmark bar & the main bar are show, while the tab bar still remains hidden.

[ref](https://apple.stackexchange.com/a/435191)

### Two Finger Pinch Unreliable

<https://discussions.apple.com/thread/253369850>

### No xxx in spotlight result

See <https://support.apple.com/en-us/HT201716>

1. Locate the directory the missing thing is in, e.g. `simulator.app` is from `/Applications/Xcode.app/Contents/Developer/Applications`.
2. Go to System Preferences -> Spotlight -> Privacy
3. Drag the directory into it (so the directory will not be indexed)
4. Remove it (so the directory will be indexed again)
5. Quit System Preferences
6. Now it should work