---
layout: meth
has_children: true
---
# polly
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## progress
- 2022.3.7
	- [Internet Scale User-Generated Live Video Streaming - The Twitch Case](Internet%20Scale%20User-Generated%20Live%20Video%20Streaming%20-%20The%20Twitch%20Case)
- 2022.3.14
	- [Vantage - Optimizing video upload for time-shifted viewing ofsocial live streams](Vantage%20-%20Optimizing%20video%20upload%20for%20time-shifted%20viewing%20ofsocial%20live%20streams) S1-3
- 2022.3.21
	- [Vantage - Optimizing video upload for time-shifted viewing ofsocial live streams](Vantage%20-%20Optimizing%20video%20upload%20for%20time-shifted%20viewing%20ofsocial%20live%20streams) S4.1-4.2
- 2022.3.28
	- [BlameIt - Zooming in on Wide-area Latencies to a Global Cloud Provider](BlameIt%20-%20Zooming%20in%20on%20Wide-area%20Latencies%20to%20a%20Global%20Cloud%20Provider) S1-2
- 2022.4.11
	- [BlameIt - Zooming in on Wide-area Latencies to a Global Cloud Provider](BlameIt%20-%20Zooming%20in%20on%20Wide-area%20Latencies%20to%20a%20Global%20Cloud%20Provider) S3-5
	- [Zmap](Zmap.md) S1-2
- 2022.4.18
	- [Zmap](Zmap.md) S3-6
- 2022.4.25
	- [Pokemon Go Project Poster](Pokemon%20Go%20Project%20Poster.md)
- 2022.5.2
	- [Zmap](Zmap.md) S7
	- tcpdump labs
- 2022.5.9
	- set up environment for collecting traces
- 2022.5.16
	- take some Pokemon Go traces
- 2022.5.23
	- semester review

## meetings
- 2022.5.23 10:00-10:25
	- semester review
- 2022.5.16 10:00-10:53
	- Pokemon Go progress
	- leadership
	- about next semester
- 2022.5.9 10:00-11:58
	- covid
	- Master applying
		- SOP admission people value truth and honesty
			- they can tell if you're faking
			- show your passion
	- life
	- Pokemon Go progress
	- OS
	- system skill
- 2022.5.2 14:00-15:05
	- life
	- Zmap section 7
	- more about Pokemon Go project
	- studying abroad
- 2022.5.2 10:00-12:20
	- Pokemon Go algos
- 2022.4.18 14:30-15:20
	- ZMap section 3-6
	- more about pokemon
	- tcpdump intro
- 2022.4.11 14:00-???
	- BlameIt section 3-5
	- ZMap section 1-2
	- something more about AR thing
- 2022.3.28 14:00-14:55
	- BlameIt section 1-2
	- python ffmpeg progress
	- AR project
		- might need some help collecting packet data
		- reverse engineer player actions from packet trace 
- 2022.3.21 14:00-14:55
	- Vantage section 4.1-4.2
	- Twitch project further details
		- 分工
		- system design
- 2022.3.14 14:00-15:01
	- Vantage section 1-3
	- Twitch project & data center introduction 
- 2022.3.7 14:00-15:02
	- HLS streaming demo
		- ![](https://i.imgur.com/CshPpPJ.jpg)
		- Sample ffmpeg with flags:
			- [https://www.dropbox.com/s/4raznj4z3uhpurj/ffmpeg-commands.txt?dl=0](https://www.dropbox.com/s/4raznj4z3uhpurj/ffmpeg-commands.txt?dl=0)
		- Polly's very simple HTTP server using golang
			- [https://www.dropbox.com/s/4imadje8gimpqlf/main.go?dl=0](https://www.dropbox.com/s/4imadje8gimpqlf/main.go?dl=0)  
			- (one can see how easy it is to realize libvlc's video player in golang here: [https://github.com/adrg/libvlc-go-examples/blob/master/v3/player/player.go](https://github.com/adrg/libvlc-go-examples/blob/master/v3/player/player.go))
		- The demonstrator pptx slide
			- [https://www.dropbox.com/s/bqs2w6f2s8pqho9/AR-proto.pptx?dl=0](https://www.dropbox.com/s/bqs2w6f2s8pqho9/AR-proto.pptx?dl=0)  
		- videos that take newbies thru object detection with TF
			- installing TF on Macbook M1:
				- [https://www.youtube.com/watch?v=_CO-ND1FTOU&t=30s](https://www.youtube.com/watch?v=_CO-ND1FTOU&t=30s)  
			- learning/getting TF OD to work in 5 hhours
				- [https://www.youtube.com/watch?v=yqkISICHH-U&t=3867s](https://www.youtube.com/watch?v=yqkISICHH-U&t=3867s)
		- native HLS playback browser extension
	- polly's Twitch scrawling project
		- <https://www.youtube.com/watch?v=_qNFqCR-Au0>
	- paper for 2022.3.14
		- <https://www.dropbox.com/s/3gwvnop7a1sf6p4/1-vantage-sigcomm19.pdf?dl=0>
			- read section 1&2
			- section 3 if possible
			- go into details

