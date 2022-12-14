---
layout: meth
parent: Software Development
---

# System Design

## Resources

- DDIA
	- 簡中譯 <https://github.com/Vonng/ddia>
	- [pdf](https://github.com/jeffrey-xiao/papers/blob/master/textbooks/designing-data-intensive-applications.pdf)
- Grokking the system design interview
	- [pdf](https://raw.githubusercontent.com/sharanyaa/grok_sdi_educative/master/grok_system_design_interview.pdf)
	- [pdf](http://libgen.rs/book/index.php?md5=3CC8A0D02BBB0644A3839F6B621BB86B)
- Alex Xu
	- [System Design Interview An Insider’s Guide by Alex Xu (z-lib.org).pdf](https://github.com/G33kzD3n/Catalogue/blob/master/System%20Design%20Interview%20An%20Insider%E2%80%99s%20Guide%20by%20Alex%20Xu%20(z-lib.org).pdf)
	- [Youtube](https://www.youtube.com/c/ByteByteGo/)
	- [LinkedIn](https://www.linkedin.com/in/alexxubyte/recent-activity/shares/)
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

## Load Balancing

request id -> hashed request id -> mod by n (# of servers) -> direct to the server

### Cost of adding new servers

New servers -> some requests will be directed to a different server -> cache miss

### Consistency Hashing

Goal: Minimize the cost when adding new servers, we want to as few mapping changed as possible.

Key concept: Randomly assign servers to a position in an arbitrary circle, and each of them serve the requests closest to them (in the counterclockwise direction)

Each object's location = hashed key mod # seats in the ring

![](https://i.imgur.com/GbmxmV8.png)

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

## Caching

- See [Operating Systems](../NTUNotes/Junior/Operating%20Systems)

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
	- ![](https://i.imgur.com/42d2Ye1.png)
	- ![](https://i.imgur.com/iLGgUhI.png)

## Database

### Primary Key

- uuid
	- how to generate
		- timestampe
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

## URL Shortening

<https://www.educative.io/courses/grokking-the-system-design-interview>