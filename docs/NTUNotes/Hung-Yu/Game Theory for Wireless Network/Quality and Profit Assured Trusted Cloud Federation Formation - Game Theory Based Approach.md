---
layout: meth
grand_parent: Hung-Yu
parent: Game Theory for Wireless Networks
---
# Quality and Profit Assured Trusted Cloud Federation Formation: Game Theory Based Approach

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
- QoF = quality of federation
- QoP = quality of provider

### Availability
- managed by FC
- flow
	- FC receives user request  -> find $S^{id}_i$ to fulfill it, by preference $i=1:N$  
		- i = k not available -> find i = k+1
- probability of a federation being unavailable = probability of all resources in the federation being unavailable
	- ![](https://i.imgur.com/uKNx38d.png)
	- ![](https://i.imgur.com/1H8lITw.png)
	- assuming CSPs are independent to each other
	- ![](https://i.imgur.com/Um99Q7m.png)
	- ![](https://i.imgur.com/aTPLi8u.png)

### Cost 
- $S^{id}.CO_{R_\mathscr{T}}$ = num of cores of type $R_\mathscr{T}$ of service provider $S^{id}$
- $S^{id}.Me_{R_\mathscr{T}}$ = memory used by type $R_\mathscr{T}$ of service provider $S^{id}$
- $S^{id}.S_{R_\mathscr{T}}$ = storage used by type $R_\mathscr{T}$ of service provider $S^{id}$
- cost of $S^{id}$ providing resource type $R_\mathscr{T}$ 
	- ![](https://i.imgur.com/nBFNOO9.png)
- cost of a federation providing resource type $R_\mathscr{T}$  = sum of cost of each service providing resource type $R_\mathscr{T}$ times the probability of the service being used
	- ![](https://i.imgur.com/YvT4GHa.png)
- cost of a federation = sum of cost of the federation providing each type of resources
	- ![](https://i.imgur.com/MQ4ShOH.png)
- Theorem 1
	- $f_j.Cost_{R_\mathscr{T}}$ has min when service providers are sort by cost (increasing) providing resource $R_\mathscr{T}$
	- pf
		- assume $S^{id}_i.C_{R_\mathscr{T}}$ for i=1:n is increasing except $S^{id}_k.C_{R_\mathscr{T}}>S^{id}_{k+1}.C_{R_\mathscr{T}}$
		- ![](https://i.imgur.com/evegQq1.png)

### Price
- $\rho_{R_\mathscr{T}}$ = price of resource $R_\mathscr{T}$ with availability 1
- price of a federation providing resource $R_\mathscr{T}$
	- ![](https://i.imgur.com/JoRTaeU.png)
- profit of a federation providing resource $R_\mathscr{T}$
	- ![](https://i.imgur.com/CU2usiw.png)

### Profit Distribution
- total profit of federation $fj$ using all resources
	- ![](https://i.imgur.com/h1gNF1K.png)
- profit obtained by service provider $S^{id}$ from federation $f_j$
	- ![](https://i.imgur.com/iaATENE.png)
	- $\omega_{S^{id}}$ = ratio of total resources contributed by $S^{id}$
	- profit({$S^{id}$}) = profit $S^{id}$ would gain without being in any federation
	- CSP won't worse off joining a federation
	- extra profit distributed according to resource contribution ratio

### Satisfication / Utility
- depends on profit & availability
	- profit $\theta$
		- earn extra money by sharing idle / underutilized resources
		- increasing overall profit will also increase invididual profit
	- availability $\xi$
		- most important QoS parameter for considering joining a federation
		- able to dynamically scale-up
		- increasing overall availability will also increase invididual availability
- satisfication from profit
	- ![](https://i.imgur.com/GupTqXS.png)
		- $sl_{min}$ = min satisfication level = 0.01
		- $sl_{max}$ = max satisfication level = 1
	- ![](https://i.imgur.com/OeH6xgP.png)
	- just a slant line, not a triangle (the vertical & horizontal line are just for indication)
- satisfication from availability
	- similar to above
- overall satisfication = weighted sum of satisfication get from profit & availability 
	- satisfication of a CSP
		- ![](https://i.imgur.com/nMlszXH.png)
	- satisfication of a federation
		- ![](https://i.imgur.com/oNjLT42.png)

## Quality & Trust
### Quality
- hierarchical quality
	- ![](https://i.imgur.com/5hHA8jf.png)
	- QoF = quality of federation
	- QoP = quality of provider
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
- operation
	- join
		- make a CSP join the best federation
	- split
		- move CSP to splitlist
	- stabilize
		- check if some CSPs want to leave its current federation
		- $O(n^22^n)$
			- $O(n^2)$ each iteration, $2^n$ iterations at most ($2^n$ possible partitions)
				- why $2^n$ ?????
	- updateQualityTrust
		- update status of CSPs
		- QoS, QoP, QoF
	- mergeFD
		- find a best federation to merge for the low availability federation
	- mergeSP
		- merge CSPs in splitlist to some federations
- procedure
	- form a Nash stable coalition partition in 1st round
	- call updateQualityTrust() to update status of each CSP
	- call monitor() to monitor the underlying environment
		- environment is dynamic
		- things to check
			- resource availability of each federation > threshold
				- not meet -> call mergeFD()
			- each federation is stable
				- utility or QoF < threshold -> call split() to move CSPs with low QoP to splitlist
			- each CSP's utility >= when it's not in a federation
	- call getNewSPrequests() to consider new CSPs
	- num of new CSPs > threshold -> call stabilize() again
		- only 1 new CSP won't make it unstable
			- why???
	- if a CSP's utility in identity federation more than in its federation -> move to splitlist
- algos
	- ![](https://i.imgur.com/CrKt5Eo.png)
	- ![](https://i.imgur.com/8XHLuBD.png)
	- ![](https://i.imgur.com/SofvzQd.png)
	- ![](https://i.imgur.com/X09ZjVc.png)
	- ![](https://i.imgur.com/A8SnnLG.png)
	- ![](https://i.imgur.com/pSuis9w.png)
	- ![](https://i.imgur.com/b6sJD4R.png)
- CGCFF algorithm properties
	- converges
		- every switch operation leads to new partition, and the num of possible partitions is finite 
	- final coalition partition is Nash stable
		- none has the incentive to switch to another coalition
		- more strict than being individually stable
		- all Nash stable coalitions is individually stable
		- pf
			- assume final partition isn't Nash stable -> a CSP will switch, creating a new partition -> final partition not final
	- final coalition partition is individually stable
		- no one will switch without making members in the target coalition worse off
		- all Nash stable coalitions is individually stable
	- each federation in the final partition if trusted
		- definition of trusted federation
			- QoF > threshold
			- trust level of each member > threshold
				- depends on QoP
				- see [Trust](#Trust)
		- initially, only CSPs with enough trust level can join a paritition
		- later on, system will monitor and federation with not enough QoF will be splitted (weakest CSP being moved to splitlist)
		- during mergeSP(), CSP in splitlist with enough trust level can rejoin a federation
		- in stable state, each federation would have enough QoF and each CSP in a federation would have enough trust level -> all federations are trusted

## Experimental Evaluation
### Setup
- compare with other 3 existing mechanisms
	- CFFM, profit-based cloud federation formation mechanism
		- maximize overall profit of a federation
	- MHCF, malicious-based hedonic coalition formation
		- minimize malicious members of a federation
			- those not sharing resources
	- QCFM, QoS-based coalition formation mechanism
		- consider many QoS parameters of a federation
			- availability, response time, reliability
- 3 types of VMs
	- each CSP contributes at least 5 instances for each type
- parameters
	- ![](https://i.imgur.com/pGOu7p0.png)
	- ![](https://i.imgur.com/h5S3xJW.png)

### Results
#### 100% trusted CSPs
- average federation satisfication
	- ![](https://i.imgur.com/fTOUvVc.png)
- average federation profit
	- ![](https://i.imgur.com/86cYo8t.png)
	- in CFFM, profit of federation always decreases after a successful partition
		- ???
- average federation availability 
	- ![](https://i.imgur.com/XHfj31p.png)
- average federation quality 
	- ![](https://i.imgur.com/htCwMFV.png)
	- QCFM uses greedy to maximize QoS -> stuck at local minimum 
	- CFFM selects CSPs with low QoS to minimize cost to maximize profit
- MHCF is always the worst in above measures as it's focusing on minimizing num of malicious CSPs
- average CSP satisfication
	- ![](https://i.imgur.com/bva912U.png)
- average federation size
	- ![](https://i.imgur.com/YVq0135.png)
	- MHCF aims to minimize malicious members -> smaller federation size
	- CFFM aims to maximize federation profit -> bigger federation size
- average CSP profit
	- ![](https://i.imgur.com/HofIqzu.png)
	- MHCF has smaller federation -> more profit for each CSP
	- CFFM has bigger federation -> less profit for each CSP
- average execution time
	- ![](https://i.imgur.com/fdgLaMB.png)
	- CFFM uses exhaustive search

#### with untrusted CSPs
- average federation satisfication
	- ![](https://i.imgur.com/nGo8qKj.png)
- average federation profit
	- ![](https://i.imgur.com/xn2Bl4d.png)
	- for CFFM, more untrusted CSPs -> form bigger federation -> more profit
- average federation availability
	- ![](https://i.imgur.com/zT8J7Tk.png)
- average federation quality
	- ![](https://i.imgur.com/4NEd83m.png)
- CGCFF is always steady bc only considers trusted CSPs when forming federation
- all other mechanisms don't consider trusted or not at all (untrusted <- big difference between promised & delivered QoP) -> availability & quality decreases with the increase of percentage of untrusted CSPs
	- profit not so much as trusted or not is unrelated to profit

#### num of CSPs & trust threshold
- only CGCFF
- trust threshold = percentage of trusted CSPs
- average federation size
	- ![](https://i.imgur.com/tgC1qJJ.png)
- average federation profit
	- ![](https://i.imgur.com/zXPjl7q.png)
	- depends on federation size
	- more trusted CSPs -> higher QoS -> higher cost
- average federation availability
	- ![](https://i.imgur.com/sFljDtI.png)
	- depends on federation size
- average federation quality
	- ![](https://i.imgur.com/h82nZc7.png)
	- depends on availability
	- more trusted CSPs -> better QoS
- average federation satisfication
	- ![](https://i.imgur.com/Zgw9nl4.png)
	- depends on federation profit & availability
- average CSP profit
	- ![](https://i.imgur.com/SN9WGB0.png)
	- depends on federation size