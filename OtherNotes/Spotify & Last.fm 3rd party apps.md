# Spotify & Last.fm 3rd party apps

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

## Last.fm stats

[http://www.mymusichabits.com](http://www.mymusichabits.com/) basically the same stats as last.fm

[https://nicholast.fm](https://nicholast.fm/) stats and recommendations

[https://mainstream.ghan.nl](https://mainstream.ghan.nl/) how mainstream you are

[http://explr.fm](http://explr.fm/)(map)

[http://lastfm.dontdrinkandroot.net](http://lastfm.dontdrinkandroot.net/) lit composition of artists

[https://scatterfm.markhansen.co.nz](https://scatterfm.markhansen.co.nz/) scatter graph of every scrobble

[http://www.lastchart.com.s3-website-us-east-1.amazonaws.com](http://www.lastchart.com.s3-website-us-east-1.amazonaws.com/) all kinds of charts of your artists  

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

## last.fm remove duplicates bookmark
from [here](https://github.com/shevchenkoartem/lastfm-smart-deduper) I think

```
javascript:(function(){function a(a){const b=document.createElement("button");return b.innerText=l,b.onclick=a,b.style.background="#D92323",b.style.color="white",b.style.padding="5px",b}function%20b(b,c,d,e){return{songId:b,date:c,isDuplicate:!1,isForcedDeleted:!1,isRemainedOriginal:!1,extraDeleteButton:null,get%20hasFinalState(){return%20this.isForcedDeleted||this.isRemainedOriginal},deleteMe:function(b){if(this.isDuplicate=!0,e.style.background="#F2CDCF",!b){const%20b=e.querySelectorAll("button"),c=b[b.length-1];c.innerText!==l&&(this.extraDeleteButton=a(function(){d.click()}),e.appendChild(this.extraDeleteButton))}else(function(){d.click()})(),this.isForcedDeleted=!0,null!=this.extraDeleteButton&&(e.removeChild(this.extraDeleteButton),this.extraDeleteButton=null)},forcedDeleteIfDuplicated:function(){this.isDuplicate&&!this.isForcedDeleted&&this.deleteMe(!0)},remainMe:function(){e.style.background="#DDFFD9",this.isRemainedOriginal=!0}}}function%20c(a){k.push(a),k.length>e&&k.shift()}function%20d(){for(let%20a=0;a<k.length-1;++a){const%20b=k[a];for(let%20c=a+1;c<k.length;++c){const%20d=k[c];if(b.hasFinalState&&d.hasFinalState)continue;const%20e=Math.abs(d.date-b.date)/1e3/60,i=e<=g;i&&(b.forcedDeleteIfDuplicated(),d.forcedDeleteIfDuplicated());const%20j=b.songId===d.songId,l=c===a+1;j&&(e<=f||l&&h)&&(!d.isForcedDeleted&&(!d.isDuplicate||i)&&d.deleteMe(i),!b.isRemainedOriginal&&!b.isDuplicate&&b.remainMe())}}}const%20e=4,f=15,g=1,h=!1,k=[],l="Delete",m=document.querySelectorAll(".chartlist-row");for(let%20a=m.length-1;0<=a;--a){const%20f=m[a],g=f.querySelector(".chartlist-name").querySelector("a").innerText,h=f.querySelector(".chartlist-artist").querySelector("a").innerText,i=f.querySelector(".chartlist-timestamp").querySelector("span").getAttribute("title"),j=new%20Date(i.replace("pm","%20pm").replace("am","%20am")),l=f.querySelector(".more-item--delete"),n=b(g+"%20-%20"+h,j,l,f);c(n),(k.length===e||0===a)&&d()}})();
```

