---
layout: meth
grand_parent: Hung-Yu
parent: Edge Computing
---
# MEC White Paper
{: .no_toc }

[pdf with my annotations](etsi_wp11_mec_a_key_technology_towards_5g.pdf)


<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Intro
- MEC, mobile edge computing
- characteristics
	- low latency
	- proximity
	- high bandwidth
	- real-time
- complement to NFV
	- Network Functions Virtualization

## Market Drivers
- increase the quality of experience of end users
	- more efficient
	- more secure
	- less latency
- ![](https://i.imgur.com/BODTSaG.png)

## Business Value
- Radio Access Network (RAN) edge
	- characteristics
		- proximity
		- low latency
		- high bandwidth
	- offers
		- localized cloud computing
		- real-time services
- allow services to be efficently integrated across various platforms
- ![](https://i.imgur.com/08y6FBz.png)

## Service Scenarios
- increase performance
- utilize unique characteristics of MEC
	- proximity

### AR
- need high data rate & low latency
- need highly localized data
- ![](https://i.imgur.com/x8YnZcM.png)
- process on MEC

### Intelligent Video Acceleration
- videos are streamed with HTTP over TCP
- TCP can't quickly adopt to varying conditions
	- resource under utilized
	- sub-optimal user experience
- radio analytics application on MEC
	- estimate throughput available -> assist TCP congestion control
	- ![](https://i.imgur.com/WEDSJyi.png)

### Connected Cars
- num of connected cars continues grows rapidly -> more data
- need low latency
	- centralized data processing may be unreliable & slow
- use LTE cells to distribute data
	- beyond the line of sight
		- over 300-500m
	- low latency
	- roadside MEC application
		- MEC servers depoyed on LTE base station site
		- can send data to connected car cloud for further centralized data processing
		- ![](https://i.imgur.com/SPnbeTc.png)

### IoT Gateway
- IoT
	- need low latency & high security
	- resource constrained
	- need gateways to aggregate messages
	- messages are small, encrypted & from various protocols
- gateways need to manage various forms of messages with low latency
	- can use MEC server
	- aggregate & distribute
- IoT apps run on MEC server
	- deployed at LTE base station site
- ![](https://i.imgur.com/z8ANKcu.png)

## Deployment Scenarios
- possible locations
	- LTE macro base station (eNodeB) site
	- 3G Radio Network Controller (RNC) site
	- multi-Radio Access Technology (RAT) cell aggregation site
	- aggregation point
- where MEC is deployed depends on the service requirements and other things
- utilize NFV

## ETSI Industry Specification Group
- setting global standard
- ![](https://i.imgur.com/q3S8Tmu.png)

## Conclusions
- new value-chain
- all players can benefit
- mobile operators play a pivotal role
- MEC complements NFV
- MEC aligned with distributed cloud
- key tech for 5G
	- low-latency