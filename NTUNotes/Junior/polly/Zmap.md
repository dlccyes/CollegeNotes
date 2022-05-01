
---
layout: meth
parent: polly
---
# ZMap - On the Origin of Scanning: The Impact of Location on Internet-Wide Scans
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

[pdf link](https://www.dropbox.com/s/17nvnsawlcq18hq/6-zmap-imc20.pdf)  
[pdf with my annotations](ZMap.pdf)

## Intro
### fast ipv4 scannings
- standard measurement technique
- tools
	- Zmap
	- Masscan
- lack analysis about its accuracy & completeness

### abstract
- goal
	- quantify coverage with single probe ipv4 scans
	- investigate how the scanning method affects results
- method
	- synchronized HTTP, HTTPS, SSH with ZMap+ZGrab scans
	- from 7 networks
- results & analysis
	- miss rate
		- HTTP 1.6-8.4%
		- HTTPS 1.5-4.6%
		- SSH 8.3-18.2%
	- most HTTP(S) loss are transient (short-lived)
		- hard to predict
		- not due to random packet drop
		- solution
			- scanning from 2-3 diverse vantage points
				- -> 98-99% coverage
			- scanning with multiple probes with delay
			- perform multiple independent scans
	- regional policies skew analyses of some countries
		- ISPs in some countries block individual scanners -> HTTP(S) miss rate of Censys >> that of academic origins
			- 2-13 times larger
		- some American company networks block access from Brazil
	- high miss rate of SSH
		- several large providers (like Alibaba) blocks SSH scanners
		- openSSH servers drop sessions after multiple unauthenticated connections
			- solved with immediate retries
	- global coverage lower than estimated

## Methodology
- 9 synchronized scans
- scan full IPv4 address space
- HTTP, HTTPS, SSH with ZMap+ZGrab scans
	- ZMap TCP SYN scan
		- 2 back-to-back SYN packets to each IP
		- estimate to cover 98.8%
	- use ZGrab to complete application layer handshake with those responded with SYN-ACK packet
	- HTTP `Get /` on TCP/80
	- TLS handshake on TCP/443
	- partial SSH handshake on SSH
		- terminate after exchanging protocol version
- from 7 networks
	- 5 geographically & topologically diverse academic networks
		- 5 universities from Australia, Brazil, Germany, Japan, USA
	- Censys & Carinet
		- cloud provider
	- all continents except Africa & Antartica
- prior to full scan
	- sent ZMap scans on 1% IPs
	- ensure compatibility & performance 
- full scan
	- 3 trials
	- 2019 Oct., Nov., Dec.
	- 21hr each trial
	- observations
		- connection timeout > normal handshake time -> scanners with more timeout fall behind others

### limitations
- only include those completing L7 handshake to the analysis
	- avoid impact from various restrictions
		- firewalls, middleboxes, DDoS protections
- can only detect accessible IPs
- can only assume the cause of inaccessible hosts
- temporal noise
	- only 3 trials, within 8 weeks
- bias of scanning from academic networks

### minimizing negative externality
- scan from single origin on each continent
- only focus on 3 protocols
- use commonly used scanning tools
- scanner follows scanner specifications
- close connections once a handshake is completed
- limit scanning speed
- spread experiment across 8 weeks
- exclude requested IPs
	- 0.5% of public IPv4
	- from 9 organizations
- post data used to public repo
	- `Scans.io` Internet-Wide Scan Data Repository

## Result Summary
- significant difference between Censys, US64 & other academic scanners
	- -> many reasons beyond random packet loss
	- use multiple paired test
		- Cochran's Q test produces statistcally significant results in a single origin
			- while we want to see between different origins
	- ![](https://i.imgur.com/iKmDzVq.png)
- classified into networks (/24) & individual IPs
- accessiblity classification
	- accessible
	- transiently inaccessible
		- definition 
			- inaccessible from the origin but (is either)
				- accessible from a different origin in the same trial
				- accessible from the same origin in another trial
		- causes
			- packet loss
			- temporary routing issues
			- real-time scan blocking
			- other transient outages
		- stat
			- half of inaccessible hosts
				- 51.6%
			- most are individual hosts
				- 49.7% of inaccessible hosts are individual
				- 1.9% of inaccessible hosts are networks
			- ![](https://i.imgur.com/qW5yrdN.png)
	- long-term inaccessible
		- definition
			- inaccessible from a scan origin in all 3 trials
		- causes
			- firewall
			- other filter
		- stat
			- 1/3 of inaccessible hosts
	- unknown
		- definition
			- hosts present only in 1 trial

## Long-Term Inaccessibility
- significant difference between different origins is form long-term inaccessible hosts
	- protocols
		- 6.8% HTTP
		- 4.1% HTTPS
		- 16% SSH
	- origins
		- Censys has x5 long-term inaccessible rate for HTTPS
		- origins that haven's conducted scans before have x2 
			- Brazil & Japan
			- compared to those that does frequent scans
		- 47% of long-term inaccessible hosts are only inaccessible from 1 origin
			- excluding Censys
			- significant differences between origins
				- Germany has x3
			- ![](https://i.imgur.com/Di330gM.png)
		- 5-10% hosts are accessible only from 1 origin
			- Australia & Japan have have x2
- ![](https://i.imgur.com/enQwOBc.png)

### Censys
- most long-term inaccessible ones are from Censys
	- 83% HTTP
	- 69% HTTPS
	- 37% SSH
- only origin with missing IPs primarily in fully-inaccessible network
- most long-term inaccessible hosts are from 3 ASes 
	- 67% of HTTP
	- 38% of HTTPS
- cause
	- Censys does very frequent scans, so many networks block it
- blocked network
	- 40% government network
	- 22% consumer businesses

### Academic Origins
- ![](https://i.imgur.com/gsC45tw.png)
- long-term inaccessible hosts more evenly distributed among As'es than in Censys
- Germany
	- x1.1-x3.6 HTTP(S) miss rate
	- 40% exclusively inaccessible in Germany
	- over 40% packet loss rate
	- cause
		- Germany lacks connectivity to those networks
- Brazil & Japan
	- long-term inaccessible to more hosts than US1 & Australia
		- despite Brazil & Japan haven't conduct scan before 
	- 70% of hosts from the long-term inaccessible networks for both Brazil & Japan are from Eastern Europe
		- unclear why they're blocked
	- Brazil has the most long-term inaccessible As'es
	- networks that only block Brazil
		- half from American health or financial sectors
			- possible cause
				- many Mirai infection (a virus) in Brazil
- 14% networks blocking all non-US origins are from Tegna (US digital media company)
- ABCDE (large HK cloud provider) blocks US, Brazil & Censys
- US64
	- ![](https://i.imgur.com/oGu2K0p.png)
	- the most exclusively accessible hosts i.e. lowest num of long-term inaccessible hosts
		- many networks block all non-US origins
		- has low scan rate
			- some networks dynamically detect and block all non-US origins with high scan rates
- ![](https://i.imgur.com/5Vq02Dn.png)

### Geographical Biases
- countries with the most hosts have the most inaccessible hosts
- countries with few hosts are greatly
- largely inaccessible countries are mostly due to few major As'es
- ![](https://i.imgur.com/Ct3UV11.png)
- origins have better access to hosts from their own countries
	- ![](https://i.imgur.com/xqyRn4e.png)
	- ![](https://i.imgur.com/32M0qYA.png)
	- only half of the host exclusively accessible to Australia geolocate there
		- because of anycast
- no correlation between countries
	- e.g. Japan doesn't see more hosts from Asia than other countries
- exclusive accessibility isn't significant in global scale
	- only 0.17% of hosts are exclusive accessible to single origin
	- tho 20% of long-term inaccessible hosts are exclusively accessible to single origin
- 1/3 of inaccessible hosts are long-term inaccessible
	- many from Censys

## Transient Inaccessibility
- majority of inaccessibility is transient
- big variance in transient loss
- 2/3 of transiently inaccessible HTTP(S) hosts are only inaccessible by from one origin
- 25% of transiently inaccessible hosts are from largest 200 networks
- ![](https://i.imgur.com/5k8nyUV.png)
- 96% of transient loss is from individual host, rather than entire network
- Chinese networks have high transient loss
	- but doesn't affect Japan
- transient loss is highly variable, no origin is consistently the best or the worst
	- but each origin has some distinct characteristics of the transient loss
	- 10% of AS'es have consistent worst origin
		- 72% of those As'es have Australia as the worst origin
			- possible cause
				- consistently congested path between Australia and those networks
					- unable to pinpoint the path

### Packet Loss
- can't know if inaccessibility is from unresponsive hosts or dropped packet
- to estimate random packet drop
	- num of hosts receiving 1 probe vs. 2 probes
		- avoid effects from middleboxes & those not following TCP protocol
			- exclude RST packets, duplicate responses, not completing L7 handshakes
				- RST = reset = indicate it won't receive any more packet
		- exclude cases with both probes lost
			- can't know if they're due to packet drop
		- only lower bound of packet drop
- packet drop rate 0.44%-1.6%
	- highest for Australia
		- worst connectivity
	- ![](https://i.imgur.com/Ah923SP.png)
- no statistically significance relationship between packet loss & transient loss for origins
	- only have the lower bound estimate on packet drop rates
	- can't give accurate estimation on fraction of transiently inaccessible hosts caused by packet drop

### localized temporary outages
- to identify burst outage
	- look for noise 2 std away from average noise
- to extract noise
	- subtract smoothed time series
		- from rolling window
			- to minimize average MSE
- 14-36% transient loss happens during a burst outage
- no consistent origin with biggest or smalles fraction of transient losses from burst outage
- Australia has the most burst outage
	- 30-40% burst origin from Australia
- no temporal pattern during a dayusing
	- e.g. no significant difference between day and night

## SSH
- different to HTTP & HTTPS, which have similar behavior
	- cause: security protections
- 10% less coverage than HTTP(S)
- x5 miss rate
- less likely to be missed by single origin
	- ![](https://i.imgur.com/47ZaAdE.png)
- big proportion blocked by Alibaba
	- each Alibaba SSH hosts send RST packet immediate after completing TCP handshake
- SSH hosts more likely to directly reject connection requests than HTTP(S)
	- RST or FIN-ACK packet
	- not consistently
- solution of high miss rate
	- retrying SSH handshake
		- x8 success rate
		- num of consecutive SSH handshakes increases -> success rate increases
			- capped by max num of unauthenticated connections
		- scan from multiple origins -> num of unauthenticated connections increases -> more likely to be rejected
- probabilistic blocking hosts
	- hosts rejecting handshake with one origin but not with another origin
	- 32-63% of missed SSH hosts
	- 30% is long-term inaccessible
		- are only long-term inaccessible by chance
- not counting Alibaba's blocking & probabilistic blocking, SSH miss rate is lower than HTTP & HTTPS
- breakdown of missing reasons
	- ![](https://i.imgur.com/qGVRCsQ.png)

## Discussion
- miss rate higher than expected
	- not purely due to random packet drop
- mult-origin scanning helps
	- transient misses are unpredictable but can be improved witg scanning from multiple origins
	- ![](https://i.imgur.com/JPQ3NQE.png)
- hard to say which is the best origin
- scanning from different geographical area matters
	- perform 3 scans from 3 tier-1 ISPs in same location
	- has worse coverage than scanning from 3 geographically distributed area
- sending more probes achieves higher coverage
	- but less significant than sending from more origins
	- sending consecutive probes with delay is more meaningful
	- ![](https://i.imgur.com/WL0QnNH.png)
- blocking more severe than expected
- regional biases existed
	- some websites are only accessible from 1 country
		- not significant at global scale
	- may be more severe at countries with seperate Internet infrastructure
		- e.g. China & Russia

## polly's comments
- actual coverage for HTTP(S) vs.SSH
- those with HTTP port tends to have SSH port also
- those with only SSH port probably have firewall on