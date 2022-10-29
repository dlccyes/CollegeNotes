---
title: Good Tools
layout: meth
parent: OtherNotes
---
# Good Tools

## websites
- Photopea
	- Photoshop clone
- <https://12ft.io/>
	- remove paywall
		- work
			- Financial Times
		- don't work
			- The Atheletic
	- add `https://12ft.io/` in front of the url
- reddit stat
	- <https://subredditstats.com>
- reddit archives
	- <https://camas.github.io/reddit-search/>
		- very good
		- can search comments
	- <https://www.reveddit.com/>
	- <https://www.unddit.com/>
	- <https://github.com/pushshift>
		- underlying service of all the above sites
		- api endpoint prefix `https://api.pushshift.io`
		- api doc
			- [guide](https://github.com/pushshift/api)
			- [parameters](https://pushshift.io/api-parameters/)
		- e.g.
			- `https://api.pushshift.io/reddit/comment/search?html_decode=true&author=dlccyes&subreddit=subredditdrama`
- note service comparisons
	- <https://www.noteapps.info/>
- hacknews remade
	- <https://hn.jeffjadulco.com>
- lucidcart
	- <https://lucid.app/lucidchart>
	- make flow charts / diagrams
- voicerss
	- <https://www.voicerss.org/api/>
	- convert text to voice via api

## browser extensions
- tab manager (firefox)
	- Tab Session Manager
		- save and restore tab session
		- many options available
		- can sync
	- Sideberry
		- tree style tabs in sidebar
		- many customizations
	- Tabby
		- search opened tabs
- navigation
	- Gesturify (firefox)
		- mouse gestures
		- customizable
	- Glitter Drag (firefox)
		- drag to search/open text/link/image
	- CrxMouse (chrome)
- privacy
	- adblocker
		- ublock origin
			- can filter js
		- ghostery
	- Facebook container (firefox)
		- always put Facebook in firefox's container s.t. cookies don't share
- password manager
	- bitwarden
		- all platforms
		- pareto improvement to LastPass
			- UI bonita
- CSS
	- Stylus
		- write your own CSS for websites
		- can sync
	- Dark Reader
		- one-click darkify websites

## badge generation

### Badgen

<https://badgen.net/>

### Sheilds.io

<https://shields.io/>

#### logos

[doc](https://github.com/badges/shields/blob/master/doc/logos.md)

[ready-made logos](https://github.com/simple-icons/simple-icons/blob/develop/slugs.md)

To use your own logo

Any custom logo can be passed in a URL parameter by base64 encoding it. e.g:

[![](https://camo.githubusercontent.com/f7b2b5a24cf96caf9d5a71bd5e4d9e979ec291fff540bc6f32b00ca9eda7601b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c61792d73746174696f6e2d626c75652e7376673f6c6f676f3d646174613a696d6167652f737667253262786d6c3b6261736536342c50484e325a79423462577875637a30696148523063446f764c336433647935334d793576636d63764d6a41774d43397a646d636949485a6c636e4e7062323439496a4569494864705a48526f505349324d4441694947686c6157646f644430694e6a4177496a3438634746306143426b50534a4e4d544935494445784d574d744e5455674e4330354d7941324e6930354d7941334f45777749444d354f474d744d6941334d43417a4e6941354d6941324f5341354d576778597a6335494441674f4463744e5463674d544d774c5445794f4767794d44466a4e444d674e7a45674e5441674d544934494445794f5341784d6a686f4d574d7a4d794178494463784c544978494459354c546b786243307a4e6930794d446c6a4d4330784d6930304d4330334f4330354f4330334f4767744d54426a4c54597a494441744f5449674d7a55744f5449674e444a494d6a4d32597a41744e7930794f5330304d6930354d6930304d6d67744d5456364969426d615778735053496a5a6d5a6d4969382b5043397a646d632b)](https://camo.githubusercontent.com/f7b2b5a24cf96caf9d5a71bd5e4d9e979ec291fff540bc6f32b00ca9eda7601b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c61792d73746174696f6e2d626c75652e7376673f6c6f676f3d646174613a696d6167652f737667253262786d6c3b6261736536342c50484e325a79423462577875637a30696148523063446f764c336433647935334d793576636d63764d6a41774d43397a646d636949485a6c636e4e7062323439496a4569494864705a48526f505349324d4441694947686c6157646f644430694e6a4177496a3438634746306143426b50534a4e4d544935494445784d574d744e5455674e4330354d7941324e6930354d7941334f45777749444d354f474d744d6941334d43417a4e6941354d6941324f5341354d576778597a6335494441674f4463744e5463674d544d774c5445794f4767794d44466a4e444d674e7a45674e5441674d544934494445794f5341784d6a686f4d574d7a4d794178494463784c544978494459354c546b786243307a4e6930794d446c6a4d4330784d6930304d4330334f4330354f4330334f4767744d54426a4c54597a494441744f5449674d7a55744f5449674e444a494d6a4d32597a41744e7930794f5330304d6930354d6930304d6d67744d5456364969426d615778735053496a5a6d5a6d4969382b5043397a646d632b) 

`https://img.shields.io/badge/play-station-blue.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIj48cGF0aCBkPSJNMTI5IDExMWMtNTUgNC05MyA2Ni05MyA3OEwwIDM5OGMtMiA3MCAzNiA5MiA2OSA5MWgxYzc5IDAgODctNTcgMTMwLTEyOGgyMDFjNDMgNzEgNTAgMTI4IDEyOSAxMjhoMWMzMyAxIDcxLTIxIDY5LTkxbC0zNi0yMDljMC0xMi00MC03OC05OC03OGgtMTBjLTYzIDAtOTIgMzUtOTIgNDJIMjM2YzAtNy0yOS00Mi05Mi00MmgtMTV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+`

#### examples

![Gmail badge](https://img.shields.io/badge/derricken968@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)
![LinkedIn badge](https://img.shields.io/badge/Derrick_Lin-blue?style=flat-square&logo=LinkedIn&logoColor=white)
![About me badge](https://img.shields.io/badge/Personal_Page-purple?style=flat-square&logo=About.me&logoColor=white)
![resume badge](https://img.shields.io/badge/resume-Derrick_Lin-white?style=flat-square)

## small programs

### navigation
- QTTabBar
	- extend windows explorer functionalities
		- search
		- tabs
		- etc.
	- many customizable shortcuts
		- double click to go back
		- alt+double click to open properties
		- etc.
- Listary
	- Mac's spotlight
	- can customize appearance
	- Win 11 can customize indexing location too
		- ![](https://i.imgur.com/jq0lFwM.png)

### screen recorder
- oCam
- obs studio

### batch image converter

- Xnconvert
	- <https://www.xnview.com/en/xnconvert/#downloads>
	- support rockstar's image format

### defender and cleaners
- ccleaner
- adwcleaner
	- strong malware cleaner
- Display Driver Uninstall
	- uninstall display driver

### multimedia
- Potplayer
- FastStone Image Viewer
- Audacity
	- simple but powerful audio editor
- Adobe Media Encoder
	- free, no need to pirate
	- encode videos to other formats easily

### others
- Ditto
	- clipboard management
	- can pin
	- can search
- Snipaste
	- partial printscreen and sketch
- Wiztree
	- storage usage of everything on your disks
	- fast image viewer
- Rainmeter
	- customize your desktop

## terminal
- windows terminal
	- highly customizable appearance
	- support many shells
- mobaxterm
	- the all-in-one solution
	- ftp, x server and more
	- tree style folders in sidebar

## dotfiles management

### Mackup

[Mackup](https://github.com/lra/mackup)

Install

```
brew install mackup
```

Set the backup directory in `~/.mackup.cfg`

```
[storage]
engine = file_system
path = /path/to/dir
```

Run backup

```
mackup backup
```

It will put your dotfiles in `/path/to/dir/Mackup`

![](https://i.imgur.com/kS8rOdr.png)

## git GUI
- github desktop
	- simple and elegant
	- straightforward
- sourcetree
	- powerful

## markdown editor
- Typora
	- use the versions before pricing
	- simple and elegant
- VsCode
	- robust
	- ugly and unchangeable preview
- Obsidian
	- customization king
	- many good plugins

## good Rainmeters
- VisBubble
	- round visualizer
	- https://visualskins.com/skin/visbubble-round-visualizer
	- with customization settings
- MonSoon
	- modern style cpu, ram, disk usages, clock
- Aemstel
- Time Calculate
	- X% of the day has passed
- Simple Epoca
	- vertical/horizontal linear visulizer
	- no customization supports
	- alter .ini yourself
- Simple Lyrics Display
	- spotify lyrics overlay
	- download: https://www.deviantart.com/apu889/art/Simple-Lyrics-Display-678137217
	- prerequisite: https://github.com/marcopixel/monstercat-visualizer
	- unusable unless following https://www.reddit.com/r/Rainmeter/comments/ce4jpd/spotify_lyrics_skin/eu0i2eo
	- reddit post
		- https://www.reddit.com/r/Rainmeter/comments/68lsem/simple_lyrics_display_obtaining_lyrics_from/
		- https://www.deviantart.com/apu889/art/Simple-Lyrics-Display-678137217?comment=1%3A678137217%3A4941281336
- Simply Circles

## good Obsidian plugins
- image toolkit
	- make obsidian useable
- obsidian git
- tasks
- Text Snippets
	- enter certain phrase + hotkey → insert long predefined text

## good Sublime plugins
- NeoVintageous
	- vim