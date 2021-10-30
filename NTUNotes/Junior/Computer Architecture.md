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

### [[RISC-V]] intro
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

- little endian
	- least-significant byte @ least address
- bytes 不一定要 4 or 8 or whatever 的倍數
- 一個 instruction 是 8 bytes
- ![](https://i.imgur.com/53tWD5q.png)
	- 8x8=64
	- 12x8=96
	- load A[8] to x9
	- add x9 & h, store to x9
		- x21 在 register 裡面所以可以直接 access
	- store x9 to A[12]

### 2s complement
- 1s complement: negation
	- e.g. 0110 → 1001
- 2s complement: 1s complement +1
	- e.g. 6 = 0110 → -6 = 1001+1 = 1010
	- 要算 8-D → 算 8+2s(D) = 8+2s(1101) = 8+0011 = 8+3 = 11 = B
		- https://quizlet.com/explanations/questions/assume-that-registers-s0-and-s1-hold-the-values-0x80000000-and-0xd0000000-respectively-1-what-is-the-9a341a5d-4e07-4ef8-8471-fd38030f7e4f
		- ![](https://i.imgur.com/kj2N40b.png)
		- 歷屆 quiz 1 (4.)
			- ![](https://i.imgur.com/YVKQkpm.png)
			- ![](https://i.imgur.com/Vly2VUS.png)


交電
![](https://i.imgur.com/T1hJSQe.png)
![](https://i.imgur.com/q2huzgm.png)


### sign extension
多加幾個 bits
![](https://i.imgur.com/sQJYKhN.png)

### encoding
- ![](https://i.imgur.com/NQfNS5U.png)
- I SB UJ 的 10:5 位置都一樣
- 都是 32 bits

#### binary representation
- 15 → 0xF

#### R-format
- Register-format
- `operation rd, rs1, rs2`
- ![](https://i.imgur.com/0eAXKRU.png)
	- funct7 & funct3 & opcode 決定哪一個 operation
		- e.g.
			- ![](https://i.imgur.com/LBm5TC1.png)
				- 51 是查表來的
			- https://brainly.com/question/14287027
			- ![](https://i.imgur.com/SMZm3DK.png)


#### I-format
- Immediate-format
- `operation rd, imm(rs1)`
- ![](https://i.imgur.com/frYek0d.png)
- opcode & func3 告訴電腦要做什麼 instruction (arithmetic OR load)

#### SB-format
![](https://i.imgur.com/kleSjvP.png)

#### UJ-format
- only for `jal`, unconditional jump-and-link
- 20-bit immediate，表示跳了幾行
	- 往回跳 → 負數 (2s complement)
- ![](https://i.imgur.com/TYpO760.png)
- ![](https://i.imgur.com/GSrCM7V.png)
- 沒有 0 bit
- e.g.
	- ![](https://i.imgur.com/asAhCpn.png)
		- ![](https://i.imgur.com/q12ffzy.png)
		- 往回跳 9 格 → imm = -36 = 2s complement of 36，再移掉 0th bit
		- jal 的 opcode = 1101111

####  RV32I Instruction Sets (查表)
![](https://i.imgur.com/6pitTXl.png)
p.119

![](https://i.imgur.com/GfmNZRO.png)
https://book.rvemu.app/instruction-set/01-rv64i.html
I-format `LX` 的部分，是 load byte/halfword/word/doubleword，以 funct3 值區分
- ![](https://i.imgur.com/KqDEBNf.png)
	- https://ithelp.ithome.com.tw/articles/10194907

e.g.
- ![](https://i.imgur.com/gDWS5iV.png)
	- ![](https://i.imgur.com/0jEcaOb.png)


### [[RISC-V]] operations
![](https://i.imgur.com/XC0k2XB.png)
![](https://i.imgur.com/PX629AE.png)

`slli a, b, 1` → a = b<<1 (=2b)  
`addi a, b, 1` → a=b+1
#### if
`beq a, b, callback` → if(a\==b){callback()}
`bne a, b, callback` → if(a!=b){callback()}
`blt a, b, callback` → if(a<b)
![](https://i.imgur.com/If15MR8.png)
![](https://i.imgur.com/GTajnpc.png)
`bge a, b, callback` → if(a>=b)
![](https://i.imgur.com/KzsbwRQ.png)
#### while
![](https://i.imgur.com/XAybNUB.png)

- signed: 正 or 負
- unsigned: nonnegative


#### procedure
`jal` call procedure
`jalr` return
- leaf procedure
	- ![](https://i.imgur.com/PA6olYE.png)![](https://i.imgur.com/PEuNYOX.png)
- non-leaf procedure
	- recursive?
	- ![](https://i.imgur.com/hBfLGMq.png)![](https://i.imgur.com/V5N5pbB.png)

#### load/store
![](https://i.imgur.com/oDaZ5am.png)

lui
![](https://i.imgur.com/RNsyU2I.png)
`lui x19, 976` → 把 976 插到 [31:12]

#### example
![](https://i.imgur.com/vXfjxEW.png)
![](https://i.imgur.com/nD2SLNx.png)

![](https://i.imgur.com/VTMg82Q.png)
![](https://i.imgur.com/nvB3V8L.png)
![](https://i.imgur.com/hnQl3Zq.png)
![](https://i.imgur.com/kMbiMGJ.png)
![](https://i.imgur.com/3VIvzZh.png)
![](https://i.imgur.com/uI2GcCJ.png)

![](https://i.imgur.com/W0bskcu.png)


### dynamic linking
only link/load library procedure when called

- Java just in time compiler
	- 根據執行狀況做優化

### performance judging
- IC (why?) & CPI alone 不是好的 performance indicators
- compiler optimizations are sensitive to algorithms
- Java just-in-time >> Java Virtual Machine
	- 直逼 C

### array vs. pointer
- pointer 省略 indexing 的部分
- e.g.
	- ![](https://i.imgur.com/D8y8N2C.png)
		- x7 = size-1
		- array 每次 loop 都要 `slli` & `add`
			- `slli`: 算 i 的實際 index
			- `add`: 得出 array[i] 的實際 address