# CS427 Software Engineering

![[cs427-w1-p2.png]]

![[cs427-w1-p9.png]]

## modularity

from low to high cohesion (the higher the better)

![[cs427-cohesion.jpg]]
## connectors & components

- component does the work
- connector connects components

## architecture style

- client & server
- layered
- pipe and filter

## Use Cases

- preconditions
- main flow
- subflows
- alternative flows

## UML Class diagram


![[cs427-uml.jpg]]

![[cs427-uml-map.jpg]]

- mapping
    - noun -> class or attribute
    - verb -> operation or relationship
- a -> b: a depends on b
- association
    - aggregation: white diamond 
        - part can exist without the whole
        - e.g. Car ◇── Wheel
    - composition: black diamond 
        - part cannot exist without the whole
        - e.g. House ◆── Room
    - generalization: white triangle
        - subset relationship
        - e.g. Cat ➝ Animal
- abstract class: in italics
- concrete class
- multiplicity
    - no number = 1

## patterns

- composite pattern
    - hierarchy 
- strategy pattern
    - switching strategy on the fly
- observer pattern
    - notify 
- iterator pattern
    - provide public iterator for the object
- visitor pattern
- interpreter pattern
    - to parse stuff
    - abstract syntax tree

## Android

### Components

see <https://developer.android.com/guide/components/fundamentals>

- Activity
    - a specific view
    - a single screen with a user interface
    - e.g. a list of emails page, compose email page
- Service
    - a background process, no UI
    - e.g. play music, fetch data
- Broadcast Receiver
    - publishr-subscriber
    - event bus
- Content Provider
    - CRUD interface for a data 

## Testing

- PIE model
    - Propagation, Infection, and Execution
    - necessary conditions for a failure to be observed
- Equivalence Class Partitioning
    - black-box testing technique
    - divide data into groups (equivalence classes) s.t. one test case from each group can represent the whole group

## Debugging

- failure - symptom of bugs
- fault - cause of bugs