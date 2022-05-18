---
layout: meth
grand_parent: Hung-Yu
parent: Edge Computing
---
# MEC Dev White Paper
{: .no_toc }

[pdf with my annotations](etsi_wp20ed2_MEC_SoftwareDevelopment.pdf)

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Intro
- remote cloud latency too big -> move closer to source of data with edge computing
- IoT & V2X(Vehicle to everything) -> amount of data will increase rapidly -> collect & process data close to user
- traditional distributed software dev model
	- client-server
	- central server
- MEC
	- traditional client-server + intermediate server @ network edge
	- differentiate those suitable for deploying at edge or cloud
	- multi-level load balancing
	- pros
		- user proximity
		- low latency
		- high bandwidth
		- real time access to radio network & context info
		- location awareness
	- cons
		- high cost
		- small computing power
		- little global reachability
	- e,g, AWS Greengrass
	- ![](https://i.imgur.com/5JDZd37.png)

## MEC Advantages
- hour-glass model
	- traditional
	- applications & networks agnostic to each other
- MEC provides more services for those MEC-aware
	- but also supports those using hour-glass model
	- apps dynamically adapt with environment / network info
		- expected latency
		- throughput
	- environment more predictable
	- network can benefit from apps
		- e.g. predict user behavior to maximize network efficiency
- end-to-end service components
	- terminal device components
		- preliminary processing
		- need zero latency
	- edge components
		- edge cloud
		- offload computing from terminal device
		- offload high bandwidth load from remote
	- remote components
		- remote cloud
	- ![](https://i.imgur.com/SavF5b8.png)
	- distributed computing to increase performance
	- can distribute computation across all components
- exploiting geographical info
	- adapt to linguistic & cultural characteristics of the given area
	- customized ads for local businiesses

## Deploying
- considerations
	- DNS-based solution
		- support DNS-based solution for traffic redirection
	- domain name
	- cloud back-end
		- fall-back solution hosted in cloud or others
		- if service need to me available whether MEC exists or not
	- sensitive user context data
		- user data may be sensitive
	- virtualized app
		- run MEC apps as virtualized app
		- using VM or container
		- on virtualization infra of MEC host
	- meta-data
		- requirements
		- dependencies

### Phase 1: MEC app packaging & onboarding
- not defined by the standard
	- have many options
	- related to contracts
- OSS, Operations Support System
	- receive request
	- forward to MEO
- MEO, MEC Orchestrator
	- onboard MEC apps to MEC systems
		- validation, adjustment and other things
	- provide MEPM with app package ID & app image location
- MEPM, MEC Platform Manager
	- provide configs & app images to selected VIM
- VIM, Virtualized Infrastructure Manager
	- store app images
- ![](https://i.imgur.com/k1IQA3G.png)

