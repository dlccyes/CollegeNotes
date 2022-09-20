---
layout: meth
parent: Software Development
---

# System Design
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>


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