---
title: Game Theory for Wireless Networks
layout: meth
has_children: true
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

use [Game Theory](Game%20Theory.md) to solve resource allocation problems in wireless networking systems

## scenario 1
![](https://i.imgur.com/1xZKLPT.jpg)
- participants
	- n users
		- use the same APP
	- 1 edge server
	- 1 cloud
- scenario
	- users originally use the app on cloud, now they can choose to utilize the edge server's resource to host the app to achiever lower latency, at some cost (money)

### 1 VM level
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

### multiple VM levels
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

#### simulation
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
	- as in [Coalitional Games for Computation Offloading in NOMA-Enabled Multi-Access Edge Computing](Coalitional%20Games%20for%20Computation%20Offloading%20in%20NOMA-Enabled%20Multi-Access%20Edge%20Computing.md), select a user, get its coalition, randomly choose another coalition and see if it would change
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


#### findings
- convergence
- high cost or low latency -> low VM level(no need chasing latency), big coalitions (to share cost)
- low cost or high latency -> high VM level (for smaller latency), small coalitions (no need share cost)

#### convergence proof
- finite amount of possible partitions
- each operation will improve system utility under pareto condition
- each operation will create a new partition
- -> gauranteed to reach a final Nash-stable partition

### tree
- scenario
	- a finite 2D space
	- 1 cloud, placed in the center
	- multiple edge servers, distributed in some way
		- randomly distributed
		- semi-randomly distributed, under some rules
			- not too close to cloud & other edge servers
			- more probable to be in high population density areas
		- fixed
		- real settings (e.g. major Taiwan cities)
	- many users, distributed in some way
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
- utility function
	- propagation delays depends both user & server, other than that, same as before
- algorithm
	- initialize cloud, edge servers & users spacial distribution
	- in each iteration
		- randomly select 1 edge server, calculate if it can change level
		- randomly select 1 user & 1 edge server, calculate if the user can switch
	- termination
		- if partition stable for a certain amount of iterations
- data structure
	- user json
		- location & server in for each user
		- `{0:{'location':(0.12, 0.55), 'server': 5}}`
	- server json
		- a set of user ids for each server
		- cloud = server 0 
		- `{5: {0, 1, 2}}`

### multi-level tree

### todo
- convergence proof
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