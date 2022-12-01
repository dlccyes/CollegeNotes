---
layout: meth
parent: Miscellaneous
---

# Last.fm

## Remove (duplicate) scrobbles

### batch select & delete

This chrome extension

<https://chrome.google.com/webstore/detail/lastfm-unscrobbler/pjlmjmkpaklofeinjkhhdcggbgjhahek/>

### auto remove duplicates

from [here](https://github.com/shevchenkoartem/lastfm-smart-deduper) I think

```
javascript:(function(){function a(a){const b=document.createElement("button");return b.innerText=l,b.onclick=a,b.style.background="#D92323",b.style.color="white",b.style.padding="5px",b}function%20b(b,c,d,e){return{songId:b,date:c,isDuplicate:!1,isForcedDeleted:!1,isRemainedOriginal:!1,extraDeleteButton:null,get%20hasFinalState(){return%20this.isForcedDeleted||this.isRemainedOriginal},deleteMe:function(b){if(this.isDuplicate=!0,e.style.background="#F2CDCF",!b){const%20b=e.querySelectorAll("button"),c=b[b.length-1];c.innerText!==l&&(this.extraDeleteButton=a(function(){d.click()}),e.appendChild(this.extraDeleteButton))}else(function(){d.click()})(),this.isForcedDeleted=!0,null!=this.extraDeleteButton&&(e.removeChild(this.extraDeleteButton),this.extraDeleteButton=null)},forcedDeleteIfDuplicated:function(){this.isDuplicate&&!this.isForcedDeleted&&this.deleteMe(!0)},remainMe:function(){e.style.background="#DDFFD9",this.isRemainedOriginal=!0}}}function%20c(a){k.push(a),k.length>e&&k.shift()}function%20d(){for(let%20a=0;a<k.length-1;++a){const%20b=k[a];for(let%20c=a+1;c<k.length;++c){const%20d=k[c];if(b.hasFinalState&&d.hasFinalState)continue;const%20e=Math.abs(d.date-b.date)/1e3/60,i=e<=g;i&&(b.forcedDeleteIfDuplicated(),d.forcedDeleteIfDuplicated());const%20j=b.songId===d.songId,l=c===a+1;j&&(e<=f||l&&h)&&(!d.isForcedDeleted&&(!d.isDuplicate||i)&&d.deleteMe(i),!b.isRemainedOriginal&&!b.isDuplicate&&b.remainMe())}}}const%20e=4,f=15,g=1,h=!1,k=[],l="Delete",m=document.querySelectorAll(".chartlist-row");for(let%20a=m.length-1;0<=a;--a){const%20f=m[a],g=f.querySelector(".chartlist-name").querySelector("a").innerText,h=f.querySelector(".chartlist-artist").querySelector("a").innerText,i=f.querySelector(".chartlist-timestamp").querySelector("span").getAttribute("title"),j=new%20Date(i.replace("pm","%20pm").replace("am","%20am")),l=f.querySelector(".more-item--delete"),n=b(g+"%20-%20"+h,j,l,f);c(n),(k.length===e||0===a)&&d()}})();
```

## Not scrobbling

1. [last.fm settings/applications](https://www.last.fm/settings/applications) → disconnect "Spotify Scrobbling"
2. [spotify settings/apps](https://www.spotify.com/tw/account/apps/) → revoke access of "Last.fm Scrobbler"
3. last.fm settings → connect "Spotify Scrobbling"
4. start a new track
5. expected result: current playback & the missing scrobbles are shown

## Artists Photos

The photo of an artist is decided by the `upvote - downvote` of the artists photos.