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

## Vantage design

### design overview
- current live video upload systems
	- client captures raw video frames -> encoder compresses and transmits to upload endpoint
	- system's network transport mechanism estimates available bandwidth -> knows how much compressesion needed for encoding
- Vantage's high-level architecture
	- modify architecture to support quality-enhancing retransmissions
	- after frames being encoded and enqueued, Vantage also compresses them in high quality and stores in memory for possible future retransmissions
	- scheduler generates bandwidth allocation scheduler
	- execution engine
		- coordinate encoding
		- adjust for inaccurate bandwidth allocation schedule
	- transport layer
		- provides bandwidth estimates
		- dequeue packets
	- ![](https://i.imgur.com/JYyV9nC.png)

### scheduler design
####  problem formulation
- mixed-integer optimization problem
- goal: quality optimization for time-shifted viewers
- time constraint
	- run the scheduling optimization algorithm every P seconds
	- omit if the optimization takes over P seconds i.e. use whatever is ready at $T=t+nP$

####  notations 
for $T$ $|$ $t+P < T < t+2P$
- $B$ = max num of bytes that can be transmitted
- $F$ = a set of real-time frames that will be sent
- $G$ = a set of past frame that can be retransmitted
- $G'$ = a set of retransmitted frame $(G'\in G)$
- $d_g$ = delay of past frame $g\in G$
- $R_g$ = SSIM of past frame $g\in G$
	- will only retransmit frames already at endpoint
- $Q_g$ = bitrate-to-SSIM mapping for past frame $g\in G$ 
	- unit of $Q=\dfrac{SSIM}{bitrate}$
- $Q_f$ = predicted bitrate-to-SSIM mapping for real-time frame $f\in F$
- $s_f$ size/bitrate of real-time frame $f\in F$
- $s_g$ size/bitrate of past frame $g\in G$
- $N(d)$ = num of viewers with delay = $d$
- weight $w_g$ for past frame $g\in G$
- weight $w_0$ for real-time frame

#### functions
- bandwidth contraints
	- ![](https://i.imgur.com/Tq1dLnY.png)
- goal: maximize the objective function
	- ![](https://i.imgur.com/KKeuLYK.png)
	- weighted sum of SSIM from real-time frames & past/retransmitted frames
	- if higher SSIM can be achieved, then retransmit
- weight settings
	- ![](https://i.imgur.com/5PydOiM.png)
	- retransmission of real-time frames could benefit viewers with all delays
	- retransmission of frame $g$ with delay = $d_g$ could benefit viewers with delay > $d_g$
- retransmission contraint
	- num of retransmissions $\leq |F|$
	- computation of retransmissions $\leq$ computation of real-time frames
- bitrate-SSIM curve estimation
	- regression heuristic, estimated with previous data
	- $Q(s)=1-\dfrac{1}{as+b}$
		- concave
		- a, b recomputed for each frame when re-encoded
	- use EWMA to estimate future curve

#### performance
- can't find the optimal solution within $P=2$s with large $|G|$
- solution
	- larger $P$ -> older bandwidth estimates -> worse performance
	- with approximations
		- only generate variables for the worst 200 frames (by SSIM)
		- not restricting frame sizes to be integers, but approximate them to be integers
		- result
			- 98.5% of the optimization windows get solution with < 1% difference to optimal one