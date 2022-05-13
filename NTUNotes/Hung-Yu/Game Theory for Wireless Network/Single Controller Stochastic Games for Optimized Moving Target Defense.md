---
tags: GT_Papers
parent: Game Theory for Wireless Networks
title: Single Controller Stochastic Games for Optimized Moving Target Defense
layout: meth
---
# Single Controller Stochastic Games for Optimized Moving Target Defense
## intro
- strategically change its cryptographic techniques & keys
  - deter the acttacker
- single-controller
  - only the defender controls the state of the game
- moving target defense, MTD
  - continously randomizing the network's configuration
    - crypto keys, network parameters, IP addresses
    - increase the uncertainty & cost of attack
  - three-layer model
    - low-level contexts in separate programs
    - model damage propagation between different programs
    - UI for results
  - a subclass of system agility
    - system agility: how efficiently the IT infrastructure of an organization can respond to external stimuli

## proposed model
- single-controller discounted non-zero sum finite [[stochastic game]]
- resource-contrained system
  - avoid long encryption key
    - short key more vulnerable, but with MTD, will be unlikely to be revealed before it's changed
- Nash equilibrium always exists
- higher defender utility than other randomly picking stategies scheme
- defender's utility
  - $U_1(a^1,a^2,s_i)=R_1(a^2)+T_1(a^1,a^2,s_i)-P_1(s_i)$
  - $R_1$ = reward from protecting a packet
    - depends on attacker's action
      - attack false technique → stonk
  - $P_1$ = power used to decrypt a packet
    - depends on current state (technique)
  - $T_1$ = transition reward from applying MTD & choose a key-technique combination
    - depends on current state, defender's action & attacker's action
- attacker's utility
  - $U_2(a^1,a^2,s_i)=R_2(a^1,a^2,s_i)-P_2(s_i)$
  - $R_2$ = reward from examining the encryption key
    - depends on current state (encryption technique), defender's action & attacker's action
  - $P_2$ = power used to decrypt a packet
    - depends on current state (technique)
- non-zero sum
- transition probabilities in $P$ deoends only on defender's actions
  - → single-controller stochastic games
- equilibrium
  - when no player can improve its utility solely by changint is actions 
  - discounted utilities → must have Nash equilibrium in stationary strategies
  - form a bimatrix game
- defender controls the time steps of the [[stochastic game]]
  - choose time step $t<min(t_i)$, $i=1:N$
    - $t_i$ = brute-force time for technique $i$
- MTD cost
  - reconfiguring the system & changing parameters
  - inform all nodes
    - propagation time
  - cost $C(q,n)$
    - n = consecutive changes during the past time steps (?)
      - n=0 in the 1st step
    - q = cost value (?)
    - $C(q,n)=q\cdot n$
      - 用這個的話，defender's utility 不太有減少
    - $C(q,n)=q\cdot ln(n+1)$
      - 用這個的話，defender's utility 大減
      - more suitable (其他 cost function 都不太造成變化) (?)

## simulation results
- 2 encryption techniques & 2 keys per techniques
  - 4 states
  - defender has 4 actions each state
  - attacker has $2^4=16$ different strategy permuations
  - defender has $2^4=256$ different strategy permuations
- probability of moving to a state with similar key < moving to a state with different techniques
  - transition reward lower for the former
- probability of attacking the same technique as the current state > attacking other technique
- utility of all states increase as discount factor increases
  - discount factor ↑ → defender care more about future rewards → choose actions that will increase future rewards
- 跟 equal probability 相比
  - defender's expected utility 都比較高
  - discount factor 愈大差得愈多
    - consider more state changes in the future → differ more from equal probabilities
- technique 用 less power 愈爽