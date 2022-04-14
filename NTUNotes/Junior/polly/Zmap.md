
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
			- solved with immediate retries (????)
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
- significance difference between Censys, US64 & other academic scanners
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
			- Australia & Japanhave have x2

### Censys