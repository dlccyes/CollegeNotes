# Computer Architecture

## resources
https://chi_gitbook.gitbooks.io/personal-note/content/instruction_set_architecture.html

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
- 執行邏輯
	- 從上到下，該跳則跳
- 32x64-bit register file
	- 32-bit data: word
	- 64-bit data: doubleword
	- ![](https://i.imgur.com/5bxfy2N.png)
- Instructions are word-aligned
	- address 一次跳 4 bytes
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

### b/h/w/d
- byte  = 8 bits
- halfword = 16 bits
- word = 32 bits
- doubleword = 64 bits


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

### signed & unsigned
- signed
	- 有正負
	- 表示負數方法
		- 最左邊 1 → 負
		- complement (1s 2s etc.)
- unsigned
	- 只有正數

### sign extension
多加幾個 bits
![](https://i.imgur.com/sQJYKhN.png)

### offset
![](https://i.imgur.com/4yMSaoN.png)

### array
- ![](https://i.imgur.com/2sMipzq.png)

- e.g.
	- ![](https://i.imgur.com/97JnRYn.png)
		- ![](https://i.imgur.com/ErUYFDm.png)
		- x30 = x10 是 array D 的指標
		- addi x30, x30, 32 代表跳 32 bytes i.e. 跳 4 doublewords → array index +4
		- 若 x30 = 8，0(x30) 代表 D[2]，4(x30) 代表 D[3]
			- 前面是 offset，加上括號 除以 8 (for doubleword) → array 的 index
				- 像這個是 word = 4 bytes<br>![](https://i.imgur.com/wn6rMIH.png)
			- see [[#array vs pointer]]
		- 題目中會一直蓋掉 D[0:3] 的值，直到 x7 >= x5 = 4

### encoding
#### overall
- ![](https://i.imgur.com/NQfNS5U.png)
- I SB UJ 的 10:5 位置都一樣
- 都是 32 bits
- major opcode in bits 0-6
- destination register in bits 7-11
- first source register in bits 15-19
- second source register in bits 20-24
- https://stackoverflow.com/a/39450410/15493213

#### binary representation
- 15 → 0xF
- 整個 32-bit format，4 bits 一單位，寫成 8 個 16 進位數字，前面加 0x

#### R-format
- ![](https://i.imgur.com/0eAXKRU.png)
- Register-format
- `add rd, rs1, rs2`
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
- immediate: constant OR offset for base address 

#### S-format
- ![](https://i.imgur.com/aVvWAoF.png)
- store byte/halfword/word/doubleword
- immediate: offset for base address i.e. rs1
- `sb rs1 rs2`


#### SB-format
- ![](https://i.imgur.com/kleSjvP.png)
- conditional jump
	- if xxxx jump to branch xxxx
- branch addressing
- `blt` `bge` etc.
- immediate 沒有 0th bit
- immediate 表示要跳多少
- take the branch → go to PC + immediate x 2
	- ![](https://i.imgur.com/KEFpELt.png)
- skip → go to PC + 4 i.e. next line
- 1 instruction 4 bytes
- `beq rs1, rs2, imm`

#### UJ-format
- ![](https://i.imgur.com/TYpO760.png)
- unconditional jump
- only for `jal`, unconditional jump-and-link
- ![](https://i.imgur.com/GSrCM7V.png)
- 20-bit immediate，表示跳了多少
	- 往回跳 → 負數 (2s complement)
	- 1 instruction 4 bytes
	- 往後跳 x 行 → immediate = 4x/2
- 沒有 0 bit
- e.g.
	- ![](https://i.imgur.com/asAhCpn.png)
		- ![](https://i.imgur.com/q12ffzy.png)
		- 往回跳 9 行，每個 instruction 4 bits → imm = -36 = 2s complement of 36，再 shift right i.e. 除 2 i.e. 移掉 0th bit
		- jal 的 opcode = 1101111


#### U-format
- ![](https://i.imgur.com/MZZRPXV.png)
- `lui rd constant`
- `imm[31:12]` = constant represented with 20 bits，把這 20 bits 弄到  rd[31:12]
- ![](https://i.imgur.com/4quFIhS.png)

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
			- `add`🔢

### MIPS
- successor of RISC-V
- ![](https://i.imgur.com/7nEGnwD.png)

## Ch3 Arithmetic
- for multipedia
	- overflow → 留在最大值
### multiplication
#### basic multiplier
- 每次 cycle 加一次，要很多個 cycle
	- sol: [[#faster multiplier]]，空間換取時間
- ![](https://i.imgur.com/tV01U63.png)
- ![](https://i.imgur.com/lWq3ENV.png)
- 每輪都上面 pointer 都左移一格
- 每輪下面 pointer 都右移一格
	- 指到 1 → 相加
- optimized
	- ![](https://i.imgur.com/4HWH8JZ.png)

#### faster multiplier
- 用多一點加法器，省下時間
- more cost higher performance
	- cost performance tradeoff
- ![](https://i.imgur.com/MGGdODU.png)
- 可以 pipeline
	- 很多 in parallel

#### instructions
- mul
	- multiply
	- return lower 64 bits
- mulh
	- multiply high
	- return upper 64 bits
	- can check 64-bit overflow
- mulhu
	- multiply high unsigned
	- assume unsigned, return upper 64 bits
- mulhsu
	- multiply high signed/unsigned
	- assume 1 signed other unsigned, return upper 64 bits

### division
- ![](https://i.imgur.com/XzFB48b.png)
- long division
- retoring division
	- 先剪，小於 0 再加回來
- signed division
	- abs()
- division 後面 dependent on 前面結果 → 無法 parallel → time complexity 高

#### divisor
- ![](https://i.imgur.com/cTJXGXV.png)
- 每輪 divisor pointer 右移一格，quotient pointer 左移一格
- optimized divider
	- ![](https://i.imgur.com/PjlPHf1.png)
	- divisor 不用動ㄅ
	- like optimized multiplier
		- ![](https://i.imgur.com/Sip3DHI.png)
- 每次 cycle 減一次，要很多個 cycle
- faster division
	- 不能 parallel 因為 conditional to 前一級 remainter
	- multiple quotient bits per step
	- 還是要好多 cycles

#### instructions
- div, rem
- divu, remu
- no overflow for 除以 0 & overflow
	- return 定義

### float
- 之前介紹的東西都是 integer 的
- $\pm 1.xxxxx_2\times 2^{yyyyyyyy}$
- 2 representations
	- single precision (32-bit)
	- double precision (64-bit)
		- `double` in C

#### format
- IEEE Std 754
- ![](https://i.imgur.com/fZi1DqR.png)
- Bias 把 exponent 轉成正 → unsigned
	- $2^{-100}$ → $2^{-100+Bias}$
- 00....000 & 11...111 都保留
- single-precision
	- min 00000001
	- max 11111110
- double-precision
	- min 00000000001
	- max 11111111110
- e.g.
	- ![](https://i.imgur.com/6DoZ7tn.png)
	- ![](https://i.imgur.com/7NmpchQ.png)

#### number representation
![](https://i.imgur.com/SnIXuuf.png)

- denormalized number
	- exponent = 0
		- so $fraction\times 2^{-Bias}$
	- < normal numbers
- infinity
	- exponent = all 1s
	- fraction = 0
- not a number (NaN)
	- exponent = all 1s
	- fraction != 0

#### addition
![](https://i.imgur.com/MPx04i7.png)
![](https://i.imgur.com/Auvppb2.png)

#### multiplication
![](https://i.imgur.com/e9W7yvI.png)

#### instructions
![](https://i.imgur.com/og6dgKP.png)

#### examples
F to C
![](https://i.imgur.com/n8xMAts.png)

array mul
![](https://i.imgur.com/poiyR71.png)
![](https://i.imgur.com/u6ye4CT.png)
![](https://i.imgur.com/NS7iJfq.png)

#### rounding
- extra bits of precision
	- guard
	- round
	- sticky
- ![](https://i.imgur.com/tPo5qeq.png)
	- nearest even
		- 超額比序（剛好一半時）為 nearest even 優先
		- ![](https://i.imgur.com/3V7aXS1.png)


## Ch4 Processor
###  CPU
- implementation of the RISC-V subset
	- ![](https://i.imgur.com/QJ7rsrQ.png)
	- ![](https://i.imgur.com/hWQPcIy.png)
		- with multiplexers & control lines

### logic design
- 1 wire 1 bit
- multiple wire → bus
- ![](https://i.imgur.com/oJx3GwW.png)
