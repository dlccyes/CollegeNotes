---
tags:
  - GT_Papers
date updated: '2021-09-06T00:51:13+08:00'
parent: Game Theory for Wireless Networks Papers
layout: meth
---
# Auction Design and Analysis for SDN-Based Traffic Offloading in Hybrid Satellite-Terrestrial Networks (H-STN)

[[Game Theory]]
[[Game Theory Papers]]

## intro
### 名詞
- H-STN
	- hybrid satellite-terrestrial networks
	- heterogeneous → 屬於 HetNets
	- integrated
	- extremely high data rates
	- exponentially increasing demand of data
	- → need new spectrum sharing & interference control technology paradigms
- MNO
	- mobile network operator
- spectrum management
	- co-channel interference between ground cellular networks & STCom systems
		- bc  6G  & wireless mobile communications with satellite systems increase network capacity by offloading traffic from BSs of cellular networks to STCom systems
- STCom systems
	- satellite-terrestrial communication systems
	- costly & time-consuming to be deployed & updated
- SDN
	- software-defined network
	- flexible resource management & system performance control
	- centrally controlled
		- spectrum simultaneously used by cellular network & STCom system will be managed efficiently
	- separate control & data plane

### past researches
- 注重
	- traffic offloading mechanism for HetNets (heterogeneous networks)
		- auction modeling
- 缺漏
	- traffic offloading between cellular & satellite communications
	- traffic offloading mechanism in H-STN systems
	- interference management issues 
	- incentive mechanisms for BSs to share spectrum
	- allocative externalities
		- uncooperative beam groups of the satellite can benefit from the cooperation between BSs of the MNO & beam group performing offloading

### contributions of this paper
- [[second-price auction]] based traffic offloading & spectrum sharing mechanism for the SDN-based H-STN
	- common channels & spectrums shared can be managed efficiently
- find the unique optimal offloading threshold for the MNO to achieve max utility

## SDN architecture
![](https://i.imgur.com/MX5vvzM.png)
- a network framework separating control & data plane
	- 電網導會教
- the MNO has many BSs
- the satellite has many beam groups
- [28] STIN overview 可參考
### service plane
- provides multimedia multicast services with the satellite & distributed BSs
- BSs' mobile user (MU) & satellite's users (SUs) are randomly distributed in the coverage of BSs & satellite
- MNO manages the spectrum & operating nodes of BSs to serve its MUs
- a satellite provide services for its own SUs & BSs' MUs
- STCom system & celluar network provide multimedia multicast by occupying the common spectrum
	- coverage areas overlapped seriously
- performance of H-STN is improved effectively by cooperate spectrum sharing & traffic offloading among the satellite & BSs
### control plane
- SDN separates spectrum resource management from the geo-distributed resource
	- → auction-based market of spectrum & channel in the control plane
- information collection (**satellite&MNO → Controller → management plane**)
	- H-STN Controller receives information from the **satellite & MNO**
		- traffic offloading requests from the **MNO**
			- MNO submits required threshold of offloading rate $R_{thr}$
				- minimum data rate that it's willing to be served by the satellite through the winning spectrum band
				- will be observed by the satellite via H-STN Controller
		- potential supplies of traffic offloading service from the **satellite**
			- the satellite submits a bid vector, the willingness to provide traffic offloading for the MNO 
	- H-STN controller sends received information to the **management plane**
- strategy distribution (**management plane → Controller → satellite&MNO**)
	- H-STN Controller receives the strategies of traffic offloading & spectrum sharing made by the **management plane**
	- H-STN Controller distributes the received strategies to the   **satellite & MNO**
### management plane
1. information collection → receive bidding & threshold from the satellite & MNO
2. allocate the common spectrum & decide the traffic offloading for the satellite & MNO
	- which channel will be occupied by the satellite exclusively
	- how much traffic of MNO's MUs  will be onloaded to the satellite
3. send the decisions to the H-STN Controller in the control plane →  strategy distribution

## system model of traffic offloading
### fully-loaded (?)
- time-slotted
	- constant in each time slot, change over time slots
- quasi-static

### transmission rate
- N groups of beams from the satellite serve SUs with 2 rates
	- rate under co-channel interference by BSs
		- $\mu_n$
			-  a continuous random variable
			-  PDF & CDF independent of n
				-  known by all BSs anbeam groups 
			-  local & private information of beam group $n$
				-  other channel can't obtain
	- rate without co-channel interference by BSs
		- $\alpha \mu_n>\mu_n$ $(\alpha >1)$
- in each time slot, the satellite detects the occupancy status & the existence of co-channel interference and select the appropriate transmission rate 

## BS's modes
### cooperative mode 
BSs make a deal with beam group $m$
- MNO give satellite
	- all BSs turn off channel $m$
	- no co-channel interference for beam group $m$
	- other $N-1$ beam groups still have co-channel interference
- satellite give MNO
	- allow MUs of the MNO use channel $m$ with guaranteed offloading rate $\mu_{cost}$

### competition mode
- no deal between MNO & satellite
- MUs serve all data with BSs
- BSs randomly select 1 channel from N channels and increase the transmission power in this channel
	- this channel therefor suffers more interference → less transmission rate with discounting factor $\beta \in (0,1)$

## [[second-price auction]] based traffic offloading mechanism
### auction overview
- auctioneer (channel seller)
	- MNO (operating multiple BSs)
- bidders
	- all beam groups (of the satellite)
	- succeed → [[#cooperative mode]]
	- payment = $\mu_{cost}$
- operated at the beginning of each time slot

### auction operation
- stage 1
	- MNO announce its requests offloading rate threshold $R_{thr}\in[0,+\infty)$
- stage 2
	- each beam group $n$ submit its bid $b_n\in[R_{thr},+\infty)\cup\{\varnothing\}$
		- $b_n<R_{thr}$ → $b_n=\varnothing$ 

### auction outcome
$$\displaystyle{\mathcal{M}\triangleq \left\{m\in \mathcal{N}:m=arg\max_{n\in \mathcal{N}}b_n\right\}}$$
numbers of the max bid
- $|\mathcal{M}|=1$
	- winner = the highest bidder → [[#cooperative mode]]
	- $\mu_{cost}$ = second highest bid ($R_{thr}$ counts as one bid) = $\displaystyle{max\left\{R_{thr}, \max_{n\in \mathcal{N}\backslash \{m\}}b_n\right\}}$
- $|\mathcal{M}|\geq2$
	- winner = randomly selected one from $|\mathcal{M}|$  → [[#cooperative mode]]
		- with probability $\dfrac{1}{|\mathcal{M}|}$ 
	- $\mu_{cost}$ = second-highest bidder's bid =  highest bid = $\displaystyle{max\left\{R_{thr}, b_n\right\}}$
- $|\mathcal{M}|=0$ i.e. $\displaystyle{max_{i\in\mathcal{N}}}b_i=\varnothing$
	- [[#competition mode]]
### expected utility
- [[#cooperative mode]]
	- MNO
		- $\pi_{MNO}=\mu_{cost}+\pi_1$
	- beam group $n$
		- $\pi_n=p[win]\times(\alpha \mu_n- \mu_{cost})+p[loss]\times \mu_n$
			- $\alpha=2$ to achieve equilibrium
			- es el único highest bidder → p[win]=1
				- $\pi_n=\alpha \mu_n- \mu_{cost}$
			- no es el highest bidder → p[loss]=1
				- $\pi_n=\mu_n$
- [[#competition mode]]
	- MNO
		- $\pi_{MNO}=\gamma R_0-\pi_2$
	- beam group $n$
		- $\pi_n=\dfrac{1}{N}\beta\mu_n+\dfrac{N-1}{N}\mu_n$
			- p[selected by MNO] = $\dfrac{1}{N}$
			- discounted transmission rate $\because$ extra transmission power from BSs → more interference = $\beta\mu_n$
			- $\pi_n<\mu_n$ → will rather others win the auction than nobody wins → ==motivate participating in the auction==
				- me winning will make others better off → positive allocative externalities

## satellite's equilibrium bidding strategies
### symmetric bayesian equilibrium, SBNE
won't better off if change from $b^*(\mu_n,R_(thr))$ to any $s_n\in[R_{thr},+\infty)\cup\{\varnothing\}$

### bidding strategies
