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
- [Course Intro](https://www.youtube.com/watch?v=JYcRfdkhVGc)
- [Intro](https://www.youtube.com/watch?v=nk1Lyb3QW1M)
- [Structures](https://www.youtube.com/watch?v=TaDR2AtN8UU)
- [Process](https://www.youtube.com/watch?v=CvXfW25jq2I)

### 施吉昇
- [Course Info](https://www.youtube.com/watch?v=0QpWM5vYt-g)
- [Intro](https://www.youtube.com/watch?v=a-1JqW5CjDQ)
- [Overview-1](https://www.youtube.com/watch?v=Yyuylbmw-iM)
- [Overview-2](https://www.youtube.com/watch?v=Z5u2xh0Y2QI)
- [Process-1](https://www.youtube.com/watch?v=qAlOl-yopGU)
- [Process-2](https://www.youtube.com/watch?time_continue=1&v=7vZIrVCW2ec)
- [Process-3](https://www.youtube.com/watch?time_continue=1&v=K5g_6xl7fF4)

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
	- system call 很少 -> 做得很 generic，接受很多 parameters -> 很難直接用，通常都經過 API
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
- distributed operating systems
	- DOS, distributed operating systems
		- tightly-coupled
		- for homogeneous multicomputers
	- NOS, network operating systems
		- loosely-coupled
		- for heterogeneous multicomputers
	- middleware
		- layer on top of NOS

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

## process
- program está en file system
	- a static entity stored on disk
- process está en CPU & Memory
	- a progam in execution
	- executable file of program loaded into memory -> process
	- a program can have many processes
- process is sequential
	- parallel only in an operation, but each operation executed sequentially

### parts of a process
- program code i.e. text section
	- read only
- program counter, registers, etc.
- data section
	- global variable
	- inialized data
		- have initial value
	- uninitialized data
		- no initial value
- heap
	- dynamically allocated variable
- stack
	- temporary data
	- function parameters, return addresses, local variables
	- recursively call function -> stack grows until reaching heap
- stack & heap share a space
- ![](https://i.imgur.com/y2A7pMu.png)
- ![](https://i.imgur.com/OF0zYlH.png)
- each process has a virtual memory
	- won't be accessed by another process
	- OS converts virtual memory address to physical memory address
- execution of a program: shell -> runtime environment -> load program -> process
- use `size` to get the size of each part (and the total size)
- Mac OS reserves 4GB of lower memory on 64-bit processor for 32-bit codes

### requirements of running processes
- multiplexing/time-sharing
	- scheduling
	- distribute resources to processes
- isolation
- interaction
	- share data & code between processes

### FSM of process
![](https://i.imgur.com/U26qCqI.png)
- resource not enough -> don't admit
- running
	- only this state uses CPU
- interrupt
	- by scheduler
	- system interrupt

### process control block
- record the info & status of process
- infos
	- process state 
	- program counter
	- CPU registers
	- CPU scheduling info
	- Memory-management info
	- Accounting info
	- I/O status info
		- open file table
	- ![](https://i.imgur.com/y1Eg7ek.png)
- `task_struct` in linux
	- ![](https://i.imgur.com/m0dyuOO.png)

### multi-processor & multi-core
- multi-processor
	- each processor has its own cache
	- main memory & I/O shared with other processors via bus
- multi-core
	- many cores in a processor
	- each core has its own L1 cache
	- other caches shared between cores
	- pros
		- cache is faster
- ![](https://i.imgur.com/RArGv9W.png)

### multiple processor OS
- one process for a processor at a time
- schedule multiple processes to run on multiple processors simulteneously
	- ![](https://i.imgur.com/xOy5b7L.png)

#### multiple OS multiprocessor 
- each processor has its own OS
- memory & I/O shared among processors via bus
- memory separated into blocks for each processor
- ![](https://i.imgur.com/KvR8ids.png)

#### master-slave multiprocessor
- assymetric multiprocessing
- run OS on master processor 
- run processes on slave processors
- memory & I/O shared among processors via bus
- ![](https://i.imgur.com/Y435y7O.png)

#### symmetric multiprocessor (SMP)
- each processor has OS kernel
- a global OS exists
- global OS runs global queue, CPU then gets process from global queue and do self-scheduling with its own OS
- ![](https://i.imgur.com/N0Qjobj.png)
