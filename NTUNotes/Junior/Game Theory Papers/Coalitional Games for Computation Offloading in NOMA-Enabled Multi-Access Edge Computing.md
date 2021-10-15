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