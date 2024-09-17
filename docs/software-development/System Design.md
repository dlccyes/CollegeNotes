# System Design

## Tools

- Draw charts: [Miro](https://miro.com/)
- Draw relational schemas: [Draw.sql](https://drawsql.app/)

## Resources

- [System Design Cheatsheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
    - study guide
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
	- more detailed study guide
- [System Design Interview An Insider’s Guide by Alex Xu.pdf](https://github.com/mukul96/System-Design-AlexXu/blob/master/System%20Design%20Interview%20An%20Insider%E2%80%99s%20Guide%20by%20Alex%20Xu%20(z-lib.org).pdf)
    - a tutorial on system design interviews
    - 13 problems
- DDIA (2017)
	- a textbook for system design
	- [DDIA pdf | github](https://github.com/jeffrey-xiao/papers/blob/master/textbooks/designing-data-intensive-applications.pdf)
	- [DDIA pdf | libgen](http://library.lol/main/FB796AE8FD912C78AA1A34870ACA6BE8)
- Grokking the System Design Interview
	- [pdf | github](https://raw.githubusercontent.com/sharanyaa/grok_sdi_educative/master/grok_system_design_interview.pdf)
	- [pdf | libgen](http://libgen.rs/book/index.php?md5=3CC8A0D02BBB0644A3839F6B621BB86B)
	- [Design Guru paid course](https://www.designgurus.io/course/grokking-the-system-design-interview)
	- [Educative.io paid course](https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers)
- [Gaurav System Design Playlist | Youtube](https://www.youtube.com/playlist?app=desktop&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX)
- [Exponent | Youtube](https://www.youtube.com/@tryexponent)
- [Problems Aggretation](https://drive.google.com/file/d/16wtG6ZsThlu_YkloeyX8pp2OEjVebure/view)
	- from <https://leetcode.com/discuss/interview-question/system-design/1205825>
- [Database Schema Templates](https://drawsql.app/templates/popular)

 ### newsletters / blogs
 
- The Pragmatic Engineer
- Quastor

## Key Characteristics of a Distributed System

- [[#Scaling|Scalability]]
- Reliability
- Availability
- Efficiency
- [[#Maintenability]]

### Consistency

#### strong consistency

guaranteed to read the latest data

#### weak consistency

not guaranteed to read the latest data

#### eventual consistency

if no new input, all replicas will eventually have the latest data

#### read-your-writes consistency

- after a user updating its own stuff, it should be able to see the updates
- can be achieve by reading the user's profile from leader and other stuff from followers

#### monotonic reads

- read$_t$ should retrieves a later state than read$_{t-1}$
- can be achieved by each user always reads from the same replica
    - can be achieved by ranged based [[#load balancing]]

## Scaling

### Vertical Scaling

make a server bigger & stronger

- pros
	- fast inter-process communication
	- data consistent
- cons
	- single point of failure
		- only 1 server -> no failover & redundancy
	- hardware limit
	- expensive

### Horizontal Scaling

add more servers

- pros
	- scale well
- cons
	- slow inter-process communication
		- need RPC between machines
	- need load-balancing
	- data inconsistency

### Multi Data Centers

To scale internationally, we can have data centers across the globe.

![[sys-des-geo-dc.jpg]]

challenges

- traffic redirection
    - use geoDNS to resolve domain names -> IP addresses based on the user's location to point to the best data center
- data sync
    - [[#Multi-Leader Replication]]

## Performance

-  the performance of the 99.9th percentile is the most important
	- slow requests -> have many data -> valuable customer
	- Amazon:
		- + 100ms -> -1% revenue
		- + 1s -> -16% revenue
- service level agreements (SLAs)
	- service is up when 
		- median < 200ms
		- 99th < 1s
	- service needs to be up > 99.9% of the time
	- refund if not met

### Networking Metrics

- bandwidth
	- max throughput
- throughput
- latency

## Maintenability

- Operability
	- easy to operate
- Simplicity
	- easy to understand
- Evolvability
	- easy to make changes

### Operability

To make things easier to operate

- provide observability
- avoid single point of failure
	- -> no down time when updating a machine
- good documentation
	- finite state machine of all the things that may happen

### Simplicity

- complex -> bad operability & evolvability
- abstraction reduces accidental complexity
	- accidental complexity = complexity rising not from design but implementation
	- pros of abstraction
		- hides implementation details
		- can be reused
		- benefits all apps using it when improved
	- e.g. SQL

## Database

### One-to-Many Relationship

**Object-Relational Mismatch Problem**

Many real life data has **one-to-many** relationship e.g. a person may have several work experience, but relational tables aren't like that, so a translation layer between database model & application code is needed.

![[ddia-fig2-2.png]]

**Solutions**

- traditional SQL model: creating multiple tables with foreign keys to the common table
	- cons
		- bad locality: needs to perform multiple queries or multi-way join to get all data
	- ![[ddia-fig2-1.png]]
- later SQL versions
	- use JSON datatype
	- pros
		- good locality
			- everything in one place
			- only need one query
- encode those as JSON and store as text
	- cons
		- can't query the keys in the text json

### Many-to-One & Many-to-Many Relationship

**Problems of document model**

> Data has a tendency of becoming more interconnected as features are added to applications.

Many tree-like one-to-many data actually become graph-like many-to-many relationship when scaling and adding new features. 

e.g. a person has 2 schools in his profile page, but the schools should also have the person in their profile page

Document databases e.g. MongoDB, which excel at tree-like structures, have weak or no support for joins as one-to-many relationships don't need joins. This makes them not suitable for many-to-many relationships.

![[ddia-fig2-4.png]]

**Problems of network model**

Network model stores hierarchical as a graph. Each record can have multiple parents.

To query or update a record, the application code has to go through the graph from the root, making it complicated and inflexible.

**Relational model the solution**

- query optimizer does the heavy-lifting, not the application code
- declare a new index to query data in a new way
	- query optimizer will automatically choose the best index

### ACID

The 4 properties that define a **transaction**.

- atomicity
- consistency
- isolation
	- transactions are isolated to each other
- durability

Typically a trait of RDBMS, while NoSQL DBs typically don't support it.

### CAP

A distributed system will either be consistent or available when partitioned (a part is down).

- Consistency
	- the read value is always the most recent
- Availability
	- you can read whenever you want
- Partition tolerance
	- misleading because partition will happen

Partition / network failure is unaviodable in a distributed system, so the choice is whether we want consistency or availability when it happens. Typically, RDBMS chooses consistency over availability, while NoSQL chooses availability over consistency.

If we have 3 servers, and one of them is down i.e. the network is partitioned

![[sys-des-cap-ex.png]]

If we choose consistency, we will block all writes to the other servers (n1 & n2), thus making the system unavailable. If we choose availability, we will accept writes to n1 & n2 and sync them to n3 when it's back up.

### Primary Key

- uuid (universally unique identifier)
	- how to generate
		- timestamp
		- random
	- pros
		- unique
		- stateless
	- cons
		- not intrinsically sortable
		- performance issue for MySQL
- integer
	- how to generate
		- auto increment
	- pros
		- readable
	- cons
		- not unique across distributed systems
		- stateful
			- neet to consult db to know the next integer

### Index

- lookup time with [[CS 411 Database Systems#B + Tree|B Tree]] is $O(\log n)$

### Handling Hierarchical Data

If your data is a tree-like structure (undirected graph), you can design your relational db schema in multiple ways.

#### Multiple Tables

Use multiple tables with each non-root table having a foreign key referencing to the parent.

**Analysis**

- pros
	- ?
- cons
	- may have multiple tables storing the same kinds of information
		- e.g. managers & SWEs are all employees

#### Adjacency List

Have a column recording to the parents. 

**Minimal schema example**

- id
- parent_id

See [[SQL#Recursive Queries]] for quering a subtree

**Analysis**

- pros
	- simple
- cons
	- need recursive queries to get a subtree, slow in deep trees

#### Nested Sets

A segment tree. Record left & right values in a row.

**Example table**

id | name            | left  | right
---|------------------|------|------
 1 | Electronics      |   1  |  12
 2 | Cell Phones      |   2  |   7
 3 | Smartphones      |   3  |   4
 4 | Basic Phones     |   5  |   6
 5 | Computers        |   8  |  11
 6 | Laptops          |   9  |  10
 7 | Desktops         |   8  |   9
 8 | TV & Home Theater|  11  |  12
 9 | Books            |  13  |  18
10 | Fiction          |  14  |  15
11 | Non-Fiction      |  16  |  17
12 | Music            |  19  |  20

Exclusively use `left` & `right` to do queries (i.e. `id` isn't involved when quering)

**Analysis**

- pros
	- faster to query a deep subtree
- cons
	- slow insertion: need to update the `left` & `right` fields of many records when inserting or moving a node

#### Lineage Column / Path Enumeration / Materialized Path

Store the path in a field.

**Example table**

id | name            | path
--|--|--
 1 | Electronics      |   1
 2 | Cell Phones      |   1/2
 3 | Smartphones      |   1/2/3
 4 | Basic Phones     |   1/2/4
 5 | Computers        |   1/5
 6 | Laptops          |   1/5/6
 7 | Desktops         |   1/5/7
 8 | TV & Home Theater|   1/8
 9 | Books            |   9
10 | Fiction          |   9/10
11 | Non-Fiction      |   9/11
12 | Music            |   12

**Analysis**

- pros
	- very easy to query a subtree
		- e.g. `LIKE '1/2/%'`
- cons
	- very complex to move a node
		- need to update the path of itself and all its children
	- no referential integrity

#### Closure Table / Bridge Table

Have a dedicated table recording the relationship.

**Example relationship table**

For 1 -> 2 -> 3

ancestor_id | node_id
--|--
 1 | 1
 1 | 2
 1 | 3
 2 | 2
 2 | 3
 3 | 3

(omitting primary key)

**Analysis**

- pros
	- easy to select a subtree
- cons
	- complex to move a node
	- relationship table $O(n^2)$ space worst case

#### References

- [Hierarchical Data in SQL: The Ultimate Guide](https://www.databasestar.com/hierarchical-data-sql/)
- [Hierarchical Database, multiple tables or column with parent id? | Stack Overflow](https://stackoverflow.com/a/2341295/15493213)

### Federation

- split db by functions
- similar pros & cons to [[#Sharding]]
- pros
    - less traffic for each db
    - smaller db -> more fit into memory -> less cache misses
    - can write to different dbs in parallel
- cons
    - joining data from 2 dbs is complex

### Denormalization

- normalization reduced data duplication, while denormalization increases it
- good for read-heavy applications
- pros
    - reduce needs of complex joins
        - especially if data is distributed with [[#Federation]] or [[#Sharding]]
- cons
    - duplicated data
    - expensive writes
    - more complicated to enure that redundant copies of data is consistent

## NoSQL


- high scalability with horizontal scaling
- high availability with redundancy
    - replicas
- data don't get removed instantly -> can undelete

choose it over RDBMS if

- needs very low latency
- no relationship between data
- unstructured / schema always changing
- huge amount of data


### BASE

properties of [[#NoSQL]]

- Basically Available
    - guarantees availability
- Soft state
    - the state of the system may change over time even without input
- Eventual consistency

### Wide Column Store

![[Pasted image 20240823064002.png]]

- good for
    - time series data
    - large scale data
    - write-heavy scenario
    - e.g. logging & real time analytics
- e.g. HBase & Casandra

## Replication

### Leader-Based Replication

- 1 replica leader/master, others followers/slaves
- write to leader, read from any
- leader replicates changes to followers (sync or async)
    - with replication logs
- built-in for relational databases & message queues of high availability (e.g. Kafka & RabbitMQ)

#### replication methods

- sync
	- leader wait for response
	- -> high durability
- async
	- leader don't wait for response
	- -> high avaibility

Leader-Based Replication often uses async replication

#### adding a new follower

1. set up a follower node with a snapshot of the leader
2. sync with the leader with leader's log 

#### failover

- only 1 follower and it dies -> read from leader
- multiple followers and one dies -> redirect its traffic to other followers
- leader dies -> promote a follower to leader
    - possible data loss since it may not be up to date with the leader if using async

### Multi-Leader Replication

- only for across data centers, while still using [[#Leader-Based Replication]] inside each data center
- needs to resolve write conflicts

### Leaderless Replication

- writes to several replicas in parallel
    - defined as success if $x$ out of $n$ is successful
- read from several replicas in parallel, and use version number to decide which is newer
- no failover
- used by key-value stores to support high availability
- e.g. DynamoDB

#### Quorums

- $n$ relicas
- $w$ confirmations required for each write
- $r$ confirmations required for each read
- if $w+r>n$, we're gauranteed to read the latest data -> [[#strong consistency]]
    - for fast read, $r=1, w=n$
    - for fast write, $w=1, r=n$
    - data loss may still happen if there are 2 concurrent conflicting writes, which need to be resolved
- sloppy quorums
    - when some of the replicas fails, we can activate some backup nodes, which will result in a different set of nodes
    - if we still accept the writes as long as there are $w$ nodes available, it's called a sloppy quorum, where $w+r>n$ don't guaranteed [[#strong consistency]]
    - hinted handoff - when a node is back up, the backup node will push the changes to the node
    - improve availability at the cost of consistency

#### Resolving conflicts

##### version vector / vector clocks

- a way to detect conflicts
- maintain a vector of tuple `(Server No., write counter of this server / version)`
- compare 2 vectors to check if there's a conflict
    - ancestor-descendant -> no conflict
    - siblings -> have conflict
- ![[sys-des-vector-lock.png]]
- cons
    - vector can grow rapidly

##### last write wins

- a way to resolve conflicts
- have a timestamp for each write
- when resolving write conflicts, use the one with the biggest timestamp
- supported by [[Cassandra]] & Redis
- achieves eventual consistency
- sacrifice durability, may have data loss
    - concurrent writes to the same key all appear as successfuly, but only one of them is used
    - we can minimize data loss by update each field based on primary key independently ([[Cassandra]]'s approach)
        - ![[sys-des-cass-res.png]]

### Handling failures

- for [[#Leaderless Replication]], handle temporary failure with using sloppy quorum
- use merkle tree to sync data
    - tree with each node being the hash of its subtree

## Sharding

Partitioning/splitting the database accross nodes/servers. [[#Horizontal Scaling]] for database.

- pros
    - lower traffic per server
    - failure more localized
    - less data in a server -> more data in cache -> less cache misses
- cons
    - complicated joins across different shards

### Range Based Sharding

- distribute based on the 1st letter of the key
    - e.g. A-C at shard 1, D-F at shart 2, ...
- cons
    - may have unbalanced servers

### Vertical Partitioning

- partition by different features
	- e.g. profiles, messages, connections, etc.
- cons
	- table can still be large -> need repartition

### Key/Hash-Based Partitioning

- hash -> mod by N to distribute to N servers
- problems
	- add servers -> need to redistribute all the data -> very expensive
		- solution: [[#Consistent Hashing]]
			- MemeCached uses this
	- some keys are more popular than the others
		- solution: dedicated shards for celebrities

### Directory-Based Partitioning

- maintain a lookup table
- pros
	- easy to add servers
- cons
	- lookup table -> single point of failure
	- constantly access lookup table -> impact performance

## Load Balancing

request id -> hashed request id -> mod by n (# of servers) -> direct to the server

### load balancer features

- distribute loads across backend servers
- SSL termination
    - decrypt requests & encrypt responses s.t. backend servers don't need to do it
- can act as a reverse proxy

### load balancing layers

- layer 4 - transport layer
    - distribute loads based on ip address
    - faster & less computation needed
- layer 7 - applicaton layer
    - distribute loads based on contents

### Cost of adding new servers

New servers -> some requests will be directed to a different server -> cache miss
### Consistent Hashing

Goal: Minimize the cost when adding new servers. To do that we want to have as few mappings changed as possible.

Key concept: Randomly assign servers to a position in an arbitrary circle, and each of them serve the requests closest to them (in the counterclockwise direction)

Each object's location = hashed key mod # seats in the ring

![[consistency-hashing.png]]

To make it more balanced, we'll have multiple angles for each server scattered around the pseudo hash circle.

![[sys-des-consis-hash-2.png]]

When 1 server is added, only $k/N$ keys would be reassigned, where there are $k$ keys & $N$ servers.

reference

- <https://www.toptal.com/big-data/consistent-hashing>
- <https://www.youtube.com/watch?v=zaRkONvyGr8>

## Distributed Systems

### Rate Limiter

#### motivation

- prevent DoS attacks
- reduce cost / resource used
    - if using paid 3rd party APIs

#### requirements

- client-side or server-side (assuming server-side)
- rate limit based on IP? User ID? etc.
- Work in a distributed environment?
    - shared across servers / processes or not
- separate service or in application code
- Do we inform the user?

#### placement

- at server side
- between client & server, as a middleware
    - normally supported by API gateway (a kind of reverse proxy)

#### algorithm

- token bucket
    - a bucket of tokens, indicating capacity
    - each accepted request consumes a token
    - if no token in the bucket, drop the request
    - bucket refill tokens periodically
    - parameters
        - bucket size
        - refill rate 
            - how many tokens per second
- leaking bucket
    - a fixed sized FIFO queue
    - request processed at  rate 
    - parameters
        - bucket size
        - process rate 
- fixed window counter
    - a max amount of requests per time slot
    - parameters
    - parameters: $n$ requests per $p$ seconds window
    - memory needed
        - assuming rate limit based on user ID
        - user ID 8B
        - timestamp 4B (32-bit)
            - 2B if only store minutes & seconds
        - counter 2B
        - each user 12B, excluding overheads
        - 1M users -> 12MB
    - cons
        - burst requests around the split of 2 time windows can cause more requests than the quota to go through
- sliding window log
    - keep track of request timestamps
    - window = $[t-p, t]$, where $t$ = timestamp of the latest request, $p$ = window size in time
    - when a new request comes in, remove the timestamps in window smaller than $t-p$, and set window start time as $t-p$
    - if window size smaller than max, accept the request and add the timestamp in the window
    - parameters: $n$ requests per $p$ seconds
    - memory needed
        - assuming rate limited based on user ID, max requests an hour
        - user ID 8B
        - each timestamp 4B
        - each user 8B + 4B x 500 = 2kB, excluding overheads
        - 1M users -> 2GB
    - pros
        - accurate rate limiting
    - cons
        - requires a lot of memory since we're storin timestamps instead of counters
- sliding window of tiny fixed window counters
    - fixed window counter + sliding window
    - rate limit: $n$ requests in 1 hour
    - use fixed windows of size $\dfrac{1}{k}$ hr, aggregate the counters of the past $k$ windows, and compare with $n$
    - set counter TTL to 1 hr
    - memory usage much smaller than "sliding window log" since we store counters instead of timestamps
        - roughly $k$ times the usage of "fixed window counter" since we use $k$x more windows
- sliding window counter
    - if a request comes in at $x\%$ of the current window, window size = $(1-x\%)$ x number of requests in previous window +  number of requests in current window
    - accept if window size < max
    - parameters: $n$ requests per $p$ seconds
    - ![[sys-des-sliding-window-counter.png]]
    - pros
        - solve the spike problem in fixed window counter
    - cons
        - it assumes the requests in the previous window is evenly distributed

#### design

- Use in-memory cache like Redis to store the counters.
- high level architecture
    - ![[rate-limiter-high-arch.png]]
- save rules as config files on disk
    - have workers to pull and store in cache
- response headers
    - `X-Ratelimit-Remaining`
    - `X-Ratelimit-Limit`
- when exceeds rate limit
    - return 429 too many requests
    - return `X-Ratelimit-Retry-After` in header
    - can choose to drop it or send it in a queue
- detailed architecture
    - ![[sys-des-rate-limiter-detailed-arch.png]]
- challenges in a distributed environment
    - race condition
        - when 2 requests read the same counter at the same time
            - solution: lock
                - slow
            - solution: atomic operation with Redis
                - read count -> write new count, as an atomic operation
    - synchronization across rate limiters
        - solution: sticky session - a client always use a specific rate limiter
            - neither scalable nor flexible
        - solution: use the same Redis as data store
- performance optimization
    - [[#Multi Data Centers]] (or edge servers) setup s.t. rate limiters can be close to users
        - sync with eventual consistency
- monitoring
    - gather data to understand if the rules or algorithms are working well

### Unique ID Generator

**Requirements**

- unique & sortable
- ID increments by time but not necessarily by 1
- numerical
- within 64-bit
- generate 10k IDs per second

#### [[#Multi-Leader Replication]] auto increment

- auto increment but by $k$ where there are $k$ db servers
- cons
    - hard to scale with [[#Multi Data Centers]]
    - no time consistency (later time -> bigger number) across servers
    - problems when servers are added/removed

#### UUID

- 128-bit
- low probablity of collision
    - 1B per second x 100 years -> P = 50% for having 1 collision
- pros
    - each server generate their own UUID independently
    - easy to scale
- cons
    - 128-bit long
    - no time consistency
    - non-numeric

#### ticket server (Flickr)

- central server in charge of auto increment
- pros
    - works well with medium-scale apps
- cons
    - single point of failure

#### Snowflake (Twitter)

- ![[sys-des-snowflake-id.png]]
- 64-bit
    - sign bit - 1 bit
        - always 0
    - timestamp - 41 bits
        - epoch time
        - 69 years
    - datacenter ID - 5 bits
        - max 32 datacenters
    - machine ID - 5 bits
        - max 32 machines each data center
    - sequence number - 12 bits
        - auto increment by 1, reset to 0 every ms
        - max 4096 IDs per ms for a machine
- pros
    - satisfies all the requirements
- important problems / tradeoffs
    - clock synchronization problem
        - sol: Network Time Protocol
    - we can allocate the timestamp & sequence number bits to fit our needs
        - more timestamp bits & less sequence number bits -> for low concurrency long-term applications
    - needs high availability

### Key-Value Store

#### requirements

- operations
    - `put(key, value)`
    - `get(key)`
- small key-value pair, < 10kB
- high availability
- high scalability
- automatic scaling
    - add/remove servers automatically based on traffic
- low latency

#### single server

- store as a hash table in memory
- to fit more data
    - data compression
    - store frequenty used data in memory, the rest on disk
- reaches capacity easily

#### distributed server

- [[#CAP]] - do we want consistency or availability during network failures?
- data partition
    - for a large applicaton with a lot of data, it's not possible to fit all data inside a single server, so we would want to partition it
    - challenges
        - distribute data evenly
        - minimize data movement when add/remove nodes
    - [[#Consistent Hashing]]
        - auto scaling - add/remove servers based on loads with minimal cost of data movement
        - allocate virtual nodes based on server capacity 
- data [[#replication]]
    - replicate data to $k$ servers 
        - to closest $k$ servers on the hash ring clockwise
            - physical servers not virtual nodes since a physical server may have multiple virtual nodes
    - replicas are placed across data centers for better reliability
        - since nodes at the same data center often go down together
    - we can achieve [[#strong consistency]] or not by setting [[#Quorums]] parameters
    - eventual consistency is usually selected for highly available systems
- resolving inconsistency - see [[#Leaderless Replication#Resolving conflicts]]
- handling failures
    - detecting failures - [[CS425 Distributed Systems#Epidemic Multicast / Gossip Protocol|gossip protocol]]
        - we need multiple sources to confirm a server is down, but all-to-all multicasting (each tells everyone else) is inefficient
        - instead, each node pings its status to some random nodes periodically, if one node hasn't been updated for a long while, it's considered online
    - [[#Handling failures]]

#### architecture

-  main features
    - `get(key)` & `put(key, value)` APIs
    - a coordinator node between client and nodes
    - nodes distributed using [[#Consistent Hashing]]
    - data is replicated to multiple nodes
    - ![[sys-arch-kv-store-techniques.png]]
- ![[sys-des-cassandra-arch.png]]
    - [[Cassandra]] architecture
- write operation
    - log the write request in commit log
    - save to memory cache
    - flush the data to SSTable (sorted-string table) when memory cache is full
- read operation
    - return data if key is in memory cache
    - read from SSTable with bloom filter if not in memory cache

## Caching

- See [[Computer Architecture#cache]]

### Advantages of caching

- reduce network calls
- reduce repetitive calculations
- reduce DB load

### In-memory cache vs. global cache

- in-memory cache
	- fast
	- data inconsistency across multiple caches
	- if requests are randomly load balanced across servers, there would be a lot of cache misses
	- e.g. Memcached, Redis
- global cache
	- slower
	- all clients access the same global cache so no data inconsistency problem
	- e.g. CDN

### Cache Population Policy

- read strategies
    - cache aside
        - cache miss -> application fetch data from db -> application write to cache
        - application manages all the stuff
    - read-through
        - cache miss -> cache fetch data from db -> write to cache
        - cache handles everything, application doesn't communicate with db directly
    - refresh-ahead
        - when cache entry is fetched, fetch latest data from db if close to expiration
        - performance depends on prediction accuracy
- write strategies
    - write-around
        - directly write to db, bypassing cache
    - write-through
        - write to cache -> write to db, SYNCHRONOUSLY
        - pros
            - consistent data
            - no data loss
        - cons
            - high latency
    - write-behind/write-back
        - write to cache -> write to db, ASYNCHRONOUSLY
            - with a queue
        - pros
            - low latency
        - cons
            - low consistency
            - may have data loss

### Cache Eviction Policy

- first in first out
- least recently used
- least frequently used

### CDN

mostly static files

![[sys-design-cdn.png]]

## Async

- slow operations should be done asyncly
- pre-process
	- have the thing ready before user access if being out-of-date is acceptable

### Message Queues

![[sys-des-mq.png]]

- a queue for requests
- in memory

#### scaling

- can scale producer & consumer independently
- queue to big -> add more workers in consumer

#### Back Pressure

- stop accepting requests when queue is full
- can be used with [[Computer Networks#exponential backoff|exponential backoff]]

## Microservices vs. Monolith

You probably don't need to use microservices.

[Microservice Story - A collection of technical blog ahout microservice & monolith](https://www.microservice-stories.com/)

### Bad microservices design examples

[Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90)

[HackerNews dicussion](https://news.ycombinator.com/item?id=35811741)

> This is not a discussion of monolith vs serverless. This is some terrible engineering all over that was "fixed". - [LASR](https://news.ycombinator.com/user?id=LASR)

## MapReduce

- to process large amounts of data in parallel
- map: label
	- input: raw data
	- output: (key, value)
- reduceL aggregate and organize
	- input: many (key, value)
	- output: (key, value)
- e.g.
	- ![[sys-des-mr-1.jpg]]
	- ![[sys-des-mr-2.png]]

## Storing passwords in the database

- db entry
	- hash(password + salt)
	- salt
- register flow
	- randomly generate a salt -> combine with user entered password -> hash -> store hashing result & salt into database
- auth flow
	- retrieve user's salt from db -> combine with entered password -> hash -> compare with db entry
- ref
	- <https://www.youtube.com/watch?v=zt8Cocdy15c>

## Case Study

### template

- basic calculations
    - 1 byte / 1B = 8 bits
    - an ASCII character uses 1B
- clarify requirements
    - features
    - expected traffic
    - consistency vs. availability
        - do we need ACID or just eventual consistency
        - do we need high availability
    - acceptable latency
    - read-to-write ratio
        - for a social network, users who don't react/post vs. users who do
    - content type & size
        - video platform - how long is the video?
- estimations
    - on storage
- implementation
    - design high level architecture -> discuss with the interviewer, ask for feedbacks -> dive into the specifics of each components
    - What kinds of data do we need to store? What's the best db for each? 
        - big files like image/video -> S3
    - if low latency is required, we can use a queue
    - [[#Load Balancing|load balancer]] placements
        - between clients & applicaton servers
        - between applicaton servers & db servers
        - between applicaton & cache servers
    - operations
        - monitoring 
            - metrics
                - QPS
                - latency
            - logging
        - deployments
    - telemetry

### URL Shortener

[Educative.io solution](https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers/system-design-tinyurl)  
[System Design Primer solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md)

![[tinyurl-grokking-arch.png]]

- requirements
    - custom link?
    - private links?
    - update/delete by users?
    - traffic?
        - 100M new URLs a day -> 365B for 10 years
    - multiple short links for a long url? 
    - default expiration time?
    - remove long unused links?
    - telemetry/analytics?
- APIs
    - `POST /api/v1/shorten`
        - return short url
    - `GET /api/v1/<shortUrl>`
        - return long url for redirection
            - `301 redirect` - permant redirection, so subsequent requests to the short url will be redirected immediately without calling the short url service
            - `302 redirect` - temporary redirection, so subsequent requests to the short url will be still call the short url service
- schema
    - link table
        - short link 7 chars -> 7B
            - is use bae62 -> $62^7$ = 3.5T unqiue urls
        - expired_at 5 chars -> 5B
        - created_at 5 chars -> 5B
        - original url 512 chars -> 512B
        - 530B for a record -> 5.3B for 10M records
    - user table
- database
    - selecting a db
        - since we don'e need relationships and are expecting high traffic, we can use a NoSQL db for the scalability & availability
    - scaling
        - [[#Sharding]]
- to generate unique urls
    - counter
        - complicated with horizontal scaling
    - random -> base62
        - may have collision
    - ip address + timestamp or the long url -> md5 -> base62
        - very low chance of collision
            - check if collision exists with bloom filter
        - md5
        - base62
            - 26+26 english letters & 10 numbers
            - make a number into 62-based
        - base64
            - base62 with `+` & `/`
            - not suitable for a url
    - a dedicated key generation service & db
        - see [[#Unique ID Generator]]
        - generate keys and store in key db
        - when we need a new url just fetch a generated one from db
        - pros
            - fast
            - don't need to worry about collisions
        - cons
            - complexity for dealing with concurrency
                - e.g. 2 servers trying to fetch the same key
            - single point of failure, or additional complexity of [[#replication]]
- expired links cleanup
    - options
        - on-demand
            - check expiration when accessed, if expired then delete and return error
        - cronjob to remove expired links
    - if using a key generation service & key db, recycle the key by putting it back to the db after link is deleted

### Web Crawler

![[sys-des-web-crawler.jpg]]

- usages
    - search engine indexing
    - web archiving
    - data mining
    - web monitoring
        - e.g. discover piracy
- requirements
    - purpose: search engine indexing
    - traffic: 1B we pages a month
    - HTML only
    - only consider newly added or edited web pages
    - store HTML up to 5 years
    - ignore duplicate content
    - characteristics
        - scalability
        - robustness
            - handle bad HTML, unresponsive servers, malicious links, etc.
        - politeness
            - reasonable request rate on a host
        - extensibility
            - flexible for new requirements
                - e.g. store image as well
- estimation
    - 1B per month -> 400 QPS
    - peak QPS = 400x2 = 800
    - assume average web page size 500KB
    - 50KB x 1B = 500TB of storage per month
    - 500TB x 12 x 5 = 30PB for 5 years

#### design

- ![[sys-dis-web-crawler-high.png]]
- select seed URLs
    - select it based on
        - locality
        - topics
    - e.g. the seed URL of a university is its domain name
- URL frontier
    - a FIFO queue for URLs to be downloaded
    - BFS
    - ensure politeness - only download 1 page at a time from a host
        - map each host to a download thread
        - ![[sys-des-url-frontier.png]]
    - proiritizer - determine URL priority
        - use PageRank, traffic etc.
        - assign URLs into queues of different priorities
        - queues with higher priority would have a better change of being selected
        - ![[sys-es-web–crwler-prioritizer.png]]
    - ensure freshness - keep updated
        - recrawl based on web pages' update history
        - recrawl important pages more frequently
- HTML downloader
    - download HTML
    - check `Robots.txt` (Robot Exclusion Protocol) to check pages allowed to be downloaded
        - cache it
- DNS Resolver
    - URL -> IP addres
- content parser
    - parse HTML
    - we need server-side rendering / dynamic rendering before parsing because many links are dynamically generated with JS
- content seen
    - 26% of web page are duplicated contents
    - compare hash values of 2 web pages
- content storage
    - most on disk
    - popular content in memory
- URL extractor
    - extract links from HTML
- URL filter
    - ignore some URLs based on content types, extensions, blacklist etc.
- URL seen
    - keep track of visited URLs
    - hash table or bloom filter
- URL storage
    - store visited URLs

#### performance optimization

- distributed crawl
    - ![[sys-web-crawler-distributed-crawl.png]]
- cache DNS Resolver
    - DNS requests are often synchronous, so can be a bottleneck
    - cache the domain -> IP mapping, update periodically with cronjob
- locality
    - distribute crawl servers close to the hosts
- short timeout

#### Robustness

- [[#Consistent Hashing]] for [[#Load Balancing]]
- save crawl states and data
    - restart a crawl by loading the states and data
- exception handling
- data validation
    - avoid spider traps
    - exclude noise

#### Extensibility

We can easily add new features by plugging in new modules

![[sys-des-web-crawler-9.png]]

### Notification System

- requirements
    - notifications to support
        - push notification
        - SMS message
        - email
    - soft real time, accepting slight delay
    - supporting devices
        - iOS, andriod, laptop, desktop computer
    - trigger
        - client app
        - server-side
    - user can opt-out
    - traffic
        - 10M push notifications
        - 1M SMS
        - 5M emails

#### different types of notifications

- iOS push notification
    - provider builds and sends request to APNS (Apple Push Notification Service)
        - request contains device token & payload
- Android push notification
    - sends request to FCM (Firebase Cloud Messaging) instead of APNS
- SMS message
    - use 3rd party services e.g. Twilio, Nexmo
- email
    - use 3rd party services e.g. Mailchimp, SendGrid
    - or set up own email server

#### gathering contact info

- save user contact info when the user first downloads the app or signs up
    - `user` table & `device` table
        - a user can have multiple devices
        - ![[sys-des-not-tables.png]]

#### design

**initial version**

![[sys-des-not-des.png]]

- notification system
    - provide APIs to services
    - basic validations
    - build and send requests to third party notification services
- third-party services
    - note that some may be unavailable in some space and time

**scaled version**

![[sys-des-not-des-2.jpg]]

- notification servers
    - fetch data from cache or DB
    - push notification data to message queues
- cache
    - user info, device info, notification templates
- message queues
    - a message queue for each notification type
- workers
    - pull notification events from message queue, build the requests, and send to third-party service

#### Reliability

- cannot have data loss
- retry if failed
    - worker fails to send -> put back to message queue
- to prevent duplicates, check event ID first and ignore already processed ones

#### additional considerations

- notification template
    - many notifications follow a similar format
    - use preformatted notification template with customizable parameters to avoid building every notification from scratch
    - improve consistency & efficiency
- notification setting
    - respect users' notification settings
    - `(user_id bigInt, channel varchar, opt_in boolean)`
    - check if user is opted in for this notification type (channel) before sending
- rate limiting
    - limit the number of notifications a user can receive
- security
    - our APIs requires authentication
- monitor message queues
    - if too many in the queue, add more workers
- events tracking
    - tracking open rate, click rate, and engagement for notifications sent

![[sys-des-not-44.png]]

### News Feed

alt: Twitter Timeline

#### requirements

- both mobile & web
- features
    - publish a post
    - see followers' posts
- sorting
    - by reverse chronological order
- friends limit
    - 5k a user
- traffic
    - 10M DAU (daily active users)
- types
    - text, images, and videos

#### APIs

- publish API
    - `POST /v1/me/feed`
    - params
        - `content`
        - `auth_token`
- retrieve API
    - `GET /v1/me/feed`
    - params
        - `auth_token`

#### Design

**publishing a post**

high level

![[sys-des-newsfeed-design.png]]

detailed

![[sys-des-newsfeed-design-deep.jpg]]

- web servers
    - enforce authentication & rate-limiting
-  fanout service
    - for building news feed
- notification service
    - send notifications to followers

**building newsfeed**

high level

![[sys-des-newsfeed-des-high.png]]

detailed

![[sys-des-newsfeed-retrieve-deep.jpg]]

- news feed service
    - fetch post IDs & user IDs from news feed cache
    - fetch post & user details from post & user cache
    - construct news feed and return
- cache
    - ![[sys-des-newsfeed-cache.png]]

#### Fanout Service

**Fanout Approaches**

- fanout on write (push)
    - publish a post -> insert into the cache of each of the follower's cache (build news feed)
    - pros
        - fetching news feed (read) is fast
    - cons
        - hotkey problem: if the user has a lot of followers, fetching followers list and building news feed for all is time consuming
        - resource wasting to build news feed for inactive followers
- fanout on read (pull)
    - build news feed on read (on-demand)
    - pros
        - on-demand so won't waste resource on inactive users
    - cons
        - slow to fetch news feed
            - may need complex join
- hybrid
    - use push for normal users, pull for celebrities
    - read -> fetch the prebuilt news feed and pull contents from celebrities

**Fanout Flow**

![[sys-des-newsfeed-fanout-design.jpg]]

1. fetch follower IDs from graph db
2. fetch followers info from user cache, and filter out muted ones (or those the user doesn't wish to share this post with)
3. send followers list & new post ID to message queue
4. fanout workers fetch data from message queue
5. insert news feed data `(post_id, user_id)` to news feed cache
    - store only IDs to prevent large memory consumption
    - won't have cache miss unless user scroll through thousands of posts 

### Chat System

#### requirements

- type: 1v1 & group chat
- platform: mobile & web
- traffic: 50M DAU
- group member limit: 100
- features
    - 1v1 chat
    - group chat
    - online indicator
    - only text
- message limit: 100k characters
- no end-to-end encryption
- chat history: forever

#### communication protocol

- polling
    - client periodically asks server if there's message
    - cons
        - costly
        - resource wasting
- long polling
    - client sends a long polling request -> server holds the connection open until there's a new update -> server responds with the update and the connection is closed (customary for HTTP) -> client sends a new long polling request
        - if server timeout and close the connections, client will immediately sends a new long polling request as well
    - cons
        - if using load balancing the server receiving a message from the sender may not have the long polling connection with the intended receiver
        - server doesn't know if the client is still there
        - still inefficient
- websocket
    - bi-directional
    - persistent (unlike HTTP)
    - use websocket for both sender - server & server - receiver
    - the most used

#### design

![[sys-des-chat-design-sv.jpg]]

- chat service is stateful because each client has a persistent websocket with a chat server
- use 3rd party service for push notification

![[sys-des-chat-design.png]]

- chat servers
    - send/receive messages
- presence servers
    - online/offline status
- API servers
    - login, signup, profile settings, etc.
- notifications servers
- key-value stores
    - chat history

#### data storage

- user data in RDBMS
    - use [[#Replication]] ([[#Leader-Based Replication]]) & [[#Sharding]] to satisfy availability & scalability
- chat history in [[#Key-Value Store]]
    - requirements
        - chat data is enormous
        - only recent chats are accessed frequently
        - support searching (random access of data)
        - read-to-write ratio about 1:1
    - why [[#Key-Value Store]]
        - horizontal scaling
        - low latency
        - RDBMS doesn't handle long tail of data well, random access is expensive once index grows large
        - used by other chat systems 
            - e.g. Facebook Messenger users HBase, Discord uses Cassandra
    - 1v1 chat schema
        - ![[sys-des-chat-design-chat-schema.png]]
        - use `message_id` to decide message order because `created_at` may collide
    - group chat schema
        - ![[sys-des-chat-design-group-schema.png]]
        - composite pk of `(channel_id, message_id)`
        - use `channel_id` (group id) as the partition key
    - `message_id` generation
        - see [[#Unique ID Generator]]
        - properties
            - unique
            - newer one has bigger value
        - approaches
            - [[#Snowflake (Twitter)]]
            - local auto increment within a group

#### deep dive

- service discovery
    - find the best chat server for a client
        - based on location, capacity, etc.
    - e.g. Apache Zookeeper
- 1v1 message flow
    - ![[sys-des-chat-1v1-msg-flow.png]]
    - flow
        1. user A sends a message to chat server 1 with websocket
        2. chat server 1 obtains a message ID from the ID generator
        3. chat server sends the message to the message queue
        4. message stored in key-value store
        5. if user B is online, sends the message to its server, chat server 2
        6. if user B is offline, push notification servers send a push notification to user B
        7. chat server 2 sends the message to user B with websocket
- message sync across devices for the same user
    - ![[sys-des-chat-msg-sync-flow.png]]
    - each device has a websocket to the same server
    - each device maintains the last message id on the device
    - if the incoming message's id is bigger, it's a new message
- small group chat message flow
    - ![[sys-des-chat-sgroup-msg-flow.png]]
    - ![[sys-des-chat-sgroup-msg-flow-2.png]]
    - new message is sent to the message queue of every other group members
    - becomes expensive once group is large
- online presence
    - websocket between client & presence server 
    - login/logout -> presence server saves status & timestamp to key-value store
    - disconnection
        - client sends heartbeat to presence server periodically
        - timeout -> mark as offline
    - fanout
        - ![[sys-des-chat-presense-fanout.png]]
        - when online status change, publish even to the channel for each group member
            - websocket
        - expensive for large group
            - use on-demand fetch instead

#### extension

- media files
    - compression, cloud storage, thumbnails
- end-to-end encryption
- client-side caching
- message resent

### Search Autocomplete System

- requirements
    - position: only at beginning
    - suggestions to return: 5
    - ordering: historical query frequency
    - spell check?
        - no spell check or autocorrect
- estimation
    - 10M DAU
    - average 10 searches each person
    - 20B per query (5char x 4w)
    - 20 requests per query (each char input results in a query)
    - 10M x 10 x 20 = 2B queries a day = 24k QPS
    - peak QPS = 24k x 2 = 48k
    - assume 20% queries are new -> 10M x 10 x 20B x 20% = 400MB new data added to storage daily

#### Small Scale Design

- data gathering service
    - gather user input and aggregate in real time
    - store as a frequency table `(query, search frequency)`
- query service
    - return most frequently searched terms from a prefix
    - use [[SQL]] `LIKE prefix% ORDER BY frequency`
        - inefficient in big scale

#### Scalable Design

- trie
    - add frequency info into a regular trie
    - ![[sys-des-google-trie.png]]
    - $O(p+c\log c)$ time to get top k most searched queries from a prefix 
        - $p$ = length of prefix
        - $c$ = num of the decendents / subtree nodes of the prefix
        - $O(p)$ to traverse the prefix
        - $O(c)$ to get all the subtree nodes and their frequency
        - $O(c\log c)$ to sort by frequency and get the top $k$
            - you can probably do it in $O(k\log k)$ with a heap tho
        - ![[sys-des-google-trie-ex.png]]
    - $O(1)$ read time with optimizations
        - set prefix max length
            - set as a small constant like 50 -> reduce $O(p)$ to $O(1)$
        - cache top search querie at each node
            - trading space for time
            - ![[sys-des-google-trie-cache.jpg]]
            - $O(1)$ to retrieve top k in subtree if cache hit
- data gathering service
    - update trie in real time is impractical
        - high latency if traffic is high
        - top k may not change much over time, so it's inefficient to update trie frequently
    - how up to date depends on use case
        - Twitter requires up to date suggestions
        - Google not so much
    - ![[sys-des-google-trie-data-gat.png]]
    - analytics logs
        - `(query, timestamp)`
        - append-only
        - not indexed
    - aggregators
        - high aggregate frequency -> more up to date
        - aggregate logs into frequency table for each time period
        - `(query, frequency, timestamp)`
    - workers
        - build the trie from the aggregated data and save to trie DB periodically
        - async
    - trie cache
        - distributed cache for fast read
        - periodic snapshot of trie DB
    - trie DB
        - option - key-value store
            - hashmap representation of trie
        - option - document store
            - serialized periodic snapshot of trie
- query service
    - ![[sys-des-google-trie-query-svc.png]]
    - to optimize query speed
        - AJAX
        - browser caching
            - save autocomplete suggestions to browser cache with some TTL
        - data sampling
            - only log 1 out of $N$ request to save resource
- trie management
    - create/update from aggregated data
    - update
        - option - update trie directly
            - slow if big
        - option - build new trie periodically and replace old trie
    - delete bad suggestions
        - add a filter layer between API servers & trie cache
        - ![[sys-des-google-trie-filter.png]]
        - bad suggestions are removed from trie DB async as well
    - sharding 
        - shard the trie if too big
        - option - range-based
            - may have uneven distribution
        - option - shard map
            - analyze historical data distribution
            - ![[sys-des-google-trie-shardmap.jpg]]

#### extension

- multi-language support
    - use unicode for trie
- locality
    - build different tries for different countries, storing in CDNs
- trending search queries (real-time)

### YouTube

alt: TikTok

- requirements
    - features: upload & watch videos
    - clients: mobile apps, browsers, smart TV
    - traffic: 5M DAU
    - average daily time spent for a user: 30min.
    - a lot of international users
    - accept most video resolutions & formats
    - needs encryption
    - file size max: 1GB
    - can use public cloud
- estimation
    - 5M DAU
    - average video size 300MB
    - storage
        - 10% of users upload 1 video per day
        - storage needed 5M x 10% x 300MB = 150TB
    - CDN cost
        - users watch 5 videos a day on average
        - $0.02 per GB transferred
        - 5M x 5 x 0.3GB x $0.02 per GB = $150K per day

#### design

See [[Computer Networks#video streaming]] also

![[sys-des-youtube-high.png]]

- CDN
    - store and stream videos to users
- API servers
    - handle everything except streaming video
    - feed recommendation
    - generate video upload URL
    - update metadata DB & cache
    - user signup
    - etc.

#### video uploading

![[sys-des-yt-video-upload-flow.jpg]]

- metadata DB
    - stores video metadata
    - [[#Sharding]] & [[#Replication]] for performance & availability
- metadata cache
    - caches video metadata for better performance
- original storage
    - stores the original videos
    - blob storage
    - S3
- transcoding servers
    - convert to various formats for various devices & bandwith
- transcoded storage
    - stores transcoded video files
    - blob storage
    - S3
- CDN
    - caches videos
- completion queue
    - message queue for video metadata
- completion handler\
    - workers for pulling metadata from completion queue and update to metadata cache & DB
- API servers
    - notify user that the video is uploaded
    - update metadata

#### video streaming

- stream from closest CDN edge server
- streamin protocols (see [[Computer Networks#video streaming#streaming protocols]])
    - MPEG-DASH
    - Apple HLS
    - Microsoft Smooth Streaming
    - Adobe HTTP Dynamic Streaming

#### video transcoding

- transcode into different bitrates for users with different bandwidths & network conditions
- transcode into different formats for compatibility
    - container
        - e.g. `.mp4` `.mov` `.avi`
    - codecs
        - compression/decompression algo
        - e.g. `H.264` `HEVC` `VP9`
- DAG (directed acyclic graph) model for transcoding pipelines
    - like a CICD pipeline
    - ![[sys-des-youtube-transcode-dag.png]]
    - tasks
        - inspection
            - validation
        - video encoding
            - into different resolutions / codecs / bitrates
        - adding thumbmail
            - user uploaded or system generated
        - adding watermark
- architecture
    - ![[sys-des-youtube-transcode-arch.png]]
    - preprocessor
        - split video
            - split into GOP (Group of Pictures) i.e. small chunks of frames
        - generate DAG
            - generate DAG pipeline from config files
        - cache data
            - cache GOPs & metadata
            - retry with cache when encoding fails
    - DAG scheduler
        - split DAG pipeline into stages of tasks and put them into task queue
        - ![[sys-des-youtube-dag-sch.jpg]]
    - resource manager
        - ![[sys-des-youtube-resource-m.jpg]]
        - task scheduler
            1. pick the most important task from task queue
            2. pick the best worker from worker priority queue
            3. dispatch the chosen task to the chosen worker
            4. put the task & worker into running queue
            5. remove the task & worker info from running queue when done
        - task queue
            - priority queue with TODO tasks
        - worker queue
            - priority queue with worker utilization info
        - running queue
            - info about currently running tasks & worker
    - task workers
        - run the assigned tasks
    - temporary storage
        - cache metadata in memory
            - frequently accessed my workers
            - small
        - put video & audio in blob storage
        - data removed once video done

#### optimizations

- parallel video uploading
    - client splits video into GOPs / small chunks and upload in parallel
    - ![[sys-des-youtube-opt-split.png]]
- place upload server close to users
- async with message queues
    - ![[sys-des-youtube-async-mq.jpg]]
    - s.t. each module not dependent on each other, can execute tasks in parallel
- cost optimization from historical patterns
    - only cache popular videos on CDN
        - serve normal videos from video servers
        - Youtube videos have a long-tail distribution i.e. a lot of videos have almost no viewers
    - fewer versions encoded for non-popular videos  
    - short videos encoded on-demand
    - locality
        - no need to distribute regionally popular videos to the world
    - build your own CDN and partner with ISPs

#### security

- presigned URL
    - ![[sys-des-youtube-presign.png]]
    - API servers give user a dedicated URL to upload to S3
    - called "Shared Access Signature" for Azure Blob Storage
- copyright protection
    - DRM (digital rights management) systems
        - e.g. Apple FairPlay, Google Widevne, Microsoft PlayReady
    - AES encryption
        - can authorized users can decrypt
    - visual watermark

#### error handling

- recoverable error
    - retry a few times before returning proper error code
    - e.g. encode failures
- non-recoverable error
    - return proper error code
    - e.g. malformed video format
- common error handlings
    - upload error: retry
    - split video error
        - if old clients can't split videos, pass the entire video to server and split server-side
    - transcoding error: tretry
    - preprocessor error: regenerate DAG pipeline
    - DAG scheduler error: reschedule
    - resource manager queue down: use replica
    - task worker down: retry task on another worker
    - API server down: redirect request to another server
    - metadata cache server down: read from another
        - [[#Leaderless Replication]]
    - metadata DB server down
        - [[#Leader-Based Replication]]
        - leader down -> promote a follower to leader
        - follower down -> read from another

### Google Drive

alt: DropBox, OneDrive

- functional requirements
    - features: upload, download, sync, notifications
    - platforms: mobile & web
    - file formats: all
    - encryption: files need to be encrypted
    - file size limit: 10GB
    - traffic: 10M DAU
- non-functional requirements
    - reliability: no data loss
    - latency: fast sync speed
    - bandwidth: low bandwidth used, especially for mobile users
    - scalability
    - availability: available when some servers down, slowed down, or have network errors
- estimation
    - 50M users, 10M DAU
    - each user has 10GB free space
    - average user upload 2 files a day
    - average file size 500KB
    - read-to-write 1:1
    - storage needed = 50M x 10GB = 500PB
    - upload QPS = 10M x 2 / 86400 = 240
    - peak QPS = 240 x 2 = 280

#### simple design

- storage system
    - store files under `/drive`
- web server
    - upload API
        - simple upload
        - resumable upload
            - `POST /files/upload?uploadType=resumable`
    - download API
        - `GET /files/download`
        - params: `{"path": <download file path>}`
    - get file revisions API
        - `GET /files/list-revisions`
        - params: `{"path": <download file path>, "limit": 20}`
- metadata DB
    - user data, login info, files info, etc.

scaling

- load balancer with dynamic web servers
- metadata DB with replication & sharding
- file storage using S3
    - replication
        - same-regions
        - cross-region

![[sys-des-google-drive-simple-design.png]]

[[#Resolving conflicts]]: first-to-write wins, the later one receives a conflict, to be resolved manually by user

#### scalable design

![[sys-des-gdrive-high-design.jpg]]

- block servers
    - split files into blocks and upload to cloud storage
    - compress & encrypt the blocks before uploading
    - each block has a hash value stored in metadata DB
    - recontruct a file by joining blocks
- cloud storage
- cold storage
    - store inactive files
- load balancer
- API servers
- metadata DB
    - metadata for users, files, blocks, versions, etc.
- metadata cache
- notification service
    - notify when a file is added/edited/removed
    - uses long polling
        - websocket also works but it's more suitable for bi-directional real-time communications
- offline backup queue
    - store and sync the changes when client is back online

#### block servers

**flow**

![[sys-des-gdrive-block-server.png]]

**optimizations**

- delta sync
    - when a file is modified, only sync the modified blocks to cloud storage
    - ![[sys-des-gdrive-block-sync.png]]
- compression
    - each block is compressed
    - different compression algo for different file types
        - e.g. gzip & bzip2 for text files

**tradeoffs of skipping the block server** (client directly uploads to cloud storage)

- pros
    - faster as a files is only transferred once
- cons
    - compression & encryption need to be done in the client, which is platform-dependent
    - client-side encryption is not safe

#### Metadata DB

- requires [[#strong consistency]]: every client sees the latest data
- use a relational database
- schema
    - ![[sys-des-gdrive-metadatadb-schema.jpg]]
    - user: user info
    - device: device info
    - workspace/namespace: root dir of a user
    - file: file into
    - file_version: version history of a file
        - rows are read-only
    - block: blocks of a file
        - construct a file of a version with the correct order

#### upload flow

adding file metadata request & uploading file request sent & processed in parallel

![[sys-des-gdrive-upload-flow.png]]

#### download flow

when a file is modified by another client, notification service notifies the client

![[sys-des-gdrive-download-flow.png]]

1. retrieves the changes from metadata DB
2. request the actual blocks from cloud storage
3. recontruct the file from the downloaded blocks

#### handling file revisions

file revisions can easily take up tons of space, here are some strategies to save space

- no redundant blocks
    - blocks are identical if the hash value is the same
- file revision limit
    - replace oldest version with the latest version when limit reached
- keep valuable versions only
    - files can have a ton of revisions within a short period
- move inactive data to cold storage
    - e.g. Amazon S3 Glacier is much cheaper than S3

#### handling failure

- load balancer failure
    - another load balancer picks up the traffic of a failed one
    - load balancers heartbeat each other
- block server failure
    - another server picks up the jobs of the failed one
- cloud storage failure
    - S3 buckets are replicated across regions
    - try another region if one region dies
- API server failure
    - load balancer redirect traffic to another 
- metadata DB failure
    - [[#Leader-Based Replication]]
- notification service failure
    - all the long polling connections of the failed server need to be reconnect to another server
- offline backup queue server
    - they're replicated
    - consumer of the failed leader queue resub to the newly promoted leader queue
