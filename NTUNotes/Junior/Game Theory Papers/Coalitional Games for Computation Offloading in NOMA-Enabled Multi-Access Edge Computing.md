---
tags: GT_Papers
---
[[Game Theory]] 
[[Game Theory Papers]]
# Coalitional Games for Computation Offloading in NOMA-Enabled Multi-Access Edge Computing
## intro
- MEC, multi-access edge computing
	- provide computing capabilities within the radio access network at the network edge
	- low latency
	- save energy
	- higher reliability
- OMA, orthogonal multiple access
	- serve each with an unoccupied subcarrier / time slot
	- only use a small fraction of a spectrum sometimes
- NOMA, nonorthogonal multiple access
	- UEs can share the same resource block with NOMA
		- e.g. OFDM (orthogonal FDM) subcarrier
	- transmitter side
		- superpose signals from various users
	- receiver side
		- interference cancellation to decode the signals
	- accomodate more UEs than the number of available subcarriers
	- key tech for massive connectivities
		- e.g. IoT
	- can enable grant-free acess & flexible scheduling  → more UEs served simultneously → reduce latency
	- better than OMA
		- can utilize all subcarriers channels
		- fairness provisioning(?)
		- spectral efficiency
			- data rate in a bandwidth in a communication
	- e.g.
		- 1 small but time-sensitive packet & 1 big but latency-tolerant packet, with 2 orthogonal subcarriers → packet 1 & part of packet 2 for UE1, the remaining packet 2 for UE2
- UE, user equipment
- existing papers
	- single-carrier NOMA-based MEC
	- NOMA+MEC → substantially reduce latency & energy consumption
- this paper's contribution
	- multi-carrier NOMA-based MEC
		- more general
		- never studied before
	- distributed coalition formation game based algorithm
		- low time complexity
		- convergence guarantee
		- aims to minimize total computation
		- achieve Nash-equilibrium

## system model
### network model
![](https://i.imgur.com/PivTF7t.png)
- N UEs
	- $\mathcal{N}=\{1,...,N\}$
- 1 MEC
	- $\mathcal{S}=\{1,...,S\}$
- quasi-static Rayleigh fading
	- UEs don't change in offloading period & vary independently between 2 periods
- UEs & MeNB has 1 antenna
- NOMA → the signal MeNB receives contain interference signal from co-sharing UEs
- each UE can only use 1 subcarrier
	- ==但 [[#intro]] 的例子裡，big packet 是用兩個？==

### communication model
- offloading decision profile $A=\{a_{ns}|n\in \mathcal{N},s\in S\}$
	- UE n use subcarrier s → $a_{ns}=1$
	- UE n don't use subcarrier s → $a_{ns}=0$
- 1 UE use 0 or 1 subcarrier → $\displaystyle{\sum_{s\in S}\leq1,\forall n\in \mathcal{N}}$
- signal-to-interference-plus-noise ratio (SINR)
	- ![](https://i.imgur.com/9Q2hrpR.png)
		- j with $b_s(j)<b_s(n)$ isn't decoded by UE n → noise ==(???)==
	- uplink channel gain $h_{ns}$
		- sorted in ascending order
	- transmit power $p_{ns}$
	- noise power $n_0$
- achievable rate 
	- $R_{ns}=Blog_2(1+\Gamma_{ns})$ ==(???)==
	- B = bandwidth of an orthogonal carrier
	- ![](https://i.imgur.com/0iH34Dl.png)
		- $R_n$ = sum($R_{ns}$)

### computation model
- offloading decision
	- local execution
		- all in local, no offloading
	- full offloading
		- all in remote edge server
	- partial offloading
		- some local some remote`
	- binary offloading
		- either local or full offloading
- local execution → $x_n=1$<br>full offloading → $x_n=0$
- 1 UE use 0 or 1 subcarrier → $\displaystyle{\sum_{s\in S}a_{ns}=x_n}$
	- local i.e. use 0 subcarrier → = 0
- computation task $I_n=\{\alpha_n,\beta_n\}$
	- $\alpha_n$ = data size of $I_n$
	- $\beta_n$ = required CPU cycles to finish $I_n$
#### local execution
- completion time $T^l_n=\dfrac{\beta_n}{f^l_n}$ = execution time
	- $f^l_n$ = UE n's local computing capability
- energy consumption $E^l_n=\kappa\beta_n(f^l_n)^2$
	- $\kappa_n$ = constant factor dependent on hardware architecture
- computation overhead $Z^l_n=\lambda^t_nT^l_n+\lambda^e_nE^l_n$
	- $\lambda^t_n,\lambda^e_n$ = weighted parameters, decided by UE's offloading decision
		- e.g. latency-sensitive → set $\lambda^t_n$ higher
#### full offloading
- completion time = uplink transmission time + execution time<br>$T^r_n=\dfrac{\alpha_n}{R_n}+\dfrac{\beta_n}{f^l_n}$ 
	- $f_n$ = remote computing resourcess
		- MEC give each UE a fixed amount of $f_n$
- total energy consumption = task offloading + remote computing + result downloading
- UE's energy consumption = task offloading<br>$E^r_n=\dfrac{p_n}{\varsigma_n}T^t_n=\dfrac{p_n}{\varsigma_n}\dfrac{\alpha_n}{R_n}$ ==(???)==
	- $\varsigma_n$ = UE power amplifier efficiency
- computation overhead $Z^r_n=\lambda^t_nT^r_n+\lambda^e_nE^r_n$

### problem formulation