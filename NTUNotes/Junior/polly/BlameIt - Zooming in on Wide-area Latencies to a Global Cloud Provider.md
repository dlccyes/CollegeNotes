---
layout: meth
parent: polly
---
# BlameIt - Zooming in on Wide-area Latencies to a Global Cloud Provider
{: .no_toc }

<details open markdown="block">
  <summary>
	Outline
  </summary>
- TOC
{:toc}
</details>

[paper pdf link](https://www.dropbox.com/s/ua0x7krj5tuirrk/2-blameit-sigcomm19.pdf)  
[paper pdf with my annotations](BlameIt%20-%20Zooming%20in%20on%20Wide-area%20Latencies%20to%20a%20Global%20Cloud%20Provider.pdf)

## Intro
### abstract
- design BlameIt
- deployed to Azure's production
- localize the cause of instances with latency degration
- to localize
	- use passive diagnosis
		- existing connections between clients & cloud
	- use selective active probing
		- much less active probes used than solution with active probing
- 100% accuracy
	- correctly localized all incidents

### background
- global cloud services
	- inter-data center & intra-data center
		- under single administrative domain -> easier to inspect and control -> rapid improvement
	- public Internet
		- cloud to client communication
		- spans across a administrative domains -> harder to inspect the network -> hard to improve
		- the focus of the paper
- focus on Azure
- measure of latency`
	- RTT of TCP connection setup
- distribution of instances with big latency
	- long-tailed
		- most are temporary
	- affected clients only in small number of IP prefixes

### fault localization
- find the AS causing big latency
- current method
	- randomly select some incidents from the pervious day
- existing solutions
	- ![](https://i.imgur.com/gk1UQ8z.png)
	- passive
		- analyze end-to-end RTT
		- insufficient coverage
	- active
		- probing
		- big overhead
	- passive + active
		- poor optimization
		- many wasted/uneffected probes
- BlameIt
	- 2 phases
	- passive phase
		- for initial fault localization
		- RTT data from existing TCP connections
		- hierarchical examination order: cloud -> middle segment -> client
			- empirical traits
				- normally only 1 faulty AS
				- cloud os more likely to be at fault than client AS'es
	- active phase
		- for more accurate fault localization
		- locating middle segment
			- BGP path
			- AS'es at the middle
		- traceroute for IP's with ongoing latency issues compared to traceroute for normal ones
		- pririotize those with expected bigger negative impact
			- using historical data
			- last longer
			- impact more people
		- tradeoff, sacrificing a bit accuracy for lower overhead

## latency characterization
- quadret
	- client IP/24
	- cloud location
	- mobile device or not
	- 5 minute time bucket
- use quadret to bundle clients with similar traits together
- average RTT of the quadret below threshold -> bad
	- at least 10 RTT

### distribution of bad quadrets
- spatial distribution
	- widely spread
	- in all region
	- USA has the most bad quadrets
		- stricter threshold
	- ![](https://i.imgur.com/w7xmq0X.png)
- temporal distribution
	- more bad quadrets ar night
		- use home ISPs when not working
			- home ISPs weaker than enterprise ones
	- ![](https://i.imgur.com/6dx9LtV.png)
