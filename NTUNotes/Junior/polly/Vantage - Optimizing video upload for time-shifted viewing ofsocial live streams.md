---
layout: meth
parent: polly
---
# Vantage - Optimizing video upload for time-shifted viewing of social live streams
{: .no_toc }

[paper pdf link](https://www.dropbox.com/s/3gwvnop7a1sf6p4/1-vantage-sigcomm19.pdf?dl=0)  
[paper pdf with my annotations](Vantage%20-%20Optimizing%20video%20upload%20for%20time-shifted%20viewing%20ofsocial%20live%20streams.pdf)

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## intro
- traditional live video streaming
	- single viewing delay
		- tailored for one particular quality latency tradeoff
		- video conferencing -> low delay
		- broadcast -> high delay
- social live video streaming, SLVS
	- each viewer has different delay for SLVS
		- trade-off between quality & latency
		- minimal delay for viewer using interactive features
		- higher delay for other viewers
		- mobile devices have unpredictable network behavior
	- have many versions
		- real-time
		- time-shifted
		- archived
- Vintage
	- live-streaming upload protocol
	- achievements
		- significant latency improvement at minimal quality reduction
		- 19.9% latency improvement (average)
		- 3.3% quality reduction (average)

## background
- SLVS
	- encoded by devide -> upload via RTMP or WebRTC to ingestion point (upload endpoint) -> re-encoded at various bitrates -> content delivery network delivers to viewers
- time-shifted viewing
	- different delays for same video stream
	- audiences with various latency tolerance
- variation of bandwidth
	- periods of low/high bandwidth are common
	- periods of low/high bandwidth are short-lived
	- bandwidth gained in high-bandwidth period > bandwidth lost in low-bandwidth period
		- so high-bandwidth periods can be exploited to improve the low-bandwidth periods