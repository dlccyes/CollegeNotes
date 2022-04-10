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

## Latency Characterization & Distribution
- quadret
	- client IP/24
	- cloud location
	- mobile device or not
	- 5 minute time bucket
- use quadret to bundle clients with similar traits together
- average RTT of the quadret below threshold -> bad
	- at least 10 RTT

### spatial distribution
- widely spread
- in all region
- USA has the most bad quadrets
	- stricter threshold
- ![](https://i.imgur.com/w7xmq0X.png)

### temporal distribution
- more bad quadrets ar night
	- use home ISPs when not working
		- home ISPs weaker than enterprise ones
	- not that significant during weekends
- ![](https://i.imgur.com/6dx9LtV.png)

### badness duration distribution
- long-tailed
- ![](https://i.imgur.com/vgURvKA.png)
- 60% < 5 min.
- 8% > 2 hr
- most latency issues are temporary
- BlameIt targets at long-lived issues

### impact distribution
- impact = num of affected users x duration of badness
- ![](https://i.imgur.com/FTFPtIQ.png)
- CDF of problem impact vs. portion of `<cloud location, BGP path>` tuples, ranked by num of affected IP prefixes or impact
	- ![](https://i.imgur.com/zQMMkbI.png)
	- 20% of tuples can cover 80% problem impact when ranked by impact
	- 20% of tuples can cover 60% problem impact when ranked by num of affected IP prefixes
	- meaning, impact isn't evenly distributed among IP prefixes, but skewed toward a small fraction
- using num of **affected clients x badness duration** to meaure impact is more efficient

## Overview
- modeling path between cloud & client (at AS-level)
	- traditional approaches
		- coverage of measurements are skewed
		- ambiguities
			- large AS -> problem in certain path but not all
- find fault in AS -> deploy people to investigate

### 2-level blame assignment
- coarse-grained
	- model path into 3 segments
		- client
		- cloud
		- middle
	- use passive data
	- can find the exact path (3 points -> a line) -> no ambiguity problem
- fine-grained
	- view middle segment
	- use active probe (traceroute)
	- limited budget -> prioritizing
		- allocate budget for probes for middle segment based on expected impact
		- number of clients affected
			- large IP address blocks have less active clients in Azure -> measure impact by num of IP addresses affected is meaninglesss
		- timespane
			- find out the long-lived ones
			- long-tailed distribution -> no need to be very precise

### end-to-end workflow
1. RTT data passively collected from all cloud instances
2. send to a central data analytics cluster
3. periodically do coarse-grained blame assignment on bad ones
4. order middle segment latency issues by impact
5. issue active probes for fine-grained blame
6. send top few bad issues to network admin for manual investigation

## Passive Measurements
lack some topological properties -> cannot use standard network tomography techniques to solve

### empirical insights
- most of the time, only one of cloud, middle segments, client segments is at fault
	- 93% of the time there's one contributing >80% of RTT
- most of the time, the fault is on the smaller possible set
	- over 98% of the case

### coarse-grained fault localization algo
characterize quadret to cloud, middle or client segment

![](https://i.imgur.com/IVmByKB.png)

- too few RTT samples -> insufficient
- fraction of bad quadrets associating with cloud > threshold -> cloud's fault
	- fraction not calculated from num of bad RTT samples
		- or would be affected by those with large num of RTT samples
	- also take typical (expected) RTT value into account
	- using empirical insight 2
	- threshold = 0.8
		- works well in real life
- (else if) fraction of quadrets with same BGP-path (i.e. same set of AS'es) > threashold -> middle segment's fault
	- also take typical (expected) RTT value into account
	- grouping with client AS & metro area is too coarse-grained
		- only 47% with same <AS, Metro> has a single consistent path from cloud to client within 5 minutes
	-  grouping by same AS'es instead of cloud to client prefix provides more RTT samples -> higher confidence
		- ![](https://i.imgur.com/2e1yYP3.png)
- else if client has good RTT to another cloud location -> ambiguous
- else -> blame the client

### expected RTT
- identify RTT inflation by comparing to historical value
- using expected RTT to calculate bad fraction is more accurate
- expected RTT = median RTT for last 14 days
- 80% of RTT > median RTT for last 14 days -> blame cloud
	- distribution shifts 30%
- works well in practice

## Active Probes
- blaming middle segment doesn't tell you which AS is at fault

### selective active probing
- if use active measurements
	- need continuous traceroutes to compare before & after of issues
		- too much overhead, not feasible
- only use traceroute from cloud to client for now
	- routing assymetry
		- cloud-to-client & client-to-cloud paths may be different
	- can also add reversed ones

### fine-grained localization