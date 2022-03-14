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
- Vantage
	- proposed live-streaming upload protocol for SLVS
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

## time-shifted viewing
- structural similiarity (SSIM) index
	- perceptual quality of video frames
- ![](https://i.imgur.com/p6XfJdn.png)
- assume $SSIM=1-\dfrac{1}{2b+1}$

### existing techniques
![](https://i.imgur.com/PpT8Jhr.png)

#### for delayed viewing 
- broadcast e.g. ESPN, CNN
- anticipate future bandwidth and calculate optimal bitrate (purple SSIM line), buffer frames when current bandwidth < target bitrate, clear buffer when current bandwidth > target bitrate
- average SSIM = 0.777
- only tailored for 1 delay, so not suitable for SLVS

#### for real-time viewing
- video chat e.g. Skype, Hangouts
- can't buffer frames as it should be real-time
- orange SSIM line
- average SSIM = 0.679

#### current SLVS
- e.g. Facebook Live, Youtube Live, Twitch, Periscope
- doesn't cater to time-shifted viewing
	- video frames in real-time & archived ones are identical, with same SSIM
	- -> huge space for improvement

### proposed approach
#### reupload high-quality version
- naive approach
- upload high-quality version after live-streaming ends
- only improve archived version
- take large storage
- require big bandwidth

#### quality-enhancing restransmissions (Vantage)
- restransmit previous low-quality frames during high-bandwidth periods
- improvement for time-shifted viewers
- bitrate-SSIM curve is concave <br>-> quality drop for reducing bitrate for high-quality frame < quality enhancement for adding bitrate for low-quality frame<br>(red arrow vs. green arrow in Figure 1)
- cons
	- sending redundant bits
	- additional computation
- results
	- ![](https://i.imgur.com/uM0Mas2.png)
	- ![](https://i.imgur.com/lKXQaFT.png)
		- "real-time optimized" & "delay optimized" utilizes all bandwidth, while "quality enhancing retransmissions" wastes some
		- Vantage vs. real-time by SSIM
			- delayed viewing improved by 9.4%
			- real-time viewing reduced by 5.2%
- challenges
	- overhead in calulating optimal bandwidth allocation
		- hard to do in real-time
	- bitrate-SSIM curve estimation
		- bitrate-SSIM curve is only known after frame is encoded -> can only be estimated beforehand
	- bandwidth estimation
		- need future bandwidth to calculate optimal bandwidth allocation -> need to estimate