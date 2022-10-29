---
title: Spotify
layout: meth
parent: OtherNotes
---
# Spotify

## download your own data
<https://www.spotify.com/ca-en/account/privacy/>
- ref
	- <https://towardsdatascience.com/i-wrapped-my-spotify-history-the-hard-way-93dc832d9b47>

## Linux controlling commands

<https://community.spotify.com/t5/Desktop-Linux/Basic-controls-via-command-line/m-p/4360856/highlight/true#M15590>

Play:
```
dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Play
```

Pause:
```
dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Pause
```

Play/Pause toggle:
```
dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.PlayPause
```

Previous:
```
dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Previous
```

Next:
```
dbus-send --print-reply --dest=org.mpris.MediaPlayer2.spotify /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Next
```

## local files
### refresh local files
to refresh, remove & add back the source folder

<https://community.spotify.com/t5/Desktop-Windows/How-do-I-update-or-reset-my-local-files-list/m-p/922287/highlight/true#M14738>

### scrobble a local song (last.fm)
- the scrobble will be added once you've finished, but you can't see it when you're scrobbling it
- the song need to have the artist tag to be recognized
	- KDE's [Kid3](https://kid3.kde.org/) can edit mp3 tag

<https://community.spotify.com/t5/Content-Questions/How-do-I-scrobble-local-files-to-Last-fm/m-p/5098947/highlight/true#M38072>