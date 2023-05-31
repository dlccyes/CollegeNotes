---
layout: meth
has_children: True
---
# Operating Systems

## materials

- [Operating System Concepts](Operating%20System%20Concepts.pdf)
- [xv6 textbook](https://pdos.csail.mit.edu/6.828/2020/xv6/book-riscv-rev1.pdf)
- Exams
	- [[Operating Systems Midterm]]
	- [[Operating Systems Final]]

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

- ![[operating-systems-1.png]]
- GPU
	- many processing unit, executing in parallel
	- each unit performs simple task
- bootstrap
	- load OS into memory at startup
- storage-device heirarchy
	- ![[operating-systems-2.png]]
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
	- ![[os-1.jpg]]
- pros
	- fast
		- little latency
	- efficient
	- simple
- cons
	- difficult to implement & extend

### layered

- ring-based 
- ![[os-2.jpg]]
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
	- ![[os-3.png]]

### modules

- a set of core components
- additional services modularized, linked in at boot time or run time

### hybrid systems

- linux
	- monolithtic
		- for good perfornamce
	- modular
		- dynamically linked in new functions
	- ![[os-4.jpg]]
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
- ![[os-5.jpg]]
- ![[os-6.jpg]]
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

![[operating-systems-3.png]]

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
	- ![[operating-systems-4.png]]
- `task_struct` in linux
	- ![[operating-systems-5.png]]

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
- ![[operating-systems-6.png]]

### multiple processor OS
- one process for a processor at a time
- schedule multiple processes to run on multiple processors simulteneously
	- ![[operating-systems-7.png]]

#### Multiple OS Multiprocessor 

- each processor has its own OS
- memory & I/O shared among processors via bus
- memory separated into blocks for each processor
- ![[operating-systems-8.png]]

#### Master-Slave Multiprocessor

- assymetric multiprocessing
- run OS on master processor 
- run processes on slave processors
- memory & I/O shared among processors via bus
- ![[operating-systems-9.png]]

#### Symmetric Multiprocessor (SMP)

- each processor has OS kernel
- a global OS exists
- global OS runs global queue, CPU then gets process from global queue and do self-scheduling with its own OS
- ![[operating-systems-10.png]]

#### Heterogeneous Multiprocessor
- ![[operating-systems-11.png]]
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
		- ![[operating-systems-12.png]]
- wait queue
	- ![[operating-systems-13.png]]
- I/O-bound process
	- more I/O, less computation (time)
- CPU-bound process
	- more computation, less I/O
- lock
	- spin lock
		- try locking the resource endlessly -> CPU 100% -> be treated as CPU-bound process
		- ![[operating-systems-14.png]]
	- mutex lock
		- run only when resource is avaiable
		- ![[operating-systems-15.png]]
- queueing diagram
	- ![[operating-systems-16.png]]
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
	- ![[operating-systems-17.png]]
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
- ![[operating-systems-18.png]]
- ![[operating-systems-19.png]]
- ![[operating-systems-20.png]]

## threads & concurrency
- explicit threading
	- manually create and terminate (join) threads
	- ![[operating-systems-21.png]]
- implicit threading
	- OS deals with most of the things
- ![[operating-systems-22.png]]
- ![[operating-systems-23.png]]
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
- ![[operating-systems-24.png]]

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
- ![[operating-systems-25.png]]

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

![[operating-systems-26.png]]

![[operating-systems-27.png]]

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
- ![[operating-systems-28.png]]
	- kernel scheduler will schedule the black arrow processes
- mapping from ULT to KLT
	- ![[operating-systems-29.png]]
	- not one-to-one
	- if program doesn't need to use kernel mode -> no need KLT, use core directly
		- e.g. simple math
- OS only sees processes, not threads

#### mapping from user to kernel threads

- many-to-one
	- ![[operating-systems-30.png]]
	- no parallelism
	- can't utilize multiple processing cores
- one-to-one
	- ![[operating-systems-31.png]]
	- easy
	- create 1 kernel thread for each user thread
	- no user scheduling
	- big overhead
		- need to manage many kernel level threads
	- most used
		- Linux
		- Windows
- many-to-many
	- ![[operating-systems-32.png]]
	- security issue
		- a kernel thread may be used by multiple user threads -> need careful data protection
	- most flexible
	- diffucult to implement
- two-level model
	- ![[operating-systems-33.png]]
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
- ![[operating-systems-34.png]]
- worker threads
	- threads created before requested
	- idle before assignment -> not wasting resources
	- won't be terminated after task done
	- need to be explicitly free & shutdown

#### fork join
- ![[operating-systems-35.png]]
- divide and conquer
- ![[operating-systems-36.png]]

#### OpenMP
- create as many threads (as num of cores)
- speedup
	- ![[operating-systems-37.png]]
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
	- ![[operating-systems-38.png]]

## main memory
- memory protection
	- base & limit register defining the available address space
	- ![[operating-systems-39.png]]
	- ![[operating-systems-40.png]]
- address binding
	- ccompile time
		- absolute code with known memory location
		- symbolic address binding
	- load time
		- relocatable code with memory location not known
		- relative address
	- execution time (run time)
		- physical address binding
	- ![[operating-systems-41.png]]
- physical & logical address
	- logical address is relative
		- logical address + base -> physical address (translated by MMU)
	- ![[operating-systems-42.png]]
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
- ![[operating-systems-43.png]]
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
	- ![[operating-systems-44.png]]
- page table
	- mapping of logical address page -> physical address frame
	- each process has its own page table
	- size
		- ![[operating-systems-45.png]]
		- ![[operating-systems-46.png]]
	- e.g.
		- ![[operating-systems-47.png]]
- paging translation example
	- ![[operating-systems-48.png]]
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
	- ![[operating-systems-49.png]]
- hit ratio
	- instruction has locality -> would be fairly high
	- replacement policy largely affects it
- e.g.
	- ![[operating-systems-50.png]]

### structure of page table
- contiguous page table -> too large ($2^{20}>>2(2^{10})$) -> need to split

#### hierarchy page table
- multilevel page table
- page the page tables
	- ![[operating-systems-51.png]]
	- ![[operating-systems-52.png]]
- 64-bit processor will need many layer of paging -> big memory access overhead -> inappropiate
- e.g.
	- ![[operating-systems-53.png]]
- xv6
	- virtual address
		- EXT = 0
		- index = concat of 3 level page table idx
		- offset = 0
	- ![[operating-systems-54.png]]
	- ![[operating-systems-55.png]]
	- ![[operating-systems-56.png]]

#### hashed page table
- hash table
- hashed logical address -> physical address 
- linked list for collision
- 3 fields in each element
	- virtual page num
	- hashed virtual page num (mapping target physical frame)
	- pointer to next element (for collision)
- ![[operating-systems-57.png]]
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
- ![[operating-systems-58.png]]
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
	- ![[operating-systems-59.png]]
	- time moving between memory is huge
- roll out, roll in
	- priority-based swapping
- swapping with paging
	- page out
		- move a page to backing store
	- page in
		- move a page back from backing store
	- ![[operating-systems-60.png]]

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
	- ![[operating-systems-61.png]]
- locality
	- some pages access many new pages each instruction -> bad performance
	- prefetch
- free-frame list
	- ![[operating-systems-62.png]]
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
- ![[operating-systems-63.png]]
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
	- ![[operating-systems-64.png]]
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
		- ![[operating-systems-65.png]]
			- B invalid; C valid ->  swap out C; swap in B -> B valid; C invalid
- Belady's Anomaly
	- page-fault rate may increase on page frames increase for some algo
	- e.g.
		- ![[operating-systems-66.png]]
		- ![[operating-systems-67.png]]
- optimal algo
	- find victim frame that would not be used again
	- would not suffer from Belady's Anomaly
		- frame priority independent of num of frames 
- FIFO algo
	- suffers from Belady's Anomaly
		- frame priority dependent of num of frames
	- ![[operating-systems-68.png]]
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
		- ![[operating-systems-69.png]]
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
	- ![[operating-systems-70.png]]
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
	- ![[operating-systems-71.png]]
- when doing page replacement
	- memory & I/O busy
	- CPU free
- locality
	- a set of pages that are actively used together
	- may overlap
	- ![[operating-systems-72.png]]
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
	- ![[operating-systems-73.png]]
- $WSS_i(t_j)$ = size of working set of process $i$
- $D = \sum WSS_i(t)$ = num of demanded frames at time $t$
- $m$ = total memory size
- $D>m$ -> thrashing -> suspend / swap out a process
- 2 in-memory reference bit & 1 reference bit
- fixed-interval timer interrupt
	- clear reference bit & update in-memory reference bit
	- ![[operating-systems-74.png]]
- unaccurate
	- don't know when it's referenced within the interval
	- may have many references uncovered if interval too big or window too small
- page fault rate
	- ![[operating-systems-75.png]]
	- when paging a different locality, page-fault rate peaks

#### Page-Fault Frequency (PFF)

- more direct than working-set model
- adjust allocation policy based on page-fault rate
- page-fault rate > upper bound -> allocate frames for the process
- page-fault rate < lower bound -> remove frames for the process
- ![[operating-systems-76.png]]

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
	- ![[operating-systems-77.png]]
- slab allocator
	- ![[operating-systems-78.png]]
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
		- ![[operating-systems-79.png]]
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
	- ![[operating-systems-80.png]]
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
	- ![[operating-systems-81.png]]
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
	- ![[operating-systems-82.png]]
- average performance
	- bigger turnaround time than SJFpriority
		- e.g.
			- ![[operating-systems-83.png]]
			- ![[operating-systems-84.png]]
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
						- ![[operating-systems-85.png]]
						- ![[operating-systems-86.png]]
							- 3 queues
							- RR with q=8 -> process unfinished -> RR with q=16 ->  still unfinished -> FCFS
				- e.g.
					- ![[operating-systems-87.png]]
- e.g.
	- ![[operating-systems-88.png]]
- priority
	- ![[operating-systems-89.png]]

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
		- ![[operating-systems-90.png]]
		- separate queue
			- load balancing
		- shared queue
			- race condition

#### multicore processor

- memory stall
	- spend large portion of time on memory access
	- ![[operating-systems-91.png]]
	- solution
		- multithreaded processing cores
- multithreaded processing cores
	- each core has multiple hardware thread
	- 1 thread wait for memory -> execute another thread
	- ![[operating-systems-92.png]]
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
	- ![[operating-systems-93.png]]
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
	- ![[operating-systems-94.png]]
- dispatch latency
	- time needed for scheduling dispatcher to stop a process & start another one
	- conflict phase
		- prempting running processes
		- make low-priority processes release locked resources that is needed
	- ![[operating-systems-95.png]]

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
	- ![[operating-systems-96.png]]
	- ![[operating-systems-97.png]]
		- red is higher-priority process
		- need to make them finish before deadline
- ![[operating-systems-98.png]]

#### Rate-Monotonic Scheduling

- shorter the **period**, higher the priority
- static priority
	- a process will always have higher priority than the other
- cons
	- not always efficient
- e.g.
	- ![[operating-systems-99.png]]
		- P1 always has higher priority, can always preempt P2
	- ![[operating-systems-100.png]]
		- P2 will miss deadline while it doesn't really need to
- ![[operating-systems-101.png]]
	- ![[operating-systems-102.png]]

#### Earliest-Deadline-First (EDF) Scheduling

- the closer the deadline, the higher the priority
- e.g.
	- ![[operating-systems-103.png]]

#### POSIX Scheduling

- `SCHED_FIFO`
	- [[#first-come, first-serve (FCFS) scheduling]]
	- [[#round-robin (RR) scheduling]]

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
				- [[Red-Black Tree]]
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
	- ![[operating-systems-104.png]]
	- ![[operating-systems-105.png]]

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
	- ![[operating-systems-106.png]]
- hard-disk drive (HDD)
	- ![[operating-systems-107.png]]
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
	- don't know the exact location

#### FCFS scheduling

- e.g.
	- ![[operating-systems-108.png]]

#### SSTF Scheduling

- shortest seek time first
- always go to the nearest one

#### SCAN Scheduling

- elevator algorithm
- to reduce redundant movement
- font -> end -> front -> end -> front -> ....
	- serve the requests along the way
- e.g.
	- ![[operating-systems-109.png]]

#### C-SCAN Scheduling
- front -> end ; front -> end ; ...
- one direction
- more uniform waiting time than [SCAN Scheduling](#SCAN%20Scheduling)
- treat the cylinder as cirlular list
- e.g.
	- ![[operating-systems-110.png]]

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
	- see [error detection](Computer%20Networks.md#error%20detection)
	- parity bit
		- num of 1s being old or even
		- too simple
	- CRC, cyclic reduncancy test
		- see [CRC cyclic redundancy check](Computer%20Networks.md#CRC%20cyclic%20redundancy%20check)
		- generator polynomial
- error correction
	- ECC, error-correction code 
		- in unreliable or noisy communication channels
		- hamming code example
			- ![[operating-systems-111.png]]
			- parity bits being 1, 2, 4
				- each has exact one "1" bit
			- data bits being 3, 5, 6, 7
			- 3, 5, 7 has 1 as the least significant bit -> P1 = parity of D3, D5, D7
			- 3, 6, 7 has 1 as the 2nd least significant bit -> P2 = parity of D3, D6, D7
			- 5, 6, 7 has 1 as the 3nd least significant bit -> P4 = parity of D5, D6, D7
			- for data string 1101, the correct bit string to send & receive is 1100110
			- ![[operating-systems-112.png]]
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
	- ![[operating-systems-113.png]]
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
	- ![[operating-systems-114.png]]
- cloud
	- over the Internet or WAN to remote data center
	- access with API
- storage-area network (SAN) & storage arrays
	- high bandwidth
	- SAN interconnects with fiber channel
	- ![[operating-systems-115.png]]

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
	- related to [[Computer Architecture#dependable memory hierarchy|dependable memory hierarchy]]
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
			- ![[operating-systems-116.png]]
		- RAID 01 (0+1)
			- stripe -> mirror
			- ![[operating-systems-117.png]]
		- RAID 01 & 10
			- similar performance
			- RAID 10 has better reliability
			- need 4 drives
			- ![[operating-systems-118.png]]
	- ![[operating-systems-119.png]]
	- ![[operating-systems-120.png]]
- cons
	- data not always avaiable
	- not flexible
- ZFS
	- pools of storage
	- improve flexibiity
	- ![[operating-systems-121.png]]
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
	- ![[operating-systems-122.png]]
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
	- ![[operating-systems-123.png]]
	- absolute path name
	- relative path name
- acyclic-graph
	- ![[operating-systems-124.png]]
	- symbolic link
		- soft link
	- hard link
	- problems
		- handle non-existent link
		- find cycle
			- use i-node number
				- real file ID
		- ![[operating-systems-125.png]]
		- flagging i-nodes not practical
			- can't modify i-node irl
		- Floyd
			- fast slow pointers
			- ![[operating-systems-126.png]]
		- external marking
			- while 1; previous->next = temp;
			- move to temp -> have cycle
			- ![[operating-systems-127.png]]
- general graph
	- ![[operating-systems-128.png]]

### protection

- memory-mapped files
	- ![[operating-systems-129.png]]
	- ![[operating-systems-130.png]]

## File-System Implementation
### File-System Structure
- layered file-system
	- ![[operating-systems-131.png]]
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
		- ![[operating-systems-132.png]]

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
- ![[operating-systems-133.png]]
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
- ![[operating-systems-134.png]]
- file-allocation table, FAT
	- ![[operating-systems-135.png]]
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
- ![[operating-systems-136.png]]
- ![[operating-systems-137.png]]

#### performance

- storage efficiency
	- external fragmentation
- data-block access time

### free-space management

- free-space list

#### bit vector (bitmap)

- ![[operating-systems-138.png]]
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
- ![[operating-systems-139.png]]

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
	- ![[operating-systems-140.png]]
	- ![[operating-systems-141.png]]
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
	- ![[operating-systems-142.png]]
	- snapshots
		- take a snapshot -> block updates go to new blocks instead of overwriting old blocks
		- take very little space
			- extra space a snapshot needs is only from the blocks that have been updated
		- ![[operating-systems-143.png]]

## File System Internals

- volumes & partition
	- volume can span across partitions
	- ![[operating-systems-144.png]]

### Mounting

- file system must be mounted to be available to processes
- several ways
	- disallow mounting on unempty directory
	- hide the original files when mounted
		- ![[operating-systems-145.png]]
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
- ![[operating-systems-146.png]]
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
		- ![[operating-systems-147.png]]
- immutable-shared-files semantics
	- read-only
	- final result computed from logs

### NFS

- network file systems
- a set of disconnected workstations
- sharing based on client-server
- mounting
	- ![[operating-systems-148.png]]
- operate in heterogeneous environment
- stateful & stateless
	- ![[operating-systems-149.png]]
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
	- ![[operating-systems-150.png]]
- buffer & cache
	- cache triggered by client
	- buffer triggered by server

## Synchronization Tools

- 2 processes interleaved -> incorrect result
	- e.g. count++ & count-- interleaved
		- ![[operating-systems-151.png]]

### Critical-Section Problem

- segment shared with other process
- structure
	- ![[operating-systems-152.png]]
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
	- ![[operating-systems-153.png]]
		- left is i, right is j
	- mutual exclusion satisfied
		- `turn` is a shared variable
	- progess unsatisfied
		- e.g. i -> i will never happen
	- bounded waiting satisfied
- software solution 2
	- ![[operating-systems-154.png]]
	- mutual exclusion satisfied
	- progess satisfied
		- decide next in entry section
	- bounded waiting unsatisfied
		- deadlock if `flag[i]` = `flag[j]` = true
- Peterson's solution
	- ![[operating-systems-155.png]]
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
- ![[operating-systems-156.png]]
- memory models
	- strongly ordered
		- memory modifications immediately visible to other processors
	- weakly ordered
		- memory modifications may not be immediately visible to other processors

#### atomic hardware instructions

- can't possibly be interrupted
- `test_and_set`
	- ![[operating-systems-157.png]]
	- ![[operating-systems-158.png]]
		- bounded waiting unsatisfied
- `compare_and_swap`
	- ![[operating-systems-159.png]]
	- ![[operating-systems-160.png]]
		- bounded waiting unsatisfied
	- ![[operating-systems-161.png]]
		- bounded waiting satisfied

#### atomic variables
- operations on atomic variables are uninterruptable
- ![[operating-systems-162.png]]

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
- ![[operating-systems-163.png]]

### Semaphore

- an integer
- a signal, indicating if a process can enter critical section
- ![[operating-systems-164.png]]
- couting semaphore
	- allow multiple processes to enter critical section
- binary semaphore
	- 0/1
- e.g.
	- ![[operating-systems-165.png]]
- implementation without busy waiting
	- unavailable -> suspend itself into waiting state
		- added into semephore's process list
	- other process execute `signal` -> `wakeup` the waiting process into ready state
		- removed from semaphore's process list
	- ![[operating-systems-166.png]]
	- ![[operating-systems-167.png]]
- semaphore operations need to be atomic
- use FIFO queue to satisfy bounded waiting
- ![[operating-systems-168.png]]

### Monitors

- timing errors can exist even with mutex lock or semaphore in some exec sequence
	- e.g.
		- ![[operating-systems-169.png]]
- abstract data type, ADT
	-  a set of function
- monitor type
	- a set of programmer-defined function with mutual exclusion
	- ![[operating-systems-170.png]]
- ![[operating-systems-171.png]]
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
	- ![[operating-systems-172.png]]
- implement monitor with semaphore
	- binary
	- ![[operating-systems-173.png]]

### Liveness

- ensure progress
- deadlock
	- multiple processes waiting indefinitely for each other
	- e.g.
		- ![[operating-systems-174.png]]
- starvation
	- a process waiting indefinitely (in a queue)
- priority inversion
	- <https://www.digikey.com/en/maker/projects/introduction-to-rtos-solution-to-part-11-priority-inversion/abf4b8f7cd4a4c70bece35678d178321>
	- a high priority process blocked by a low priority process 
		- for an indefinite amount of time
	- e.g.
		- ![[operating-systems-175.png]]
		- ![[operating-systems-176.png]]
	- solution: priority-inheritance protocol
		- ![[operating-systems-177.png]]

## Synchronization Examples

### Classic Problems

#### Bounded-Buffer Problem
- multiple producers & consumers
- buffer with capacity N
- 2 producers can't write to the same buffer (slot)
- ![[operating-systems-178.png]]
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
	- ![[operating-systems-179.png]]
- consumer
	- ![[operating-systems-180.png]]

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
	- ![[operating-systems-181.png]]
- reader
	- ![[operating-systems-182.png]]
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
- ![[operating-systems-183.png]]
- semaphore solution
	- ![[operating-systems-184.png]]
	- problem
		- deadlock
			- all get the left hand chopstick -> all unable to get the right hand chopstick
		- starvation
			- can't get the chopsticks
- monitor solution
	- ![[operating-systems-185.png]]
