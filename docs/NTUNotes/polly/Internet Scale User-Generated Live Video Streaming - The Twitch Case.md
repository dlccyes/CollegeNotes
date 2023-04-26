---
layout: meth
parent: polly
---
# Internet Scale User-Generated Live Video Streaming: The Twitch Case

[paper link](https://www.dropbox.com/s/lepurjink70hdbb/PAM17.pdf)  
[paper pdf with my annotations](Internet Scale User-Generated Live Video Streaming The Twitch Case.pdf)

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
	- ![[internet-scale-user-generated-live-video-streaming---the-twitch-case-1.png]]

## Stream Hosting Strategy

- for a channel, the amount of servers allocated flunctuated with current viewer counts
	- ![[internet-scale-user-generated-live-video-streaming---the-twitch-case-2.png]]
- each region scales independently, based on the viewer counts of the region
- cross continent hosting strat
	- tiny channels tend to be served from US servers
	- bigger channels are served from all 3 continents
	- ![[internet-scale-user-generated-live-video-streaming---the-twitch-case-3.jpg]]
- San Francisco always serves first for North America, Amsterdam for EU, Seoul for Asia

## Client Redirection and Traffic Localisation

- traffic distribution for each continent
	- ![[internet-scale-user-generated-live-video-streaming---the-twitch-case-4.png]]
	- most served from closest continent cluster
	- but a large portion of Asia requests is served by North America cluster
	- most requests that are not localised are served by North America cluster
- CDF of local servers observed by each proxy
	- ![[internet-scale-user-generated-live-video-streaming---the-twitch-case-5.png]]
	- 50% Asia clients are never served by Asia cluster
	- 10% Asian clients are always served by Asia cluster
	- 90% North America servers are almost always served by North America cluster
	- 40% EU clients are always served by EU cluster
- fraction of local server used vs. viewer count of the client
	- ![[internet-scale-user-generated-live-video-streaming---the-twitch-case-6.png]]
- reason why Asia clients are not well localised
	- poor peering arrangement -> network distance to Asia cluster may not be shorter than to North America cluster (poor interconnectivity)
		- Asia clients that are fully using Asia cluster all share the same private peering facilities, with the remaining networks not being peered

## Conclusion

- centralized
	- decentralized caching useless for live streaming
	- only replicate streams when the demand is high enough, on a per-region basis
	- relies on effective peering & interconnection strategies

## Polly's comments

- reason why many Asia clients are redirected to US, may be that Asians watch a lot of US contents, but not enough to make Twitch push to Asia clusters