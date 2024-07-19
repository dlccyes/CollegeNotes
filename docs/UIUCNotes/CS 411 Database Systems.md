
# CS 411 Database Systems

## ER Model

Entity / Relationship Model

![[Pasted image 20240510155418.png]]

Corresponds well to relational model.

### entities

- represented by rectangles

### attributes

- represented by ovals
- an entity has one or more attributes
- a relationship has zero ore more attributes

### relationships

- represented by diamonds
- connecting different entities
- one-one
    - directional edge
- many-many
    - undirectional edge
- ![[Pasted image 20240510155403.png]]

### roles

- when there are 2 or more edges connecting the same entity and relationship, annotate them with roles
- ![[Pasted image 20240510155302.png]]
- ![[Pasted image 20240510155330.png]]

### subclasses

![[Pasted image 20240510155826.png]]

- use `IsA` triangle 
- a subclass inheritit all the attributes of the parent class
- no multiple inheritance, subclasses form a tree

### constaints

- ensure consistency
- enable efficient storage, data lookup etc.
    - e.g. only need to allocate how much for this key 

### keys

- the key set of an entity is represented by the underlined attributes
- a set of attributes to distinguish entities in an entity set
- every entity set must has a key
- key of a subclass = key of its root class

![[Pasted image 20240510165121.png]]

## UML

Unified Modeling Language

![[Pasted image 20240510162930.png]]

- 0..1 = 0 to 1
- 0..* = any number

means 

- "Studios" is associated with 0 or more "Movies"
- "Movies" is associated with 0 or 1 "Studios"
- "Movies" is associated with 0 or more "Stars"
- "Stars" is associated with 0 or more "Movies"

![[Pasted image 20240607175209.png]]

![[Pasted image 20240607175226.png]]

![[Pasted image 20240607180914.png]]


## Physical Models

How to actually store data on machines

### Pre-Relational Model

- Hierarchical Model
    - tree
- Network Model
    - extends Hierarchical Model from a tree to a graph
    - can navigate from any node
    - encode access paths

### Relational Model

- no fixed connections between data
- access data through computing relations (e.g. join)

### Post-Relational Model

**To solve the impedance mismatch of relational model**: 

Application code is using object-oriented hierarchical classes while relational model is a bunch of independent records (tables).

- Object-Oriented
- Object-Relational Model

**To deal with data in new settings**: 

Relational Model is created to model enterprise management scenarios, but more scenarios exist now.

- Document Model
- Key-Value Model
- Graph Model 

### Translating ER Model to Relational Model

#### Entity Set -> Relation

- entity -> table
- same key

#### Relationship -> Relation

- relationship of entities -> table
- fields: keys of the entities & its own attributes
- key = tuple of the keys of the entities involved 
    - if a many-to-one relationship exists then its key(s) is not needed

![[Pasted image 20240523025606.jpg]]

![[Pasted image 20240523025611.jpg]]

in this case `Beers`'s key won't be part of `Favorites`'s key

#### Combining Many-One Relationships

![[Pasted image 20240523025619.jpg]]

Reduce to the min tables needed.

#### Translating Subclasses

- ER approach
    - store the subclass as another table with the subclass-specific attributes as the fields
    - ![[Pasted image 20240523025626.jpg]]
- object-oriented approach
    - store the subclass as another table with the all the parent attributes + subclass-specific attributes as the fields
    - ![[Pasted image 20240523025631.jpg]]
- null-value approach
    - store everything in the same table with all the base attributes + subclass-specific attributes as the fields
    - for records of the base class leave the subclass fields as null

### Object-Base Modeling

Impedance Mismatch: OOP in application code vs. Relational Models in databases, object vs. tuple

- object identifiers: objects are reference by pointers, tuples by values
- nesting: an object can contain nested objects while a tuple can only contain simple values
- methods: objects have methods while tuples only have attributes
- inheritance: objects can form hierarchy while tuples can't
- encapsulation: object can hide internal implementation while tuples can't

programming paradigms to solve the impedance mismatch

- object-oriented data model
    - extend OOP languages with database functions
- object-relational data model
    - extend RDMBS with object features
    - e.g. PosgreSQL
        - ![[Pasted image 20240523025642.png]]

### NoSQL - dealing with data in various new scenarios

new reqs due to new settings

- very large data
- very complex data

#### Key-Value Model

- data model managed by application code (schema-on-read)
- value can be string, list, set, hashmap etc.
- e.g. Redis

#### Graph Model

- entities -> nodes; relationships -> edges
- relationship as a first class concept
- similar to network model
- e.g. Neo4j

#### Document Model

-  collections of documents
    - xml or json
- not necessarily have schemas (schema-on-read)
    - can enforce schemas or validation rules if you want 

![[Pasted image 20240528005712.jpg]]

## Computing on Data

### Data Computing Frameworks

- relational data
    - relational algebra
        - -> SQL
    - Datalog
- graph data
    - a bunch of graph algos
- key-value data
    - MapReduce

### Relational Algebra

- relations -> new relation
- basic operators
    - reduction
        - selection $\sigma$: reduce rows
        - projection $\pi$: reduce columns
    - combination
        - set operations
            - e.g. union $\cup$, difference $-$
        - cartesian product $\times$
            - each record of the new table = a record of one table + a record of another table
            - 5-row 2-col table $\times$ 6-row 3-rol table -> 30-row 5-col new table
    - renaming $\rho$
- cartesian product of tables -> reduce -> get useful data
- derived operators
    - theta join $\bowtie_\theta$ -> cartesian product filtered by $\theta$ (selection)
        - $\theta$ is a condition
    - natural join $\bowtie$
        - combining rows of 2 tables with matching common attribute
        - e.g. a regular SQL join on same id

### MapReduce

- created at Google in 2004
- Apache Hadoop
- inspired by map & reduce in functional programming
- map M: apply function to each element of the input list
- group G: group into (key, a list of the values of the key)
- reduce R: apply function to the key-value pair
- e.g. word cloud
    - M(k, v): for each word w in v -> (w, 1)
    - R(k, values) -> (k, sum(values))

![[Pasted image 20240528005532.jpg]]

## Designing Schemas

- to resolve redundancy, use regularized form

### Functional Dependencies

- constraints of the fields of a schema
- A functionally determines B: $A_1, ..., A_m \rightarrow B_1, ..., B_m$ similar to $f(A)=B$
- means the many-to-one mapping similar to a function, not that B can be computed from A
- depends on the domain knowledge
- e.g. 
    - id -> birthday
    - id, course -> grade

### Keys

- key = a minimal set of attributes that uniquely determine all attributes
- superkey = a superset of a key
    - e.g. {SSN} is a key while {SSN, BOD} is a superkey

### Rules

**Basic Rules: Armstrong's Axioms**

$A\rightarrow B$ = A functionally determines B

- reflexivity rule: if $B\subseteq A$, then $A\rightarrow B$
    - e.g. id, name -> name
- augmentation rule: if $A\rightarrow B$, then $AC\rightarrow BC$
    - e.g. id -> major; id, name -> major, name
- transitivity rule: if $A\rightarrow B$ and $B \rightarrow C$, then $A\rightarrow C$

**Derived Rules**

- splitting rule: if $A\rightarrow BC$, then $A\rightarrow B$ and $B \rightarrow C$
    - pf
        - given $A\rightarrow BC$
        - $BC \rightarrow B$ by reflexivity
        - $A \rightarrow B$ by transitivity
        - similarly $A \rightarrow C$ by transitivity
    - e.g. id -> name, major; id -> name && id -> major 
- combining rule: if $A\rightarrow B$ and $A\rightarrow C$, then $A \rightarrow BC$
    - pf
        - given $A\rightarrow B$ and $A\rightarrow C$
        - $A \rightarrow AB$ and $AB \rightarrow BC$ by augmentation
        - $A \rightarrow BC$ by transitivity
    - e.g. id -> name && id -> major; id -> name, major

![[Pasted image 20240531141320.jpg]]

to prove drinker, bar -> price

- drinker, bar -> bar by reflexivity
- drinker, bar -> bar, beer by combination
- drinker, bar -> price by transitivity

### Attributes Closure

- the closure of a set of attributes = the set of attributes it can functionally determine, denoted by $^+$
- $\{A_1, ..., A_n\}^+=\{B_1, ..., B_n\}$ denotes the closure of A is B

![[Pasted image 20240531143704.jpg]]

### Normal Forms

- desired properties
    - minimize redundancy
    - avoid info loss
    - preserve dependency
    - ensure good query performance
- 1NF First Normal Form
    - each attribute contains only atomic values (simple values, not list, set, etc.)C

### BCNF Boyce-Codd Normal Form

- Codd invented the relational model
    - start of declarative data management (as opposed to procedural)
- bad FD: $A\rightarrow B$ in relation R but A isn't a superkey
    - e.g. id determines birthday but not course taken
- a relation R is in BCNF $\iff$ whenever there's a nontrivial FS for R, $A\rightarrow B$, A is a superkey for R
    - $A\rightarrow B$ is trivial if $B\subseteq A$
    - i.e. if an attribute determines something in a row then it determines everything in the row
    - i.e. no bad FDs

![[Pasted image 20240603125655.jpg]]

- BCNF Decomposition
    - convert a relation not satisfying BCNF to one that does
    - algo $BCNF(R, F)$
        1. if exists a bad FD $A\rightarrow B$ in $F$ (FDs of relation $R(A, B, C)$)
            1. decompose $R(A, B, C)$ into $R_1(A, B)$ and $R_2(A, C)$
            2. compute FDs for $R_1$ and $R_2$ as $F_1$ and $F_2$
            3. return $BCNF(R_1, F_1)\cup BCNF(R_2, F_2)$ 
        2. else return $R$
    - ![[Pasted image 20240603131116.jpg]]
        - no FDs in $R_2$ -> no bad BDs -> $R_2$ is in BCNF

![[Pasted image 20240604003215.jpg]]

### Lossless Decomposition

- decomposition may be lossy
    - ![[Pasted image 20240603201109.jpg]]
        - decompose -> natural join -> got extra tuples, meaning some info was lossed during decomposition
- BCNF is a lossless decomposition
    - if we decompose $R(A, B, C)$ into $R_1(A,B)$ and $R_2(A,C)$ due to $A\rightarrow B$, then $R=R_1\bowtie R_2$
    - ![[Pasted image 20240603201312.jpg]]

### Dependency-Preserving Decomposition

- a decomposition is dependency-preserving if after the decomposition all the FDs can still be found (directly checked or implied) 
- BCNF may not preserve dependency
- ![[Pasted image 20240603230114.jpg]]
- ![[Pasted image 20240604002601.png]]

### 3NF 3rd Normal Form

- lossless decomposition (like BCNF)
- dependency-preserving decomposition (unlike BCNF)
- a relation $R$ is in 3NF $\iff$ for each nontrivial FD $A\rightarrow B$ in $R$, either:
    - $A$ is a superkey for $R$ (same as the BCNF condition)
    - $B$ is a prime attribute (a member of a key) for $R$
        - s.t. a key won't be splitted 

![[Pasted image 20240603231425.jpg]]

### Multivalued Dependencies

- dependencies other than FDs
    - multivalued dependencies (MVD)
    - inclusion dependencies (IND)
    - join dependencies (JD)
- MVD Multivalued Dependencies  $A\twoheadrightarrow B$
    - like FD but $B$ is a set of values instead of a unique value
    - FD is a special case of MVD
    - e.g. Rajesh's majors are {EE, Econ}
    - ![[Pasted image 20240603234256.jpg]]
    - use 4NF to reduce tables with MVDs

![[Pasted image 20240604002313.png]]

![[Pasted image 20240604002537.png]]

## SQL Queries

### SQL Basics

- created at IBM in 1970s
- standardized in 1986
- vendors support various subsets of it
- high-level declarative language
    - let the system optimize itself
- basic form: SELECT ... FROM ... WHERE
    - ![[Pasted image 20240609161004.jpg]]
- closure property: input: one or more relations; output: a relation
    - -> can use it in query directly
- FROM
    - cartesian product
    - tuple variable: alias
        - e.g. FROM Favorites F
- WHERE
    - LIKE
        - e.g. LIKE '%GREEN%'
    - return the TRUE (not (FALSE or UNKNOWN)) records
- NULL
    - missing value or inapplicable
    - when compared it with a real value it returns UNKNOWN
- 3-Valued Logic: TRUE/FALSE/UNKNOWN
    - UNKNOWN AND TRUE = UNKNOWN
    - UNKNOWN AND FALSE = FALSE
    - UNKNOWN OR TRUE = TRUE
    - UNKNOWN OR FALSE = UNKNOWN
    - ![[Pasted image 20240609162743.png]]
- subquery: nested query, query inside a query

### SQL Aggregation

- FROM-WHERE: generate tuples
    - use attributes of tuples
- GROUP-BY: orgnize groups
    - use attributes of tuples
    - optional
- Functions: aggregate each group
    - `f(attributes)` e.g. `SUM()`, `AVG()`, `COUNT()`, `MIN()`, `MAX()`
    - `f(tuples)` e.g. `COUNT()`
    - doesn't consider Null values
    - if only null values, output Null or 0 (for count)
    - `DISTINCT` eliminates duplicates before aggregation 
        - e.g. `SELECT COUNT(DISTINCT price)`
- HAVING: filter groups
    - use attributes of groups
- SELECT attributes to output
    - use attributes of groups

![[Pasted image 20240611213033.jpg]]

![[Pasted image 20240611214654.png]]

![[Pasted image 20240611214700.png]]

![[Pasted image 20240611214855.png]]

![[Pasted image 20240611214955.jpg]]

![[Pasted image 20240611215608.png]]

![[Pasted image 20240611215657.png]]

## MongoDB Queries

### lookup

like left join in sql

![[Pasted image 20240616174922.jpg]]

## Neo4j Cypher Queries

- basic queries
    - MATCH
        - like FROM in sql
        - specify a pattern for graph traversal
        - `MATCH (:Drinker)-[drinks:Drinks]->(beer:Beer)`
            - `drinker` & `beer` are the variables
    - WHERE
        - like WHERE in sql
    - RETURN
        - like SELECT in sql 
- a table of an entity in sql -> a node
- a table of a relationship -> a relationship
    - ![[Pasted image 20240622141159.jpg]]
- field of a table -> property of a node/relationship
    - ![[Pasted image 20240622142852.jpg]]
- sql join -> traverse pattern
    - ![[Pasted image 20240622143105.jpg]]
-  aggregate
    - no separate GROUP BY clause 
        - SELECT $A_1, ..., A_n, F_1, ..., F_m$ GROUP BY $A_1, ..., A_n$ in sql -> RETURN $A_1, ..., A_n, F_1, ..., F_m$
        - or use WITH
    - no separate HAVING clause
    - collect & unwind
        - opposite
- chaining 
    - like in sql
    - ![[cs411-chaining.jpg]]


![[Pasted image 20240622152518.png]]

![[Pasted image 20240622152531.png]]

![[Pasted image 20240622152541.png]]

![[Pasted image 20240622152600.png]]

![[Pasted image 20240622152611.png]]

![[Pasted image 20240622152858.jpg]]

## Database Manipulation

- manipulation by purposes
    - organizing
        - create/delete database/schema/table
    - modifying
        - insert/delete/update tuples to a table
    - agumenting
        - create indexes and views
    - regulating
        - create constraints
- tools
    - system
        - console
        - client
    - language

### Organizing

- Database -> (Schema ->) Table
    - some Database -> Schema -> Table
        - e.g. Oracle, [[PostgreSQL]]
    - some Database -> Table
        - e.g. [[MySQL]]

### Augmenting - Views

View = a virtual table created using a query i.e. saved query result

```sql
CREATE VIEW <name> AS <query>;
```

It's just a virtual table so you can't do updates/inserts directly on it but via the underlying table(s). Therefor, for a view to be updateable, it needs to have sufficient attributes from the base table

- join multiple tables -> not updateable
- too few attributes -> not updateable

### Regulation

-  Key Constraints
    - primary key
    - unique key
    - foreign key
        - can declare action
            - e.g. on delete cascade, on update set null
        - if no declaration then reject
        - ![[cs411-fk-example.png]]
- General Constraints - checks & assertions
    - checks
        - attribute-based
        - tuple-based
        - during insertion/update
    - assertions
        - database-based i.e. a check over the table
        - during insertion/update
    - not uniformy supported in RDBMS
        - [[MySQL]] doesn't support checks & assertions
        - [[PostgreSQL]] support checks without subqueries but not assertions
        - no major RDBMS supports assertions
- triggers
    - limitations of checks & assertions
        - timing: do checks on each insertion/update -> expensive
        - flexibility: checks are limited to attributes or tuple-based constraints
        - handling: can't control what to do when voilated
    - event-condition-action
        - event: timing
            - e.g. insert on Sells
        - condition: flexibility
            - any sql boolean-valued expression
        - action: handling
            - any sql statement
    - widely implemented
        - functionality & syntax may not be uniform
    - ![[sql-trigger.jpg]]
    - ![[sql-trigger-2.jpg]]

## Accessing & Indexing Data

![[cs411-query-to-data.jpg]]

- main memory (volatile)
    - query parser
    - query optimizer
    - query processor
    - indexes
- disk
    - buffer manager
    - storage manager
    - storage

### indexing data

- provide a map for locating data
    - s.t. don't need to scan the whole db for a small fraction of the data
- type
    - dense index
        - pointer to every key 
    - others: to every block etc.

### accessing data

- data is big, cannot be fit into main memory

![[cs411-memory-hierarchy.png]]

See [[Operating Systems#paging]]


### ISAM

- Indexed Sequential Access Method
- kind of like a segment tree (but not really)
- each node has $F$ values providing $F+1$ segments/pointers for $F+1$ children
- static tree structure: insertion/deletion only affect the leaf nodes, so the num of levels before a leaf node never changes
- ![[cs411-isam-tree-sample.jpg]]
- search cost: num of hops to reach a leaf = tree height $h=log_FN$
    - num of random accesses / disk pointers
    - $F$ fanout = num of children for each node
- each leaf node/page only has $F$ values, so when inserting a value within the range of a leaf node then we add an overflow page underneath (kind of like how hash tables work)
    - ![[cs411-isam-insert-65.png]]
    - ![[cs411-isam-insert-72.png]]

