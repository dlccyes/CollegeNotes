---
layout: meth
has_children: true
parent: Hung-Yu
---
# Game Theory for Wireless Networks
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

魏宏宇專題

use [Game Theory](Game%20Theory) to solve resource allocation problems in wireless networking systems

## papers

### coalition game papers
- [Coalitional Games for Computation Offloading in NOMA-Enabled Multi-Access Edge Computing](Coalitional%20Games%20for%20Computation%20Offloading%20in%20NOMA-Enabled%20Multi-Access%20Edge%20Computing)
	- coalition tradeoff
		- more choice but more users in same coalition -> more noise
- [Opportunistic Data Collection in Cognitive Wireless  Sensor Networks - Air–Ground Collaborative Online Planning](Opportunistic%20Data%20Collection%20in%20Cognitive%20Wireless%20%20Sensor%20Networks%20-%20Air–Ground%20Collaborative%20Online%20Planning)
- [Quality and Profit Assured Trusted Cloud Federation Formation - Game Theory Based Approach](Quality%20and%20Profit%20Assured%20Trusted%20Cloud%20Federation%20Formation%20-%20Game%20Theory%20Based%20Approach)

### others

- Task Offloading and Resource Allocation in Mobile Edge Computing System
	- each user has different priority
	- priority is a funciton of local computation resource
	- local computation resource in uniform distribution
	- different random sequence comparison
		- ![](https://i.imgur.com/2kCXvj1.png)
- [Latency Comparison of Cloud Datacenters and Edge Servers](https://ieeexplore.ieee.org/document/9322406)
	- about edge server latency
	- ![](https://i.imgur.com/xaoalkx.png)
		- y-axis: % of requests that can be served under a certain latency
		- 2 workload scenarios: high & low
	- ![](https://i.imgur.com/atwCcBI.png)

## base scenario

![](https://i.imgur.com/1xZKLPT.jpg)
- participants
	- n users
		- use the same APP
	- 1 edge server
	- 1 cloud
- scenario
	- users originally use the app on cloud, now they can choose to utilize the edge server's resource to host the app to achiever lower latency, at some cost (money)

## 1 VM level
- assumptions
	- you can open unlimited (or at least n) VMs on edge server without any performance drop
	- performance of a VM drops as more users use it
	- all users use the app all the time
	- all users have the same preference i.e. same $\alpha$
	- the original latency & cost of opening a VM are the same for all users
	- all the VMs are the same
- a user's strategy
	- keeping the app on cloud
	- pay the full cost and open a VM on edge server to host the app
	- cooperate with other users and open a VM on edge server with them while sharing the cost
		- a VM has limited resource, so more user will lead to higher latency
- settings
	- $C$ = the cost of maintaining a VM on edge server
	- $T$ = intrinsic latency of the app in the cloud or in the edge VM with only 1 user
		- computation
	- $L_c$ = intrinsic latency of cloud to user
		- propagation delay transmission delay etc.
	- $L_e$ = intrinsic latency of edge to user
	- $\alpha$ = weight of time saved > 0
		- low latency is important → high $\alpha$
		- same for all users
- a user's utility
	- if choose to use edge server $i$
		- $u=\alpha ((L_c+T)-(L_e+k_iT))-\frac{C}{k_i}$
		- $k_i$ = how many users in coalition $i$ i.e. $k_i$ users use VM $i$
	- if choose to stay on cloud
		- $u=0$
- a coalition's utility
	- total utilities of members
- coalition operation policy
	- pareto efficient i.e. no negative impact for all
	- creation, switching
- simulation
	- everyone's the same so there's really no chance for switching, users just form a group of the max utility number and never move again
- things can be add
	- user can join an already-optimal group by compensating them
		- e.g. 22 users in total but optimal user number of a group is 5 → the 2 leftovers join other group, lowering the base utility of the group members, but compensate them s.t. they're not worse off at the TC level
		- TC or GTFO philosophy
	- differences in VMs
		- different latency

```python
import matplotlib.pyplot as plt

# settings
n = 10
m = 5
Le = 0.3
Lc = m*Le
a = 2
T = 0.1
C = 5

x = []
y = []

for k in range(1,n+1):
    x.append(k)
    u = a*((Lc+T)-(Le+k*T))-C/k # utility function
    y.append(u)

plt.plot(x,y)
plt.show()
```
![](https://i.imgur.com/j6WUFP5.png)

## multiple VM levels
- settings
	- $T$ = intrinsic latency of the app in the cloud
	- $T_i$ = intrinsic latency of the app in edge server $i$ with only 1 user
	- $k_i$ = how many users in coalition $i$ i.e. $k_i$ users use VM $i$
	- $C_i$ = the cost of maintaining a VM on edge server $i$
		- computation
	- $L_c$ = intrinsic latency of cloud to user
		- propagation delay transmission delay etc.
	- $L_e$ = intrinsic latency of edge to user
	- $\alpha$ = weight of time saved > 0
		- low latency is important → high $\alpha$
		- same for all users
- a user's utility
	- if choose to use edge server $i$
		- $u=\alpha ((L_c+T)-(L_e+k_iT_i))-\frac{C_i}{k_i}$
	- if choose to stay on cloud
		- $u=0$
- differences in VMs
	- VMs have different costs decided by computing resource (latenct)
		- different levels of VM with different costs
	- normal distribution
		- all VM costs same but quality (latency) in normal distribution
- assume there are 3 levels of VMs
	- $cov(C_i, 1/T_i)>0$
	- $C_i = \dfrac{c}{T_i}$, $c>0$
	- $f(C_i)=a(\dfrac{1}{T_i})+b,a>0$

### simulation
utility formula & numeric setting
```py
cost = {i:clr*i for i in range(1, lv+1)}    
latency = {i:1/(clr*i) for i in range(1, lv+1)}        
 def utility(level, ki):    
	 # in cloud -> utility = 0    
	 if not level: return 0    
	    
	 Ti = latency[level]    
	 Ci = cost[level]    
	 res = a*((Lc+T)-(Le+(ki)*Ti))-Ci/ki    
	 return res
```

- set a number so that 1 user in edge server still > in cloud first
	- otherwise might need a coordinator?
- greedy
- a json containing all coalition
	- each coalition is a json
		- level
			- cost & latency
			- still in cloud -> level = Null
		- members
			- or just num of members
- a json to store all {member: coalition}
- to simplify, only consider join/switch first
	- no merge, split etc.
- how to check every user and coalition and do operations?
	- as in [Coalitional Games for Computation Offloading in NOMA-Enabled Multi-Access Edge Computing](Coalitional%20Games%20for%20Computation%20Offloading%20in%20NOMA-Enabled%20Multi-Access%20Edge%20Computing), select a user, get its coalition, randomly choose another coalition and see if it would change
- steps
	1. randomly select a user
	2. get its coalition
	3. see if this coalition can change level
	4. randomly select another coalition, see if the user can join the coalition
- simulation result
	- utility vs. iteration
		- ![](https://i.imgur.com/aPrnCOn.png)
		- ![](https://i.imgur.com/clPpdZt.png)
	- different amount of users
		- ![](https://i.imgur.com/d03TrTf.png)
		- more users -> more time to converge
	- different amount of levels
		- a = 10
		- ![](https://i.imgur.com/iOCe8ea.png)
			- blue: all goes to lv3
			- orange: all goes to lv5
			- but all VM only has 1 user
		- num of coalitions left vs. a
			- no difference
			- n = 50, lv = 10
			- ![](https://i.imgur.com/bGmQc6a.png)
		- avg VM level & coalition member counts vs. cost-latency ratio
			- a = 10, n = 10
			- ![](https://i.imgur.com/hoJ0Ziw.png)


### findings
- convergence
- high cost or low latency -> low VM level(no need chasing latency), big coalitions (to share cost)
- low cost or high latency -> high VM level (for smaller latency), small coalitions (no need share cost)

### convergence proof
- finite amount of possible partitions
- each operation will improve system utility under pareto condition
- each operation will create a new partition
- -> gauranteed to reach a final Nash-stable partition

## tree
### scenario
- a finite 2D space
- 1 cloud, placed in the center
- M edge servers, distributed in some way
	- randomly distributed
	- semi-randomly distributed, under some rules
		- not too close to cloud & other edge servers
		- more probable to be in high population density areas
		- no need
	- fixed
	- real settings (e.g. major Taiwan cities)
- N users, distributed in some way
	- randomly distributed
	- semi-randomly distributed, under some rules
		- more dense around cloud & edge servers
	- real settings (e.g. Taiwan's population distribution)
- users originally use apps on cloud, but can switch to any edge server with necessary costs
	- propagation delay = f(distance to server)
	- for each edge server
		- level
			- only 1 level
			- multiple levels
		- VM
			- no VM
			- allow infinite VMs

### utility function
- propagation delays depends both user & server, other than that, same as before
- utility for user i in server j
	- $u_{i, j}=\alpha ((L_{i,0}+T_c)-(L_{i,j}+k_jT_e))-\frac{C}{k_j}$

### algorithm
- initialize cloud, edge servers & users spacial distribution
- in each iteration
	- randomly select a user
	- randomly select a server, switch the user to the server if possible
	- randomly select another user, swap the 2 users is possible
- termination
	- if partition stable for a certain amount of iterations
- data structure
	- user json
		- location & server in for each user
		- `{0:{'location':(0.12, 0.55), 'server': 5}}`
	- server json
		- cloud = server 0
		- `{5:{'location':(0.22, 0.64), 'users':{0, 1, 2}}}`
- complexity
	- for totalitarian
		- $O(sN_{iter})$
			- $s$ = num of servers
			- $N_{iter}$ = num of iterations
		- $N_{iter}$
			- upper bound = num of possible iterations = bell number
			- irl converges much quicker than that
			- for 100 users (6 servers)
				- bell number = 4.76e+115
				- avg converging iterations = 21k-10k = 11k
					- time = 0.3s
			- for 500 users (6 servers)
				- bell number = 1.60e+843
				- avg iterations = 310k - 50k = 260k
				- avg time = 2m+
			- for 1000 users (6 servers)
				- bell number = 2.98e+1927
				- avg iterations = 1240k
				- avg time = 16m
		- for pareto-based
			- $O(uN_{iter})$
				- $u$ = num of users
				- $N_{iter}$ = num of iterations
			- $N_{iter}$
				- for 500 users (6 servers)
					- avg iterations = 95k
					- avg time = 7s

### results
- servers & users distribution
	- ![](https://i.imgur.com/M2SzSAu.png)
- convergence
	- ![](https://i.imgur.com/6I3vGoY.png)
		- select random
	- ![](https://i.imgur.com/AbBX35l.png)
- stable coalition distribution
	- ![](https://i.imgur.com/EUyHR1b.png)
	- ![](https://i.imgur.com/JgKHmyJ.png)
		- no swapping
- pareto-based vs. totalitarian
	- 100, 6
		- ![](https://i.imgur.com/ndz1Wr3.png)
		- ![](https://i.imgur.com/OlOuja0.png)
		- ![](https://i.imgur.com/uGRCq8e.png)
	- 100, 10
		- ![](https://i.imgur.com/ndHr6dP.png)
		- runtime
			- totalitarian 3.59s
			- pareto 1.93s
	- 100, 20
		- ![](https://i.imgur.com/G1G4AMp.png)
		- runtime
			- totalitarian 4.02s
			- pareto 2.74s
	- 500, 6
		- ![](https://i.imgur.com/x4eENko.png)
		- ![](https://i.imgur.com/uhYsaB0.png)
		- runtime
			- totalitarian 2m+
			- pareto 7s
	- 500, 30
		- ![](https://i.imgur.com/VsiioTN.png)
		- runtime
			- totalitarian 182.62s
			- pareto 45.91s
	- 500, 50
		- ![](https://i.imgur.com/B5PsVGg.png)
		- runtime
			- totalitarian 142.67s
			- pareto 148.32s
- comparison of different mechanisms
	- 100, 6
		- ![](https://i.imgur.com/D6jZnOD.png)
			- runtime
				- orwellian 3.02s
				- pareto 1.28s
				- selfish greedy 1.79s
		- ![](https://i.imgur.com/SrwY6ov.png)
			- runtime
				- orwellian 3.53s
				- selfish best 2.94s
				- selfish greedy 1.72s
		- ![](https://i.imgur.com/tOn3A5w.png)
			- runtime
				- orwellian 2.58s
				- pareto greedy 0.95s
				- selfish greedy 1.73s
- comparison of different methods
- ![](https://i.imgur.com/vEDL0ZX.png)
- ![](https://i.imgur.com/RTSYtK7.png)
- runtime
	- best ~ exhaustive < random < totalitarian
		- for same iteration
		- because totalitarian has much more num of successful operations
		- why random is significantly slower???
- system utility
	- totalitarian > best ~ exhaustive ~ random
	- coalition game method can reach about 70% of optimal system utility
- random increases more quickly at the start because of the implementation of swapping
	- swap after done switching for the same user, and best & exhaustive will search for every other user to try to swap, which count as an iteration for each attempt, while random will just try swapping with a randomly user and go on

### findings
- some user may choose to use a server far away, instead of a nearer one
	- ![](https://i.imgur.com/KQ1nZGl.png)
- if edge servers are farther away from cloud, more users would like to be in edge server
- [x] sometimes the "select best possible" strategy will have less final system utility than "select random" strategy
	- ![](https://i.imgur.com/YUNk4In.png)
	- **you can get different stable partition with different total utility using the same selection method so comparing total utility is nonesense**
- the less the avg distance between user & server, the more the total utility
	- relation between "select best possible" & "select random"
- as num of users increase, the system utility difference between pareto-based & totalitarian becomes larger

### TODO
- [x] convergence proof
	- bound
	- when will converge
	- converge to where
- [x] edge server proportional to users
	- or open another vm
- other schemes
	- [x] greedy select closest
	- others
- fairness
	- some get very great utility while making some very bad
- [x] different random sequence comparison
- [x] below # user threshold same latency
- [x] time change of # users of each server (converge)
- real system
	- update by time sequence
	- preparation

### problems
- definition of iteration?

## tree v2 logarithmic

### utility function

- utility for user i in server j
	- $u_{i, j}=\alpha ((L_{i,0}+T_c)-(L_{i,j}+T_E(k_j)))-\dfrac{C}{k_j}$
- $T_E(k_j)$
	- if $k_j<5$, $T_E(k_j)=T_e$
	- else, $T_E(k_j)=\ln(k_jT_e)+1$

$$
  \begin{equation}
    T_E(k_j)=
    \begin{cases}
      T_e, & \text{if}\ k_j<5 \\
      \ln(k_jT_e)+1, & \text{otherwise}
    \end{cases}
  \end{equation}
$$

### algorithm

- initialize spacial distribution of cloud, edge servers and users 
- all users initially on cloud
- in each iteration
	- choose the next user following a random sequence
		- when moved to the final of the sequence, shuffle again
	- check the servers from the best utility to the worse and switch if possible
		- or closest to the farthest
	- randomly select another user, swap the 2 users is possible
- termination
	- if partition stable for a certain amount of iterations
- switch/swap criterion
	- orwellian
		- if system will be better off
	- pareto
		- if itself will be better off and no one will be worse off
	- selfish
		- if itself will be better off

### results
- different fixed random seed
	- ![](https://i.imgur.com/srZK8kE.png)
- different methods
	- 100, 6
		- ![](https://i.imgur.com/beDwB0I.png)
		- runtime
			- orwellian 7.58s
			- pareto greedy utility 5.61s
			- pareto greedy distance 5.74s
			- pareto random 7.21s
			- cloud 0s
- different mechanisms
	- 100, 6
		- random select user
			- ![](https://i.imgur.com/hVFqYjA.png)
			- runtime
				- orwellian 5.64s
				- pareto 4.84s
				- selfish 5.3s
		- random user sequence
			- ![](https://i.imgur.com/weRjBHU.png)
			- runtime
				- orwellian 5.04s
				- pareto 3.74s
				- selfish 3.17s
	- 500, 20
		- random select user
			- ![](https://i.imgur.com/A8yJxjy.png)
			- runtime
				- orwellian 365.65s
				- pareto 369.02s
				- selfish 273.5s
		- random user sequence
			- ![](https://i.imgur.com/bsZ71fR.png)
			- runtime
				- orwellian 248.68s
				- pareto 129.81s
				- selfish 136.64s

### testbed

![](https://i.imgur.com/mESHGKb.png)

![](https://i.imgur.com/fcYft2u.png)
![](https://i.imgur.com/0Et1Ci8.png)


### todo

- computation delay
	- [x] threshold + linear
	- or see paper
- difference between users
	- weight of latency
	- cost?
	- other things

## tree v2 linear

### utility function

- utility for user i in server j
	- $u_{i, j}=\alpha ((L_{i,0}+T_c)-(L_{i,j}+T_E(k_j)))-\dfrac{C}{k_j}$
- $T_E(k_j)$
	- if $k_j<5$, $T_E(k_j)=T_e$
	- else, $T_E(k_j)=k_jT_e$

$$
  \begin{equation}
    T_E(k_j)=
    \begin{cases}
      T_e, & \text{if}\ k_j<5 \\
      k_jT_e, & \text{otherwise}
    \end{cases}
  \end{equation}
$$

### results

- different mechanisms
	- 100, 6
		- ![](https://i.imgur.com/6EDdXMI.png)
			- runtime
				- orwellian 2.34s
				- pareto 1.15s
				- selfish 1.48s
		- 500, 20
			- ![](https://i.imgur.com/NlwzKo1.png)
				- orwellian 118.53s
				- pareto 28.47s
				- selfish 64.43s

## tree v3 - uniform user weight

- the less the $\alpha$, the more close is pareto to optimal
	- because user values money more, so willing to join a big cluster
- the less the edger server latency, the more close is pareto to optimal
	- because user are more willing to move to edge

## todo

- convergence proof
- different random sequence comparison
	- e.g.
		- ![](https://i.imgur.com/2kCXvj1.png)
- extension
	- edge server
		- tree
			- randomize propagation delay
			- use real-life settings (台北高雄屏東)
		- multi-tier edge server
			- e.g. 大安區 中正區
			- the nearest server only points to a few user -> too expensive to use -> seek high level servers with more users under
	- flunctuated num of users
		- poisson
		- (partially) racalling mechanism
	- different cloud providers?
		- [Quality and Profit Assured Trusted Cloud Federation Formation - Game Theory Based Approach](Quality%20and%20Profit%20Assured%20Trusted%20Cloud%20Federation%20Formation%20-%20Game%20Theory%20Based%20Approach)