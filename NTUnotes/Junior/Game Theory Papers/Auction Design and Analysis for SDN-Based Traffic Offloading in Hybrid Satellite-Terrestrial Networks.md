---
tags:
  - GT_Papers
date updated: '2021-09-06T00:51:13+08:00'

---

[[Game Theory]]
[[Game Theory Papers]]

# Auction Design and Analysis for SDN-Based Traffic Offloading in Hybrid Satellite-Terrestrial Networks (H-STN)

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

[28] STIN overview 可參考