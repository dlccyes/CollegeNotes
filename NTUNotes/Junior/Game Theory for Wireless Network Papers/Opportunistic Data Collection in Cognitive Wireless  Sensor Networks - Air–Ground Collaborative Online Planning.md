# Opportunistic Data Collection in Cognitive Wireless Sensor Networks: Air–Ground Collaborative Online Planning
https://ieeexplore.ieee.org/document/9103004

## intro
- UAV: unmanned aerial vehicle
- WSN: wireless sensor networks
	- deployed in remote areas for collecting data
- LoS: Line-of-Sight

- past papers
	- made some not-always-true assumptions
		- dedicated UAV development
			- UAVs are designed to collect data from WSNs to data centers
			- optimally traverse all devices
			- requires continuous dispatch of these specific UAVs
		- data requirement already known
			- so it won't work well in dynamic or unknown networks
		- passive ground networks
			- UAVs solve problems themselves, sensors just wait there and upload data when needed
				- UAVs prevent transmission conflict with changing path & collecting data in sequence
### contribution of this paper
- studies the contrary of above assumptions
	- oppurtunistic UAV data collection
		- UAVs aren't specified to collect data, just that if they happen to pass by ground sensors, they can collect data
			- during main task or when returning to base
			- UAVs' main tasks may be patrol and surveillance
		- don't need additional UAV placement to collect data from ground sensors
	- unknown characteristic of WSN
	- limited coverage ability of UAV
		- because those UAVs' main task aren't collecting data, so the flight path & coverage won't be optimal for collecting data
- propose a distributed coalition formation algorithm
	- coalition game for ground sensors clustering
		- ground sensors form clusters → improve data upload efficiency of the whole WSN
		- equilibrium based on Pareto criterion
	- data upload protocol
		- prevent transmission collision
	- flight adjustment for UAV with different detection capabilities
	- can converge


## system model
