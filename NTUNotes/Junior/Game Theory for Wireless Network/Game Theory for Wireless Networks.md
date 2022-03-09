---
title: Game Theory for Wireless Networks
layout: meth
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
	- ![](https://i.imgur.com/aPrnCOn.png)
	- ![](https://i.imgur.com/clPpdZt.png)

#### findings
- convergence
- high cost -> low VM level, big coalitions (to share cost)

### future direction
- completion
	- 隨便設數字模擬
	- convergence proof
- extension
	- edge server
		- tree
		- multi-tier edge server
			- e.g. 大安區 中正區