# Software Engineering 101

## System Design

[[System Design]]

## Design Patterns

### Service Repository Pattern

- service
	- api for business logic
	- control the data with the abstracted repositories provided with [[#Dependency Injection]]
- repository
	- the layer that directly touches the data
	- each db each repository

### Inversion of Control

It is a very general term. It literally means inversing the traditional flow of control.

Here's a good explanation

> If you follow these simple two steps, you have done inversion of control:
> 
> 1.  Separate **what**-to-do part from **when**-to-do part.
> 2.  Ensure that **when** part knows as _little_ as possible about **what** part; and vice versa.
> 
> The _inversion_ part of the Inversion of Control (IoC) is the confusing thing; because _inversion_ is the relative term. The best way to understand IoC is to forget about that word!

See <https://stackoverflow.com/a/3311657/15493213>

**An example**

traditional: program tells user to do things -> user does thing -> program gets it and does thing

inversion of control: user does thing -> program gets the event and does things

See <https://stackoverflow.com/a/3108/15493213>

**Things that is involved with this principle**

- [[JavaScript]] event handlers
- [[#Dependency Injection]]

### Dependency Injection

traditional: a function instantiates a depedency and use it

depedency injection: a function receives an abstraction / callback of the depedency and uses it

See <https://stackoverflow.com/a/3140/15493213>