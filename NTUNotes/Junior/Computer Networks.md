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

#### application-layer protocols

## reliable data transfer
- properties
	- no error
	- no loss
	- in sequence
	- no duplication
- acknowledgment
	- positive → ACK
	- negative → NAK
		- → retransmission
### error detection
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
		4. receiver 的 sum 加上 sender 的 checksum = 全部 1 → correct
			- bc 理論上互為 complement
	- ![](https://i.imgur.com/2uAiupB.png)

### Automatic Repeat reQuest (ARQ)
- stop & wait
	- resend when
		- timeout 沒收到 ACK
		- 收到 corrupted ACK
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
#### alternating-bit protocol
- stop & wait but 多一個 bit 標示 sequence number
	- 0 or 1
	- 可判斷是重傳 or 新 packet
		- 重傳 → 用原本的 number
		- 傳新的 → 用另一個 number
	- receiver 收到 duplicate → 還是回 ACK but 不把東西往上層送
- ![](https://i.imgur.com/sZArr7j.png)<br>![](https://i.imgur.com/sDi1rO2.png)
	- lost packet & lost ACK 對 sender 來說一樣

#### sliding window protocol
- Go Back N (GBN)
	- 一樣有 sequence number
		- 3 bit → 0-7
	- sender
		- ![](https://i.imgur.com/Lk1S4u3.png)
		- window size 固定 N，隨著 ACK 回來往右 slides
		- timeout 沒有 ACK → resend 整個 window
		- timer 根據 windows 裡最舊者
	- receiver
		- cumulative ACK
			- 只需要 maintain 一個 ACK
			- ACK n 表 n 以前的全部都收到
		- 收到什麼就 ACK 什麼
			- 收到 out of order → 丟掉 but ACK
	- ![](https://i.imgur.com/1jeQHRf.png)
	- problems
		- 1 失敗 23456 成功 → resend all but 換其他失敗 → 浪費效能
			- sol: [[#Selective Repeat SR]]

#### Selective Repeat (SR)
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


## Ch3 Transport Layer
- ![](https://i.imgur.com/iMPrEhU.png)
- UDP
	- max 65535 = 2^16-1

---
## miscellaneous
- logical channel??
<br><br>
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