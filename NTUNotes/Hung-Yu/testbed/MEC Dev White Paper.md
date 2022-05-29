---
layout: meth
grand_parent: Hung-Yu
parent: Edge Computing
---
# MEC Dev White Paper
{: .no_toc }

[pdf with my annotations](etsi_wp20ed2_MEC_SoftwareDevelopment.pdf)

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Intro
- remote cloud latency too big -> move closer to source of data with edge computing
- IoT & V2X(Vehicle to everything) -> amount of data will increase rapidly -> collect & process data close to user
- traditional distributed software dev model
	- client-server
	- central server
- MEC
	- traditional client-server + intermediate server @ network edge
	- differentiate those suitable for deploying at edge or cloud
	- multi-level load balancing
	- pros
		- user proximity
		- low latency
		- high bandwidth
		- real time access to radio network & context info
		- location awareness
	- cons
		- high cost
		- small computing power
		- little global reachability
	- e,g, AWS Greengrass
	- ![](https://i.imgur.com/5JDZd37.png)

## MEC Advantages
- hour-glass model
	- traditional
	- applications & networks agnostic to each other
- MEC provides more services for those MEC-aware
	- but also supports those using hour-glass model
	- apps dynamically adapt with environment / network info
		- expected latency
		- throughput
	- environment more predictable
	- network can benefit from apps
		- e.g. predict user behavior to maximize network efficiency
- end-to-end service components
	- terminal device components
		- preliminary processing
		- need zero latency
	- edge components
		- edge cloud
		- offload computing from terminal device
		- offload high bandwidth load from remote
	- remote components
		- remote cloud
	- ![](https://i.imgur.com/SavF5b8.png)
	- distributed computing to increase performance
	- can distribute computation across all components
- exploiting geographical info
	- adapt to linguistic & cultural characteristics of the given area
	- customized ads for local businiesses

## Deploying
- considerations
	- DNS-based solution
		- support DNS-based solution for traffic redirection
	- domain name
	- cloud back-end
		- fall-back solution hosted in cloud or others
		- if service need to me available whether MEC exists or not
	- sensitive user context data
		- user data may be sensitive
	- virtualized app
		- run MEC apps as virtualized app
		- using VM or container
		- on virtualization infra of MEC host
	- meta-data
		- requirements
		- dependencies

### Phase 1: MEC App Packaging & Onboarding
- not defined by the standard
	- have many options
	- related to contracts
- OSS, Operations Support System
	- receive request
	- forward to MEO
- MEO, MEC Orchestrator
	- onboard MEC apps to MEC systems
		- validation, adjustment and other things
	- provide MEPM with app package ID & app image location
- MEPM, MEC Platform Manager
	- provide configs & app images to selected VIM
- VIM, Virtualized Infrastructure Manager
	- store app images
- ![](https://i.imgur.com/k1IQA3G.png)

### Phase 2: MEC App Instantiation
- ![](https://i.imgur.com/PrQpPMA.png)
- triggered from device
	- developer can interect directly with MEC 
	- with device application
		- device with a client supporting Mx2 API
- triggered from OSS
	- without device app

#### Client's Perspective
- need to have subscription to be able to use MEC services
	- OAuth 2.0 for authentication
- instantiation options with Mx2 API
	- application image ready
		- request it to be instantiated directly
		- can query all available ones and pick one
	- application image not ready
		- give a link to an application package containing the image
		- system retrieves the image from the link and instantiate it
- user application = MEC application instantiated from the request of a user
- any user can attempt to contact applications with their address on user plane
- developer can't select the location where the app is instantiated
	- developer provides the requirements -> MEC system Management & Orchestration selects the ideal location

#### MEC Platform's Perspective
- OSS forward instantiation request to MEO -> MEO select MEC platform (MEP) and forward request to MEC platform manager (MEPM) -> MEPM configures MEP
- operations available
	- start
	- stop
- do operation -> update state

### Phase 3: Client-Side App & MEC App Communication
- device app separated from client app
- client app unaware of MEC app
- ![](https://i.imgur.com/epaVtfM.png)
- ways for client app to connect MEC app
	- developer / service provider makes MEC app address available to potential client apps
	- client app finds MEC apps with DNS look-up

### Phase 4: MEC Platform & Services Usage
- ![](https://i.imgur.com/vIInYSu.png)
- MEC app can consume MEC services
	- produced by MEC platform or other MEC apps
- RESTful APIs
	- REpresentational Sate Transfer (REST)
- Radio Network Information Service (RNIS)
	- provides radio network related info to MEC platform & apps
	- info from Radio Access Network (RAN)
	- typical info
		- radio network conditions
		- layer 2 info
		- UE info
		- changes of info
	- used by MEC platform & apps to
		- optimize services
		- provide services based on up-to-date radion conditions info
- location API
	- provide location info for 
		- UEs
		- radio nodes associated with MEC host
	- sample services
		- active device tracking
		- location-based recommendations
	- can use anonymous location reporting
- bandwidth management service (BWMS)
	- aggregate requests & allocate bandwidth
- UE identity API
	- use an external flag, instead of using the UE identity directly
		- privacy
	- each tag mapped to an UE
	- apply traffic filters based on tags

## Sample MEC App

- many tools around OAS (OpenAPI Specification)
	- swagger editor
- use YAML
	- both human & machine readable
- enable CORS support
	- for client requests from outside the server domain
- use postman to test API
- third party libaries to interact with interface files directly

## Other Aspects

### Security

- prevent illegal access
- hardware
	- HSM (Hardware Security Module)
	- TPM (Trusted Platform Module)
	- trusted boot
- software
	- TLS (Transport Layer Security)
- zero-trust networking
- less secure than central cloud in
	- MEC has limited compute resource -> more vulnerable to DOS
	- edge device placed in less secured location -> less physical security
	- more entry points into application
	- MEC service may have sensitive info -> every request need to be authenticated & authorized
	- multiple MEC apps may be installed on the same device -> data separation policy
- more secure in central cloud in
	- limited reachability -> more difficult for DDOS
	- each network blocking has smaller impact -> less likely to have wide scale connectivity down

### Mobility
- mobile user moves -> MEC host changes
- when switching to new MEC host
	- app instance need to be available
	- user context need to be transferred
- client can be served by MEC host or remote cloud
	- a MEC host can identify it being a better host and create an app instance to serve the user
- ![](https://i.imgur.com/LzSBEsF.png)
- user context
	- app-specifig runtime data
	- for stateless app
		- can be transferred without mobility service
	- for stateful app
		- need more support to be transferred
	- if user context stored in client app
		- client app send user context to target app instance
	- if user context stored in MEC app
		- app need to support user context transferred between MEC app instances
		- use MEC app mobility service API to subscribe to mobility events -> know when & where to transfer user context

## Edgy DevOps
- DevOps
	- different teams collaborate to deliver software continiously
	- modularized services
		- flexible
		- scalable
- MEC suitable for DevOps approach
	- made up of microservices -> each service easy to develop, in parallel -> facilitate CI/CD
	- modularized approach
- ![](https://i.imgur.com/lU1IjSQ.png)
- actual implementation of DevOps approach depends on the software layer
- zero-touch provisioning
	- automate everything
- FaaS, function as a service
	- less code to write
	- build app from may available functions
	- separation between implementation & consumer

## Example Use Cases

### V2X collision prevention

- vehicles share their data with each other in proximity
- to take actions to prevent collision
- latency intensive
- ![](https://i.imgur.com/iFOsZb3.png)
- client 1 & 2 served by MEC app 1
- client N served by MEC app N
- client 1 wants to connect
	- client 1 establishes TCP connection to MEC app 1
		- DNS redirection by MEC platform
	- client 1 provides credentials to MEC app 1
	- MEC app 1 forwards request to cloud back-end
	- cloud back-end verifies & sends single sign on (SSO) token
- MEC app
	- accumulates the info of the clients it serves
	- updates the clients it serves with the locations of other clients in proximity
	- sends the list of clients close to the territory of other apps to those apps
		- discovers other apps with MEC platform
	- updates clients' info to cloud back-end
		- less frequent than to clients & other apps 
- client 1 moved to MEC app N's territory
	- client 1 sends SSO token to MEC app N
	- MEC app N forwards request to cloud back-end
	- cloud back-end send requests to MEC app 1 for client 1's context
	- MEC app 1 responds with client 1's context to MEC app N & cloud back-end
- client disconnects
	- MEC app updates cloud back-end with recent context & sends logoff message to drop token & context

### Video Transcoding

- users share media within their groups
- dataBase component
	- collects relevant info
	- info for each group member
		- to know the required type of service
	- geo-localization data from device
- eStore component
	- local storage for groups
	- speeds up upload/download
		- doesn't need access to core network
	- particularly useful during crowded events
- Media Processing Unit (MPU) component
	- converts media between formats
		- support most codecs
	- adapts to various user devices
	- can be accelerated with edge GPU
	- advanced media processing
		- multi-sensor camera data -> 360° video
		- 3D reconstructions of spaces & objects
		- object recognition
- core cloud
	- permanently stores contents temporarily saved in network edge
	- trains ML model
	- computation intensive 3D reconstruction