---
layout: meth
parent: Game Theory for Wireless Networks
---
# Quality and Profit Assured Trusted Cloud Federation Formation: Game Theory Based Approach
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

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