---
tags: GT_Papers
grand_parent: Hung-Yu
parent: Game Theory for Wireless Networks
layout: meth
---

# Opportunistic Data Collection in Cognitive Wireless Sensor Networks - Air–Ground Collaborative Online Planning

source: <https://ieeexplore.ieee.org/document/9103004>

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

- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-1.jpg]]
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
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-2.png]]
		- $t=0$ to $T_{max}$ 總飛行距離超過兩倍 WSN radius
	- limitation of $T_{max}$ & $v_{max}$ → flying energy is sufficient
- groud-to-air transmission
	- LoS or NLoS
		- different LoS probability for different sensor-UAV pairs due to uncertainty of blockade
	- $C_{jm}$ = transmission data rate between ground sensor $j$ & UAV $m$
		- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-3.png]]
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

![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-4.png]]

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
		- limited path & time for UAV → mutual interference among ground sensors
- UAV 不能在 WSN 範圍待太久 → (12)

### with clustering
![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-5.png]]
- ground sensors have incentive to form data cluster when they want to upload at the same time to the same UAV
	- assume $jm$ link is better than $im$ link, and they want to upload at the same time
		- sharing the bandwidth will make $j$ uploads slower, therefor, if the fast $j$ help the slow $i$ to upload its data with its high speed, both will be better off
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-6.png]]
	- $R_j$ is the gathered data, the total data needed to be uploaded by cluster head $j$
		- including all its members' data
	- $\delta_{ij}$ = $i$ connects to cluster head $j$ (binary variable)
	- a sensor can only be in one cluster at max → (18)
	- a sensor can't be both cluster head & member → (19)
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-7.png]]
	- if i belongs to j, it won't upload when UAV pasts it
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-8.png]]
	- if i doesn't belong to others, it would be a cluster head and upload data when UAV pasts it

## coalition game
### reliable LoS transmission
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-9.png]]
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
		- effective transmittion time $T_j'$ =<br>![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-10.png]]
			- UAV 飛在 j 範圍內的總時
- ground sensor near UAV trajectory will help others upload data when its capacity is better than what it needs itself
	- when total gathering data $R_j$ > capacity $R_j'$, transmission reliability $f_R(j)$  decays exponentially
		- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-11.png]]

### transmission correlation
- ideal data uploading range
- j will upload data when y coordinate $\in \tilde{D_j}$
	- $\tilde{D_j}$ changes with cluster situation
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-12.png]]
- transmission correlation $\zeta(i,j)$ = inteference between $i$ & $j$
	- when $i$ & $j$'s uploading data range overlaps, they might cause interference to each other's uploading
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-13.png]]
	- clustering & offloading data to sensors closer to UAV trajectory will then stop its interference to others

### coalition formation game model
 - utility of sensor i<br>$u_i(a_i,a_{-i})=f_R(a_i)\zeta(i,a_i)min(C_{ia_i},r_i)$
	- $a_i$ = $i$'s cluster selection strategy<br>i.e. who $i$ choose to offload to<br>i.e. $i$'s cluster head
	- $a_{-i}$ = others' cluster selection strategy
	- $f_R(a_i)$ = $i$'s cluster head's transmission reliability
	- $\zeta(i,a_i)$ = interference between $i$ & $i$'s cluster head
	- $min(C_{ia_i},r_i)$ = data gathering rate
		- generation rate capped by transmission rate
- a sensor can select 1 coalition at most

#### pareto-based preference criterion
basically, do the operation iff the subject of the operation is better off && everyone else isn't worse off (pareto) after the operation
- switch
	- sensor $i$ switch coalition iff sensor $i$ is better off after the switch && everyone in the 2 coalitions isn't worse off after the switch
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-14.png]]
- merge
	- 2 coalitions merge iff total utility is greater after the merge && everyone in the 2 coalitions isn't worse off after the merge
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-15.png]]
- split
	- a coalition splits iff total utility is greater after the split && everyone in the coalition isn't worse off after the split
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-16.png]]
- exchange
	- 2 non-head sensors in different coalitions exchange coalitions iff they're both better off after the exchange && everyone in the 2 coalitions isn't worse off after the exchange
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-17.png]]
- equilibrium
	- every sensor wouldn't find a better coalition to join (only considering itself)
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-18.png]]
- at least one stabe coalition structure
	- strategies are limited
	- all operations are monotonic
		- each operation contributes to the total utility
		- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-19.png]]
	- so it will eventually converge to a coalition equilibrium structure

### algorithm
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-20.png]]
- for coalition members
	- switch operation
		- directly updates its coalition selection policy
	- each sensor only needs to interact with coalition head to meet the pareto criterions
		- bc sensor performance is a function of cluster head's transmission reliability<br>→ if $f_R(j)$ unchanged, the pareto criterion is satisfied
- for coalition heads
	- merge & exchange operation
	- split operation can be covered with members departure & exchange, so not separately calculated
- $O(C_1+2(\eta N-1)+C_2)$ each strategy updates
	- $\eta$ = probability of sensors to update active states

## UAV online flight control
- network topology & coalition formation unknown → UAV can't plan flight status in advance

### transmission protocol
- problems to solve
	- equilibrium of coalitions doesn't guarantee no interference
	- coalitions can't obtain all strategies of other coalitions
	- increase gathered data → increase transmission range → more likely to affect other coalitions
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-21.png]]
	- UAV continuously broadcasts its position & transmission status during flight, and coalition heads initialize in **listening state**
	- the coalition head closest to UAV will be allowed for transmission, while others remain in listening
		- if UAV isn't actually in the transmission range, the coalition head will go to **unexpected transmission** state
		- otherwise, it goes to **expected transmission** state
		- one at a time, siempre
	- having upload all the gathered data, sensors will go to **silence state**

### UAV flight mode
- given a trajectory, adjust the flight speed

#### passive data collection
- doesn't detect any ground network status
- fix to normal speed $v_m=\dfrac{2D_{max}}{T_{max}}$

#### partially detectable system
- receive data upload requirement of ground sensors
- 3 processes
	- estimating
		- receives data uploading requests from ground sensors
		- find the max transmission efficiency $\gamma_{jm}'$ of all detectable coalitions
			- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-22.png]]
	- flying
		- fly to the optimum transmission position of the nearest coalition head in max speed $v_{max}$
	- hovering
		- hovers at the optimum transmission position, receives data
		- flight time threshold
		- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-23.png]]
- remaining transmission time difficult to estimate
	- transmission time affects later coalitions

#### fully detectable system
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-24.png]]
- detect all the coalition strategy states
- estimate transmission efficiency at different locations
- obtain optimal flight speed & hovering time in the entire network through the algorithm

## simulation results
- parameter settings
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-25.png]]
- forming coalitions
	- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-26.png]]
- UAV flight mode
	-  ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-27.png]]
-  if not specified, 
	-  $N=40$
	-  $\eta=0.8$
	-  $T_{max}=400s$
	-  $p_j=0.1W$
	-  $P_{LoS}'=0.6$

### collected data vs. number of sensors
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-28.png]]
- without coalition, collected data doesn't increase with the increase of ground sensors
	- UAV has limited flight time
- with coalition, collected data is closed to data gathered
### collected data vs. sensors' active rate
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-29.png]]
- active rate = probability of being in active state (as opposed to silent  state)
- limited UAV capability → the gap from collected data to gathered data increase with the increase of active rate

### collected data vs. flying time constraint
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-30.png]]

### collected data vs. sensors' transmission power
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-31.png]]
- more transmission power → larger transmission range → more upload on its own → more interference → marginal improvement decreases

### collected data vs. transmission reliability threshold
- ![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-32.png]]
- transmission reliability < threshold → can't be coalition head
- lower threshold → more options (still the nearest to the UVA trajectory would be selected, so below 0.7 the coalition formation is always the same)
- but more options mean more information interaction between sensors → $P_{LoS}'=0.7$ is optimal 

### convergence
![[opportunistic-data-collection-in-cognitive-wireless--sensor-networks---air–ground-collaborative-online-planning-33.png]]

It converges!

## conclusion
- air-ground combined online optimization >> unilateral data collection of UAV
- UAV flight planning improves the data uploading efficiency

## comments
> Making a friend is better than making an enemy.