---
layout: meth
parent: Software Development
---

# System Design

## Resources

- DDIA (2017)
	- [DDIA pdf | github](https://github.com/jeffrey-xiao/papers/blob/master/textbooks/designing-data-intensive-applications.pdf)
	- 簡中譯 <https://github.com/Vonng/ddia>
- Grokking the system design interview
	- [pdf | github](https://raw.githubusercontent.com/sharanyaa/grok_sdi_educative/master/grok_system_design_interview.pdf)
	- [pdf | libgen](http://libgen.rs/book/index.php?md5=3CC8A0D02BBB0644A3839F6B621BB86B)
- Alex Xu
	- [System Design Interview An Insider’s Guide by Alex Xu (z-lib.org).pdf](https://github.com/G33kzD3n/Catalogue/blob/master/System%20Design%20Interview%20An%20Insider%E2%80%99s%20Guide%20by%20Alex%20Xu%20(z-lib.org).pdf)
	- [Youtube](https://www.youtube.com/c/ByteByteGo/)
	- [LinkedIn](https://www.linkedin.com/in/alexxubyte/recent-activity/shares/)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
	- just a markdown file
- [Gaurav System Design Playlist | Youtube](https://www.youtube.com/playlist?app=desktop&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX)
- [Exponent | Youtube](https://www.youtube.com/@tryexponent)
- [Problems Aggretation](https://drive.google.com/file/d/16wtG6ZsThlu_YkloeyX8pp2OEjVebure/view)
	- from <https://leetcode.com/discuss/interview-question/system-design/1205825>
- [Database Schema Templates](https://drawsql.app/templates/popular)

## Scaling

### Vertical Scaling

- pros
	- fast inter-process communication
	- data consistent
- cons
	- single point of failure
	- hardware limit

### Horizontal Scaling

- pros
	- scale well
- cons
	- slow inter-process communication
		- need RPC between machines
	- need load-balancing
	- data inconsistency

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

Only 2 of the 3 can be satisfied at the same time for any **distributed** data store. 

- Consistency
	- the read value is always the most recent
- Availability
	- you can read whenever you want
- Partition tolerance
	- the must in a distributed data store

Partition tolerance is a must, so the choice is between consistent & availability. Typically, RDBMS chooses consistency over availability, while NoSQL chooses availability over consistency.

### NoSQL

Some nice properties

- horizontal scaling
- redundancy
	- replicas
- data don't get removed instantly
	- can undelete

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

### Handling Hierarchical Data

If your data is a tree-like structure (undirected graph), you can design your db schema in multiple ways.

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
	- need to update the `left` & `right` fields of many records when inserting or moving a node

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

## Replication

### Leader-Based Replication

- 1 replica leader/master, others followers/slaves
- client only writes to leader, changes later replicated to followers (sync or async)
- followers are read-only to client
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

## Load Balancing

request id -> hashed request id -> mod by n (# of servers) -> direct to the server

### Cost of adding new servers

New servers -> some requests will be directed to a different server -> cache miss

### Consistency Hashing

Goal: Minimize the cost when adding new servers, we want to as few mapping changed as possible.

Key concept: Randomly assign servers to a position in an arbitrary circle, and each of them serve the requests closest to them (in the counterclockwise direction)

Each object's location = hashed key mod # seats in the ring

![[consistency-hashing.png]]

reference

- <https://www.toptal.com/big-data/consistent-hashing>
- <https://www.youtube.com/watch?v=zaRkONvyGr8>

## Sharding

Partitioning the database

### Vertical Partitioning

- partition by different features
	- e.g. profiles, messages, connections, etc.
- cons
	- table can still be large -> need repartition

### Key/Hash-Based Partitioning

- N servers -> mod by N
- cons
	- add servers -> need reallocate all the data -> very expensive

### Directory-Based Partitioning

- maintain a lookup table
- pros
	- easy to add servers
- cons
	- lookup table -> single point of failure
	- constantly access lookup table -> impact performance

### Problems

- join is expensive
	- if the target data are located in different shards, than we need to join multiple queries, which is expensive
- fixed number of shards
	- solution: [[#Consistency Hashing]]
		- memcached
	- solution: hierarchical sharding
		- each shard partitioned into many mini-shards

## Distributed DB System

### Master-Slave Architecture

- Write to master -> replicate data to slave
- Read from either of the master or slaves
- Master dies -> elect a new master among the slaves
- e.g.
	- DynamoDB

### Peer to Peer Architecture

- e.g.
	- Cassandra

## Caching

- See [[Computer Architecture#cache]]

### Advantages of caching

- reduce network calls
- reduce repetitive calculations
- reduce DB load

### In-memory cache vs. global cache

tradeoff: speed vs. accuracy

- in-memory cache
	- fast
	- data inconsistency across multiple caches
- global cache
	- slower
	- all clients access the same global cache so no data inconsistency problem

### Data syncing policy

tradeoff: performance vs. accuracy

- write-through cache
	- write to cache -> write to db
	- problem: data inconsistency across multiple caches
- write-back cache
	- write to db -> write to cache
	- problem: performance problem since it has to write back to every cache
- hybrid
	- uncritical data -> write-through
	- critical data -> write-back

## Microservices vs. Monolith

You probably don't need to use microservices.

[Microservice Story - A collection of technical blog ahout microservice & monolith](https://www.microservice-stories.com/)

### Bad microservices design examples

[Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90)

[HackerNews dicussion](https://news.ycombinator.com/item?id=35811741)

> This is not a discussion of monolith vs serverless. This is some terrible engineering all over that was "fixed". - [LASR](https://news.ycombinator.com/user?id=LASR)

## Async

- slow operations should be done asyncly
- pre-process
	- have the thing ready before user access if being out-of-date is acceptable

## Networking Metrics

- bandwidth
	- max throughput
- throughput
- latency

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

### URL Shortening

<https://www.educative.io/courses/grokking-the-system-design-interview>

### Twitter Timeline

source: DDIA

**Approach 1**

- write: post a tweet -> insert into global tweets
	- simple
- read: sql join query to select tweets from those who the user follows
	- complex

Suitable for 

**Approach 2**

- write: post a tweet -> insert into the cache of each of the tweeter's followers
	- complex
- read: fetch the cache
	- simple

Suitable when # read reqs >> # write reqs

**Hybrid**

Approach 2 for tweets from the mass with little followers, and approach 1 for tweets from celebs

i.e. Tweets from celebs are indepedently fetched and then inserted into users' timeline cache

