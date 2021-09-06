---
tags:
  - GT_Papers
date updated: '2021-09-06T00:51:13+08:00'

---

[[Game Theory]]
[[Game Theory Papers]]

# Auction Design and Analysis for SDN-Based Traffic Offloading in Hybrid Satellite-Terrestrial Networks (H-STN)

## intro
![](https://i.imgur.com/MX5vvzM.png)
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

