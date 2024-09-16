# CS425 Distributed Systems

## Gossip

### Multicast Protocols


- send info to multiple nodes
- fault tolerant
- available
- scalable
- application level

#### Centralized

- one node send info to multiple nodes directly
    - with a loop
- not fault tolerant
    - fails halfway through the loop -> a lot don't receive
- high latency $O(N)$

#### Tree-based

- fault tolerant 
    - if a node on the higher hierarchy fails, lots of the nodes won't receive
    - use ACK or NAK to repair
        - can add random delay & use exponential backoff to avoid too much ACK/NAK
- latency $O(\log N)$ if balanced
- high overhead of $O(N)$ ACK/NAK

### Epidemic Multicast / Gossip Protocol

#### push gossip

- receive message -> push to a random set of nodes
- if received multiple messages, push a subset of them by random / recency / priority
- the spread
    - $n+1$ nodes
    - $x_t$ = uninfected notes at $t$
    - $y_t$ = infected notes at $t$
    - $x_t+y_t=n+1$
    - $x_0=n$ 
    - $y_0=1$ (root)
    - $\dfrac{dx}{dt}=-\beta xy$ = infection rate
        - $xy$ = the number of possible contacts between the uninfected & infected at a given time
        - $0\leq\beta\leq 1$, the fraction that actuall happens
    - $x=\dfrac{n(n+1)}{n+e^{\beta(n+1)t}}$
    - $y=\dfrac{n+1}{1+ne^{-\beta(n+1)t}}$
- the convergence
    - $\beta=\dfrac{b}{n}$, $b$ is the fanout
    - $t=c\log(n)$
    - $x\approx\dfrac{1}{n^{cb-2}}$
        - for $b=c=2$, $x=\dfrac{1}{n^2}$, which is close to 0
    - meaning the gossip converges in $O(\log n)$
    - each node transmits $bc\log(n)\in O(\log n)$ messages
- failures
    - packet loss
        - 50% packet drop -> analyze with $b/2$ -> 2x latency 
    - node failure
        - 50% nodes fail -> analyze with $n/2$ & $b/2$ (because 50% sent to bad nodes)
- $O(\log n)$ is practically almost constant
    - ln(1K) = 10
    - ln(1B) = 30
- pros
    - spreads quickly -> low latency
    - lightweight
    - highly fault tolerant 

#### pull gossip

- periodic pull from a random set of nodes 
- the spread
    - a tree with constant fanout / degree / num of children
    - $O(\log n)$ to spread to $n/2$
    -  $p_t$ = the fraction / ratio of uninfected nodes at $t$
    - fanout = $k$ i.e. the number of nodes to pull each iteration
    - for an uninfected node to stay uninfected at $t+1$, the $k$ nodes it pulls need to all be uninfected
    - $p_{t+1}=p_tp_t^k=p_t^{k+1}$ - super exponential
    - from $n/2$ to $n$ takes $O(\log\log n)$

#### hybrid - push pull

- use push to infect half of the nodes in $O(\log n)$
- use pull to quickly converge in $O(\log\log n)$

#### topology-aware gossip

- if nodes are distributed across data centers / racks evenly, and if push/pull randomly, router load would be $O(N)$
- ![[cs425-gossip-topology.jpg]]
- make the probability of picking outside the subnet $1/n_i$
    - $n_i$ = the num of nodes in the subnet
- router load $O(1)$
- still $O(\log n)$ spread time

#### Implementations

- AWS EC2 & S3
- [[Cassandra]]

## Memebership

- suppose machine fails once every 10 years
    - 120 servers -> MTTF (mean time to failure) = 10y x 12m / 120 = 1 month
    - 12k servers -> MTTF = 7.2hr
- use memebership protocol to auto detect failures

### Group Memebership Protocol

- maintain a memebership list of working nodes
    - dealing with join/fail/leave
    - different implementations of the list
        - complete list
            - strongly consistent
        - almost-complete list
            - weakly consistent
            - e.g. using [[#Gossip]] 
        - partial-random list
- components
    - failure detector
    - dissemination
        - spread info about join/fail/leave

#### Failure Detector

- crash frequency is $O(N)$
- properties
    - completeness vs. accuracy
        - completeness
            - no miss
        - accuracy
            - no false alarm
        - not possible to achieve both in a lossy network (consensus problem)
            - irl we guarantee completeness, while having partial or probabilistic accuracy because a miss is more costly
    - speed
        - time to first detection of failure
    - scale
        - distribute load evenly on each member
- centralized heartbeating
    - all nodes send heartbeats to a node
    - if not receiving from a node withing timeout, mark it as failed
    - cons
        - single point of failure
        - central node may be overloaded (hotspot)
- ring heartbeating
    - circular doublly linked list
    - pros
        - no single point of failure
        - no hotspot
    - cons
        - if a node's prev & next nodes both failed, its failure can't be detected
        - overhead for ring repairing 
- all-to-all heartbeating
    - broadcast heartbeat to all other nodes
    - pros
        - equal load for each node 
        - no miss (unless all other nodes have also failed)
    - cons  
        - high load on each node
        - if a node is having longer delay at receiving packets, it may mark all other nodes as failed -> low accuracy
- gossip-style heartbeating
    - nodes periodic gossip their memebership list
        - `(member ID, heartbeart counter, timestamp)` 
    - update local memebership list with the info received
    - if a heartbeart hasn't been increased within the timeout, mark the member as failed
    - to prevent gossipping dead info, remember the deleted member for another timeout, and ignore any info about it if received
        - e.g. node 3 died -> node 1 delete node 3 because it's reached timeout -> node 2 sends node 1 its list which contains node 3 within timeout -> add node 3 back with current time -> node 3 never gets deleted
    - spread
        - a single heartbeat takes $O(\log N)$ to propagate
        - $N$ single heartbeat takes 
            - $O(\log N)$ to propagate if bandwidth is $O(N)$
            - $O(N\log N)$ to propagate if bandwidth is $O(1)$
        - gossip frequency tradeoff - bandwidth vs. detection time
        - timeout tradeoff - detection time vs. false alarm rate / accuracy
- all-to-all & gossip-style heartbeating
    - mixing failure detection & dissemination
    - sub-optimal
- SWIM
    - use ping instead of hearbeat
    - every period, ping a random node $j$
        - if not recieving ACK, ping again but with an indirect path
            - make random $K$ other nodes forward the ping to node $j$ and its ACK
            - if received $0$ ACK, mark node $j$ as failed
    - constant detection time & load
    - tune false alarm rate with $K$ 
    - ![[cs425-swim-comparison.jpg]]
- misc
    - ![[sys-des-fail-ex.png]]
    - decrease hearteating frequency -> increase false alarm rate if timeout stays the same
    - ![[sys-des-cs425-q2-3.png]]
        - in Alice's protocol, each node pings 3 other nodes, while in Bob's protocol, there may be leaves (no outgoing edge) that can't be detected

#### Dissemination

- multicast
    - hardware or IP
    - unreliable
- point-to-point
    - send to all other nodes
    - expensive
- piggyback - gossip / infection style
    - use it with SWIM
    - carry info with the ping & ACK if SWIM, and update membership list
    - no extra messages needed  
    - $O(\log N)$ time dissemination
        - after $\lambda\log N$ periods, $\dfrac{1}{N^{2\lambda-2}}$ nodes left unineffected
    - may have high false alarm rate
        - packet losses
            - e.g. from congestion
        - if there's a high message loss rate around a node, indirect pinging to this node won't prevent it from being wrongfully marked as failed
        - solution: add a suspect state between alive & dead
    - suspicion
        - ![[sys-des-diss-sus.jpg]]
        - use incarnation number
        - when a node receives messages about it being sus, increment incarnation number and disseminate messages about it being alive
        - failed overrides everyone
            - marked as failed forever once marked as failed by a node
        - if not failed, higher incarnation overrides lower ones
            - if the same, suspect overrides alive

## Grid

- using geographically distributed computing resources
- use APIs to communicate with the protocols of each site
- e.g. Globus
- security challenges: it's federated so there may be different protocols & mechanisms for each site
    - single sign-on
        - s.t. user don't have to log in to each site
    - mapping to local security mechanisms
    - credentials inheritance
        - children should have access to the resources of its parent

## P2P Systems

### Napster

- server maintain `(filename, ip address, port)` tuples
- servers don't store files but pointers for all file
- search
    - ![[cs425-napster-search.jpg]]
    - flow
        1. client send search query to server
        2. server returns the list of host tuples relevant to the query
        3. client pings each host to find transfer rates
        4. client requests file from the best host
- use TCP
- cons
    - no security: plain text messages & passwords
    - indirect infringement of copyright
- centralized server
    - may have congestion
    - single point of failure

### Gnutella

[Gnetella Doc](https://courses.cs.washington.edu/courses/cse522/05au/gnutella_protocol_0.4.pdf)

- no servers, clients (servents) do all the work
- clients / servants / peers form a graph (overlay graph)
- message types
    - Query: search
    - QueryHit: query response
    - Ping: ping a peer
    - Pong: ping response
    - Push: initiate file transfer
- header format
    - ![[cs425-nutella-header.png]]
    - use TTL to prevent query from circulating forever
    - TTL = number of hops
- use HTTP
- search
    - BFS query out (flood)
        - ![[cs425-nutella-payload.png]]
        - use Descriptor ID to prevent duplicate visits
    - when a node has it, return QueryHit back to the path
        - ![[cs425-nutella-queryhit.png]]
- file transfer
    - requestor choose the best info received from search
    - request file with HTTP
    - if blocked because of firewall, send Push message, responder then establish a TCP connection with the requester and sends a GIV HTTP message, requester then do `GET` request
        - ![[cs425-nutella-push.png]]
        - `GIV <file index>:<server id>/<file name>`
        - if requester is also behind the firewall, then not possible
- ping-pong
    - ping has no payload
    - ![[cs425-pong-payload.png]]
    - to maintain active neighbor list
- problems
    - 50% traffic from ping/pong
        - sol
            - multiplex
                - receives multiple pings -> aggregate and send out one pong
            - cache
                - memoization pong (return value) of ping (key)
            - reduce ping frequency
    - repeated searches
        - sol: cache Query & QueryHit
    - some peers don't have enough bandwidth
        - sol
            - use central server as proxies for them
            - FastTrack: leverage more powerful peers
    - many freeloaders
        - 70% in 2000
        - only download, never upload
        - not Gnetella-specific
    - flooding causes excessive traffic
        - sol: structured p2p system e.g. Chord

![[cs425-gnutella-q9.png]]

### FastTrack

- hybrid of [[#Napster]] & [[#Gnutella]]
- some nodes become supernode, acting like [[#Gnutella]] servers
    - based on reputation

### BitTorrent

- split files into blocks
    - seed: node with all blocks of a file
    - leecher: node with some blocks of a file
- local rarest block first: download least replicated block first
- incentive to share: provide blocks to neighbors providing best download rate in the past
- choking: limit number of concurrent uploads

### Chord

- DHT (distributed hash table)
    - operations: insert/lookup/delete keys
    - challenges
        - load balancing
        - fault tolerance
        - operation efficiency
        - locality: transmit with shortest path of the underlying network topology
    - [[#Napster]], [[#Gnutella]], and [[#FastTrack]] are unoptimized DHTs
- ![[dht-p2p-compare.jpg]]
- use consistent hashing to map peers to hash ring
    - `(ip address, port)` -> SHA-1 -> 160-bit binary string (often represented as 40-bit hex string) -> pick $m$ bits and map to a number in $[0, 2^m-1]$ as peer ID
    - finger table
        - for each peer, has pointer to + $2^0, 2^1, 2^2,\cdots$ (mod $2^m$)
- map filename to peers using consistent hashing
    - filename -> SHA-1 -> 160-bit binary string -> mod $2^m$ -> find closest greater peer ID
- searching for a filename in $O(\log N)$ (same for insertion)
    - hash filename and mod to get a number $k$
    - at each peer, send query to furthest finger table entry before $k$ (clockwise), if the 1st entry (successor) is after $k$, send to successor
- fault tolerance 
    - maintain $r=2\ln N$ successor entries and use successor during failure
        - if 50% failure, probability of at least 1 successor is alive for a node = $1-0.5^{2\ln N}=1-\dfrac{1}{2^{\ln N^2}}=1-\dfrac{1}{N^2}$
        - if 50% failure, probability of at least 1 successor is alive for ALL ALIVE node = $(1-\dfrac{1}{N^2})^{\frac{N}{2}}=e^{-\frac{1}{2N}}\approx 1$ with big $N$
            - because $\ln (1-x)\approx -x$ if $x<<1$
    - replicate key/file to $r$ successors & predecessors
- join/leave/fail
    - update successors & finger tables
        - fail -> affect all finger tables with the failed node inside
    - join
        - affects $O(\log N)$ finger table entries
        - $O(\log N)\times O(\log N)$ messages
    - stabilization protocol: each node periodically ask immediate neighbors for their finger table & successors
        - fix loops occur during concurrent joins/leaves/failures
        - $O(N^2)$ stabilization rounds to reach strong stability

![[cs425-chord-q13.png]]

1. `45`'s finger table: `[46 (99), 47 (99), 49 (99), 53 (99), 61 (99), 77 (99), 109 (132), 173 (199)]`, so choose `199`
2. `199`'s finger table: `[200 (234), 201 (234), 203 (234), 207 (234), 215 (234), 231 (234), 8 (32), 72 (99)]`, so choose `234`
3. `234`'s finger table: `[235 (32), 236 (32), 238 (32), 242 (32), 250 (32), 11 (32), 43 (45), 107 (132)`, no entry is before `12`, so send to successor `32`
4. `12` found in `32` 


### Pastry

- hash to a hash ring like [[#Chord]] 
- routing with prefix matching $O(\log N)$
- maintain pointers to peer for each matched prefix
    - for peer with id `010101`:
        - `*`
        - `0*`
        - `01*`
        - `010*`
        - `0101*`
        - `01010*`
    - when routing a message, send to the entry with the largest matching prefix
        - tie breaker: shortest round-trip-time
        - shorter early hops, longer late hops
- use stabilization protocol 

### Kelips

- $k \approx \sqrt{N}$ affinity groups
- each node is hashed to an affinity group
- a node points to all other nodes in the same group and one for each other group
    - ~ $2\sqrt{N}$ neighbors
    - for contacts in other groups, use the ones with the shortest underlying path (round-trip-time)
    - ![[cs425-p2p-kelips.jpg]]
- hash filename to affinity group -> all nodes inside store the filename and the file metadata (address)
    - they don't store files but only info
- search for a filename $O(1)$
    - hash filename to group -> ask its contact in that group for file info
        - if the contact is down, route via a node in the same group
- memory $O(\log N)$, but still small
    - 1.93MB for 100k nodes, 10M files 
- use gossip to maintain membership lists
    - $O(\log N)$ dissemination time
- file metadata maintenance
    - gossip-style heartbeating, timeout delete
- compared to [[#Chord]] & [[#Pastry]]
    - shorter lookup time, more memory used, more background bandwidth used
