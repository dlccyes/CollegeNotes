# Computer Architecture

## Ch1 Computer Abstractions & Technology
- chip
	- 台積電 pricing 較高但良率很高
	- wafer
		- 晶圓
	- die
		- wafer 切出來的一小片一小片
		- 晶粒/裸晶
	- cost
		- ![](https://i.imgur.com/P7SEjQB.png)
			- 經驗公式
			- 台積電工程師提出的
		- wafer cost & area
			- fixed
		- defect rate
			- determined by manufacturing process
		- die rate
			- determined by disign
- throughput = total work done per unit time
- performance = execution time 倒數
- CPU time
	- CPU time = clock cycles x cycle time = cycles / clock rate
	- trade-off: clock rate vs. cycle count 
	- clock cycles = instruction count (IC) x cycles per instruction (CPI)
	- CPU time = IC x CPI x cycle time = IC x CPI / clock rate
	- ![](https://i.imgur.com/BAsRV5S.png)
	- ![](https://i.imgur.com/KUOEDDI.png)
	- 愈高階的語言 CPI 愈高
	- $T_c$, clock period = seconds/cycle-
	- ISA, instruction set architecture
- power
	- $power\propto CV^2\propto f$ 
- MIPS: millions of instruction per second
	- ![](https://i.imgur.com/j793d9Q.png)
	- doesn't account for
		- different ISAs between computers
		- different complexity between instructions

## Ch2 Instructions
- instruction set
	- e.g. x86, ARM, RISC-V

### RISC-V
- 較簡單的 instruction set
- regularity → simpler implementation
- simplicity → higher performance, lower cost
- 32x64-bit register file
	- 32-bit data: word
	- 64-bit data: doubleword
	- ![](https://i.imgur.com/5bxfy2N.png)
- syntax
	- two sources, one destination
	- `add a,b,c` → `a=b+c`
	- `sub a,b,c` → `a=b-c`
```
add t0,g,h
add t1,i,j
sub f,t0,t1

#compiled
add x5, x20, x21
add x6, x22, x23
sub x19, x5, x6
```
→ `f=(g+h)-(i+j)`
