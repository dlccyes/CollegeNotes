---
aliases: [電網導]
layout: meth
title: Computer Networks
has_children: true
---
# Computer Networks
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## course unrelated
- edit `/etc/hosts` to change/add the domain name mapping to 127.0.0.1
	- [ref](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-edit-the-Ubnutu-hosts-file-and-ping-a-domain-name-locally)

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
- <https://eng.libretexts.org/Bookshelves/Computer_Science/Networks/Book%3A_An_Introduction_to_Computer_Networks_(Dordal)/03%3A_Other_LANs/3.04%3A_Virtual_Circuits>
- e.g.
	- ![](https://i.imgur.com/b3TgdvZ.png)
		- C comes from port 2 in S1 → port 3 VCI 2 out → S2 get VCI 2 from port 1 → out port 3 VCI 2 → S3 get VCI 2 from port 1 → out port 3 → B
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
		- best-effort service
			- no guarantee
- circuit switching
	- pros
		- reliable transport
			- guaranteed delivery
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

##### 5-layer model (the Internet)
###### application layer
- e.g. HTTP(web documents), SMTP(emails), FTP(files), DNS
- **message** - application-layer packet
- exchange message with the application in another end system

###### transport layer
- layer 4
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

###### network layer 
- layer 3
- IP layer
-  **datagrams** -  network-layer packet
	-  或就叫 **packet**
-  deliver the segment to destination's transport layer
-  IP protocol
-  routing protocols
	-  determine the route datagrams take between source & destination
-  forwarding

######  link layer
- layer 2
-  move a packet from one node to another
-  get datagrams from network layer,  deliver to next node, pass up to its network layer
	-  a datagram may be handled by different link-layer protocols at different link along the route
-  e.g. Ethernet, WiFi, DOCSIS
-  **frame** - link-layer packet

######  physical layer 
- layer 1
- move the individual bits in the frame from one node to another
- protocols depend on link & transmission medium of the link

##### ISO OSI 7-layer model
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

### miscellaneous
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
- logical channel??
- telecom
	- ATM, Asynchronous Transfer Mode
	- from telephone
	- philosophy
		- 專制
		- 把一切規劃好
	- 輸了
- datacom
	- the Internet
	- philosophy
		- whatever
		- 海納百川

## Ch2 Application Layer
### principles
#### architectures
- client-server
	- single server
		- may be overwhelmed
	- data center
		- many hosts
	- client don't communicate with each other directly
- P2P
	- server
		- sender
		- wait to be contacted
	- client
		- initiator
		- receiver
	- self-scalability
	- decentralized → security, performance, reliability issues
	- e.g.
		- skype, bittorrent
- ![](https://i.imgur.com/UWe894G.png)
- hybrid
	- e.g. instant messaging apps
		- server to track user IPs
		- direct messages with P2P
#### process communicating
- processes in different hosts connect with each other across the computer network
- browser process initiates contact with web server
	- browser is the client
- socket
	- interface between [[#application layer]] & [[#transport layer]]
		- [[#transport-layer protocols]]
		- process 透過 socket 跟 transport layer 溝通
	- API between application & network
	- port number for identifying which process in the host to send to
		- 80 → web server
		- 25 → mail server
	- ![](https://i.imgur.com/llzwl5V.png)
#### transport-layer protocols
- possible qualities
	- data integrity
		- reliable data transfer
			- no data loss
			- no duplication
			- in sequence
		- some apps need guaranteed delivery
			- mail, file transfer
		- some is loss-tolerant
			- multimedia
	- throughput
		- some have throughput requirement (bandwidth-sensitive)
			- multimedia
		- some are elastic
	- timing
		- some need low delay
			- real-time apps
	- security
		- encryption, data integrity etc.
- differential coding
	- video 只要前後看起來差不多就可
	- 2 frames, 後者只要送跟前者不一樣的部分就好了
	- 隔幾個就取一次全 frame，以免掉一個全掛
- ![](https://i.imgur.com/i7O8XId.png)
- ![](https://i.imgur.com/wx0bRpv.png)
	- 講義：multimedia 可 UDP

##### TCP
- provide
	- connection-oriented
		- handshaking before communicating
			- exchange infos
		- full-duplex connection
	- reliable transport
		- [[#Automatic Repeat reQuest ARQ]]
			- 送一個拿到 ACK 才下一個 → reliable but slow 
	- congestion control
		- 讓 sender 送慢一點
		- give alternate route
		- congestion control solves congestion; admission control prevents congestion
	- flow control
		- receiver 不會被 overwhelmed
			- receiver 在控制
		- between a pair of sender & receiver
- does not provide
	- timing
	- min throughput guarantee
	- security
- TCP socket
	- header 很大 bc 提供很多功能
	- 3-way handshaking

##### UDP
- does not provide anything
- 適合要快不用準的
	- multimedia
	- Skype
- many firewalls block UDP

### video streaming
#### streaming types
##### HTTP streaming
- one version of video, stored in an URL
- TCP connection 
- client GET for the video URL
- server sends -> client collects bytes in buffer -> exceeds threashold -> playback
- app periodically get frame from buffer -> decompress -> display
- cons
	- only one version, clients with different bandwidths still use the same video

##### DASH streaming
- Dynamic Adaptive Streaming over HTTP
- many versions of videos
	- differnt bit rates i.e. different quality
	- stored in different URL
	- manifest file
		- URL for each version of video
		- client requests manifest file first
- client requests chunks of video segments, quality depends on current bandwidths
	- measures the received bandwidth and runs rate determination algorithm to select next chunk
- pros
	- allows client to freely switch between different quality levels of videos
		- important for mobile users

#### Content Distribution Networks (CDN)
- if use a single massive data center
	- more likely to have lower throughputs
		- end-to-end throughput depends on bottleneck link
		- client far from data center -> cross many communication links
	- a video may be sent many times over the same link
	- single point of failure
- Content Distribution Networks (CDN)
	- multiple geographically distributed servers
	- direct user to best CDN
	- types of CDN
		- private CDN
			- content provider's own CDN
		- third-party CDN
			- distributes content for multiple content providers
	- server placements philosophies
		- enter deep
			- get close to users
			- highly distributed
			- lower delay & higher throughput
			- hard to manage & maintain
		- bring home
			- a few large clusters
			- more centralized
			- higher delay & lower throughput
			- easier to manage & maintain
	- pull strategy
		- basically cache
		- get video and store a copy when requested
		- remove not frequently requested videos when storage full

#### CDN operation
##### intercept & redirect request
- suppose content provider NetCinema uses KingCDN to distributes its videos
	- ![](https://i.imgur.com/6V5Xfgk.png)
	1. user visit NetCinema.com
	2. user click video link, user host sends DNS query for NetCinema.com to LDNS
	3. LDNS passes DNS query to NetCinema authoritative DNS, which returns a hostname in KingCDN domain
	4. LDNS sends query for xxx.kingcdn to KingCDN DNS, which return the IP of King CDN content server
	5. LDNS passes IP to user host
	6. client establishes TCP connection with the IP and sends GET request

##### cluster selection strategy
- direct client to a server cluster or data center within CDN
- select geographically closest to LDNS
	- cons
		- may not be the shortest network path or path with fewest hop
		- some users may use remote LDNSs
		- ignore variation of path over time
- real-time measurements
	- CDN cluster periodically send probes (e.g. ping) to all LDNSs
	- cons
		- many LDNSs don't respond to probes

#### case study
##### Netflix 
- runs on Amazon cloud
	- ![](https://i.imgur.com/vI5i9Vw.png)
	- upload original videos to Amazon cloud
	- software on Amazon cloud create different versions of videos
	- software on Amazon cloud upload versions of videos to CDN
- private CDNs
	- support DASH
	- push videos to CDN servers during off-peak hours
		- doesn't use pull-caching (pull on demand and cache)
		- big server racks contain all entire library
		- small server racks contain only popular videos
	- select a video -> Netflix on Amazon cloud finds CDN servers with that video -> select the best one -> sends client server IP & manifest file -> client & CDN server interacts with DASH
		- don't need DNS to redirect to CDN server

##### Youtube
- use pull-caching
- use DNS redirect
- select CDN cluster with lowest RTT
	- not always (for load balancing)
- use HTTP streaming, not DASH
	- requires user to select a version
- client upload to server over HTTP
- Google data center converts to Youtube format & create multiple versions

##### Kankan
- 迅雷看看 (???)
- P2P
	- similar to BitTorrent
	- request chunks of video from other peers that have the video
	- not using CDN because CDN is costly
- hybrid CDN-P2P
	- request beginning of contents from CDN servers
		- short start-up delay
	- if P2P is enough, only streams from peers
		- reduce cost
	- if P2P isn't enough, use hybrid CDN-P2P

## Ch3 Transport Layer
### intro
- network laryer: host 2 host
- transport layer: process 2 process
- <www.ietf.org>
- ![](https://i.imgur.com/iMPrEhU.png)
- UDP
	- max 65535 = 2^16-1
- mss: maximum segment size

### reliable data transfer
- difficulties
	- the layer below may be unreliable
- assumption
	- packets sent (from below) won't be out of order
- properties
	- no error
	- no loss
	- in sequence
	- no duplication
- acknowledgment
	- positive → ACK
	- negative → NAK
		- → retransmission
#### error detection
- parity check
	- even or odd number of 1s
	- 2D parity check
		- like 數獨
		- 知道哪裡出錯
			- 出錯的 row & column 之 intersection
- Internet checksum
	- procedure
		1. 2 條 16 bits 相加
		2.  overflow → 加到 least significant bit
		3. sum 做 1's complement → checksum
			- 0 1 互換
		4. sum = receiver 的 sum 加上 sender 的 checksum
			- 全部 1 → correct
				- bc 理論上互為 complement
			- need to carry
		5. checksum = complement of sum
	- ![](https://i.imgur.com/2uAiupB.png)

#### Automatic Repeat reQuest (ARQ)
- states
	- ![](https://i.imgur.com/dyjvawQ.png)
	- ![](https://i.imgur.com/1Qj6GYC.png)
- stop & wait
	- resend when
		- timeout 沒收到 ACK
		- 收到 corrupted ACK
		- 收到 NAK
	- problems
		- ACK transmission 可能出錯
			- sol: [[#alternating-bit protocol]]
		- propagation delay 可能很長
			- a = propagation delay/transmission delay
			- a > 1
				- 大部分時間都花在 propagation 而非 transmission → bad utilization of 網路
			- a < 1
				- 還沒 transmit 完已經 propagate 到了
			- sol: [[#sliding window protocol]]
##### alternating-bit protocol
- stop & wait but 多一個 bit 標示 sequence number
	- 0 or 1
	- 可判斷是重傳 or 新 packet
		- 重傳 → 用原本的 number
		- 傳新的 → 用另一個 number
	- receiver 收到 duplicate → 還是回 ACK but 不把東西往上層送
- ![](https://i.imgur.com/sZArr7j.png)<br>![](https://i.imgur.com/sDi1rO2.png)
	- lost packet & lost ACK 對 sender 來說一樣

##### sliding window protocol
###### Go Back N (GBN)
- nice interactive visualization
	- <iframe src="https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html" width=100% height=500px></iframe>
- 一樣有 sequence number
	- 3 bit → 0-7
- sender
	- ![](https://i.imgur.com/Lk1S4u3.png)
	- window size 固定 N，隨著 ACK 回來往右 slides
	- timeout 沒有 ACK → resend 整個 window
	- timer 根據 windows 裡最舊者
	- ![](https://i.imgur.com/CpIzweW.png)
	- receive 的時候，若 acknum+1 = nextseqnum，則沒有 active 的 packet，so 不用 timer
- receiver
	- cumulative ACK
		- 只需要 maintain 一個 ACK
		- ACK n 表 n 以前的全部都收到
	- 收到什麼就 ACK 什麼
		- 收到 out of order → 丟掉 but ACK
	- ![](https://i.imgur.com/SAZvT9b.png)
- ![](https://i.imgur.com/1jeQHRf.png)
- 收到 ACK i → <=i 全部送達
- problems
	- 1 傳掉 23456 傳成功 → resend all but 換其他失敗 → 浪費效能
		- sol: [[#Selective Repeat SR]]

###### Selective Repeat (SR)
- sender & receiver 都有 sliding window
	- ![](https://i.imgur.com/uTb6mZr.png)
- ![](https://i.imgur.com/3k5gJBx.png)
- out of order → store
- in order → slide
- sender
	- timeout 是一個 packet 一個 packet 看 (selective repeat)
- receiver
	- windows 已經滑走 but 收到之前的 packet → 還是要 ACK
- ![](https://i.imgur.com/YrZMeSG.png)
- problem
	- window size 相比於 sequence number 不能太大
		- 無法 differentiate 是 repeated 還是 new
	- ![](https://i.imgur.com/HtGtPqf.png)

### congestion control
- congestion → packet loss → retransmission → waste resources
- if a packet has traveled through many routers, but dropped due to congestion, the work done by previous routers is lost
- multimedia 常是 broadcasting，難做 congestion control
	- 切 band

#### approaches
- end-to-end congestion control
	- network layer doesn't provide feedback
	- TCP uses it
		- TCP detect congestion with segment loss or RRT increases → decrease window size
- network-assisted congestion control
	- routers provide feedback
		- if congestion, do:
			- send choke packet 
			- modify a field in the packet
	- ATM Available Bit Rate (ABR) 
		- router tells sender the max bit rate supported
	- recent IP/TCP can implement it as well, tho still uses end-to-end as default

### UDP
- UDP 有 checksum
	- 但發現 error 不會做 recovery
		- some discard corrupted part
		- some goes on with a warning
- RFC 768
- chrome 在 UDP 上做自己的 protocol 
- 不用記錄 connection state
- segment
	- ![](https://i.imgur.com/QLZm6U4.png)
		- ![](https://i.imgur.com/CGnQLXN.png)
	- header size fixed
	
### TCP
- 用 [[#sliding window protocol]]

#### TCP  segment
- header size not fixed
- window size not fixed
	- flow control
- ![](https://i.imgur.com/mFnFg96.png)
	- ![](https://i.imgur.com/lIio3JT.png)
- UAPRSF
	- 0 or 1 each
	- URG = urgent
		- Urg data pointer: urgent data 的位置
		- 沒在用
	- ACK
	- PSH = push
		- 沒在用
	- RST = reset
	- SYN
		- 1 to start connection
		- see [[#TCP connection management]]
	- FIN
		- 1 to end connection
		- see [[#TCP connection management]]
- Internet checksum
- rdf
	- sender maintain sliding window
	- receiver maintain expected next byte (seq. num)

#### RTT & Timeout
##### Estimated RTT
- RTT = rount trip time
	- time from data sent to ACK received
- SampleRTT = the RTT of the newly recieved ACK
	- won't measure retransmissions
	- measured about once every RTT
- $EstimatedRTT = (1-\alpha)\cdot EstimatedRTT+\alpha\cdot SampleRTT$
	- EWMA for SampleRTT
		- weight of a SampleRTT decays exponentially fast ($(1-\alpha)^n$ for n before)
			- → recent ones are more important
	- recommend $\alpha=0.125$ per RFC 6298
	- 舊 RTT & 新 RTT (sample RTT)  的加權平均
- EWMA, exponential weighted moving average
	- something that takes the form of $Y_{EWMA} = (1-\alpha)\cdot Y_{EWMA}+\alpha\cdot Y_{instantaneous}$
- $DevRTT = (1-\beta)\cdot DevRTT+\beta\cdot |SampleRTT-EstimatedRTT|$
	- variability of SampleRTT from EstimatedRTT
	- EWMA of the difference of SampleRTT &  Estimated RTT
- ![](https://i.imgur.com/esZHebV.png)

##### Timeout
$TimeoutInterval = EstimatedRTT+4\cdot DevRTT$
- timeout interval should > Estimated RTT, and the more fluntuating RTT is, the bigger the margin
- TimeoutInterval will double after timeout, follow the formula again after receiving next segment
	- exponential backoff

#### reliable data transfer
- [[#network layer]] isn't reliable
- timeout
	- single timer
		- oldest unACKed segment
	- timeout → retransmit the segment causing the timeout → restart timer

##### cumulative ACK
- hybrid of [[#Go Back N GBN]] & [[#Selective Repeat SR]]
	- reciever ACK the ==next bit== to be received
	- differences with GBN
		- TCP will buffer out-of-order segments
		- TCP uses cumulative ACK
			- 1 : N segment all received by receiver,  ACK k lost while other received by sender → GBN resend segment k : N while TCP resend segment k or none (if receive ACK #>k before timeout k)
	- differences with SR
		- TCP won't individually ACK out-of-order segments 
		- TCP only maintains the smallest-seq-no (oldest) unACKed byte
	- selective ACK (SACK) - a modified ACK
		- ACK out-of-order segments selectively
		- a lot like SR
- `SendBase` =  the seq # of oldest unACKed segment
- `NextSeqNum` = next byte to be sent
- receive ACK → compare ACK #  with `SendBase` 
- no negative ACK
- always ACK the last in-order byte received
	- even if receive non-in-order byte or duplicate byte
- cumulative ACKs
	- receive ACK y = ACK all segment <= y
	- y > `Sendbase` → ACK many unACKed segments
- if receive many consecutive segment, send ACK when 500ms without next one
- receive segment #92 with 8 bytes of data → ACK 100
- e.g.
	- ![](https://i.imgur.com/MqoOXDk.png)
		- B will discard the retransmission
	- ![](https://i.imgur.com/NjH98KK.png)
		- (Host A) send #92 → send #100 → #92 timeout → resend #92 & restart timer → ACK for #100 arrive within new timer → accept and don't resend
		- (Host B) receive duplicate segment → ACK the received newest bytes =  120，表 120 前的所有 bytes 都收到了 including segment #92
	- ![](https://i.imgur.com/gSOdmia.png)
		- 收到 ACK 120 就表示 120 以前的所有 bytes 都收到了

##### exponential backoff
- timeout → double timeout interval
- receive data from application above OR receive ACK → use [[#Timeout|formula]] again to set timeout inteval
- provide some congestion control
	- congestion → packet dropped or long queue → many timeout, and retransmitting will worsen the congestion → set timeout interval longer, retransmit in a lower rate

##### fast retransmit
- sender often sends many segments consecutively → if 1 segment lost, receiver will send many duplicate ACKs (bc it always ACK the last in-order byte received)
- receive 3 duplicate ACKs → retransmit the segment following the duplicate ACK seq No., without waiting to timeout
- ![](https://i.imgur.com/QI3MCOv.png)
- ![](https://i.imgur.com/VqvfPfG.png)

#### flow control
- make sending rate <= receiving rate
- receiver 透過 ACL 告訴 sender 自己剩餘  sliding window (buffer space)  大小
	- ![](https://i.imgur.com/L9624NA.png)
	- `rwnd` = how much buffer space left for receiver
	- receiver places `rwnd` in `receive window` field in segments sending to sender
	- sender keeps total bytes of unACKed data < `rwnd`<br>i.e. 送出去的 data 量 < receiver 可承受的量
		- `LastByteSend - LastByteAcked <= rwnd`
	- 沒空間 → sender 不能送，等 receiver 慢慢消化往上層送
	- sender 的 last known `rwnd` = 0 時，需定期要去問 receiver buffer 夠不夠
		- otherwise  if receiver 都不 send 東西，sender 沒拿到 ACK 的話就不知道 receiver buffer 大小，只能以為 buffer 還是 0，就都不能送東西

#### TCP connection management
- SYN flood attack
	- 不停 request connection 但不回 ACK
- TCP 3-way handshake
	1. client send a segment to server
		- header
			- SYN <- 1
			- seq  <- `client_isn` = rand()
		- payload
			- none
	2. server allocates resources for the connection, and sends a connection-granted segment i.e. **SYNACK segment** to client
		- header
			- SYN <- 1
			- ack <- `client_isn+1`
			- seq <- `server_isn` (chosen)
		- payload
			- none
	3. client allocate resources for the connection, and sends an segment to ACK server's connection-granted segment
		- header
			- SYN = 0
			- seq  <- `client_isn+1`
			- ack <- `server_isn+1`
		- payload
			- may put data
	- ![](https://i.imgur.com/gZHvvq5.png)
- resources
	- buffers
	- variables
- after the 3-way handshake, each segment header's `SYN` = 0, and can contain payload with data
- termination
	1. client sends a segment with `FIN` = 1 
	2. server ACKs
	3. server sends a segment with `FIN` = 1
	4. client ACKs
	5. deallocates resources on both ends
	- ![](https://i.imgur.com/j0YPZux.png)
- TCP states
	- receiver<br>![](https://i.imgur.com/qQdz3zT.png)
	- sender<br>![](https://i.imgur.com/7FZrj6q.png)
- if server receives a packet requesting an unavailable port
	- if it's a TCP SYN packet, server will send a reset segment with `RST=1`, telling client not to resend the segment
	- if it's a UDP packet, server will send an ICMP datagram

#### congestion control
##### brief
- use congestion window to limit the sending rate
- sender keeps total bytes of unACKed data (data transmitting) < `min(cwnd, rwnd)`  
	- `LastByteSend - LastByteAcked <= min(cwnd, rwnd)`
- bandwidth probing
	- network 不提供明確的 congestion rate → 試探性地不停增增減減 sending rate 看反應
	- receive ACK → increase `cwnd` (**self-clocking**)
	- loss event (timeout OR 3 duplicate ACKs) → decrease `cwnd`
		- ACKs come quickly → `cwnd` increases quickly

##### TCP congestion-control algorithm
1. Slow Start
	- come to this state whenever timeout
	- initial `cwnd = 1 MSS(max segment size)`, which is very smol
	- receive 1 ACK → `cwnd += 1 MSS`
		- → `cwnd` grows exponentially
			- send 1 receive 1 → send 1+1 receive 2 → send 2+2 receive 4 etc.
			- ![](https://i.imgur.com/1cc8aGz.png)
	- timeout → `ssthresh = cwnd/2` && `cwnd = 1 MSS`
		- `ssthresh` = slow start threshold
	- `cwnd == ssthresh` → go to Congestion Avoidance state
		- `beq cwnd, ssthresh, Congestion Avoidance`
		- when `cwnd` grows to 1/2 of the last time timeout occurs
	- receive 3 duplicate ACKs → `ssthresh = cwnd/2` && `cwnd = ssthresh + 3 MSS` && fast restransmit && go to Fast Recovery state
2. Congestion Avoidance
	- same as Slow Start except `cwnd += MSS*(MSS/cwnd)` for each ACK received<br>i.e. `cwnd += 1 MSS` for **each RTT**
		- will receive `cwnd/MSS` ACKs each RTT
	- timeout → go to Slow Start
	- receive 3 duplicate ACKs → `ssthresh = cwnd/2` && `cwnd = ssthresh + 3 MSS` && fast restransmit && go to Fast Recovery state
3. Fast Recovery
	- optional state
		- if don't use this state, then both timeout & 3 duplicate ACKs go to Slow Start
	- come to this state whenever 3 duplicate ACKs
	- receive duplicate ACK → `cwnd += 1 MSS` 
		- 代表有 segment 成功送到
	- receive new ACK → `cwnd = ssthresh` && go to Congestion Avoidance
	- timeout → `ssthresh = cwnd/2` && `cwnd = 1` && go to Slow Start
	- a recommended pero no es necesario state
	- timeout → go to Slow Start
- FSM state change
	- ![](https://i.imgur.com/HBiLVxJ.png)
- versions
	- TCP Tahoe: no Fast Revcovery State
	- TCP Reno: has Fast Revcovery State
		- fair
	- TCP Vegas
		- detect congestion before packet loss → lower the rate linearlt
			- detect with observing RTT
		- no es fair
	- ![](https://i.imgur.com/Vcgf6QW.png)
- additive-increase, multiplicative-decrease, AIMD
	- ![](https://i.imgur.com/GffxjVr.png)

##### TCP throughput
?

#### TCP fairness
- TCP Reno es muy muy fair
- for 2 competing connections
	- ![](https://i.imgur.com/m8OSzwQ.png)

## Network Layer
### intro
- routing
	- 找出路徑 to send
	- 最好路徑 = shortest path
		- min hop count
		- max reward
		- min cost
		- reinforcement learning 分配資源
- forwarding
	- 拿到後正確丟出 router
	- input link interface to output link interface
	- forwarding table
		- IP 32 bits → forwarding table max $2^{32}$ entries
		- 大家合力算出來的 source to destination path
		- indicate outgoing link interface
- control plane 
	- physically separated from router
	- computes & distributes forwarding tables
	- SDN, software-defined network
- data plane 
	- 根據 control plane 給的 forwarding table 做 forwarding
- datagram
	- best effort
- ATM
	- virtual circuit
	- guaranteed in-order, bounded delay (一定的 delay 以內), minimal bandwidth 
	- 送之前先決定好 source to destination path
	- 服務多
		- ![](https://i.imgur.com/4PMUB5v.png)
- datagram vs. virtual circuit
	- ![](https://i.imgur.com/8nmPnXZ.png)

### Data Plane
#### router
- ![](https://i.imgur.com/uCIPEyC.png)

##### input port
- ![](https://i.imgur.com/kmA6Xsl.png)
1. terminate incoming physical link
2. perform necessary link-layer function to interoperate with the link layer at the other side of the incoming link
3. lookup - use forwarding table to determine output port
	- forwarding table copied from routing processor → forwarding decisions made locally at input port
	- destination based forwarding
		- longest prefix matching
			- 根據 prefix 判斷要 forward 到哪裡
			- 看跟哪個 prefix 相同到最多位 (特別法優於普通法)
			- e.g.
				- ![](https://i.imgur.com/nBFE2xU.png)
			- 可犧牲幾個 bits 當 subnet id
4. send to switching fabric → send to specified output port 
-  switching speed not fast enough → input zqueue
	-  head-of-the-line (HOL) blocking
		-  前一個 packet 因為 destined output port 被搶所以在等，但自己的 output port 是空的

##### switching fabric
- ![](https://i.imgur.com/hkbWIOa.png)
- switching via memory
	- packet copied from input port to routing processor memory → routing processor extract destination address and lookup forwarding table → copy to output port buffers
	- 1 read/write action at a time (for a bus)
	- in modern routers, the above is done by input port
- switching via a bus
	- input port transfers a packet directly to output port via a shared bus
		- skip routing processor
	- label the output port, all output port receives the packet but only the destined one keep it
	- switching speed limited by bus speed
		- max 1 packet crosses the bus at a time
- switching via an interconnection network (crossbar)
	- to overcome the bandwidth limitation of a single shared bus
	- can forward multiple packets in parallel
		- but 1 for an output at a time
	- non-blocking
		- need to wait if more than one packet destined at 1 output port

##### output port
- ![](https://i.imgur.com/U2YM1It.png)
- perform necessary link-layer & physical-layer functions
- if bidirectional → paired with input port
- switching speed > line speed → output queue
	- discard policy
		- tail drop
			- 滿了 → drop arriving packet
		- AQM, active queue management
			- drop before full
			- RED, random early drop
				- buffer 愈滿，進來的 packet 被 drop 的機率愈高
	- buffer size
		- B = RTT x C (link capacity) generally

##### packet scheduling
- the order of the output of queue
- FIFO, first-in-first-out
	- or FCFS, first-come-first-serve
- priority queuing
	- packets classified into priority classes
	- maintain FIFO queues for each priority class, lower priority won't be send until higher priority's queue is emptied
	- non-preemptive priority queuing
		- packet transmission won't be interrupted once started
- round robin
	- packet classified into classes
	- transmission alternate between classes
		- e.g. class 1 → class 2 → class 3 → class 1 → class 2 and so on and so forth
		- 像每個子彈都是一個 queue 的左輪手槍
	- work-conserving queuing
		- this class queue is empty → immediately go to the next class queue
- weighted fair queuing, WFQ
	- generalized round robin
	- alternative circularly between classes but each class has weight
	- guaranteed a fraction of service (the fraction of weight to total weight) in any interval of time
	- ![](https://i.imgur.com/1hNeK2r.png)

##### routing processor
- perform control plane functions
- in traditional router
	- maintain routing table
	- attach link state info
	- compute forwarding table and copy to input ports 
- in SDN router
	- communicate with remote controller, get forwarding table
	- copy forwarding table to input ports
	- perform network management functions

#### IPv4
##### datagram format
- ![](https://i.imgur.com/oeiSslz.png)
- version number
	- IP protocol version
	- how to interpret this datagram
- header length
	- to know where payload begins
	- without options → 20-byte
		- TCP header 也是 20-byte → IP+TCP header 共 40-byte
- type of service, TOS
	- distinguish different type of IP datagrams
- datagram length
	- total length
- identifier, flags, fragmentation offset
	- for [[#datagram fragmentation]]
- time-to-live, TTL 
	- lifespan of a packet
	- in time or hop counts
	- in case 陷進 routing loop
	- 也可限制 broadcasting range
- protocol
	- specify transport-layer protocol
		- 6 → TCP
		- 17 → UDP
- header checksum
	- recompute & update at each router
		- some field may change, e.g. TTL
	- checksum at both transport & network layers bc
		- IP only checksum the IP header
			- while TCP/UDP checksum the entire segment
		- TCP/UDP 不一定接 IP
			- 也可以用 ATM
		- IP 也不一定接 TCP/UDP
- source & destination IP address
- options
	- extend IP header
	- 有些 datagram 有用 options，某些沒用 → processing time of datagrams varies greatly
- data / payload
	- transport-layer segment
	- ICMP message

##### datagram fragmentation
- maximum transmission unit, MTU
	- max amount of data a link-layer frame can carry
- each link may use different link-layer protocols, with different MTUs → need fragmentation when sending via a link with smaller MTU
- destination host reassembles fragments
- related header fields
	- identification number
		- seq num of the original datagram
	- flag
		- 0 for last fragment, 1 otherwise
	- offset
		- where the fragment fits in the original datagram
- e.g.
	- ![](https://i.imgur.com/gT4Y4Ds.png)

##### addressing
- interface
	- boundary between host & physical link
	- multiple interfaces in a router
- 每個 interface 一個 ip
- dotted-decimal notation
	- 32 bits, 4 section, each section 8 bits → 0-255
- a portion of IP address determined by belonged subnet
- subnet
	- isolated network
	- interconnecting host interfaces & router interface
		- ![](https://i.imgur.com/Qjlpmlj.png)
		- ![](https://i.imgur.com/d3a2vEF.png)
	- /24 notation i.e. subnet mask
		- 223.1.1.0/24 表 left 24 bits 都要是 233.1.1
	- 全 1 (255.255.255.255) 表 broadcast packet
		- send to all hosts of the same subnet
		- 被 router 擋在裡面
	- 全 0 (0.0.0.0) 表 this
- classless interdomain routing, CIDR
	- a.b.c.d/x
	- leading x bits is network portion i.e. prefix
	- only the leading x bits will be considered by outside routers
	- may have multiple hierarchy
		- e.g. a.b.c.d/21 → an organization, a.b.c.d/24 → a subnet in the organization
- classful addressing
	- before CIDR
	- prefix length fixed to 8/16/24 bits → class A/B/C
	- 不同 class 之間可容納的 hosts 數量差太多，造成資源分配沒有效率
- ICANN, Internet Corporation for Assigned Names and Numbers
	- allocate IP addresses
	- manages DNS root servers

#### DHCP
- dynamic host configuration protocol
- alias: plug-and-play / zeroconf protocol
- a client-server protocol
- allows host to obtain IP address automatically
	- permanent (always same) or temporary (different every time)
- allows host to get more info
	- subnet mask
	- address of first-hop router (default gateway)
	- address of local DNS server
- steps
	1. DHCP server discovery
		- newly arriving host want to find the DHCP server
		- client broadcasts DHCP discover message
			- destination IP address 255.255.255.255 → broadcast
			- source IP address 0.0.0.0
	2. DHCP server offer
		- DHCP server broadcasts DHCP offer message
			- destination IP address 255.255.255.255 → broadcast
			- contents
				- transaction ID
				- proposed IP address
				- network mask
				- IP address lease time
					- IP address valid time
		- there may be several DHCP servers → client can choose
	3. DHCP request
		- client broadcasts DHCP request message
			- responds with the selected offer
	4. DHCP ACK
	- ![](https://i.imgur.com/XEgSRWn.png)

#### NAT
- network address translation
- IPv4 address 不夠解法之一
- acts like a single device with a single IP address to the outside
	- hide home network
- private IP address
	- only meaningful in its subnet
- translate between public IP address + port number & private IP address + port number using NAT translation table
- criticisms
	- violate data integrity
	- port number should be for processes
- cons
	- bottleneck → may be slow
	- NAT traversal problem
		- private IP is temporary, can't make itself public accessible
		- solution: universal plug-and-play 
- middleboxes
	- don't perform traditional datagram forwarding
	- NAT
	- load balancing
		- forward packet to one of a set of servers
	- firewall

#### IPv6
- background
	- 32-bit IPv4 address space would run out before long
	- successor to IPv6
- compatibility to IPv4 - tunneling
	- IPv6 datagram needs to pass through IPv4 router → put into the payload field of a IPv4 datagram → another IPv6 router receive, examine the protocol field = 41, extract the IPv6 datagram, and continue
	- ![](https://i.imgur.com/XFVZE9k.png)

##### datagram format
- differences from IPv4
	- simpler, more streamlined structure
	- 128 bits of IP address
		- won't ever run out
	- anycast address
		- deliver to anyone of a group of hosts
	- 40-bit header
		- fixed length
		- drop or made optional some IPv4 fields
		- faster processing
		- more flexible options processing
	- flow labeling
		- 讓你 label 東西
	- discard some fields
		- fragmentation/reassembly
			- IPv6 doesn't allow fragmentation & reassembly in routers, but in source & destination
			- fragmentation & reassembly is very time-consuming
			- packet too big → drop & send "packet too big" ICMP error message
		- header checksum
			- transport-layer & link-layer protocol already has checksum → redundant
			- IPv4 has TTL & IPv6 has hop limit → need to recompute checksum at every hop → very time consuming
		- options
			- field removed, but not gone
			- next header field can be TCP heaer or UDP header or options
			- removed → 40-bit fixed header
- fields
	- ![](https://i.imgur.com/legsmRb.png)
	- version
		- IP version number
	- traffic class
		- priority
	- flow label
	- payload length
	- next header
		- IPv4 的 protocol field
	- hop limit
		- like IPv4 的 TTL
	- source and destination addresses
		- 128-bit address
	- data
		- payload

#### generalized forwarding
- match-plus-action
- Openflow
- ![](https://i.imgur.com/Og7ebwI.png)
- flow table
	- headers
		- to match packet
		- forwarding based many header field values
		- not all IP header fields can be matched
			- some is too complex
	- counters
	- actions
		- actions to be taken
		- forwarding
		- dropping
		- modify-field

### Control Plane
#### routing
- classifications
	- centralized or decentralized
		- centralized
			- complete knowledge about the network
			- calculate path with the knowledge
		- decentralized
			- each node only know it links at first, then exchange information with neighbors
			- carry out the path iteratively
	- static of dynamic
		- static
			- routes seldom change
		- dynamic
			- routes change whenever link costs or topology or other things change
	- load-sensitive or load insensitive
		- load-sensitive
			- link costs reflect congestion
		- load-insensitive
			- link costs don't reflect congestion
			- the Internet
- 網管去設 link cost
- ![](https://i.imgur.com/XPxvgIm.png)
- 找 least cost path
- a node
	- incoming interface
	- outgoing interface
- flooding
	- 從原本的 node 透過 link 擴散出去
	- outgoing interface 各 copy 一份
	- 正常 forwarding
		- 找到要的 outgoing interface 送出去
- ![](https://i.imgur.com/G9WmL2B.png)

##### link-state routing algorithm
- centralized
- broadcast (flood) global information s.t. each node has the same complete information
- source routing
- ![](https://i.imgur.com/6gHVg6I.png)
- [[Dijkstra's Algorithm]]
	- $\in O(n^2)$
	- oscillation may occur
	- ![](https://i.imgur.com/c8jA1F0.png)
	- ![](https://i.imgur.com/m5b1nab.png)
	- ![](https://i.imgur.com/IjR1OEq.png)
		- D(x) is x's cost (from source) and its predecessor (how it got the cost)
- if any node has been changed, run the Dijkstra's algorithm again
- oscillation
	- if link costs depend on the amount of traffic, nodes may simultaneously detect a better route, simultaneously change to that route, thus making the route be crowded, so they simultaneously switch back again, and so on and so forth → oscillation
		- ![](https://i.imgur.com/UkFEjQB.png)
			- (x,y,z) want to send (1,1,e) to z
		- solution
			- ensure not all routers run the algorithm at the same time
			- the Internet can self-sync → randomized the broadcasting time

##### distance-vector routing algorithm
- iterative, async, distributed, self-terminating
- decentralized
- hop-by-hop routing
- [[Bellman-Ford Algorithm]]
	- $d_x(y)=min_v\{c(x,v)+d_v(y)\}$
		- $d_x(y)$ = least cost from x to y
		- $c(x,v)$ = direct cost from x to v, with x neighboring v
	- ![](https://i.imgur.com/YjAqSYK.png)
- 跟鄰居交換訊息
	- new info / change → recompute 到達 neighbor 的 least cost path → tell neighbors for any change
		- ![](https://i.imgur.com/WSTZZFF.png)
			- x 原本到 z 是 7，拿到 y 的資料後發現 3 就好，update 並告訴 neighbor
- async
- ![](https://i.imgur.com/NjrbAFN.png)
- count to infinity problem
	- when link cost increases
	- e.g.
		- ![](https://i.imgur.com/IoCHUzF.png)
			- cost(y to x) = min(cost(yx),cost(yz)+cost(z to x))
			- y 知道 cost(z to x) = 5，所以會選擇後者的路徑，因此傳到 z，但 z 為了傳給 x 又會傳給 y，就這樣一直互丟
			- won't stabilize until 44th iteration in this case
				- → z 發現 zy+yx 的 cost > 50 → 改走 zx
	- 還沒收斂就有 packet 進來
	- can't stabilize
	- don't know the route is through who
	- solution: poisoned reversed
		- notify others when a link is off
		- but won't solve the count to infinity problem resulted from increasing edge cost

#### intra-AS routing - OSPF
- autonomous systems, AS i.e. domains
	- a group of routers under the same administrative protocol
	- routers in the same AS runs the same intra-AS routing protocol
	- routers of an ISP will be under one or more ASs
- alias: interior gateway protocols, IGP
- open shortest path first, OSPF
	- link-state protocol
	- each router broadcast link-state information when changes occur or periodically to all other routers
	- each router constructs a complete topology map and compute the shortest path to all subnets
	- properties
		- security
			- authentication
		- multiple same-cost paths → can 分流
		- multicast routing (?)
		- hierarchy
			- local area runs locally

#### inter-AS routing - BGP
- border gateway protocol, BGP
- all ASs in the Internet run this inter-AS protocol
- gateway router
	- 有連到其他 AS 的 router
- internal router
	- 沒有連到其他 AS 的 router
- external BGP (eBGP) connection
	- BGP session between routers of 2 ASs
- internal BGP (iBGP) connection
	- BGP session between routers of the same AS
- e.g.
	- ![](https://i.imgur.com/LB5VwKR.png)
		- 3a 跟 2c 說可到 x → 2c 跟 2abc 說可到 x → 2a 跟 1c 說可到 x → 1c 跟 1abd 說可到 x
- BGP attributes
	- AS-PATH
		- 通往目標會經過的 ASs
	- NEXT-HOP
		- the IP of the router interface that begins the AS-PATH
		- 就是我選這個路徑需要對接的口
		- e.g. NEXT-HOP of `AS2 AS3 x` is the IP of 2a's leftmost interface
	- destination prefix
- route-selection algorithm (priority high → low)
	1. local preference value
	- each route has a local preference value attribute 
	2. shortest AS-path
	- use [[#distance-vector routing algorithm]], but with the number of AS hops
	3. hot potato routing
	- select path by choosing the NEXT-HOP with least intra-AS cost <br>i.e. route with the closest NEXT-HOP router
	- 不管 inter-AS cost
	- 像丟炸彈，把這個 packet 愈早弄出自己的 AS 愈好
	- 2 routers in the same AS may select different paths for the same destination
	4. BGP identifiers
- policy-based routing
	- 商業考量，看 contract 怎麼簽
	- 知道路徑不一定要告訴你
		- 確保自己不被用作中介點
		- 確保不被 free ride

#### SDN
- software-defined network
- flow-based forwarding
	- forwarding based many header field values
- separations of data plane & control plane
- network control functions
	- control plane implemented in software
		- can implement any form of forwarding by changing the application-control software
	- logically centralized but physically distributed
		- implemented on several servers
		- fault tolerance
		- scalable
		- high availability
- programmable network
- separated entities → open ecosystem with rich innovations
	- pre-SDN: all vertically integrated
- ![](https://i.imgur.com/nGoHIjZ.png)

##### controller
- communication layer
	- communication between SDN controller & network devices
	- southbound interface
	- Openflow
- network-wide state-management layer
	- information of everything
- interface to network-control application layer
	- northbound interface
	- read/write network state & flow tables (of state-management layer)
	- app can register to be notified on state change

##### OpenFlow protocol
- operates between SDN controller & SDN-controller switch or other devices
- messages from controller to controlled switch
	- configuration
		- query & set config paramenters
		- modify-state
			- add/delete/modify switch's flow table entries
			- set switch port properties
		- read-state
			- read values in flow table & port
		- send-packet
			- send the containing packet to a specific port
- messages from controlled switch to controller 
	- flow-removed
		- a flow table entry was removed
	- port-status
		- port status change
	- packet-in
		- send packet to controller

##### example
- ![](https://i.imgur.com/xj70Xz0.png)
	1. link s1 s2 goes down
	2. s1 notify SDN controller about the link-state change with OpenFlow port-status message
	3. SDN controller notifies link-state manager → update link-state database
	4. network-control application notified because of the link-state change → get updated link-state from link-state manager → computes new least-cost path → interacts with the flow table manager
	5. flow table manager uses OpenFlow protocol to update flow table at affected switches - s1, s2, s4 (需要幫 s1 s2 互相溝通) 

#### ICMP
- internet control message protocol
- error message
- architecturally lies just above IP
- ICMP messages carried as IP payload
	- 收到 → demultiplex to ICMP
- ![](https://i.imgur.com/96cZ10A.png)


## Ch6 Link Layer
### intro
- services
	- framing
		- encapsulate network-layer datagram to link-layer frame
	- link access
		- medium access protocol (MAC)
			- coordinate frame transmission
	- reliable delivery
		- used in high error links e.g. wireless link
		- not used in low error links e.g. wired links
	- error detection & correction
		- implemented in hardware
		- detect where exactly the errors are (bit-level) and correct them
- implemented in network adapter / network interface card (NIC)
	- ![](https://i.imgur.com/NVMUbTo.png)

### error detection
#### parity check
- even or odd number of 1s
- single-bit
	- even number of bit errors → can't detect
	- errors often clustered together (bursts) → 50% miss
- two-dimensional 
	- parity check for every row and column

#### checksum 
- low overhead but weak
- used in transport layer
	- implemented in software → need to be simple & fast
- link layer uses CRC
	- implemented in hardware → can perform complex operations quickly

#### CRC, cyclic redundancy check
- generator G
	- sender & receiver agree on before hand
	- r+1 個 bits
- data 補 r 個 0 i.e. slli r
	- size of r = size of G - 1 e.g. 4-bit G → 3-bit r
- modulo-2 arithmetic
	- addition without carry = subtraction without carry = XOR
	- 長除法 data 除 generator but 相減時用 XOR
- send bit string of data D 接餘數 R → $D2^R$
	- ![](https://i.imgur.com/uPVdRbY.png)
- receiver 把收到的 bit string 長 XOR generator，餘數為 0 → perfecto
	- R = remainder of $D2^R \div G$
- ![](https://i.imgur.com/yspDL5m.png)

### multiple access protocols
- uplink - (多對一) multiple access
- downlink - (一對多) broadcast or scheduling
- cellular network
	- 蜂巢式無縫隙 coverege
		- 六角形
		- coverage 重疊處會互相干擾，but 外圍訊號差還好
- more suitable than point-to-point when there're many idle moments
- in-band signaling
	- control signal & data 在同 channel 傳
- out-of-band signaling
	- control signal & data 在不同 channel 傳
- desired properties
	- full rate when only one node
	- rate = R/M when M nodes
	- decentralizedno single point of failure

#### channel partitioning
- TDMA
	- time division multiple access
	- divide bandwidth fairly by time slots
	- cons
		- max bandwidth R/N for each node, even if there's only 1 node
- FDMA
	- frequency division multiple access
	- divide bandwidth fairly by frequencies
	- cons
		- max bandwidth R/N for each node, even if there's only 1 node
- CDMA, code division multiple access
	- different code to each node
	- use the unique code to encode data → can correctly transmit even if collide with others  

#### random access
##### slotted ALOHA
- time slots
- can only send at the start of a slot
- more than one transmission in a slot → collision
- collision → retransmit in subsequent slot with probability p
- efficiency
	- ![](https://i.imgur.com/fERe5GV.png)
	- ![](https://i.imgur.com/LpFppKV.png)
- pros
	- if only 1 node → utilize 100%
	- highly decentralized
		- but still need synchronized time slots for all nodes
	- simple
- cons
	- unefficient
		- many collision/idle slots
		- max 37% (1/e) utilization if N → infinity

##### ALOHA
- no time slots
- transmit immediately after receiving
- collision when transmission time overlaps with others' transmission time
	- not propagation time
- efficiency
	- for a node
		- p(transmit) x p(other nodes didn't transmit) x p(other notes won't transmit when I'm transmitting)
	- ![](https://i.imgur.com/yllFWBH.png)
	- ![](https://i.imgur.com/DQPs3zp.png)
	- max 18% (1/2e) utilization if N → infinity
- fully decentralized

##### CSMA
- carrier sense multiple access
- get the state of current carrier
	- idle → transmit
	- busy → don't transmit
- can't sense others' transmissions if they haven't arrive to my node → propagation delay matters 
	- long propagation delay → need long time to sense other's transmission
	- may sense idle when there's transmission far away in the channel → transmit → collide
- once start transmitting, won't stop even if detect collision

##### CSMA/CD
- CSMA with collision detection (CD)
- detect collision while transmitting (for a short time) → abort → wait for some time and resend
- binary exponential backoff
	- nth collision → choose k from random $0:2^{n-1}$  and wait kx512 bit time
- used by Ethernet
- transmit 完才發生的 collision 不是 MAC 的事
- efficiency = $\frac{1}{1+5d_{prop}/d_{trans}}$
	- $d_{prop}$ = propagation time
		- small → colliding nodes abort immediately
		- 0 → efficiency = 1
	- $d_{trans}$ = transmission time
		- big → channel is productive most of the time
		- 1 → efficiency = 1

##### CSMA/CA - collision avoidance
-  for wireless → can't detect collision

#### taking turns
##### polling
- centralized, one node is the master node
- master node polls and allow if slave nodes wants to transmit
- polls in a cyclic manner
	- round robbin
- pros
	- no collision
	- high efficiency
		- no empty slots
- cons
	- polling overhead
		- communication time
		- poll and send capacity info even for inactive nodes
		- → less than full rate if only one node
	- centralized
		- single point of failure
- e.g.
	- Bluetooth

##### token passing
- 繞圈圈傳 token，持有者可傳 data，傳完 or 沒要傳就 pass 給下個 node
- pros
	- decentralized
	- efficient
- cons
	- one node failure → whole system fails
	- token overhead
	- token maintenance problem

#### DOCSIS
- DOCSIS, data-over-cable service interface specifications
- for cable access network
- CMTS, cable modem termination system
- upstream - many to 1 → multiple access problem
	- many cable modems share same upstream channel
- downstream - 1 to many → no multiple access problem
- 先 FDM 成很多個 channel，每個 channel 又有 many modems connect to CMTS，so use TDM to avoid collision
- TDM steps
	1. modems send request to CMTS in a special set of slots
		- random access
		- if little traffic, can send data directly in this set of slots
	2. CMTS grant permission for each time slot
		- with MAP control message
	3. if modem didn't get response of its request, it would interpret as collision happened (so its request didn't get to CMTS), and will retransmit with binary exponenetial backoff 
- ![](https://i.imgur.com/bqiqyUK.png)

### switched local area networks
#### link layer address
- each host has 1 IP & 1 adapter
- each router interface has 1 IP, 1 ARP module, 1 adapter
- each adapter has 1 MAC

##### MAC address
- LAN / physical / MAC address
- 6-byte (48-bit) long
- don't change as you move
	- portable (flat structure)
	- while IP address not portable (position: fixed) (hierarchical structure)
- adapter receive frame → check if the destination MAC match its own MAC, discard if not matched
- all 1s → broadcast address

##### ARP, address resolution protocol
- translate IP address to MAC address
- only for hosts and router interfaces on the same subnet
- ARP table
	- each host & router has ARP table
	- mapping from IP to MAC
	- have TTL
		- when to delete this value
	- don't necessarily contain entries for every host & router
	- plug-and-play
		- built and maintained automatically
		- don't have to be configured by system admin
- if sender wants to send to an IP with no entry in ARP table
	1. sender sends ARP packet to adapter
		 - sending IP, receiving IP, MAC
	2. adapter encapsulate ARP packet to link-layer frame and broadcast to subnet
	3. all receiving adapters pass the packet to their ARP module, if IP matches, send response ARP packet with the mapping
	4. sender update its ARP table and send to obtained MAC

#### Ethernet
- IEEE 802.3
- datagram format
	- ![](https://i.imgur.com/8D8Lvyo.png)
	- type
		- network-layer protocol to use
	- preamble
	- sync clock rates

#### switches
- filtering
	- forward or drop
- forwarding
- switch table
	- MAC, switch interface to use, time created
	- not necessarily contain all hosts & routers on a LAN
	- self-learning (plug-and-play)
		- table initially empty
		- receive frame → record its source MAC, coming interface & current time
		- if destination MAC is in table → send to corresponding interface, otherwise flood it
		- not receive from a MAC for a certain time (aging time) → delete entry
	- e.g.
		- ![](https://i.imgur.com/FTxfHgg.png)
- a frame arrives to the switch
	- no entry in switch table → broadcast
	- have entry, and the matching interface is already this interface (i.e. the LAN it's coming from contains the dest. MAC) → drop, otherwise → forward to the matching interface
- pros
	- no collision
		- switches buffer frames
	- heterogeneous links
		- switches isolated links → links can have different speed & run on different media
	- management
		- auto detect & disconnect malfunctioning adapters 
	- plug-and-play
- cons
	- broadcast storm
		- 一堆 broadcast 跑來跑去
	- restricted to spanning tree
		- s.t. if have cycles, broadcast will run forever