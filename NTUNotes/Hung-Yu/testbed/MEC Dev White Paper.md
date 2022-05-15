---
layout: meth
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

