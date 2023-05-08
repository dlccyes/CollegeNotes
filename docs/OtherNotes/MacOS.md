---
layout: meth
parent: Othernotes
---

# MacOS

The best overall desktop OS even when compared to Linux + KDE.

## shortcuts

Some keyboard shortcuts can be changed, some can't (or are a bit complicated to change). Go to Settings -> Keyboard -> Shortcuts to view the changeable ones.

### command+Q

Command + Q is an unchangeable shortcut key which will close an application. You can't remove it, but you can remap it to harmless stuffs (like Show Notification Center).

<https://apple.stackexchange.com/questions/78948/>

### Minimize shortcut

The unchangeable shortcut for minimizing a window is `CMD+M`. To disable it

1. System Preferences > Keyboard > Shortcuts > App Shortcuts
2. Add a shortcut with title = `Minimize` mapping to an obscure shortcut
3. Close the settings window for it to take effect

Active apps also need to be reopened otherwise pressing `CMD+M` on them will still minimize them.

See <https://apple.stackexchange.com/a/125628>

Or you can reassign `CMD+M` to another shortcut.

### Reassign system shortcuts

See [Locking your Mac with Command+L](https://cho.sh/r/6AA962)

1. Press 🍎 icon to see the name of your desired command
2. Settings -> Keyboard Shortcuts -> App Shortcuts
	- ![[macos-1.png]]
3. click Done -> quit Settings -> success

## Menubar

The topmost bar

Command + drag to rearrange the items

You can make menubar not use the area under notch but below it on a per app basis by going to Applications folder in finder -> Get Info -> check "Scale to fit below built-in camera". See <https://support.apple.com/en-us/HT212842>/.

## Sleep

### display sleep command

display sleep = display off

```
pmset displaysleepnow
```

### sleep log

Mac sleeps and wakes from sleep immediately, almost like it's only a screen off.

To check if it really sleeps

```
pmset -g log | grep -E 'Wake from|Entering Sleep' | tail -n 20
```

### require password from sleeping or not

In macOS Ventura 13, the settings is tied with display off

System Settings -> Lock Screen -> Require password after screen saver begins or display is turned off

<https://support.apple.com/en-lb/guide/mac-help/mchlp2270/mac>

## Restart audio service

```
sudo pkill coreaudiod
```

Should restart automatically

See `https://apple.stackexchange.com/a/366841`

## Adjust brightness or volume in smaller steps on keyboard

Hold `shift+option`

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

## Commands

### sleep

```
pmset sleepnow
```

## Sniffing packets

See [Sniffing Packets from Wireless Networks](Software%20Development/Sniffing%20Packets%20from%20Wireless%20Networks)

## Tools

### Sync config files

Use Mackup

See [[Good Tools#Mackup]]

### Open VsCode from terminal

1. If you haven't, put your vscode into the `Applications` folder
2. command pallette -> `Shell Command: Install 'code' command in PATH`

<https://stackoverflow.com/a/36882426/15493213>

### windows snapper

[Rectangle](https://github.com/rxhanson/Rectangle) (the successor of [Spectacle](https://github.com/eczarny/spectacle))

```
brew install --cask rectangle
```

### command+number to launch apps on dock

Download [Snap](https://apps.apple.com/us/app/snap/id418073146?). Would work out of the box.

### alt+tab with preview thumbnail

[AltTab](https://alt-tab-macos.netlify.app/)

```
brew install --cask alt-tab
```

Default key would be `option+tab`

### clipboard manager

[Maccy](https://maccy.app/)

free + search + image + popup with shortcut (sadly no pin)

(it's $330 in App store but free downloading from the website, just type $0 and a random fake email for receipt and the download will start)

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

**M2**

It does not work

**Before M2**

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

### Only show relevant menubar items

Try [Dozer](https://github.com/Mortennn/Dozer)

Dozer will giver you 2 dots on the menubar. Drag relevant menubar items to the right of the leftmost dot and press it, now all the other items will be gone. Click again and they will reappear.

![](https://github.com/Mortennn/Dozer/raw/master/Stuff/demo.gif)

### Show ethernet status in menubar

Use <https://apps.apple.com/us/app/ethernet-status-missing-lan/id1186187538>

## Troubleshooting

### Some settings do not take effect

Close and reopen the app if the new settings aren't working on an app.

### Stop desktop order from changing itself

System Preferences > Mission Control  -> uncheck "Automatically rearrange Spaces based on most recent use"

![[macos-2.png]]

<https://apple.stackexchange.com/a/214349>

### Stop apps pinning itself on dock

System Preferences -> Dock & Menu Bar -> Uncheck "Show recent applications in Dock"

![[macos-3.png]]

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

### Can't lock by pressing TouchID / power button

Press with a finger not registered for TouchID

<https://apple.stackexchange.com/a/416422>

### Some menubar items hidden

If your screen have a notch and have a ton of items in the menubar, many will get hidden. Only (free) solution is to command+drag to drag the unimportant ones out to make space for relevant ones.

If you want to pay, Bartender seems to be a solution.

Discussions

- <https://apple.stackexchange.com/q/444113>

### Area under notch is not used even if "Scale to fit below built-in camera" option is not checked

Reboot

### Can't connect to ASUS monitor

**Problem**

My Asus monitor will oscillate between connected and not connected when connecting to my MacBook Pro 14" M2 Pro 2023.

**Solution**

First install DisplayLink Manager if you haven't. You can find the files you need to download in [ASUS's download page](https://www.asus.com/us/support/Download-Center/).

Next, go to System settings -> Displays -> set "Refresh rate" to 60Hz

### Chinese input laggy

Kill the process and **reopen your app** if it's still laggy on an app.

2 ways to kill the process

- Activity monitor -> search for `Traditional Chinese Input Method` -> force quit
- `kill $(pgrep TCIM) `

### Terminal font size won't change

For some reason changing the font size in my profile won't do anything. The below method works however:

1. `CMD + +`
2. Shell > Use Settings as default

### Error when opening Docker

error message: `creating root node subnodes ...`

solution

```
rm -r ~/.docker
```

<https://github.com/docker/for-mac/issues/6572#issuecomment-1317344599>

