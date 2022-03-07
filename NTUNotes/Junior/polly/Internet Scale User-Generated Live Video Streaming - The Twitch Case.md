---
layout: meth
parent: polly
---
# Internet Scale User-Generated Live Video Streaming: The Twitch Case
{: .no_toc }

[paper link](https://www.dropbox.com/s/lepurjink70hdbb/PAM17.pdf)  
[paper pdf with my annotations](Internet Scale User-Generated Live Video Streaming The Twitch Case.pdf)

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Intro
- Twitch is in real time, has very tight constraints -> can't cache video
- contribution
	- map infra & internetworking of Twitch
	- evaluate Twitch's redirection strategy

## Measurement Methodology
- python crawler
- request video
- inspect which server redirected to
- ran in many locations to get global coverage
	- using proxy

## Geographic Deployment of Twitch Infrastructure
- one-to-one mapping between domain & IP
- centralized infra
- more peering at countries with more servers
	- ![](https://i.imgur.com/pEz8394.png)

## Stream Hosting Strategy
- for a channel, the amount of servers allocated flunctuated with current viewer counts
	- ![](https://i.imgur.com/jna0iBW.png)
- each region scales independently, based on the viewer counts of the region
- cross continent hosting strat
	- tiny channels tend to be served from US servers
	- bigger channels are served from all 3 continents
	- ![](https://i.imgur.com/xU42U6i.png)
- San Francisco always serves first for North America, Amsterdam for EU, Seoul for Asia  

## Client Redirection and Traffic Localisation
- traffic distribution for each continent
	- ![](https://i.imgur.com/gLg4KVm.png)
	- most served from closest continent cluster
	- but a large portion of Asia requests is served by North America cluster
	- most requests that are not localised are served by North America cluster
- CDF of local servers observed by each proxy
	- ![](https://i.imgur.com/AoFw52b.png)
	- 50% Asia clients are never served by Asia cluster
	- 10% Asian clients are always served by Asia cluster
	- 90% North America servers are almost always served by North America cluster
	- 40% EU clients are always served by EU cluster
- fraction of local server used vs. viewer count of the client
	- ![](https://i.imgur.com/AUGuY27.png)
- reason why Asia clients are not well localised
	- poor peering arrangement -> network distance to Asia cluster may not be shorter than to North America cluster (poor interconnectivity)
		- Asia clients that are fully using Asia cluster all share the same private peering facilities, with the remaining networks not being peered

## Conclusion
- centralized
	- decentralized caching useless for live streaming
	- only replicate streams when the demand is high enough, on a per-region basis
	- relies on effective peering & interconnection strategies