---
title: Spotify
layout: meth
parent: OtherNotes
---
# Spotify

## Spotify stats

- <https://playlastify.herokuapp.com/> 👍
	- mine
- [Spotify Statistics](https://spotifystatistics.com/)
- [Obscurify](https://obscurifymusic.com/) 
- <https://favoritemusic.guru/>
	- list of top stats
- ~~<https://spotify.me/en>~~
- [https://www.skiley.net](https://www.skiley.net/) 👍
- <http://organizeyourmusic.playlistmachinery.com>
	- 每次都要重載
	- 👍 很全面
	- sort all your songs(liked or added to playlist) into genres/moods/styles/decades/added/popularity/duration
	- can graph
	- also show attributes (so 功能性 >> sortyourmusics)

[http://sortyourmusic.playlistmachinery.com](http://sortyourmusic.playlistmachinery.com/) music attributes in a playlist

[https://replayify.com](https://replayify.com/login) ordinary but fairly good visual

[https://playedmost.com](https://playedmost.com/) ordinary with a little tweaks

[https://www.statsforspotify.com/](https://www.statsforspotify.com/) ordinary (blocked by Avast)

[https://replayify.com](https://replayify.com/top-tracks) ordinary

[https://visualify.io](https://visualify.io/) ordinary

[https://www.spotlistr.com](https://www.spotlistr.com/) convert XXX into spotify/cover pic maker/ordinary stats

[https://music-compatibility.com](https://music-compatibility.com/) compare your stat with others (need other's link)(not all time)

[https://musicaldata.com/](https://musicaldata.com/) detailed data of a song

[https://statfy.xyz/overview](https://statfy.xyz/overview) good visuals and some others

[https://musicscapes.herokuapp.com/musicScape](https://musicscapes.herokuapp.com/musicScape) 問號

[https://eclectix.herokuapp.com](https://eclectix.herokuapp.com/) 特殊 👍  [20201123 spotify network](https://www.evernote.com/shard/s656/nl/172043268/82fde8e6-0d65-4610-92a3-58c59018e3f2)

[https://www.spottydata.com](https://www.spottydata.com/) playlist analysis 👍

[https://pudding.cool/2020/12/judge-my-spotify/](https://pudding.cool/2020/12/judge-my-spotify/) randomly judging your music taste

[https://spotifytrack.net/](https://spotifytrack.net/) ordinary but can compare with others (not tested)

<https://everythings-connected.com/> artists graph

### Spotify Discovery and Others

- <https://songdata.io/>
	- musical details of a song & similar songs
- [https://www.kord.app/](https://www.kord.app/) 
	- full spotify + youtube (+ soundcloud) player, with your own account 👍

[http://playlist-manager.com/](http://playlist-manager.com/) manage your playlists 👍

[https://smartshuffle.io/home](https://smartshuffle.io/home) get weighted and shuffled queue

[https://dubolt.com](https://dubolt.com/) find songs based on attributes(u can adjust) & artists, also has ordinary stuffs, can hover preview (>moodify)

[https://moodify.app](https://moodify.app/) create playlist based on attributes(u can adjust) & artists, also has ordinary stuffs

[https://musicroamer.com](https://musicroamer.com/) find similar artists (great visual) (but kind of useless)

[http://everynoise.com/engenremap.html](http://everynoise.com/engenremap.html) all genres (can preview)

<https://eliotvb.carto.com/viz/971d1556-0959-11e5-b1a4-0e9d821ea90d/embed_map>
each city has its own playlist (useless tho)

<https://www.spotishine.com>  
generate playlist of new songs of your follwing artists

<https://discoverquickly.com/> 
not stat but let you hover through your songs (photo of album) and instantly play, pretty cool

[http://smarterplaylists.playlistmachinery.com](http://smarterplaylists.playlistmachinery.com/) Scratch style generating playlist (hard to use)

[https://jmperezperez.com/spotify-dedup/](https://jmperezperez.com/spotify-dedup/) show and can remove duplicate songs

[https://opslagify.deruever.nl/](https://opslagify.deruever.nl/)

calculate all your songs' (in playlist) total size (160kbs)

[https://ranked-records.herokuapp.com/](https://ranked-records.herokuapp.com/) search by artist, will display songs sorted by popularity/chonology

---

List of Spotify stats websites (and not just stats)  
<https://www.reddit.com/r/spotify/comments/95ga27/list_of_spotify_stats_websites_and_not_just_stats/>

Last.fm still working stats tools  
<https://www.reddit.com/r/lastfm/comments/79qv2f/lastfm_still_working_stats_tools/>

My collection of spotify (and other music related) websites  
<https://www.reddit.com/r/spotify/comments/gu81es/my_collection_of_spotify_and_other_music_related/>

---

create Soundcloud playlists from Spotify playlists (or reverse)  
<http://www.playlist-converter.net/#/>



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