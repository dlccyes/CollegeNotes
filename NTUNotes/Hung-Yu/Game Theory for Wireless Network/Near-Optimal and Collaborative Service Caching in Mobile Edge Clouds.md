---
layout: meth
parent: Game Theory for Wireless Networks
---

# Near-Optimal and Collaborative Service Caching in Mobile Edge Clouds
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

[paper pdf with my annotations](Near-Optimal_and_Collaborative_Service_Caching_in_Mobile_Edge_Clouds.pdf)

## Intro

- problem: VR service needs huge computation -> huge delay
	- real-time 8K video processing
- solution: use 5G-enables MEC to reduce the delay
	- network service provider rent VMs in the edge servers of infra provider
	- share VM with other to reduce cost -> coalition

## With VM Sharing

- delay
	- ![](https://i.imgur.com/wH4Qokw.png)
	- c = # of coalition members
	- $\mu$ = request processing rate
	- $\rho$ = request rate
	- probability for the request to be queued
		- Erlang's c formula 
		- ![](https://i.imgur.com/BVEbin6.png)
- cost
	- without sharing
		- ![](https://i.imgur.com/yFZvh5l.png)
	- with sharing (payment)
		- ![](https://i.imgur.com/jKhT7HH.png)
			- ![](https://i.imgur.com/PsmeQgB.png)


