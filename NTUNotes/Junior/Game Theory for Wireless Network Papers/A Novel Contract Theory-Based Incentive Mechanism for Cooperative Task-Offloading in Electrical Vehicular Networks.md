---
tags: GT_Papers
---
[[Game Theory]] 
[[Game Theory Papers]]
# A Novel Contract Theory-Based Incentive Mechanism for Cooperative Task-Offloading in Electrical Vehicular Networks

2021.10.15 Game Theory Study Group  Presentation: Contract Theory

- https://ieeexplore.ieee.org/document/9440722
- 電動車電量問題
- 資源不夠 → task offloading
	- cloud computing
		- 傳到 data center
		- 不符電動車 bc latency (long distance)
	- edge computing
		- off-peak hours 浪費
	- v2v
		- vehicle-to-vehicle
		- this paper

## system model
- RSU
	- road-side unit
	- contract designer
- SE
	- source EV
- DE
	- destination EV
- offloading stages
	- uplink
		- SE send to DE
	- execution
		- do the tasks
	- downlink
		- DE send back to SE
- information asymmetry
	- future relative acceleration
	- DE's capacity
- DE's type
	- computation resource depends on relative acceleration

## contract
- feasibility condition
	- [[individual rationality]]
	- [[incentive compatibility]]
	- 用 lagrange multiplier 解

## results
- 有 truth-telling 的 incentive
	- reveal 自己的 type 的 utility 最高
- complete information
	- RSU utility max
	- social welfare max
	- DE 被壓榨

## my 疑惑
- RSU utility 哪來的
- 相對加速度是...?
- RSU 是要另外建設?