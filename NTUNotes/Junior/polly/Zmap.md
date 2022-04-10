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
- fast ipv4 scannings
	- standard measuement technique
	- tools
		- Zmap
		- Masscan
	- lack analysis about its accuracy & completeness
- this paper
	- goal
		- quantify coverage with single probe ipv4 scans
		- investigate how the scanning method affects results
	- method
		- syncrhonized HTTP, HTTPS, SSH ZMap+ZGrab scans
		- from 7 networks
			- 5 geographically & topologically diverse academic networks
				- Australia, Brazil, Germany, Japan, USA
			- Censys & Carinet
				- cloud provider
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