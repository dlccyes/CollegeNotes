---
tags: GT_Papers
parent: Game Theory for Wireless Networks Papers
layout: meth
title: Opportunistic Data Collection in Cognitive Wireless Sensor Networks - Air–Ground Collaborative Online Planning
---
# Opportunistic Data Collection in Cognitive Wireless Sensor Networks - Air–Ground Collaborative Online Planning
{: .no_toc }

[[Game Theory]]  
[[Game Theory Papers]]  
https://ieeexplore.ieee.org/document/9103004

<details open markdown="block">
  <summary>
    Outline
  </summary>
1. TOC
{:toc}
</details>

## intro
- UAV: unmanned aerial vehicle
- WSN: wireless sensor networks
	- deployed in remote areas for collecting data
- LoS: Line-of-Sight
	- 兩點之間無障礙物
- NLoS: Non-Line-of-Sight
	- 兩點之間有障礙物
	- 靠 reflection
- past papers
	- made some not-always-true assumptions
		- dedicated UAV development
			- UAVs are designed to collect data from WSNs to data centers
			- optimally traverse all devices
			- requires continuous dispatch of these specific UAVs
		- data requirement already known
			- state of WSN is also known
			- so it won't work well in dynamic or unknown networks
		- passive ground networks
			- UAVs solve problems themselves, sensors just wait there and upload data when needed
				- UAVs prevent transmission conflict with changing path & collecting data in sequence
### contribution of this paper
- studies the contrary of above assumptions
	- oppurtunistic UAV data collection
		- UAVs aren't specified to collect data, just that if they happen to pass by ground sensors, they can collect data
			- during main task or when returning to base
			- UAVs' main tasks may be patrol and surveillance
		- don't need additional UAV placement to collect data from ground sensors
	- unknown characteristic of WSN
	- limited coverage ability of UAV
		- because those UAVs' main task aren't collecting data, so the flight path & coverage won't be optimal for collecting data
- propose a distributed coalition formation algorithm
	- coalition game for ground sensors clustering
		- ground sensors form clusters → improve data upload efficiency of the whole WSN
		- equilibrium based on Pareto criterion
	- data upload protocol
		- prevent transmission collision
	- flight adjustment for UAV with different detection capabilities
	- can converge


## system model
- WSN
	- can't connect with ground control directly
	- has a radius of $D_{max}$
	- N sensor devices
	- coordinate of sensor j = $c_j$=$(x_j, y_j, z_j)$
- UAVs
	- return to hq (to charge, update information etc.) periodically
	- return one by one with interval $T_g$
		- to avoid collision
	- flies in straight line, enter WSNs at $(0,-D_{max})$, leaves at $(0,D_{max})$
	- coordinate of UAV m = $c_m(t)$=$(x_m, y_m(t), z_m)$
	- flying height $z_m$ is fixed
	- max flying time $T_{max}<T_g$
		- energy & safety restrictions
	- $t$ = time after UAV enters WSN < $t_{max}$
	- $V_{max}$ = UAV's max flying velocity
	- $v_m$ = flying velocity < $v_{max}$
	- ![](https://i.imgur.com/5gtR2fL.png)
		- $t=0$ to $T_{max}$ 總飛行距離超過兩倍 WSN radius
	- limitation of $T_{max}$ & $v_{max}$ → flying energy is sufficient
- groud-to-air transmission
	- LoS or NLoS
		- different LoS probability for different sensor-UAV pairs due to uncertainty of blockade
	- $C_{jm}$ = transmission data rate between ground sensor $j$ & UAV $m$
		- ![](https://i.imgur.com/pqoCGoO.png)
		- $B$ = channel bandwidth
		- $A_m(t)$ = num of sensors simultaneously uploading to UAV $m$
			- compete resources
		- $\gamma_{jm}(t)$ = signal-to-noise ratio (SNR) between ground sensor $j$ & UAV $m$ 
			- obtained by many calculations
	- communication among ground sensors
		- only NLoS
		- assume available channels of WSN is sufficient
		- channel interference among sensors operating on same channel

## problem formulation
min 的第一項是 transmission capacity，不可能超過
### without clustering
![](https://i.imgur.com/RgwLlzX.png)
- $r_j$ = data generation rate of sensor $j$
- 2 states of WSN → (9)
	- active gathering state
		- probability = $\eta$ 
		- $\beta_j=1$
	- silent listening state
		- probability = $1-\eta$ 
		- $\beta_j=0$
- $\delta_{jm}(t)$ = 1 iff sensor $j$ is uploading data to UAV $m$ at time $t$ → (10)
	- sum = num of sensors simultaneously uploading to UAV $m$ → (11)
	- es el strategy of uploading
		- hard to obtain strategies of other sensors & flight mode of UAV → difficult to make this strategy
		- limited path & time for UAV → mutual inteference among ground sensors
- UAV 不能在 WSN 範圍待太久 → (12)

### with clustering
![](https://i.imgur.com/Y61033Q.png)
- ground sensors have incentive to form data cluster when they want to upload at the same time to the same UAV
	- assume $jm$ link is better than $im$ link, and they want to upload at the same time
		- sharing the bandwidth will make the overall rate between $im$'s & $jm$'s, thus $j$ 吃虧
		- if $j$ help $i$ to upload its data, the overall rate = $jm$'s → faster than the bandwidth sharing scenario
- ![](https://i.imgur.com/6aJJDXL.png)
	- $R_j$ is the total data needed to be uploaded by cluster head $j$
		- $j$ is the cluster head, need to gather & upload all data of its member
	- $\delta_{ij}$ = i connects to cluster head j
	- a sensor can only be in one cluster at max → (18)
	- a sensor can't be both cluster head & member → (19)
- ![](https://i.imgur.com/a7c5hMI.png)
	- if i belongs to j, it won't upload when UAV pasts it
- ![](https://i.imgur.com/ZCOv8PK.png)
	- if i doesn't belong to others, it would be a cluster head and upload data when UAV pasts it

## coalition game
### LoS transmission
- ![](https://i.imgur.com/ZzbQKPg.png)
	- $\bar{D_j}$ = UAV 飛在 j 範圍內的總長 
- 3 flight modes
	- hovering mode
		- max uploading data
	- max velocity mode
		- min uploading data
	- normal velocity mode
		- general case
		- conventional flight mode
		- constant velocity of $\bar{v}=2D_{max}/T_{max}$
		- effective transmittion time $T_j'$ =<br>![](https://i.imgur.com/FN5IKy8.png)
			- UAV 飛在 j 範圍內的總時
