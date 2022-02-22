---
layout: meth
has_children: True
---
# Operating Systems
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## references
- [xv6 textbook](https://pdos.csail.mit.edu/6.828/2020/xv6/book-riscv-rev1.pdf)

## videos
### 林
- [intro](https://www.youtube.com/watch?v=nk1Lyb3QW1M)
- [structures](https://www.youtube.com/watch?v=TaDR2AtN8UU)

### 施吉昇
- [overview-1](https://www.youtube.com/watch?v=Yyuylbmw-iM)
- [overview-2](https://www.youtube.com/watch?v=Z5u2xh0Y2QI)

## intro
- ![](https://i.imgur.com/C5gjElc.png)
- GPU
	- many processing unit, executing in parallel
	- each unit perform simple task
- bootstrap
	- load OS into memory at startup
- storage-device heirarchy
	- ![](https://i.imgur.com/wcccVuH.png)
- interrupt
	- hardware interrupt
		- I/O
	- software interrupt
		- exception
- system call
	- 請系統做一些事情
	- interface to OS services
- system boot 
	1. bootstrap (in nonvolatile storage) find kernel
	2. load kernel into memory
	3. kernel initializes hardware
	4. mount root file system
- debug
	- failure -> save memory state as file for analysis
		- core dump
			- process fails -> save memory state to core dump
		- crash dump
			- kernel fails -> save memory state to crash dump

## structure
### monolithtic
- no structure
- one large kernel
- everything in the same place
- e.g. original UNIX
	- ![](https://i.imgur.com/VTy7O1U.png)
- pros
	- fast
		- littlt latenct
	- efficient
	- simple
- cons
	- difficult to implement & extend

### layered
- ring-based 
- ![](https://i.imgur.com/dD6UIyL.png)
- Intel & AMD now have hypervisor as Ring -1 
- computer networks
- cons
	- poor performance
		- go through many layers to communicate -> big overhead
	- defining each layer

### microkernels
- remove nonessential components
- pros
	- extensibility
	- portability
	- security
	- reliability
- cons
	- poor performance
		- non-core things not in kernel -> overhead when communicating with them
	- ![](https://i.imgur.com/GHF3Hw6.png)

### modules
- a set of core components
- additional services modularized, linked in at boot time or run time

### hybrid systems
- linux
	- monolithtic
		- for good perfornamce
	- modular
		- dynamically linked in new functions
	- ![](https://i.imgur.com/VU6jjqH.png)
- windows
	- monolithtic
	- microkernels
		- subsystems
	- modular