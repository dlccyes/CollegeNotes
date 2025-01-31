---
layout: meth
parent: polly
---
# Pokemon Go Project Poster

[pdf link](https://www.dropbox.com/s/ekn2wltlhvxycal/mobisys21_camera.pdf)  
[pdf with my annotation](ar_pokemon_go.pdf)

2021

## Intro
- offloading AR processing to edge device
	- but the network delay is too simplified
- understand how Pokemon Go delivers its data
- Pokemon Go AR
	- very limited
	- AR+ mode
		- attempt to use camera as range sensor, sensing the user approaching pokemon
		- sensing error too big -> failed

## Measurement Method
- use players' smarphones to collect packet traces
	- Android 
		- need root
	- iOS
		- need MacOS device
	- method used
		- phones & laptop connect to same wifi
		- laptop do tcpdump, sniffing all packets through the subnet
- packets collected
	- 159966 packets
	- 68554 Pokemon Packets
		- use server IP to extract them
			- Pokemon uses permant, anycast IP

## Preliminary Analysis
- Bandwidth Consumption
	- startup traffic > steady state traffic
		- need area map, initial user data cache etc.
	- higher than conventional online game
	- similar to other mobile games
- RTT
	- most are small
		- 80% RTT < 100ms
		- 44.58% steady state RTT < 10ms
		- 29,67% startup state RTT < 10ms
		- feels like real time
		- difference between startup & steady state for RTT < 10ms = 18.82%
	- big RTTs are big
		- startup traffic is not the cause
			- difference between startup & steady state for RTT < 200ms = 7.983%
			- traffic concentration may be the cause
				- data collecters play in a group
	- ![[pokemon-go-project-poster-1.png]]

## Findings
- network delay varies significantly
	- may need to adjust offloading mechanism
- traffic volume & traffic concentration impacts the network delay
	- additional compression & randomizations may solve it
- future
	- collect more data and analyze