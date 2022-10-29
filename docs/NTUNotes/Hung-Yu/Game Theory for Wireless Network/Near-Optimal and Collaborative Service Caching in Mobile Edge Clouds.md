---
layout: meth
parent: Game Theory for Wireless Networks
---

# Near-Optimal and Collaborative Service Caching in Mobile Edge Clouds

[paper pdf with my annotations](Near-Optimal_and_Collaborative_Service_Caching_in_Mobile_Edge_Clouds.pdf)

## Intro

- problem: VR service needs huge computation -> huge delay
	- real-time 8K video processing
- solution: use 5G-enables MEC to reduce the delay
	- network service provider rent VMs in the edge servers of infra provider for caching
	- share VM with others to reduce cost -> coalition
- ![](https://i.imgur.com/BFdwam1.png)

## With VM Sharing

- ==1 coalition for each edger server==
- utility
	- ![](https://i.imgur.com/kr1T7sr.png)
	- delay saved x weight - cost
- delay
	- ![](https://i.imgur.com/wH4Qokw.png)
	- = Response time of a [MMc queue](../../../OtherNotes/MMc%20queue)
	- c = # of VMs in the coalition
	- $\mu$ = request processing rate
	- $\rho$ = request rate
	- $sp$ = service provider
	- probability for the request to be queued
		- Erlang's c formula
		- ![](https://i.imgur.com/BVEbin6.png)
- cost
	- without sharing
		- ![](https://i.imgur.com/yFZvh5l.png)
	- with sharing (payment)
		- ![](https://i.imgur.com/jKhT7HH.png)
			- ![](https://i.imgur.com/PsmeQgB.png)

## Algorithm

### No coalition

Each service uses 1 edge server.

Solution can be simply calculated.

### Edger server sharing coalition

Each service uses 1 VM.

### VM sharing coalition

- Multiple services can share 1 VM.
- Can specify the time range needed

![](https://i.imgur.com/aYHnFSx.png)
