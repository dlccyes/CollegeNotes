---
layout: meth
parent: Game Theory for Wireless Networks
---

# Collaborative Social-Aware and QoE-Driven Video Caching and Adaptation in Edge Network
{: .no_toc }

[paper link]( https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9271894)

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Introduction

- network traffic grows exponentially -> big latency -> low QoE
- use MEC to cache videos to reduce delay
- edge node has limited storage, solution:
	- partial caching
		- only some segments of videos
		- only some resolution versions of videos
	- collaborative caching
		- edge nodes cache together to increase cache hits ratio
- measure social influence of contents to improve edge caching
	- interest-based
		- high accuracy
		- need many user data
			- ISPs may not have them
	- interaction-based
		- lower accuracy
		- don't need many data
- transcoding
	- convert high-res to low-res
	- -> no need to store various versions anymore