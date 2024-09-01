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
    - 120 servers -> MTTF (mean time to failure) = 1 month
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
        - `(member ID, heartbeart counter, time)` 
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
