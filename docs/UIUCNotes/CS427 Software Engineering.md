# CS427 Software Engineering

Flashcards  
<https://quizlet.com/user/rr11cs/folders/cs-427?i=6kav6b&x=1xqt>

## Intro

trinity of software project: system, users, development process

## Software Process

![[cs427-w1-p2.png]]

perf chart critical path = longest dependency sequence (LC Parallel Courses 3)  

![[cs427-w1-p9.png]]

## requirement engineering

- test not included in requirements
- Use "shall" for mandatory requirement
- actor-goal list helps with deciding design scope
- Conway's Law: software architecture reflects org chart

### Use Cases

- preconditions
- main flow
- subflows
- alternative flows

## software design & architecture

![[Pasted image 20250510141018.png]]

### modularity

from low to high cohesion (the higher the better)

![[cs427-cohesion.jpg]]
### connectors & components

- component does the work
- connector connects components

### architecture style

- client & server
- layered
- pipe and filter

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
    - no number -> 1

## Design Patterns

| Category       | Focus              | Example Use Case                           |
| -------------- | ------------------ | ------------------------------------------ |
| **Creational** | Object creation    | Managing how instances are built           |
| **Structural** | Class composition  | Connecting parts with clean architecture   |
| **Behavioral** | Object interaction | Managing control flow and responsibilities |

- structural
    - composite pattern
        - hierarchy 
- behavioral
    - strategy pattern
        - switching strategy on the fly
    - observer pattern
        - notify 
        - separate the display of object state from object itself
    - iterator pattern
        - provide public iterator for the object
    - visitor pattern
        - separate algo from object
    - interpreter pattern
        - to parse stuf
        - tree based
        - abstract syntax tree is made of expression objects
        - leaf = terminal
        - non-leaf = non-terminal, contains a subtree or children of expressions
    - state pattern
        - finite state machine

## Testing

- types of bugs
    - error - human error
    - fault - cause of bugs
    - failure - symptom of bugs
- PIE model
    - Propagation, Infection, and Execution
    - necessary conditions for a failure to be observed
- Equivalence Class Partitioning
    - black-box testing technique
    - divide data into groups (equivalence classes) s.t. one test case from each group can represent the whole group
- junit
    - assertSame: assert if referring to the same object
    - assertAll: run all statements even if the first one fails
    - `@ValueSource` to specify the source of arguments for parameterized test
    - can specify csv values `@CsvSource(value={})`
    - can use `@MethodSource` for an array of arguments for parameterized test
- explicit conversion: type casting
- assumption first guideline: All-combine possible returns of observers


## Software Maintenance

- types
    - correction
        - corrective
        - preventive
    - enhancement
        - adaptive
        - perfective
            - for new/updated requirements
- OO Metrics
    - Weighted Methods Per Class (WMC)
        - sum of method complexities of a class
    - Depth of Inheritance Tree (DIT)
    - Number of Children (NOC)
    - Coupling between Object Classes (CBO)
        - coupled if a method in a class calls a method in another class
    - Response for a Class (RFC)
    - Lack of Cohesion in Methods (LCOM)
        - num of pairs of methods not sharing instance variables
        - low -> should split class
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
    - publisher-subscriber
    - event bus
- Content Provider
    - CRUD interface for a data 
