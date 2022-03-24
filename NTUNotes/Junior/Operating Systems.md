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
- [Threads & Concurrency](https://www.youtube.com/watch?v=uxXtXGW2VDQ)
- [Main Memory 1](https://www.youtube.com/watch?v=AeONYfNXGaE)
- [Main Memory 2](https://www.youtube.com/watch?v=Jb0lQbvm29w)
- [Virtual Memory](https://www.youtube.com/watch?v=VQ07KeyJXgg)

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
- ready queue
	- multiple queue, priority queue
	- single queue
		- ![](https://i.imgur.com/ALSrwzW.png)
- wait queue
	- ![](https://i.imgur.com/S6fLR74.png)
- I/O-bound process
	- more I/O less computation
- CPU-bound process
	- more computation less I/O
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
$$lim_{s\rightarrow\infty}=\frac{1}{S}$$
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
- one-to-one
	- ![](https://i.imgur.com/QZi22LU.png)
	- easy
	- create 1 kernel thread for each user thread
	- no user scheduling
	- big overhead
		- need to manage many kernel level threads
	- popular
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

### implicit threading
#### thread pool
- create a pool of worker threads first
- pros
	- serve faster
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
		- m-n bits page number -> $2^{m-n}$ bytes
	- page offset
		- n-bit page offset = $2^n$ bytes
	- m-bit logical address space -> $2^m$ bytes
	- ![](https://i.imgur.com/nXBl1ld.png)
- page table
	- mapping of logical address -> physical address (page -> frame)
	- each process has its own page table
	- size
		- ![](https://i.imgur.com/ctImTFn.png)
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
- a associative, high-speed, small memory
	- associative -> search in parallel (1 comparator for each entry) -> fast
- design
	- TLB miss -> fetch page table
	- TLB full -> replace with some policies
	- ![](https://i.imgur.com/aXk88IK.png)
- hit ratio
	- instruction has locality -> would be fairly high
	- replacement policy largely affects it

### structure of page table
- contiguous page table -> too large ($2^{20}>>2(2^{10})$) -> need to split

#### hierarchy page table
- page the page tables
	- ![](https://i.imgur.com/DZRzUVk.png)
	- ![](https://i.imgur.com/CRKSA8M.png)
- 64-bit processor will need many layer of paging -> big memory access overhead -> inappropiate
- e.g.
	- ![](https://i.imgur.com/mBOEtUC.png)
 
#### hashed page table
- hash table
- hashed logical address -> physical address 
- linked list for collision
- 3 fields in each element
	- virtual page num
	- hashed virtual page num (mapping target)
	- pointer to next element (for collision)
- ![](https://i.imgur.com/uNVlNvx.png)
- clustered page table
	- each mapped to several pages
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

### swapping
- backing store
	- fast secondary storate
	- large enought to store whatever swapped in
	- have direct access to memory image (???)
- standard swapping
	- memory requirements > physical memory -> temporary swap processes out to backing store 
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
