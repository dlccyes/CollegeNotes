---
aliases: [電網導]
---
# Computer Networking
- connections
	- link, node, cloud
	- direct link
		- LAN, local area network
		- types
			- point to point
				- simple
				- bad scalability
			- multiple access
				- MAC, multiple access control
	- indirect link
		- circuit switching
		- packet switching

## Ch1 Computer Network and the Internet
### The Network Edge
- end system = host
	- client
	- server
- CO = central office
-  transmission
	-  simplex
		-  one direction
		-  like webinar
	-  half duplex
		-  one direction at a time
		-  like 對講機
	-  full duplex
		-  both direction at the same time
		-  like 電話
#### access networks
##### residential access networks
###### DSL, digital subscriber line
- ![](https://i.imgur.com/wuohUfP.png)
- ![](https://i.imgur.com/ChQ16fd.png)
- xDSL, x=A, S, H, V etc.
- point to point
- share DSL link with telephone signals at the same time through FDM
	- high-speed downstream
		- 50kHz-1MHz
	- medium-speed upstream
		- 4kHz-50kHz
	- ordinary two-way telephone
		- 0-4kHz
	- downstream upstream speed different → asymmetric
	- use telco's existing local telephone infrastructure
- DSLAM, digital subscriber line access multiplexer
	- CO side
	- AD convert
	- separate the data & telephone signals
	- send the data to DSL modem
- splitter
	- customer side
	- separate the data & telephone signals
	- send the data to the Internet
- for short distance
	- 5-10 miles
###### HFC, hybrid fiber coax
- ![](https://i.imgur.com/DOj2gaR.png)
- ![](https://i.imgur.com/fSAP7MK.png)
- use cable TV's existing infrastructure
- use fiber optics to reach neighborhood-level junctions
- use coaxial cable to reach individual houses
- cable modem
	- connect to home PC through Ethernet port
- CMTS, cable modem termination system
	- like DSLAM
	- AD convert
- FDM
	- asymmetric
		- downstream > upstream
- shared broadcast medium
	- 樹狀
-  download 是 broadcast，upload 是 multiple-access
###### FTTH/FTTC/FTTB
- ![](https://i.imgur.com/t5bAxxO.png)
- 用光纖
- FTTH, fiber to the home
	- fiber 直接到你家
- FTTB, fiber to the curb
	- fiber 到你家附近，再透過電話線之類的連到你家
- AON, active optical network
	- switched Ethernet
- PON, passive optical network
	- each home has ONT
	- splitter 
		- connect many homes to one optical fiber, connect to telco's CO's OLT
		- all packets sent from OLT are replicated in the splitter
	- OLT, optical line terminator
		- optical & electrical signals conversion
		- connect to the Internet via a telco router
	- ONT, optical network termination
		- home user connects a home router to ONT, and access the Internet via the home router
- ![](https://i.imgur.com/bHhX2An.png)
###### satellite link
- Starband, HughesNet
##### company access networks
- LAN, local access networks
- connect end system to edge router
- Ethernet
	- ![](https://i.imgur.com/pRsNJ9k.png)
	- twisted-pair copper wire
	- connect to an Ethernet switch
- Wireless LAN
	- IEEE 802.11a/b/g (WiFi)
		- Ethernet wireless version
	- user exchange packets with an access point connected into enterprise's network through wired Ethernet
- ![](https://i.imgur.com/gGYmjUr.png)
##### mobile access networks
- wide-area wireless access
	- kms
- same wireless infrastructure as cellular telephony
- cellular system
	- xG
		- 每十年一個 generation
	- LTE, long-term evolution
- wireless local loop (?)
####  physical media
#####  guided media
-  solid medium, physically wired
-  installation cost >> material cost
-  twisted-pair copper wire
	-  simple, low cost, low bit rate, short range
	-  telephone networks, LANs, residential Internet access
	-  兩根纏在一起
	-  纏愈密愈好
		-  ![](https://i.imgur.com/JEWBAVi.png)
	-  接頭：RH-45 (網路孔)
	-  UTP, unshielded twisted pair
		-  LANs
-  coaxial cable
	-  ![](https://i.imgur.com/f9XhWMj.png)
	-  copper
	-  cable TV
-  fiber optics 光纖
	-  ![](https://i.imgur.com/d9bhTIm.png)
	-  conduct pulses of light
		-  1 pulse = 1 bit
	-  very high bit rates
	-  immune to electromagnetic interference 
	-  secure
		-  很難被偷接
	-  smaller, lighter
		-  直徑小 → 全反射幾乎直線
	-  low signal attenuation, great capacities
		- 全反射
		- used in long distance links
	-  high cost
		-  optical devices
#####  unguided media
-  in atmosphere & outer space, with antenna
-  download 是 broadcast，upload 是 multiple-access
######  terrestrial radio channels
-  via electromagnetic spectrum
-  penetrate walls, long distance
-  greatly dependent on environment & distance
-  by operating area
	-  very short distance
		-  personal devices
	-  local area
		-  wireless LAN
	-  wide area
		-  cellular access
######  satellite radio channels
-  ![](https://i.imgur.com/yUrgMsp.png)
-  link between ground stations
-  receive in one frequency, repeat the signal, transmit in another frequency
-  GEO, geostationary earth orbit 同步衛星
	-  3 顆就覆蓋全球
	-  永遠在地球一個點上面
	-  substantial propagation delay
		- 離地球表面太遠
-  LEO, low earth orbit 低軌道衛星
	-  會繞著地球轉
	-  may communicate with each other
	-  要很多顆
	-  Teledesic
		-  失敗
	-  SpaceX Starlink

### The Network Core
#### packet switching
- long messages → small packets → through communication links & packet switching
- middleman
	- routers
	- link-layer switches
- store-and-forward transmission
	- receive the entire packet → transmit
	- store/buffer the bits until the entire packet is recieved
	- forward/transmit the packet onto the outbound link
	- delay (see [[#delay loss throughput]])
		- a packet of $L$ bits (L=packet length)
		- transmission rate $R$ bits/s (R=link bandwidth)
			- can store & forward at the same time with the same rate
		- P packets, 1 router
			- $delay=(P+1)\dfrac{L}{R}$
		- 1 packet, N links, N-1 routers
			- $delay=N\dfrac{L}{R}$ 
- queuing delays
	- want to transmit but the outbound link is busy (congestion) → wait in output buffer/queue
	- packet arrives to full buffer → packet loss
		- arriving packet or queued packets will be dropped
- forwarding
	- packet's header has target IP
	- forward table
		- map destination addresses to outbound links
		- set with routing protocols
- scheduling
	- FIFO queue, first in first out
		- simple but limited
	- round robin

#### circuit switching
- resources reserved
	- in contrast with the queuing method in [[#packet switching]]
		- transmission not guaranteed to succeed
	- like reserving a seat
	- want to communicate → network establish end-to-end connection
- multiplexing
	- FDM, frequency-division multiple
		- 1 frequency band for each connection
		- each circuit get a fraction of the bandwidth continuously
	- TDM, time-division multiplexing
		- 1 time slot for each connection
		- each circuit get all of the bandwidth periodically
	- ![](https://i.imgur.com/26a2asD.png)
	- statistical multiplexing
		- use statistical laws

#### packet switching vs. circuit switching
- trend: packet switching
- packet switching
	- pros
		- better sharing of transmission capacity
		- simpler
		- more efficient
			- in idle 狀況很多的 case
			- allocates link on-demand
		- less costly
	- cons
		- not suitable for real-time services
			- variable & unpredictable end-to-end delays
				- queuing delays
- circuit switching
	- cons
		- circuit is idle during silent periods → waste
			- 佔用資源但暫時不 transmit data
			- many allocated but unneeded link time
		- complicated
			- establish end-to-end circuits
			- reserve end-to-end transmission capacity
			- coordinate the operation of the switches along the end-to-end path

#### a network of networks
- interconnect access ISPs s.t. all end systems can send packets to each other
- structures
	- Network Structure 1
		- 1 global transit ISP, connect all access ISPs
	- Network Structure 2
		- multiple global transit ISPs, connect all access ISPs
	-  Network Structure 3
		- tier-1 ISPs
			- e.g. AT&T
			- pay no one
			- not 100% global
			- 台灣沒有
		-  regional ISPs
			-  pay tier-1 ISP
			-  some has hierarchical regional ISPs
				-  e.g. China
		-  access ISPs
			-  pay regional ISP
	-  Network Structure 4
		-  mult-tier hierarchy (based on Network Stucture 3)
		-  PoPs, points of presence
			-  interface in provider's network for customer's network to connect into
			-  consist of routers
			-  exist everywhere except the bottom level
			-  e.g.  台大、科技大樓、交大
		-  multi-home
			-  connect to more than 1 higher level ISPs
				-  e.g. an access ISP multi-home with 2 regional & 1 tier-1 ISPs
			-  will survive when 1 provider dies
		-  peer
			-  2 nearby same-level ISPs connect directly to send data, instead of paying provider ISP
			-  settlement free i.e. none pays
			-  tier-1 ISPs peer
		-  IXP, Internet Exchange Point
			-  third-party company
			-  provide a meeting point for multiple ISPs to peer
			-  standalone building with its own switches
	-  Network Structure 5
		-  based on Network Structure 4
		-  content-provider networks
			-  e.g. Google, Amazon, Netflix
			-  data centers are interconnected privately, separated from the public Internet
			-  peer with lower-tier ISPs
				-  directly or through IXP
				-  settlement free → reduce payment to upper-tier ISPs
			-  connect to tier-1 ISPs
				-  pay
		- ![](https://i.imgur.com/GEm9pHI.png)


### Delay, Loss & Throughput
#### reliability
- 原汁原味
	- error-free
		- 測不出 error
	- in-sequence
		- 原有順序
	- no duplication
	- no loss
- failure
	- bit level
		- wired $10^{-12}$
		- wireless $10^{-5}$
	- packet level
	- node/link level
		- power off
		- 系統問題
		- virus
#### QoS, quality of service
- error rate
- delay
	- delay jitter
		- variance of delay
		- 不同 packet 間 delay 的差異
- throughput
	- data transfer rate between sender & receiver
	- instantaneous rate
		- client 端看到的 bits/sec
	- average rate
	- determined by the min rate link
		- 有 common link → 大家平分
		- ![](https://i.imgur.com/ohQCSVt.png)
			- $min(R/10,R_1,R_2,....,R_{10})$  
#### delay/latency
- one-way delay
- RTT, round trip time
	- 送出 to 收到回覆 (ack)
- one-hop delay / total nodal delay
	- the delay at a single router
	- $d_{nodal} = d_{proc}+d_{queue}+d_{trans}+d_{prop}$
	- transmit in → process → queue → transmit out → propagate
		- ![](https://i.imgur.com/dBUCcIo.png)
	- processing delay
		- examine packet's header and determine which link to direct to
		- check for bit-level errors in the packet
		- often negligible in total nodal delay
		- influence a router's max throughput
	- queuing delay
		- traffic intensity = La/R
			- a packets per second
			- \> 1 → queue increases → average queuing delay approaches $\infty$
		- 1 packet every L/R → no delay
		- N packets every NL/R → significant delay
		- ![](https://i.imgur.com/Ba1ETtF.png)
		- packet arrives at full queue → packet poss
	- transmission delay / store-and-forward delay
		- L = packet length (bits)
		- R = link bandwidth (bps)
		- $d_{trans}=\frac{L}{R}$
	- propagation delay
		- 從 link 頭跑到 link 尾的時間
		- d = link.length()
		- s = propagation speed ~ $2\times 10^8m/s$
			- 介質光速
		- $d_{prop}=\frac{d}{s}$
- end-to-end delay
	- total delay from source to destination
	- $d_{end-end}=N(d_{proc}+d_{trans}+d_{prop})$
- message segmenting
	- ![](https://i.imgur.com/UQu1tA2.png)
		- 1 packet 1ms, 接收完就送出，一邊接收下一個
		- take 1ms x 5001

### Protocol Layers
- layered architecture
	- ![](https://i.imgur.com/50Knl9b.png)
		- 同一層互相溝通
#### protocol layering
- ![](https://i.imgur.com/apS8Dld.png)
- ![](https://i.imgur.com/wEz7EST.png)
- 愈上層愈軟，愈下層愈硬
- ![](https://i.imgur.com/fVHIPOD.png)
- 5-layer model (the Internet)
	- application layer
		- e.g. HTTP(web documents), SMTP(emails), FTP(files), DNS
		- **message** - application-layer packet
		- exchange message with the application in another end system
	- transport layer (layer 4)
		- transport messages between application endpoints
		- 2 protocols in the Internet
			- TCP
				- connection-oriented
				- guaranteed delivery of messages
				- flow control (sender/receiver speed matching)
				- breaks long messages into shorter segments
				- congestion control
			- UDP
				- connectionless
				- no reliability
				- no flow control
				- no congestion crontrol
		- **segment** - transport-layer packet
	- network layer / IP layer (layer 3)
		-  **datagrams** -  network-layer packet
			-  或就叫 **packet**
		-  deliver the segment to destination's transport layer
		-  IP protocol
		-  routing protocols
			-  determine the route datagrams take between source & destination
		-  forwarding
	-  link layer (layer 2)
		-  move a packet from one node to another
		-  get datagrams from network layer,  deliver to next node, pass up to its network layer
			-  a datagram may be handled by different link-layer protocols at different link along the route
		-  e.g. Ethernet, WiFi, DOCSIS
		-  **frame** - link-layer packet
	-  physical layer (layer 1)
		-  move the individual bits in the frame from one node to another
		-  protocols depend on link & transmission medium of the link
- ISO OSI 7-layer model
	- ![](https://i.imgur.com/CSqX8ak.png)
	- 2 additional layers (也算 application layer)
		- presentation layer
			- provide services for communicating applications to interpret the meaning of data exchanged
				- data compression
				- data encryption
				- data description
					- resolve the different formats between different computers (???)
		- session layer
			- delimiting & sync of data exchange
			- build a checkpointing & recovery sheme
			- conference call
				- video+audio+text
	- data link layer
		- LLC, logical link control
		- MAC, media access control
- IETF TCP/IP protocol stack/suite
#### encapsulation
- PDU, packet data union
	- header + data/payload
	- ![](https://i.imgur.com/hqoyytD.png)
	- 加上 header 送到下一層
	- 除掉 header 送到上一層


### Network Security
the Internet was originally designed on the concept of 
> a group of mutually trusting users attached to a transparent netowrk

so there're many security problems now

#### malware
- self-replicating
	- 感染 host → 複製 → 透過該 host 感染其他 host
- virus
	- infect user's device through user interaction
- worm
	- infect user's device without explicit user interaction

#### DOS, denial-of-service attack
- make things unusable
- methods
	- vulnerability attack
		- send few well-crafted messages
	- bandwidth flooding
		- send a lot of packets → target's access link clogged → legitimate packets can't enter
		- DDOS, distributed DOS attack
			- use botnets (many controlled hosts) to send traffic to the target
			- don't need huge traffic for each source
			- harder to detect and defend against
			- ![](https://i.imgur.com/WoJYyXt.png)
	- connection flooding
		- establish a lot of half-open or fully open TCP connections at target → connection bogged → target stops accepting legitimate connections

#### packet sniffer
- a passive receiver copying every packet transmitted
	- wireless or wired environment
- passive, don't inject packets → hard to detect
- solution
	- cryptography (Ch8)

#### IP spoofing
- send packet with fake source address with malicious contents
- solution
	- end-point authentication (Ch8)
		- check if the source address is correct