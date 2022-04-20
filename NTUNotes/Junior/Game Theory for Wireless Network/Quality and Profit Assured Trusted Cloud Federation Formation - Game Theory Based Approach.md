---
layout: meth
parent: Game Theory for Wireless Networks
---
# Quality and Profit Assured Trusted Cloud Federation Formation: Game Theory Based Approach
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

[paper link](https://ieeexplore.ieee.org/document/8356142)  
[paper pdf with my annotations](Quality_and_Profit_Assured_Trusted_Cloud_Federation_Formation_Game_Theory_Based_Approach.pdf)

## Intro
- CSP = cloud service providers
- demand of cloud IaaS increases
- current problems
	- difficult for small CSPs fulfill requests with expected QoS of users
		- -> can be solved by forming a federation
	- big CSPs are over-provisioned to ensure performance
		- low utilization in low demand times -> waste of resources
		- -> can be solved by forming a federation
- cloud federation
	- collaboration between CSPs
	- pros
		- sell idle or underutilized computing resources
		- can meet unexpected demands without building new points-of-presence
		- don't need new hardware to offer high-end & flexible services
			- huge energy savings
	- different CSPs
		- pricing model
		- QoS values
		- trust values
			- QoS delivered vs. promised
	- previous works
		- maximizing overall profit
		- minimizing malicious members
			- those not sharing their resources
		- none try maximizing both profit & QoS while also considering truth value
	- important factors
		- profit
		- availability (uptime)
			- join federation to increase its availability
				- e.g. during peak time
			- trust value
				- will be more willing to join federation with members more trustworthy
- this paper
	- hedonic coalition game formed cloud federation
		- CSPs idle resources allocated dynamically to users
	- objective
		- maximize overall profit & availability of the federation composing of trusted CSPs
	- Beta Mixture Model to estimate quality & trust
	- only allow trusted CSPs to join the federation
	- broker based cloud federation architecture
		- trusted 3rd party
		- calculate individual satisfication level
			- from profit & availability get from the federation
			- decide whether to join based on the value
	- extensive experiments using real-life data
		- compared result with 3 existing works
	- contributions
		- generic cost model
			- cost of a federation
		- quality & trust calculated by Beta Mixture Model
		- algorithm converges to Nash stable federation partition

## Cloud Federation Architecture
- 2 types of cloud users
	- interact with CSPs directly
	- interact with cloud broker
- cloud broker
	- CSPs leasing their excessive resources
		- through federation manager (FM)
	- CSPs outsourcing theire excessive request (not enough resources)
		- through service manager (SM)
- Service Manager, SM
	- provide services to CSPs
		- those running out of resources
	- provide services to cloud users
		- those interacting with broker
- Federation Manager, FM
	- manage the services requests from SM
	- virtual owner of virtual resources from the federation
- Federation Coordinator, FC
	- FM assigns a FC for each federation
	- sends FM periodic update about the state of the federation
	- group similar resources
		- by types
- ![](https://i.imgur.com/4xYWdxx.png)

### Notations
- ![](https://i.imgur.com/X9oXeva.png)
- x.u = probability of x being unavailable
- x.a = probability of x being available
- $S^{id}.CO_{R_\mathscr{T}}$ = num of cores of type $R_\mathscr{T}$ of service provider $S^{id}$
- $S^{id}.Me_{R_\mathscr{T}}$ = memory used by type $R_\mathscr{T}$ of service provider $S^{id}$
- $S^{id}.S_{R_\mathscr{T}}$ = storage used by type $R_\mathscr{T}$ of service provider $S^{id}$
- $\rho_{R_\mathscr{T}}$ = price of resource $R_\mathscr{T}$ with availability 1

### Availability
- managed by FC
- flow
	- FC receives user request  -> find $S^{id}_i$ to fulfill it, by preference $i=1:N$  
		- i = k not availability -> find i = k+1
- probability of a federation being unavailable = probability of all resources in the federation being unavailable
	- ![](https://i.imgur.com/uKNx38d.png)
	- ![](https://i.imgur.com/1H8lITw.png)
	- assuming CSPs are independent to each other
	- ![](https://i.imgur.com/Um99Q7m.png)
	- ![](https://i.imgur.com/aTPLi8u.png)

### Cost 
- cost of $S^{id}$ providing resource type $R_\mathscr{T}$ 
	- ![](https://i.imgur.com/nBFNOO9.png)
- cost of a federation providing resource type $R_\mathscr{T}$  = sum of cost of each service providing resource type $R_\mathscr{T}$ times the probability of the service being used 
	- ![](https://i.imgur.com/YvT4GHa.png)
- cost of a federation = sum of cost of the federation providing each type of resources
	- ![](https://i.imgur.com/MQ4ShOH.png)

### Price
- price of a federation providing resource $R_\mathscr{T}$
	- ![](https://i.imgur.com/JoRTaeU.png)
- profit of a federation providing resource $R_\mathscr{T}$
	- ![](https://i.imgur.com/CU2usiw.png)
- Theorem 1
	- $f_j.Cost_{R_\mathscr{T}}$ has min when service providers are sort by cost (increasing) providing resource $R_\mathscr{T}$
	- pf
		- assume $S^{id}_i.C_{R_\mathscr{T}}$ for i=1:n is increasing except $S^{id}_k.C_{R_\mathscr{T}}>S^{id}_{k+1}.C_{R_\mathscr{T}}$
		- ![](https://i.imgur.com/evegQq1.png)

### Profit Distribution
- total profit of federation $fj$ using all resources
	- ![](https://i.imgur.com/h1gNF1K.png)
- profit obtained by service provider $S^{id}$ from federation $f_j$
	- ![](https://i.imgur.com/iaATENE.png)
	- $\omega_{S^{id}}$ = ratio of total resources contributed by $S^{id}$
	- profit({$S^{id}$}) = profit $S^{id}$ would gain without being in any federation
	- CSP won't worse off joining a federation
	- extra profit distributed according to resource contribution ratio

### Satisfication Level
- factors
	- profit $\theta$
		- earn extra money by sharing idle / underutilized resources
		- increasing overall profit will also increase invididual profit
	- availability $\xi$
		- most important QoS parameter for considering joining a federation
		- able to dynamically scale-up
		- increasing overall availability will also increase invididual availability
- ![](https://i.imgur.com/GupTqXS.png)
	- $sl_{min}$ = satisfication level = 0.01
	- $sl_{max}$ = satisfication level = 1
- satisfication vs. profit
	- ![](https://i.imgur.com/OeH6xgP.png)
	- just a slant line, not a triangle (the vertical & horizontal line are just for indication)
- weighted sum of satisfication get from profit & availability 
	- ![](https://i.imgur.com/siK6Sac.png)

## Quality & Trust
### Quality
- hierarchical quality
	- ![](https://i.imgur.com/5hHA8jf.png)
- ????????

### Trust
- the trustworthy level of a service provider
	- ![](https://i.imgur.com/a0ThfDn.png)
	- $S^{id}.QoP_{committed}$ = promised Qos
	- $S^{id}.QoP_{delivered}$ = originally delivered Qos
	- $\in[0,1]$

## Hedonic Cloud Federation Coalition Formation
- hedonic coalition game
	- non-transferable utility
- only allow trusted CSPs
- maximize satisfication level of federation
- maximize overall profit & quality

### Hedonic Coalition Game Formulation
- non-transferable utility (NTU) game
	- utility can't be distributed / transferred within coalition
- Why is it a NTU game?
	- utility = satisfication level
	- satisfication level can't be distributed or transferred to other members
- hedonic game
	- a subset of NTU game
	- players have preference over coalition
	- players only care about members of its own coalition
		- rather than the whole partition
	- Nash stable
	- individually stable
- Why is it a hedonic game?
	- utility = satisfication level
	- satisfication level depends on profit & availability
	- availability solely depends on the CSPs inprefer the coalition
	- profit solely depends on the members of the coalition
		- cost of resources solely depends on cost & availability of the CSPs in the coalition
- preference relation
	- CSP won't join the coalition it has joined before
		- make the preference value of the coalition it lefts to be $-\infty$
		- learn
		- $h(S^{id})$  = the set of coalition $S^{id}$ has been in

### Cloud Federation Formation Algorithm
- hedonic coalition game inspired cloud federation formation, CGCFF
- 