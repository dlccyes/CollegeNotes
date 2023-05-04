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
- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-1.png]]

## With VM Sharing

- ==1 coalition for each edger server==
- utility
	- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-2.png]]
	- delay saved x weight - cost
- delay
	- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-3.png]]
	- = Response time of a [[Queueing Theory#M/M/c queue]]
	- c = # of VMs in the coalition
	- $\mu$ = request processing rate
	- $\rho$ = request rate
	- $sp$ = service provider
	- probability for the request to be queued
		- Erlang's c formula
		- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-4.png]]
- cost
	- without sharing
		- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-5.png]]
	- with sharing (payment)
		- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-6.png]]
			- ![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-7.png]]

## Algorithm

### No coalition

Each service uses 1 edge server.

Solution can be simply calculated.

### Edger server sharing coalition

Each service uses 1 VM.

### VM sharing coalition

- Multiple services can share 1 VM.
- Can specify the time range needed

![[near-optimal-and-collaborative-service-caching-in-mobile-edge-clouds-8.png]]
