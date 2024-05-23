
# CS 411 Database Systems

## ER Model

Entity / Relationship Model

![[Pasted image 20240510155418.png]]

Corresponds well to relational model.

### entities

- represented by rectangles

### attributes

- represented by ovals
- each entity may have a few attributes

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
- 0..* = any nuber

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






