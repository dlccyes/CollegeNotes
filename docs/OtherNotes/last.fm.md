---
layout: meth
parent: Miscellaneous
---

# Last.fm

## Last.fm stats websites

- [ChartMyMusic](https://www.chartmymusic.com/lastfm/rainbowcollage/)
	- beautiful collage SORT BY COLOR!!
- [http://www.lastchart.com.s3-website-us-east-1.amazonaws.com](http://www.lastchart.com.s3-website-us-east-1.amazonaws.com/) 
	- all kinds of charts of your artists 
- <http://mold.github.io/explr/>
	- world heat map of all your artists
	- disable ublock origin first
	- <https://github.com/mold/explr>
- <https://collage.caretas.club/static/collages/>
	- album & artist collage
- [https://mainstream.ghan.nl](https://mainstream.ghan.nl/) 
	- how mainstream you are
- [https://nicholast.fm](https://nicholast.fm/) 
	- stats and recommendations
- [http://lastfm.dontdrinkandroot.net](http://lastfm.dontdrinkandroot.net/) 
	- cool artists wordcloud
- [https://scatterfm.markhansen.co.nz](https://scatterfm.markhansen.co.nz/) 
	- scatter graph of every scrobble
- [http://www.mymusichabits.com](http://www.mymusichabits.com/) 
	- basically the same as last.fm
- last.fm discord
	- its bot is pretty good

## Remove (duplicate) scrobbles

### batch select & delete

This chrome extension

<https://chrome.google.com/webstore/detail/lastfm-unscrobbler/pjlmjmkpaklofeinjkhhdcggbgjhahek/>

### auto remove duplicates

from [here](https://github.com/shevchenkoartem/lastfm-smart-deduper) I think

```
javascript:(function(){function a(a){const b=document.createElement("button");return b.innerText=l,b.onclick=a,b.style.background="#D92323",b.style.color="white",b.style.padding="5px",b}function%20b(b,c,d,e){return{songId:b,date:c,isDuplicate:!1,isForcedDeleted:!1,isRemainedOriginal:!1,extraDeleteButton:null,get%20hasFinalState(){return%20this.isForcedDeleted||this.isRemainedOriginal},deleteMe:function(b){if(this.isDuplicate=!0,e.style.background="#F2CDCF",!b){const%20b=e.querySelectorAll("button"),c=b[b.length-1];c.innerText!==l&&(this.extraDeleteButton=a(function(){d.click()}),e.appendChild(this.extraDeleteButton))}else(function(){d.click()})(),this.isForcedDeleted=!0,null!=this.extraDeleteButton&&(e.removeChild(this.extraDeleteButton),this.extraDeleteButton=null)},forcedDeleteIfDuplicated:function(){this.isDuplicate&&!this.isForcedDeleted&&this.deleteMe(!0)},remainMe:function(){e.style.background="#DDFFD9",this.isRemainedOriginal=!0}}}function%20c(a){k.push(a),k.length>e&&k.shift()}function%20d(){for(let%20a=0;a<k.length-1;++a){const%20b=k[a];for(let%20c=a+1;c<k.length;++c){const%20d=k[c];if(b.hasFinalState&&d.hasFinalState)continue;const%20e=Math.abs(d.date-b.date)/1e3/60,i=e<=g;i&&(b.forcedDeleteIfDuplicated(),d.forcedDeleteIfDuplicated());const%20j=b.songId===d.songId,l=c===a+1;j&&(e<=f||l&&h)&&(!d.isForcedDeleted&&(!d.isDuplicate||i)&&d.deleteMe(i),!b.isRemainedOriginal&&!b.isDuplicate&&b.remainMe())}}}const%20e=4,f=15,g=1,h=!1,k=[],l="Delete",m=document.querySelectorAll(".chartlist-row");for(let%20a=m.length-1;0<=a;--a){const%20f=m[a],g=f.querySelector(".chartlist-name").querySelector("a").innerText,h=f.querySelector(".chartlist-artist").querySelector("a").innerText,i=f.querySelector(".chartlist-timestamp").querySelector("span").getAttribute("title"),j=new%20Date(i.replace("pm","%20pm").replace("am","%20am")),l=f.querySelector(".more-item--delete"),n=b(g+"%20-%20"+h,j,l,f);c(n),(k.length===e||0===a)&&d()}})();
```

## Spotify not scrobbling

Here are some things to try

### Reconnecting scrobbler

1. [last.fm settings/applications](https://www.last.fm/settings/applications) → disconnect "Spotify Scrobbling"
2. [spotify settings/apps](https://www.spotify.com/tw/account/apps/) → revoke access of "Last.fm Scrobbler"
3. last.fm settings → connect "Spotify Scrobbling"
4. start a new track
5. expected result: current playback & the missing scrobbles are shown

Most of the time this works.

### Update Spotify

Occurs to me one time in MacOS Spotify desktop client.

### Resources

[Spotify has stopped scrobbling - what can I do?](https://support.last.fm/t/spotify-has-stopped-scrobbling-what-can-i-do/3184)

## Artists Photos

The photo of an artist is decided by the `upvote - downvote` of the artists photos.

## Recent Scrobbles Badge

[JeffreyCA/lastfm-recently-played-readme](https://github.com/JeffreyCA/lastfm-recently-played-readme)

Use this url for image

```
https://lastfm-recently-played.vercel.app/api?user=dlccyes
```

## Tags

> Pretty sure tags get on artist/album/track pages after a bunch of people tag it the same thing. The tags you see on those pages are the top 6 tags that people attach to them. That’s why the top tags are usually genres, but sometimes you get tags like “awesome” or “5 stars” thrown in there.

> When you tag something, it also adds those tags to your profile. You can click on the tab “Tags” on your profile and it takes you to all of your tags. You can click on the number of times you’ve used each tag to see what exactly you’ve tagged with it, along with the date you tagged it.

> It's not necessary that multiple people tag it to become public tags, it also depends on how often you scrobble your tagged songs. For example, I have tagged some less known and untagged songs with a specific tag that probably no other person has ever used on Last.fm and after a couple of weeks, my tag became public.

<https://www.reddit.com/r/lastfm/comments/9r9vm3/tags_help/>