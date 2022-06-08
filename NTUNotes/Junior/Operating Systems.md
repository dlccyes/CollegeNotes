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

## materials
- [Operating System Concepts](Operating%20System%20Concepts.pdf)
- [xv6 textbook](https://pdos.csail.mit.edu/6.828/2020/xv6/book-riscv-rev1.pdf)
- Exams
	- [Operating Systems Midterm](Operating%20Systems%20Midterm.md)
	- [Operating Systems Final](Operating%20Systems%20Final.md)

## videos
### 林忠緯
- [Course Intro](https://www.youtube.com/watch?v=JYcRfdkhVGc)
- [Intro](https://www.youtube.com/watch?v=nk1Lyb3QW1M)
- [Structures](https://www.youtube.com/watch?v=TaDR2AtN8UU)
- [Process](https://www.youtube.com/watch?v=CvXfW25jq2I)
- [Threads & Concurrency](https://www.youtube.com/watch?v=uxXtXGW2VDQ)
- [Main Memory 1](https://www.youtube.com/watch?v=AeONYfNXGaE)
- [Main Memory 2](https://www.youtube.com/watch?v=Jb0lQbvm29w)
- [Virtual Memory 1](https://www.youtube.com/watch?v=VQ07KeyJXgg)
- [Virtual Memory 2](https://www.youtube.com/watch?v=JYv7Y7b2DGA)
- [CPU Scheduling 1](https://www.youtube.com/watch?v=y4TbkJ7oCi0)
- [CPU Scheduling 2](https://www.youtube.com/watch?v=uqsQbWR3t_c)
- [Mass-Storage Systems](https://www.youtube.com/watch?v=Tv5gIMhdNhM)
- [File System Interface](https://www.youtube.com/watch?v=2njmiDSljiU)
- [File System Implementation 1](https://www.youtube.com/watch?v=TKEr3Be7UYY)
- [File System Implementation 2](https://www.youtube.com/watch?v=AozCyO7tg8E)
- [File System Internals](https://www.youtube.com/watch?v=ldBWU0jz_RM)
- [Synchronization Tools](https://www.youtube.com/watch?v=1pkPcrsjwm0)
- [Synchronization Examples](https://www.youtube.com/watch?v=hHZT4KFmeQc)
- [Course Summary](https://www.youtube.com/watch?v=e_ha18S1E5M)

### 施吉昇
- [Course Info](https://www.youtube.com/watch?v=0QpWM5vYt-g)
- [Intro](https://www.youtube.com/watch?v=a-1JqW5CjDQ)
- [Overview 1](https://www.youtube.com/watch?v=Yyuylbmw-iM)
- [Overview 2](https://www.youtube.com/watch?v=Z5u2xh0Y2QI)
- [Process 1](https://www.youtube.com/watch?v=qAlOl-yopGU)
- [Process 2](https://www.youtube.com/watch?time_continue=1&v=7vZIrVCW2ec)
- [Process 3](https://www.youtube.com/watch?time_continue=1&v=K5g_6xl7fF4)
- [Threads & Concurrency 1](https://www.youtube.com/watch?v=LlMN1Nlf-mM)
- [Threads & Concurrency 2](https://www.youtube.com/watch?v=d6t2FF4rqi0)
- [Threads & Concurrency 3](https://www.youtube.com/watch?v=e1BeL_Enn9w)
- [Threads & Concurrency 4](https://www.youtube.com/watch?v=utyd7b3j73M)
- [Threads & Concurrency 5 - Threading Issues](https://www.youtube.com/watch?v=DL4FHtS8OlA)
- [Main Memory 1](https://www.youtube.com/watch?v=Qn5ndel19PA)
- [Main Mamory 2](https://www.youtube.com/watch?v=k4YpyOVdtJQ)
- [Main Memory 3](https://www.youtube.com/watch?v=vlNRu1NTEkE)
- [Virtual Memory 1](https://www.youtube.com/watch?v=7b7OrNga_1w)
- [Virtual Memory 2](https://www.youtube.com/watch?v=7YftcjepKyw)
- [Virtual Memory 3 - Page Replacement](https://www.youtube.com/watch?v=DdrW21Y5QYY)
- [Virtual Memory 4](https://www.youtube.com/watch?v=JaeSleQ6_Dk)
- [Virtual Memory 5 - Thrashing](https://www.youtube.com/watch?v=CQYI9BWZCJQ)
- [CPU Scheduling 1](https://www.youtube.com/watch?v=4z65wVcKUl4)
- [CPU Scheduling 2](https://www.youtube.com/watch?v=tovVVyiI3bI)
- [CPU Scheduling 3](https://www.youtube.com/watch?v=NZz9ScquXlQ)
- [CPU Scheduling 4 - Multi-Processor & Real-Time](https://www.youtube.com/watch?v=tEA9gCkpgEc)
- [CPU Scheduling 5 - Real-Time](https://www.youtube.com/watch?v=wzUHcFV1IzU)
- [CPU Scheduling 6 - OS Examples & Algo Evaluation](https://www.youtube.com/watch?v=irS2Rvre0Dg)
- [Mass-Storage Systems 1](https://www.youtube.com/watch?v=rN29fVYRnss)
- [Mass-Storage Systems 2](https://www.youtube.com/watch?v=GhI0mrTM3MU)
- [File System Interface](https://www.youtube.com/watch?v=rfp9ay93HfA)
- [File System Implementation 1](https://www.youtube.com/watch?v=FCGn9eCai1g)
- [File System Implementation 2](https://www.youtube.com/watch?v=_a-U71V5SXo)
- [File System Implementation 3](https://www.youtube.com/watch?v=hp0b9zzSb3Y)
- [File System Internal 1](https://www.youtube.com/watch?v=LkIaVUPSHl4)
- [File System Internal 2](https://www.youtube.com/watch?v=esn2h2T3n8w)
- [Synchronization Tools 1](https://www.youtube.com/watch?v=RvtecR_hkgg)
- [Synchronization Tools 2](https://www.youtube.com/watch?v=XOKAGuMy9TY)

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
### monolithic
- no structure
- one large kernel
- everything in the same place
- e.g. original UNIX
	- ![](https://i.imgur.com/VTy7O1U.png)
- pros
	- fast
		- little latency
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
- Windows
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
	- parallel only in an operation, each operation executed sequentially

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
	- recursively call function -> stack grows until reaching heap -> stack overflow
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

### Process Control Block (PCB)
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

#### Multiple OS Multiprocessor 
- each processor has its own OS
- memory & I/O shared among processors via bus
- memory separated into blocks for each processor
- ![](https://i.imgur.com/KvR8ids.png)

#### Master-Slave Multiprocessor
- assymetric multiprocessing
- run OS on master processor 
- run processes on slave processors
- memory & I/O shared among processors via bus
- ![](https://i.imgur.com/Y435y7O.png)

#### Symmetric Multiprocessor (SMP)
- each processor has OS kernel
- a global OS exists
- global OS runs global queue, CPU then gets process from global queue and do self-scheduling with its own OS
- ![](https://i.imgur.com/N0Qjobj.png)

#### Heterogeneous Multiprocessor
- ![](https://i.imgur.com/4ZRSqn0.png)
- big little architecture
- big processors
	- CPU intensive
	- foreground
- little processors
	- I/O intensive
	- background
- used in Samsung, Apple chips

### process scheduling
- goal: maximize CPU use
- degree of multiprogramming = num of processes in memory at the same time
- ready queue
	- multiple queue, priority queue
	- single queue
		- ![](https://i.imgur.com/ALSrwzW.png)
- wait queue
	- ![](https://i.imgur.com/S6fLR74.png)
- I/O-bound process
	- more I/O, less computation (time)
- CPU-bound process
	- more computation, less I/O
- lock
	- spin lock
		- try locking the resource endlessly -> CPU 100% -> be treated as CPU-bound process
		- ![](https://i.imgur.com/M2WqA5V.png)
	- mutex lock
		- run only when resource is avaiable
		- ![](https://i.imgur.com/tvuAPto.png)
- queueing diagram
	- ![](https://i.imgur.com/RYGOciC.png)
- context switch
	- context stored in PCB
	- load the context (state, memory, code, etc.) of the new process when switching process
	- pure overhead
		- CPU runs no process when doing context switch
		- direct cost
			- load & store instruction
		- indirect cost
			- cache miss
				- can happen even if some codes are prefetched, e.g. wrong branch prediction
			- COLD cache
				- cache blank
	- ![](https://i.imgur.com/wj0nsV0.png)
	- voluntarily & involuntarily context switch
		- voluntarily context switch
			- explicit request
			- yield, sleep, request I/O, request to lock, make system call, etc.
		- involuntarily context switch
			- scheduling
			- periodically resume/suspend
		- I/O bound -> many voluntarily & involuntarily context switch
		- CPU bound -> no voluntarily & little to no involuntarily context switch
		- nanosleep()
			- suspend process for a very short amount of time
			- Mac OS implements it with spinlock -> involuntarily context switch
			- Linux implements it the same as sleep() -> voluntarily context switch

### communications
- socket
	- endpoint for communication
- ip+port
- server can listen to 5 clients max

 #### remote procedure call
- client-side stub
	- locate server, packed up parameters (marshalling/serialization) and send
- server-side stub
	- receive message, unpacked parameters (unmarshalling/deserialization), perform procedures
- ![](https://i.imgur.com/z1IylM9.png)
- ![](https://i.imgur.com/92PDhLh.png)
- ![](https://i.imgur.com/p50VMY6.png)

## threads & concurrency
- explicit threading
	- manually create and terminate (join) threads
	- ![](https://i.imgur.com/TE4YKgw.png)
- implicit threading
	- OS deals with most of the things
- ![](https://i.imgur.com/vjZ4JYC.png)
- ![](https://i.imgur.com/m4Crgo6.png)
- for CPU
	- register for each thread
	- cache for each thread
- for OS
	- threads of a process shares come resources
		- so multithreading takes a lot less resources then multiprocessing 
	- overhead of context switch reduced
		- thread-level context switch is lighter

### parallelism
- multi-core
- data parallelism
	- different subset of data, same program on each core
- task parallelism
	- different program, same data on each core
	- may be sequential or not
	- for sequential, separate different stage/task of a program, do pipeline
- ![](https://i.imgur.com/ReNpmHi.png)

### concurrency programming
- multiple process single core
	- context switch
- multiple instruction multiple data (MIDI)
	- task parallelism
	- multi-core processor
	- hyper-threading
		- if current instruction is using floating-point unit, meaning ALU is idle, we can run the next instruction using ALU parallelly
- single instruction multiple data (SIMD)
	- data parallelism
	- GPU, parallelly doing simple computation
- zero instruction multiple data
	- instruction embedded in chip, no need fetching
	- addition & multiplication
		- neuro network
	- compuration in memory (CIM)
		- analog or digital

### Thread Control Block (TCB)
- storing info of a thread
	- current state
	- registers
	- status
	- program counter
	- stack
- ![](https://i.imgur.com/XnZasZD.png)

### benefits
- more responsive
- easier resource sharing
- better economy
	- thread creation cheaper than process creation
	- lower overhead for thread switching than for context switching
- better scalability
	- utilize multicore

### speedup

**Amdahl's Law**  
speedup ratio of parallelism

$$speedup\leq \frac{1}{S+\dfrac{1-S}{N}}$$
$$lim_{N\rightarrow\infty}=\frac{1}{S}$$

- S = portion not able to be parallelized
- N = num of cores

![](https://i.imgur.com/Os0BO5h.png)

![](https://i.imgur.com/9ORxU3b.png)

### multithreading model
- user level thread (ULT)
	- thread libraries
		- POSIX
			- most popular
		- Windows
		- Java
- kernel level thread (KLT)
	- each OS has its own
- mode switch
	- switching between ULT & KLT
- ![](https://i.imgur.com/lOp9nxN.png)
	- kernel scheduler will schedule the black arrow processes
- mapping from ULT to KLT
	- ![](https://i.imgur.com/PGfP9Qg.png)
	- not one-to-one
	- if program doesn't need to use kernel mode -> no need KLT, use core directly
		- e.g. simple math
- OS only sees processes, not threads

#### mapping from user to kernel threads
- many-to-one
	- ![](https://i.imgur.com/j2FBqIa.png)
	- no parallelism
	- can't utilize multiple processing cores
- one-to-one
	- ![](https://i.imgur.com/QZi22LU.png)
	- easy
	- create 1 kernel thread for each user thread
	- no user scheduling
	- big overhead
		- need to manage many kernel level threads
	- most used
		- Linux
		- Windows
- many-to-many
	- ![](https://i.imgur.com/wFuYDC9.png)
	- security issue
		- a kernel thread may be used by multiple user threads -> need careful data protection
	- most flexible
	- diffucult to implement
- two-level model
	- ![](https://i.imgur.com/crSs2hU.png)
	- popular
	- many-to-many but also allows one-to-one

### thread libraries
- user-level library
	- everything in user space
- kerne-level library
	- everything in kernel space
- main thread libraries
	- POSIX Pthreads
		- user-level or kerne-level
	- Windows
		- kerne-level
	- Java
		- using Windows API
- Unix/Linux uses Pthreads
- async & sync threading
	- async threading
		- parent & child execute concurrenly & independently
		- little data shared
	- synchronus threading
		- parent wait for all children to termiante before resuming
		- children execute concurrenly
		- child terminates -> joins back parent
		- parent & children share many data

### implicit threading
#### thread pool
- without thread pool
	- overhead of creating new thread
	- too many threads -> waste system resources
		- thread completes task -> discarded
- create a pool of worker threads at startup, waiting there to serve
- no free thread -> queue task
- thread completes task -> return to pool
- pros
	- use existing thread -> serves faster
		- compared to creating a new thread
	- limited amount of threads
	- resources used by app is limited
- ![](https://i.imgur.com/w0jyf7X.png)
- worker threads
	- threads created before requested
	- idle before assignment -> not wasting resources
	- won't be terminated after task done
	- need to be explicitly free & shutdown

#### fork join
- ![](https://i.imgur.com/LjrsNxU.png)
- divide and conquer
- ![](https://i.imgur.com/hddFgUM.png)

#### OpenMP
- create as many threads (as num of cores)
- speedup
	- ![](https://i.imgur.com/7rg5GdY.png)
	- capped by num of cores

#### Grand Central Dispatch (GCD)
- Apple
- thread pool

### threading issues
- fork()
	- some duplicate all threads of the process
	- some duplicate only the calling thread of the process
- lightweight process (LWP)
	- intermediate data structure between user & kernel thread
	- LWP & kernel thread está one-to-one
	- ![](https://i.imgur.com/VqXUNnR.png)

## main memory
- memory protection
	- base & limit register defining the available address space
	- ![](https://i.imgur.com/4vGdy88.png)
	- ![](https://i.imgur.com/FiTqrpD.png)
- address binding
	- ccompile time
		- absolute code with known memory location
		- symbolic address binding
	- load time
		- relocatable code with memory location not known
		- relative address
	- execution time (run time)
		- physical address binding
	- ![](https://i.imgur.com/YZ4daTc.png)
- physical & logical address
	- logical address is relative
		- logical address + base -> physical address (translated by MMU)
	- ![](https://i.imgur.com/Q5T16sG.png)
- linking
	- static linking
	- dynamic linking
		- link at execution time
- loading
	- static loading
		- load entire progam to memory
	- dynamic loading
		- on-demand loading
			- don't load until called
		- load only main program first

### contiguous memory allocation
- very early
- 2 partitions
	- OS
	- user processes
		- each process has a single contiguous memory section
- ![](https://i.imgur.com/9j98hdw.png)
	- process terminated -> memory partition freed (blue section)
- dynamic storage-allocation problem

#### external fragmentation
- sum of free partitions > required, but not a single one is enough
- 50-percent rule
	- for N allocated blocks, 0.5N blocks would be unusable due to external fragmentation
- solutions
	- compaction
		- relocate all free partitions into a big one
		- possible only if relocation is dynamic and done in execution time
			- not possible if use physical address
	- paging
		- allow logical address (physical memory) to be noncontiguous

#### internal fragmentation
- allocate memory based on block (paging) -> may have unused memory
	- e.g. 50b each block, need 148b -> get 50x3=150b -> waste 2b
	- Why allocate in block?
		- overhead of keeping track a small hole may be larger than the hole itself

### paging
- divide physical memory into fixed-size block (frame)
	- keep track of free frame
- divide logical memory (process memory) into fixed-size block (page)
	- page.size = frame.size
	- allocate process memory of N pages by finding N free frames
- address field
	- page number
		- m-n bits page number -> num of pages = $2^{m-n}$ bytes
	- page offset
		- n-bit page offset -> page size = $2^n$ bytes
	- m-bit logical address space -> logical address space = $2^m$ bytes
	- ![](https://i.imgur.com/nXBl1ld.png)
- page table
	- mapping of logical address page -> physical address frame
	- each process has its own page table
	- size
		- ![](https://i.imgur.com/ctImTFn.png)
		- ![](https://i.imgur.com/Wd3OCfC.png)
	- e.g.
		- ![](https://i.imgur.com/IXl0a6b.png)
- paging translation example
	- ![](https://i.imgur.com/LwopC1M.png)
		- page x in logical -> page y in physical
		- 2-bit page number, 2-bit page offset
		- $2^2=4$ bytes per page
		- logical address = 2 -> page 0 offset 2 in logical -> page 5 offest 2 at physical -> physical address = 5x4+2 = 22 
		- logical address = 9 -> page 2 offset 1 in logical -> page 1 offest 1 at physical -> physical address = 1x4+1 = 5 
- internal fragmentation
	- internal fragmentation = num of unused bytes
	- to reduce internal fragmentation
		- reduce frame size
			- 50% rule: average fragmentation = 0.5 frame size -> smaller frame smaller internal fragmentation
			- resulted in bigger table
- paging translation overhead
	- computation
	- 2 memory accesses
		- fetch page table
		- fetch logical address
	- memory access time takes too much portion of time
		- 88%
- valid bit
	- is in the process's logical address space -> valid
	- else -> invalid & page fault
- share page
	- common code shared by many processes only need to have 1 copy in physical space

#### TLB
- translation look-aside buffer
- to reduce the overload fetching page table
- put some page table entries in a fast memory
	- a cache for page table entries basically
- an associative, high-speed, small memory
	- associative -> search in parallel (1 comparator for each entry) -> fast
	- expensive
	- power hungry
- design
	- TLB hit -> get frame number -> access physical memory
	- TLB miss -> access page table, get frame number -> access physical memory & add <page num, frame num> to TLB
	- TLB full -> replace with some policies
	- ![](https://i.imgur.com/aXk88IK.png)
- hit ratio
	- instruction has locality -> would be fairly high
	- replacement policy largely affects it
- e.g.
	- ![](https://i.imgur.com/VZj3fMP.png)

### structure of page table
- contiguous page table -> too large ($2^{20}>>2(2^{10})$) -> need to split

#### hierarchy page table
- multilevel page table
- page the page tables
	- ![](https://i.imgur.com/DZRzUVk.png)
	- ![](https://i.imgur.com/CRKSA8M.png)
- 64-bit processor will need many layer of paging -> big memory access overhead -> inappropiate
- e.g.
	- ![](https://i.imgur.com/mBOEtUC.png)
- xv6
	- virtual address
		- EXT = 0
		- index = concat of 3 level page table idx
		- offset = 0
	- ![](https://i.imgur.com/VZ0fGnI.png)
	- ![](https://i.imgur.com/CploN8D.png)
	- ![](https://i.imgur.com/0vAhiKX.png)

#### hashed page table
- hash table
- hashed logical address -> physical address 
- linked list for collision
- 3 fields in each element
	- virtual page num
	- hashed virtual page num (mapping target physical frame)
	- pointer to next element (for collision)
- ![](https://i.imgur.com/uNVlNvx.png)
- clustered page table
	- each entry mapped to several pages
	- useful for sparse address space

#### inverted page table
- map physical memory page to virtual ones
	- normally it's mapping virtual to physical
- ASID, address-space identifier
	- identify which process in use
	- provide address-space protection for that process
- given value = <pid, page num>, find key (physical page num & offset)
- ![](https://i.imgur.com/dH76Ngm.png)
- lower space complexity
	- only one inverted table in whole system
		- normally, each process has one page table 
- higher time complexity
	- searching key with value, instread of saerching value with key
	- solution: hashing
- no shared memory
	- 1 virtual page entry for each physical page
	- only 1 mapping virtual address at a time
- external page table for each process
	- info about logical address space of process
	- for demand paging to deal with page fault
	- referenced only when page fault
- [normal vs. inverted page table](https://www.geeksforgeeks.org/difference-between-page-table-and-inverted-page-table/)

### swapping
- backing store
	- fast secondary storage
	- large enough to store whatever swapped in
	- have direct access to memory image (???)
- standard swapping
	- memory requirements > physical memory -> temporarily swap processes out to backing store 
	- ![](https://i.imgur.com/EpoHBu8.png)
	- time moving between memory is huge
- roll out, roll in
	- priority-based swapping
- swapping with paging
	- page out
		- move a page to backing store
	- page in
		- move a page back from backing store
	- ![](https://i.imgur.com/0l1zkFk.png)

## Virtual Memory
### intro
- in old OS with old CPU, virtual memory = logical memory
- background
	- no need to load entire program but just part of it
- pros
	- make logical memory not constrained by physical memory
	- address spaces can be shared by many processes
	- run many programs at the same time (each partially loaded)
- memory segmentation
	- modern CPU has segment selector, can switch between segments (code, data, stack, etc.)
		- 48 bits uses for memory address in 64-bit processor
			- 16-bit segment selector
			- 32-bit offset
	- segmentation fault
		- address not in the segment you're accessing
		- memory access violation
		- because of memory protection
- logical memory vs. virtual memory
	- logical memory for entire memory address space
		- 1 base
		- offset ranges the entire memory
	- virtual memory for each segment
		- 1 base for each segment
		- offset ranges only in the segment

### demand paging
- bring in a page to memory on demand
	- like swapping
	- lazy swapper
- pros
	- less I/O
	- less memory needed
	- faster
	- support more users
- paging
	- invalid -> abort
	- not in memory -> bring to memory
- page fault
	1. check if reference is valid
		- invalid reference -> abort
	2. find free frame in physical memory
	3. swap page into free frame
	4. update table
	5. restart instruction causing page fault
	- ![](https://i.imgur.com/kqB2vCZ.png)
- locality
	- some pages access many new pages each instruction -> bad performance
	- prefetch
- free-frame list
	- ![](https://i.imgur.com/IJ7N1Oh.png)
	- maintain a linked list of free frames
	- zero fill-on-demand
		- when allocated, clear the frame data
		- for security
- swap space
	- sequential (???)
	- with optimization
		- load entire process image to swap space at start
		- filesystem -> swap -> memory
	- without optimization
		- load process to memory at start
		- page out to swap space

### COW, copy-on-write
- copy page only when need to write
- fork() -> copy parent's page table to child's
- before writing, parent & child have different page tables but same physical address space
- need to write -> page fault -> child copy parent's actual page -> continue the instruction
- ![](https://i.imgur.com/vuFE9Ql.png)
- vfork()
	- virtual memory fork()

### Page Replacement
- over-allocating / over-booking
	- allocate only 50% of requested memory -> can have double amount of processes
- when there's no free frame
	- find and page out unused pages
	- strategy
		- terminate
		- swap out
		- page replacement
	- goal
		- min num of page faults 
- no free frame
	- ![](https://i.imgur.com/cW9dfaC.png)
- frame-allocation algo
	- frames for each process
	- page replacement

#### page replacement algo
- procedure
	- have free frame -> use it
	- no free frame -> find victim frame and swap -> update page table -> restart the instruction
		- max 2 page transfers
	- if victim frame isn't modified (modify/dirty bit = 0) -> no need transfer back to backing store
	- e.g.
		- ![](https://i.imgur.com/zhAn75w.png)
			- B invalid; C valid ->  swap out C; swap in B -> B valid; C invalid
- Belady's Anomaly
	- page-fault rate may increase on page frames increase for some algo
	- e.g.
		- ![](https://i.imgur.com/o0WUO5N.png)
		- ![](https://i.imgur.com/dhJrlW1.png)
- optimal algo
	- find victim frame that would not be used again
	- would not suffer from Belady's Anomaly
		- frame priority independent of num of frames 
- FIFO algo
	- suffers from Belady's Anomaly
		- frame priority dependent of num of frames
	- ![](https://i.imgur.com/4cvZN8L.png)
- LRU algo
	- find least recently used frame
	- would not suffer from Belady's Anomaly
		- frame priority independent of num of frames 
	- implementation with counter
		- a counter recording the most recently referenced time for each page entry
		- find the pte with smallest counter for replacement
	- implementation with stack
		- doubly-linked list stack
		- page referenced -> move to top of the stack
			- change 6 pointers
		- more expensive
		- <https://leetcode.com/problems/lru-cache/>
- LRU algo approximation
	- additional-reference-bits algo
		- reference bit
			- each page has one
			- initially 0
			- set to 1 when the page is referenced
		- 8 bits (1 byte) for reference history
		- periodically update the 8 bits, shift right and fill the reference bit at the leftmost
		- treated as unsigned integer -> smallest one is LRU
	- second-chance algo
		- FIFO with reference bit
		- iterate through reference bit of pages in FIFO's order
			- ref bit = 1
				- set ref bit to 0
				- set arrival time to current time
			- ref bit = 0 -> replace
		- circular
	- enhanced second-chance algo
		- consider (reference bit, modify bit)
		- (0,0) -> (0,1) -> (1,0) -> (1,1)
		- modified page will have to be written out before replaced
- counting-based algo
	- LFU algo
		- find least frequently used frame to replace
	- MFU algo
		- replace the most frequently used page
		- bc the recent brought in pages might not be used frequently used yet
- page-buffering algo
	- a pool of free frames
	- new page read into a free frame
	- process start without waiting for victim page to be written out
	- variation: a list of modified pages
		- paging device idle -> write modified page to backing store && reset modify bit
		- this way victim frame would more likely to be clean
	- variation: use free-frame directly
		- page fault -> if the page is in free-frame pool, use it directly
			- no I/O

### Allocation of Frames
- fixed allocation
	- equal allocation
		- divide evenly
	- proportional allocation
		- proportional to size of process

#### global & local allocation
- local replacement
	- its own set of frames
- global replacement
	- process can take frame from other processes
	- pros
		- higher system throughput
		- unused local frame can be utilized by other processes
	- cons
		- depends on other processes 
	- commonly used
	- reclaiming pages
		- ![](https://i.imgur.com/YVarh9b.png)
		- num of free frames < min threshold -> start reclaim
		- num of free frames > max threshold -> stop reclaiming
		- ensure there's always free frames available
- linux out-of-memory killer (OOM)
- each process has OOM score
	- function of memory usage
	- high -> more likely to be killed
	- set `oom_score_adj` to big negative to avoid being killed

#### Non-Uniform Memory Access (NUMA)
- memory not accessed equally
- some CPU can access some sections of main memory faster
- architecture
	- multiple CPUs
		- each has its own local memory
		- can access its own local memory faster
	- ![](https://i.imgur.com/OG0Xf07.png)
- cons
	- slower than systems with equal memory accessibility
- pros
	- more CPUs
	- bigger throughput & parallelism
- frame allocation
	- page fault -> allocate frames near the CPU the process is running on
	- Linux has separates free-frame list for each NUMA node
- scheduler
	- track each process's last CPU 
	- schedule process to run on its previous CPU -> higher cache hit rate

### Thrashing
- time spent in paging > time spent in executing
- sum of size of locality > total memory size -> thrashing
- accept many processes/requests -> degree of multiprogramming increase -> num of free frames decrease -> keep having page fault at some point
	- ![](https://i.imgur.com/mdbKdlb.png)
- when doing page replacement
	- memory & I/O busy
	- CPU free
- locality
	- a set of pages that are actively used together
	- may overlap
	- ![](https://i.imgur.com/6wVQdxS.png)
- when process executes, it moves from one locality to another
	- allocate frames according to locality to avoid thrashing

#### working-set model
- monitors the locality of each process
- allocates frames according to the needs of each process
- sum of locality > num of available frames -> suspend a process
	- swap out the pages of the process
- walking set = approximation of the locality of a process
- maintain a working-set window $\Delta$
	- fixed num of page references
	- sliding window
- $WS(t_j)$ = working set = set of pages in $\Delta$
	- ![](https://i.imgur.com/tsGh1vT.png)
- $WSS_i(t_j)$ = size of working set of process $i$
- $D = \sum WSS_i(t)$ = num of demanded frames at time $t$
- $m$ = total memory size
- $D>m$ -> thrashing -> suspend / swap out a process
- 2 in-memory reference bit & 1 reference bit
- fixed-interval timer interrupt
	- clear reference bit & update in-memory reference bit
	- ![](https://i.imgur.com/Qe0Z6ua.png)
- unaccurate
	- don't know when it's referenced within the interval
	- may have many references uncovered if interval too big or window too small
- page fault rate
	- ![](https://i.imgur.com/HJULyug.png)
	- when paging a different locality, page-fault rate peaks

#### Page-Fault Frequency (PFF)
- more direct than working-set model
- adjust allocation policy based on page-fault rate
- page-fault rate > upper bound -> allocate frames for the process
- page-fault rate < lower bound -> remove frames for the process
- ![](https://i.imgur.com/dphu0bD.png)

#### Allocating Kernel Memory
- different free-frame pool than that of user-mode processes
	- kernel need memory in various size, instead of a page
	- some kernel memory needs to be contiguous, while user memory doesn't have to
- 2 strategies
	- buddy system
	- slab allocator
- buddy system
	- allocate in fixed-size segment
		- power-of-2 allocator
	- physically contiguous page
	- coalescing
		- adjacent buddies become bigger buddy
	- cons
		- internal fragmentation
	- ![](https://i.imgur.com/6LdV42S.png)
- slab allocator
	- ![](https://i.imgur.com/tztkNeW.png)
	- slab
		- one or more physically contiguous pages
		- 3 states
			- full
				- all objects in the slab is used
			- partial
			- empty
				- all objects in the slab is free
	- a cache has one or more slabs
	- 1 cache for each unique kernel data structure
		- e.g. process descriptors, file objects, semaphores
	- each cache has many objects
		- instantiations of the respective kernel data structures
		- num of objects depends on size of associated slab
		- e.g. 12KB slab (3x4KB contiguous page) -> 6x2KB objects
- create cache -> allocate objects
- slab allocator
	- request -> assign free object from cache -> mark as used
	- assignment priority
		- partial slab -> empty slab -> allocate a new slab
- pros
	- wasteless - no internal fragmentation
		- cache is divided into the exact size that an object in that data structure needs
	- fast - objects can be frequently allocated & deallocated
		- objects are created when the cache is created -> can be quickly allocated
		- after being released, objects are marked as free and returned to the cache -> can be allocated again immediately

### Others
#### prepaging
- no prepaging in demand paging -> many page faults at process start
- cons
	- many prefetched pages may not be used

#### page size
- many tradeoffs
- why smaller pages
	- less internal fragmentation
	- less transfer time
		- transfer time is insignificant tho
	- better locality
		- better resolution with small page
		- -> smaller total I/O time 
		- e.g. need only 100kB from the 200kB process
			- 1kB-page = 1kB -> bring in 100kB
			- 200kB-page -> bring in 200kB
- why bigger pages
	- smaller page table
		- less num of pages
	- less I/O time (for each unit size)
		- only a tiny bit more time needed for 1 big page than for 1 small page
	- less page faults
- history trends: toward larger page

## CPU Scheduling
- alternate between CPU burst & I/O burst
- difference between CPU burst & I/O burst
	- CPU can generally be preempted, while I/O can't
	- CPU burst shorter than I/O burst
		- execute I/O in batch -> more efficient but takes longer
- CPU burst
	- long tail distribution
		- many short CPU bursts with a few long ones
		- ![](https://i.imgur.com/WzyiauU.png)
	- CPU-bound processes have longer CPU burst than I/O-bound ones
- preemptive & nonpreemptive
	- nonpreemptive
		- cooperative
		- CPU is released when
			- process switch to waiting state
			- process terminates
		- simple
	- preemptive
		- all modern OS
		- processes can run asynchronusly
		- race condition
			- data shared among several processes
			- inconsistent data
				- e.g. a process is updating the data while another is reading it
		- be preempted = be kicked away
- scheduling goals
	- maximize CPU utilization
	- maximize throughput
	- minimize turnaround time
		- amount of time needed for a complete process execution
		- waiting time + execution time + I/O time
	- minimize waiting time
		- amount of time a process spent in waiting queue
	- minimize response time
		- amount of time needed to get a reponse
		- interactive system
	- may not always aim for the average value
		- e.g. minimize max waiting time
		- for interative system
			- minimize variance -> more predictable
- data computation/processing modes
	- Batch Mode
		- accumulate data into a group -> process at once
		- efficiency
		- maximize CPU utilization
		- maximize throughput
	- Online Mode
		- process & respond instantly
		- responsiveness
		- minimize turnaround time
		- minimize waiting time
		- minimize response time
	- Real-Time Mode
		- process & respond instantly
		- predictability
- CPU scheduling isn't the only factor of responsiveness
	- only consider CPU burst but not I/O burst

### scheduling algorithms
#### first-come, first-serve (FCFS) scheduling
- e.g.
	- ![](https://i.imgur.com/00jHzcu.png)
- convoy effect
	- all other processes wait for one big process to finish
		- e.g. 1 CPU-bound process & many I/O-bound processes
		- -> low CPU & devide utilization

#### shortest-job-first (SJF) scheduling
- optimal for average waiting time minimization
- schedulef the process with the minimal CPU burst
- preemptive version
	- shortest-remaining-time-first
- e.g.
	- ![](https://i.imgur.com/sAv9kh3.png)
- length of next CPU burst prediction
	- exponential average
		- EWMA
		- $\tau_{n+1}=\alpha t_n+(1-\alpha)\tau_n$
		- $\alpha=1$ -> memoryless

#### round-robin (RR) scheduling
- to solve convoy effect
	- avoid one big process taking all CPU time
- each process gets a small period of time
	- time quantum Q
- time passed -> process preempted and added to the end of waiting queue
- CPU time allocation
	- n processes
	- divided into chunks of total CPU time
	- each process gets 1/n of total CPU time
	- cut CPU time into chunks
	- allocate CPU time for processes in round-robin fasion, with base unit = a chunk
	- a chunk = q time units
		- $q\rightarrow \infty$ -> FCFS
		- q small -> spend most time doing context switch
	- each process gets a chunk
	- each process wait at most (n-1)q time units
- e.g.
	- ![](https://i.imgur.com/2hkzKZy.png)
- average performance
	- bigger turnaround time than SJFpriority
		- e.g.
			- ![](https://i.imgur.com/DFzLe93.png)
			- ![](https://i.imgur.com/zEk9a0H.png)
	- more responsive than SJF

#### priority scheduling
- smaller number -> higher priority
- problems
	- starvation
		- low priority processes never get executed
		- solution
			- priority increases as waiting time longer
				- aging
			- implement with multilevel feedback queue
				- processes can move between queues
	- convoy effect (for processes with same priority)
		- solution
			- round-robin for processes with same priority
				- implement with multilevel queue
					- e.g.
						- ![](https://i.imgur.com/chywjaP.png)
						- ![](https://i.imgur.com/jDj5KjF.png)
							- 3 queues
							- RR with q=8 -> process unfinished -> RR with q=16 ->  still unfinished -> FCFS
				- e.g.
					- ![](https://i.imgur.com/5xRRnUW.png)
- e.g.
	- ![](https://i.imgur.com/yLx97Eh.png)
- priority
	- ![](https://i.imgur.com/fP8dYO3.png)

### Thread Scheduling
- kernel threads are scheduled for modern OS
	- rather than processes

#### contention scope
- process-contention scope (PCS)
	- for many-to-many or many-to-one OS
	- schedule user-level thread to run in LWP
	- competition within process
- system-contention scope (SCS)
	- schedule kernel-level threads
	- one-to-one OS only uses SCS
		- Windows, Linux, MacOS
	- competition among all threads

### Multi-Processor Scheduling
- symmetric multiprocessing (SMP)
	- each processor does its own scheduling
	- ready queue
		- ![](https://i.imgur.com/uNnZfiz.png)
		- separate queue
			- load balancing
		- shared queue
			- race condition
#### multicore processor
- memory stall
	- spend large portion of time on memory access
	- ![](https://i.imgur.com/26WLrj5.png)
	- solution
		- multithreaded processing cores
- multithreaded processing cores
	- each core has multiple hardware thread
	- 1 thread wait for memory -> execute another thread
	- ![](https://i.imgur.com/d6lPISA.png)
- granularity
	- coarse-grained multithreading
		- switch on thread level
		- long latency event -> flush out old instructions -> load new instructions
		- big overhead
	- fine-grained multithreading
		- interleaved
		- switch on instruction level
		- special architecture to support it
		- small overhead
- level
	- ![](https://i.imgur.com/Ksi1zAb.png)
	- 1st level
		- select software thread
	- 2nd level
		- select hardware thread

#### Load Balancing
- methods
	- push migration
		- task checker moves tasks from overloaded processors to underloaded ones
			- need a task checker
	- pull migration
		- idle processors grab tasks from busy processors
			- no need task checker
			- more efficient
			- but some processors may not be willing to do this
- processor affinity
	- a process run on a processor -> has affinity with it
		- fill its cache
	- load balancing -> processor affinity changed
	- soft affinity
		- attempt to keep a process on the same processor
			- no gaurantee
	- hard affinity
		- process specificies a set of processors to run on
- NUMA-aware OS
	- allocate memory close to the CPU the process is on

### Real-Time CPU Scheduling
- hard real-time systems
	- miss deadline -> system fail (no service)
- soft real-time systems
	- miss deadline -> quality drop
		- may have penalty
	- critical real-time tasks have higher priority, but no guarantee
- interrupt latency
	- time between interrupt & interrupt starting to get service
	- resulted from
		- determining interrupt type
		- context switch
	- ![](https://i.imgur.com/GUuS6Eq.png)
- dispatch latency
	- time needed for scheduling dispatcher to stop a process & start another one
	- conflict phase
		- prempting running processes
		- make low-priority processes release locked resources that is needed
	- ![](https://i.imgur.com/WX8nHX0.png)

#### Proportional Share Scheduling
- fair-share scheduler
- each task gets a fixed share of CPU time
	- fixed proportion of CPU time
	- "fair" is misleading
- lottery scheduling

#### Priority-Based Scheduling
- soft real-time
- periodic process
	- rate = 1/p
	- processing time = t
	- deadline = d
	- period = p
	- $0\leq t\leq d\leq p$
	- ![](https://i.imgur.com/MUin1vI.png)
	- ![](https://i.imgur.com/sD0Qm57.png)
		- red is higher-priority process
		- need to make them finish before deadline
- ![](https://i.imgur.com/PDWYdcS.png)

#### Rate-Monotonic Scheduling
- shorter the **period**, higher the priority
- static priority
	- a process will always have higher priority than the other
- cons
	- not always efficient
- e.g.
	- ![](https://i.imgur.com/G7Bqatp.png)
		- P1 always has higher priority, can always preempt P2
	- ![](https://i.imgur.com/as2H559.png)
		- P2 will miss deadline while it doesn't really need to
- ![](https://i.imgur.com/51ZWjBM.png)
	- ![](https://i.imgur.com/fvbO9oI.png)

#### Earliest-Deadline-First (EDF) Scheduling
- the closer the deadline, the higher the priority
- e.g.
	- ![](https://i.imgur.com/lJwO3q7.png)

#### POSIX Scheduling
- `SCHED_FIFO`
	- [first-come first-serve FCFS scheduling](#first-come%20first-serve%20FCFS%20scheduling)
- `SCHED_RR`
	- [round-robin RR scheduling](#round-robin%20RR%20scheduling)

### Operating Systems Examples
#### Linux
- pre-2.5
	- traditional UNIX scheduling
- 2.5
	- constant time scheduling
		- poor response time for interactive processes
- 2.6.23
	- Completely Fair Scheduler (CFS)
		- CPU time evenly divided
			- not evenly anymore
		- steps
			1. time interrupt
			2. choose task with min vruntime
				- RB tree
			3. compute dynamic time slice
				- when to do next scheduling decision
			4. set timer for time slice
			5. context switch and execute
		- vruntime
			- virtual runtime
			- how much time unit a task has used
			- has its own clock rate
				- equivalent to weight
			- virtual clock rate = virtual clock / real clock
		-  keep vruntime of processes in RB tree
			- not running or runnable processes
		- time slice
			- time slice = max(min_granularity, sched_latency/n)
			- have weight irl
		- weight

#### Windows
- priority-based, preemptive scheduling
- execute idle thread if no ready queue empty
- Win7 added user-mode scheduling

#### Solaris
- priority-based scheduling
	- 6 classes
	- different scheduling algo for each class

### Algorithm Evaluation
- critiria
	- efficiency
	- responsiveness
	- predictability

#### Deterministic Modeling
- a type of analytic evaluation
- take a predeterminied static workoad and calculate the performance under each algo
- unrealistic
- e.g.
	- ![](https://i.imgur.com/HztAlq5.png)
	- ![](https://i.imgur.com/guLKNmF.png)

#### Queueing Models
- given probability distribution of CPU & I/O bursts
	- measured or estimated
- calculate average throughput, utilization, waiting time etc. for each algorithms
- Little's Formula
	- $n=\lambda\times W$
	- n = average queue length
	- $\lambda$ = average arrival rate
	- W = average waiting time in queue
	- 1 arrival 1 exit in steady state
	- pretty intuitive actually

#### Simulations
- simulate and get algo performance

#### Implementation
- implement and measure irl
- cons
	- high cost
	- high risk
	- environment vary

## Mass-Storage Systems
- heirarchy
	- ![](https://i.imgur.com/mpg9k9u.png)
- hard-disk drive (HDD)
	- ![](https://i.imgur.com/beO7GqR.png)
	- positioning latency
		- time to move disk arm to desired cylinder, mechanically
		- seek time
		- very slow
		- ~10ms
	- rotational latency
		- time for desired sector to rotate under disk head
		- relatively slow
	- sequential read/write time small
		- rotational latency
		- ~100MBs
	- random read/write time big
		- positioning latency
		- ~100KBs
	- head crash
		- disk head crashed with disk surface
		- not suitable for portable devices
		- suitable for data center
	- 
- soft-disk drive
- flash memory
	- NTU graduate
- nonvolatile memory devices
	- pros
		- more reliable
		- faster
	- cons
		- shorter life span
			- limited write times
		- more expensive
		- update unit is page, not bit
	- e.g.
		- SSDs
		- USB
		- NVMe

### HDD scheduling
- can only approximate head & cylinder location
	- don't know exact location

#### FCFS scheduling
- e.g.
	- ![](https://i.imgur.com/AxygfeL.png)

#### SSTF Scheduling
- shortest seek time first
- always go to the nearest one

#### SCAN Scheduling
- elevator algorithm
- to reduce redundant movement
- font -> end -> front -> end -> front -> ....
	- serve the requests along the way
- e.g.
	- ![](https://i.imgur.com/rX1NJE4.png)

#### C-SCAN Scheduling
- front -> end ; front -> end ; ...
- one direction
- more uniform waiting time than [SCAN Scheduling](#SCAN%20Scheduling)
- treat the cylinder as cirlular list
- e.g.
	- ![](https://i.imgur.com/7RyaQi1.png)

#### Algo Comparison
- SSTF (shortest seek time first)
	- greedy
	- starvation
- SCAN & C-SCAN
	- less starvation
- to avoid starvation
	- deadline scheduler
		- Linux
		- 2 read & 2 write queues
		- 1 read 1 write LBA order
			- C-SCAN
		- 1 read 1 write FCFS order
- NVM Scheduling
	- FCFS
	- random access I/O faster than HDD

### Error Detection & Correction
- error detection
	- see [error detection](Computer%20Networks#error%20detection)
	- parity bit
		- num of 1s being old or even
		- too simple
	- CRC, cyclic reduncancy test
		- see [CRC cyclic redundancy check](Computer%20Networks#CRC%20cyclic%20redundancy%20check)
		- generator polynomial
- error correction
	- ECC, error-correction code 
		- in unreliable or noisy communication channels
		- hamming code example
			- ![](https://i.imgur.com/RAKJYvU.png)
			- parity bits being 1, 2, 4
				- each has exact one "1" bit
			- data bits being 3, 5, 6, 7
			- 3, 5, 7 has 1 as the least significant bit -> P1 = parity of D3, D5, D7
			- 3, 6, 7 has 1 as the 2nd least significant bit -> P2 = parity of D3, D6, D7
			- 5, 6, 7 has 1 as the 3nd least significant bit -> P4 = parity of D5, D6, D7
			- for data string 1101, the correct bit string to send & receive is 1100110
			- ![](https://i.imgur.com/srvr2Vr.png)
			- receive bit string -> detect error and their position -> correct them 

### storage device management
- bottom to top
	- partition
		- os treat each as a separate device
	- volume
	- logical formatting
		- creating a file system
		- store file-system data structures onto the device
- group blocks into a cluster
- device I/O conducted in blocks
	- more random access
- file system I/O conducted in clusters
	- more sequential access
- root partition
	- mounted at boot time
- raw disk access
	- up to apps to do their own block management
	- database
	- swap space
- boot block
	- ![](https://i.imgur.com/P0RXetn.png)
	- MBR, master boot record
		- 1st logical block / page
		- contains boot code
	- boot -> code in system firmware direct the system to read the boot code in MBR -> identify the boot partition -> read the 1st page of the partition -> direct to kernel
- bad block
	- defective block
	- scan -> flag bad blocks -> avoid them while doing allocation

### swap-space
- used when DRAM not enough space
- raw disk access
	- no need formatting
- slower
- swap map
	- like page table

### storage attachment
- host-attached
	- through local I/O port
	- fiber channel (FC)
		- high speed
- network-attached
	- NAS, network-attached storage
	- protocols
		- NFS
		- CIFS
	- implemented with RPCs, remote procedure calls
		- over TCP/UDP
	- ![](https://i.imgur.com/TzaCFtf.png)
- cloud
	- over the Internet or WAN to remote data center
	- access with API
- storage-area network (SAN) & storage arrays
	- high bandwidth
	- SAN interconnects with fiber channel
	- ![](https://i.imgur.com/nlWaxmU.png)

### RAID

- redundant array of independent disks
- improve reliability with redundancy
- increase mean time to data loss
	- MTTDL, mean time to data loss
	- MTBF, mean time between failures
	- MTTR, mean time to repair
		- time needed to repair a failed drive
	- e.g.
		- 2 mirrored disks, with MTBF = 10k hr, mean time to repair = 10 hr
		- mean time to data loss = $\dfrac{(10k)(10k)}{2*10}$
			- expected time for the 2 disks to fail within a 10 hr window
			- need to know the distribution tho?
	- see [this](https://www.servethehome.com/raid-reliability-failure-anthology-part-1-primer/) for more details
	- related to [dependable memory hierarchy](Computer%20Architecture#dependable%20memory%20hierarchy)
- improve performance with parallelism
	- execute 2 I/O at the same time
	- mirroring
		- send read requests to either drive -> faster
	- data striping
		- distribute data across devices, improving transfer rate
		- bit-level
		- block-level
	- increase throughput
	- decrease response time
- RAID levels
	- <http://www.cs.rpi.edu/academics/courses/fall04/os/c16/index.html>
	- RAID 0
		- striping
	- RAID 1`
		- mirrored disks
	- RAID 4
		- block-interleaved parity
		- a parity drive
			- single point of failure
		- memory-style ECC (error-correcting-code) organization
	- RAID 5
		- block-interleaved distributed parity
		- distributing parity to each drive
			- parity redundancy
		- recovery without reduncancy
			- with ECC
		- stripe data
	- RAID 6
		- P+Q redundancy
		- distributing parity & error detection code to each drive
		- have ECC
	- combinations
		- RAID 10 (1+0)
			- mirror -> stripe
			- ![](https://i.imgur.com/ZiTVzeZ.png)
		- RAID 01 (0+1)
			- stripe -> mirror
			- ![](https://i.imgur.com/WuvRFJ3.png)
		- RAID 01 & 10
			- similar performance
			- RAID 10 has better reliability
			- need 4 drives
			- ![](https://i.imgur.com/lq24wl4.png)
	- ![](https://i.imgur.com/supyI4h.png)
	- ![](https://i.imgur.com/vbhDjRF.png)
- cons
	- data not always avaiable
	- not flexible
- ZFS
	- pools of storage
	- improve flexibiity
	- ![](https://i.imgur.com/OyAEm89.png)
- object storage
	- computer-oriented
		- rather than user-oriented
	- object storage management software
		- Hadoop
		- Ceph
	- content-addressable
		- access with content
		- unstructered data
	- horizontal scalability
		- add more storage devices to scale

## File-System Interface
### access methods
- sequential access
	- most common
	- ![](https://i.imgur.com/8FwhjsN.png)
- direct access
	- relative access
	- a file = fixed-size logical record
	- read/write in no particular order
	- relative block number
		- relative to the beginning
	- e.g. database
- not all OSes support both
- direct access variance
	- multi-level indexing

### directory structure
- single-level
- two-level
- tree-structured
	- ![](https://i.imgur.com/B3zoR3m.png)
	- absolute path name
	- relative path name
- acyclic-graph
	- ![](https://i.imgur.com/hVcH6Tk.png)
	- symbolic link
		- soft link
	- hard link
	- problems
		- handle non-existent link
		- find cycle
			- use i-node number
				- real file ID
		- ![](https://i.imgur.com/vxlNfPB.png)
		- flagging i-nodes not practical
			- can't modify i-node irl
		- Floyd
			- fast slow pointers
			- ![](https://i.imgur.com/wee6dV5.png)
		- external marking
			- while 1; previous->next = temp;
			- move to temp -> have cycle
			- ![](https://i.imgur.com/GeV7u20.png)
- general graph
	- ![](https://i.imgur.com/30X90Bk.png)

### protection
- memory-mapped files
	- ![](https://i.imgur.com/YmQ9LkB.png)
	- ![](https://i.imgur.com/rs7XPKF.png)

## File-System Implementation
### File-System Structure
- layered file-system
	- ![](https://i.imgur.com/kJpNur6.png)
- logical file system
	- control blocks
- file-organization module
	- logical block to physical block translation
	- block allocation
- file control block, FCB
	- inode
	- info of the file
- basic file system
	- translate commands to device driver
	- manage memory buffers & caches
- VFS
	- virtual file systemfor linux

### File-System Operations
- on-storage structures
	- boot control block
		- info needed for booting
		- 1st block of the voluming containing an OS
		- alias
			- boot block for UFS (Unix File System)
			- partition boot sector for NTFS
	- volume control block
		- volume details
		- alias
			- super block for UFS
			- master file table for NTFS
	- per-file File Control Block
		- defails for file
		- NTFS use relational database to store
			- indexed
			- east to search & maintain
- in-memory structures
	- ephemeral
	- loaded at mount time, discarded at dismount
	- mount table
	- system-wide open-file table
		- copy of FCB of each file
	- per-process open-file table
		- pointers to entries
	- unix treat a directory the same as a file
		- with a type field to indicate
	- Windows treat a directory & a file as different entities
	- open & read a file
		- ![](https://i.imgur.com/IG6r6hk.png)

### Directory Implementation
- linear list
	- simple
	- big exec time 
- hash table
	- need to avoid collisions
		- on fixed size hash table
	- small search time

### Allocation Methods
#### contiguous allocation
- allocate contiguous blocks
- pros
	- easy
	- minimal head movement for HDD
- cons
	- external fragmentation
- ![](https://i.imgur.com/Yirbx3U.png)
- compaction
	- move all free space into contiguous blocks
	- off-line
		- during downtime or when unmounted
	- on-line
		- big impact on system performance
- extent-based systems
	- not enough contiguous blocks -> linked in new contiguous blocks (extent)
	- link to 1st block of extent
	- problems
		- extent may have internal fragmentation
		- allocate & deallocate extents -> external fragmentation

#### linked allocation
- linked list of storage blocks
- pros
	- no external fragmentation
- cons
	- slow direct access
		- need to traverse through the linked list
	- need space to store pointers
		- solution: cluster multiple blocks
	- low reliability
		- a link is gone -> broke
		- solutions
			- doubly linked list
			- store filename & logical block num in metadata
				- s.t. the linked list can be reconstructed
- ![](https://i.imgur.com/dcH4Pim.png)
- file-allocation table, FAT
	- ![](https://i.imgur.com/uk3PXat.png)
- table at start of volime
- huge seek time
- low random access time
	- just check the table

#### indexed allocation
- linked allocation but all pointers in a index block
- pros
	- faster directly access than linked allocation without FAT
- cons
	- need extra space for index block
- ![](https://i.imgur.com/9N3Yr0A.png)
- ![](https://i.imgur.com/fFX8xwP.png)

#### performance
- storage efficiency
	- external fragmentation
- data-block access time

### free-space management
- free-space list

#### bit vector (bitmap)
- ![](https://i.imgur.com/OIOyOp9.png)
- pros
	- simple
- cons
	- need huge space for big disk

#### linked list
- linking all free blocks
- a pointer to 1st free block
- pros
	- no space wasted
- cons
	- big traversal time

#### grouping
- linked list but
	- 1st free block contains addresses to n free blocks
	- last of the above blocks contains addresses to another n free blocks
- pros
	- faster to find many free blocks compared to linked list

#### counting
- like extent
- keep address of 1st free block num of subsequent contiguous free blocks
- each list entry contains an address & a count
- based on the fact that contiguous blocks are often allocated & deallocated together
- pros
	- shorter list

#### space maps
- metaslabs
- ![](https://i.imgur.com/1vUapTC.png)

#### TRIMing used blocks
- some device need blocks to be erased before being allocated again
- inform a page is freed and can be erased
	- TRIM for ATA-attached drives
	- `unallocate` for NVME-based storage

### efficiency & performance
- factors
	- allocation & directory algos
	- data type
	- pointer size
	- data structures fixed-size or not
- unified buffer cache
	- same page cache for memory-mapped I/O & file system I/O
	- avoid double caching
	- ![](https://i.imgur.com/2PxgG1v.png)
	- ![](https://i.imgur.com/yK5rvoz.png)
- asynchronus write
	- writes stored in cache
	- calling routing doesn't have to wait for writing
	- most writes are asynchronus
- free-behind & read-ahead
	- for sequential access
		- most recent used page will be the most unlikely to be used
	- free-behind
		- new page requested -> free the previous used page
	- read-ahead
		- new page requested -> cache the subsequent pages 

### Recovery
- consistency checking
	- compare data with the state on storage
	- status bit is set -> is updating metadata
	- `fsck`
- log-structured file system
	- log the metadata changes
	- log can only be appended, past log is immutable (read only)
		- no need lock
		- easy to recover
	- system crash
		- committed / logged but not completed transactions -> complete them
		- uncommitted / unlogged transactions -> undo them
- other solutions
	- snapshot
		- checkpoint
		- need a lot of space
- backup an restore
	- back up data to another storage device
	- restore from the backup data
- WAFL File System
	- write-anywhere file layout
	- optimized for random writes
	- ![](https://i.imgur.com/KUYZn1Q.png)
	- snapshots
		- take a snapshot -> block updates go to new blocks instead of overwriting old blocks
		- take very little space
			- extra space a snapshot needs is only from the blocks that have been updated
		- ![](https://i.imgur.com/0rEEhKS.png)

## File System Internals
- volumes & partition
	- volume can span across partitions
	- ![](https://i.imgur.com/r2xhHXO.png)

### Mounting
- file system must be mounted to be available to processes
- several ways
	- disallow mounting on unempty directory
	- hide the original files when mounted
		- ![](https://i.imgur.com/j9rZmoA.png)
- verify the device -> do consistency checking (fsck) if invalid -> update mount table in memory

### Partitions
- partition can be
	- raw
		- no file system
		- swap space
	- cooked
		- have file system
- contains a bootable file system -> needs boot info
	- bootstrap loader
		- find and load the kernel
		- mount the root partition and boot time

### File Sharing
- owner
	- can change attributes & grant access over the file
- group
	- set of users having access to the file
- owner & group ID stored in file attributes

### Virtual File System
- integrate different file-system types
- 3 layers
- ![](https://i.imgur.com/bOLQnA8.png)
- virtual file system (VFS) layer
	- vnode
		- unique within VFS (network-wide)
			- while inode is unique within a file system
	- define the generic operations
	- leave the exact implementation for each file-system to 3rd layer

### Remote File Systems
- methods
	- ftp
	- distributed file system (DFS)
		- mount remote directories
	- World Wide Web
- client-server model
	- server = machine with the file
	- client = machine seeking access to the file
	- security issues
		- client identifiers may be spoofed or imitated
- distributed information systems
	- alias: distributed naming services
	- network information service (NIS)
		- 電話簿
	- domain name system (DNS)
		- host-name-to-network-address translations
	- Microsoft's common Internet file system (CIFS)
	- lightweight directory-access protocl (LDAP)
- failure modes
	- remote file systems will have more failures
	- with state
		- easily recover a failure
	- stateless protocol
		- carry all the info needed
		- unsecure

### Consistency Semantics
- how multiple access a file simulteneously
- file session
	- open to close
- unix semantics
	- writes immediately visible
	- can share the pointer of the current location of a file
		- a user advances -> all users advance
- session semantics
	- changes viewable only after session closed
	- Andrew File Systems (AFS)
		- disconnected operations
		- large number of users can access a file simulteneously
		- ![](https://i.imgur.com/3L4rbge.png)
- immutable-shared-files semantics
	- read-only
	- final result computed from logs

### NFS
- network file systems
- a set of disconnected workstations
- sharing based on client-server
- mounting
	- ![](https://i.imgur.com/TV9UNUT.png)
- operate in heterogeneous environment
- stateful & stateless
	- ![](https://i.imgur.com/kaoV7Ti.png)
	- stateless
		- operations need to be indempotent (等冪)
			- f(f(x)) = f(x)
				- operation 做幾遍結果都一樣
				- e.g. floor function, absolute function, etc.
		- pros
			- more reliable
		- cons
			- request message longer
			- processing time longer
- schematic view
	- ![](https://i.imgur.com/LaFCwk3.png)
- buffer & cache
	- cache triggered by client
	- buffer triggered by server

## Synchronization Tools

- 2 processes interleaved -> incorrect result
	- e.g. count++ & count-- interleaved
		- ![](https://i.imgur.com/aQzedri.png)

### Critical-Section Problem

- segment shared with other process
- structure
	- ![](https://i.imgur.com/Rkz4DNe.png)
- solution requirements
	- mutual exclusion
		- only 1 process can execute the critical section at a time
	- progress
		- when none is executing critical section, only those not executing remainder section can decide which to execute critical section
		- the selection can't be postponed indefinitely
	- bounded waiting
		- fairness
		- order of execution has an upper limit
			- limited waiting time
			- from request made to request granted, how many other processes have entered critical section

### Critical-Section Solutions

- interrupt-based solution
	- prevent current process from being preempted
	- entry -> disable interrupt
	- exit -> enable interrupt
- software solution 1
	- assume `load` & `store` can't possibly be interrupted
	- ![](https://i.imgur.com/76QPB7O.png)
		- left is i, right is j
	- mutual exclusion satisfied
		- `turn` is a shared variable
	- progess unsatisfied
		- e.g. i -> i will never happen
	- bounded waiting satisfied
- software solution 2
	- ![](https://i.imgur.com/ncp2vgs.png)
	- mutual exclusion satisfied
	- progess satisfied
		- decide next in entry section
	- bounded waiting unsatisfied
		- deadlock if `flag[i]` = `flag[j]` = true
- Peterson's solution
	- ![](https://i.imgur.com/RM25Ssw.png)
	- all requirements satisfied
	- not gauranteed to work on modern computer architectures
		- multi-threaded app with shared data may reorder instructions -> incorrect result
		- solution: memory barrier

### Hardware Support

#### memory barriers

- an instruction forcing memory modifications to be immediately visible to other processors 
	- ensure all load/store completed before next load/store
		- even with instruction reordering
- very low level
- ![](https://i.imgur.com/Cp4hKFf.png)
- memory models
	- strongly ordered
		- memory modifications immediately visible to other processors
	- weakly ordered
		- memory modifications may not be immediately visible to other processors

#### atomic hardware instructions
- can't possibly be interrupted
- `test_and_set`
	- ![](https://i.imgur.com/0t97u4U.png)
	- ![](https://i.imgur.com/zmC9PzD.png)
		- bounded waiting unsatisfied
- `compare_and_swap`
	- ![](https://i.imgur.com/PRFKRR8.png)
	- ![](https://i.imgur.com/PQDz5Cn.png)
		- bounded waiting unsatisfied
	- ![](https://i.imgur.com/1TlABVM.png)
		- bounded waiting satisfied

#### atomic variables
- operations on atomic variables are uninterruptable
- ![](https://i.imgur.com/4PFM53R.png)

### Mutex Locks
- mutual exclusion locks
- ensure only 1 process in critical section
	- prevent race condition
- `acquire` lock -> critical section -> `release` lock
	- atomic operation
		- with `compare_and_swap`
- busy waiting
	- spinlock
	- a process is in critical section -> another one call `acquire` repeatedly
- ![](https://i.imgur.com/SMkyNYj.png)

### Semaphore

- an integer
- a signal, indicating if a process can enter critical section
- ![](https://i.imgur.com/OqrIJDp.png)
- couting semaphore
	- allow multiple processes to enter critical section
- binary semaphore
	- 0/1
- e.g.
	- ![](https://i.imgur.com/Fc5LeFE.png)
- implementation without busy waiting
	- unavailable -> suspend itself into waiting state
		- added into semephore's process list
	- other process execute `signal` -> `wakeup` the waiting process into ready state
		- removed from semaphore's process list
	- ![](https://i.imgur.com/Fst4Kjp.png)
	- ![](https://i.imgur.com/y3fdEwM.png)
- semaphore operations need to be atomic
- use FIFO queue to satisfy bounded waiting
- ![](https://i.imgur.com/u3plLeK.png)

### Monitors

- timing errors can exist even with mutex lock or semaphore in some exec sequence
	- e.g.
		- ![](https://i.imgur.com/2TaV0Ti.png)
- abstract data type, ADT
	-  a set of function
- monitor type
	- a set of programmer-defined function with mutual exclusion
	- ![](https://i.imgur.com/V07XLpC.png)
- ![](https://i.imgur.com/ZMXJ2Er.png)
- condition
	- `condition x, y`
	- `x.wait()` -> process suspended
	- `x.signal()` -> resume a suspended process
	- if Q has a suspended process and P execute `x.signal()`
		- option 1: signal and wait
			- P waits, Q resumes, P resumes once Q leaves
			- !P -> Q -> P
		- option 2: signal and continue
			- P continues, Q resumes once P leaves
			- P -> Q
	- ![](https://i.imgur.com/UP5DQhK.png)
- implement monitor with semaphore
	- binary
	- ![](https://i.imgur.com/g90HyBM.png)

### Liveness

- ensure progress
- deadlock
	- multiple processes waiting indefinitely for each other
	- e.g.
		- ![](https://i.imgur.com/g0gYHYx.png)
- starvation
	- a process waiting indefinitely (in a queue)
- priority inversion
	- <https://www.digikey.com/en/maker/projects/introduction-to-rtos-solution-to-part-11-priority-inversion/abf4b8f7cd4a4c70bece35678d178321>
	- a high priority process blocked by a low priority process 
		- for an indefinite amount of time
	- e.g.
		- ![](https://i.imgur.com/3AAI6B3.png)
		- ![](https://i.imgur.com/NV1SKvA.png)
	- solution: priority-inheritance protocol
		- ![](https://i.imgur.com/y66hIsH.png)

## Synchronization Examples

### Classic Problems

#### Bounded-Buffer Problem
- multiple producers & consumers
- buffer with capacity N
- 2 producers can't write to the same buffer (slot)
- ![](https://i.imgur.com/6IdjzWs.png)
- use 3 semaphores
	- `mutex`
		- init = 1
		- mutual exclusion
	- `full`
		- init = 0
		- num of full buffers
	- `empty`
		- init = n
		- num of empty buffers
- producer
	- ![](https://i.imgur.com/EEWq8f8.png)
- consumer
	- ![](https://i.imgur.com/PLeyDXV.png)

#### reader-writers problem
- multiple readers can read at the same time
- writer has exclusive access to the shared data
- semaphore `rw_mutex`
	- init = 1
	- mutual exclustion for writers
- semaphore `mutex`
	- init = 1
	- mutual exclustion for updating `read_count`
- int `read_count`
	- init = 0
	- num of processes reading the object
- writer
	- ![](https://i.imgur.com/JOKAnjQ.png)
- reader
	- ![](https://i.imgur.com/KQOn6k1.png)
- reader-writer lock
	- mode
		- read
		- write
	- only 1 process can have the write lock

#### dining-philosophers problem

- n philosophers
	- 2 modes
		- use a pair of chopsticks to eat the rice
			- chopstick at the left & chopstick at the right
		- idle
- a bowl of rice
- n chopsticks
	- each at the middle of 2 philosophers
	- one's left chopstick is another's right
- ![](https://i.imgur.com/14e6p5N.png)
- semaphore solution
	- ![](https://i.imgur.com/Ps6uvFX.png)
	- problem
		- deadlock
			- all get the left hand chopstick -> all unable to get the right hand chopstick
		- starvation
			- can't get the chopsticks
- monitor solution
	- ![](https://i.imgur.com/vI1q1tP.png)
