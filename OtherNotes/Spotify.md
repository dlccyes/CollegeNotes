---
title: Spotify
layout: meth
parent: OtherNotes
---
# Spotify
{: .no_toc }

P{}

## download data
https://www.spotify.com/ca-en/account/privacy/
- ref
	- https://towardsdatascience.com/i-wrapped-my-spotify-history-the-hard-way-93dc832d9b47

## controlling commands
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