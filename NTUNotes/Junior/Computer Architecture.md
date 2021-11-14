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

### execution time
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
- improvement
	- improvement factor $n$
	- $T_{improved}=\dfrac{T_{affected}}{n}+T_{unaffected}$
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
- `jalr`
	- `jalr rd imm(rs1)` will jump to the address `2imm+rs1` && save the address of next line (i.e. current address + 4) to `rd`
		- e.g. let x10 = 0x14, and `jalr x10 0(x10)`in address `0x24`, running this line will jump to address `0x14` && set x10 to 0x24+4 = `0x28`
		- use `x0` as `rd` if don't care about return address
	- https://electronics.stackexchange.com/a/553160
- `SLLI` = left logical shift
	- shift left，補 0
	- `SLLI x10, x10, 2` → x10 shift left by 2 bits
- `SRLI` = right logical shift
	- shift right，補 0
- `SRAI` = right arithmetic shift
	- right shift，補 sign bit
	- for signed number
	- e.g. -8 = 11111000, -8/2 = -4 = 11111100, the right arithmetic shift of the former
	- left arithmetic shift 則等同於 left logical shift, so no SRLI
- `ANDI` = bit-by-bit AND operation
	- `ANDI x20, x10, 3` → x20 = the result of x10 AND 3 i.e. 只保留最低兩位數 i.e. x10%4

#### S-format
- ![](https://i.imgur.com/aVvWAoF.png)
- store byte/halfword/word/doubleword
- immediate: offset for base address (rs1)
- `sb rs1 rs2`

#### SB-format
- ![](https://i.imgur.com/kleSjvP.png)
- conditional jump
	- if xxxx jump to branch xxxx
- branch addressing
- `blt` `bge` etc.
- immediate 沒有 0th bit
- immediate 表示要跳多少
- take the branch → go to PC + immediate x 2 (i.e. immediate 後面補回一個 0)
	- bc imm omit 第 0 位 i.e. shift right
	- ![](https://i.imgur.com/KEFpELt.png)
- skip → go to PC + 4 i.e. next line
- 1 instruction 4 bytes
- `beq rs1, rs2, imm`→ jump to PC+immx2 if rs1=rs2

#### UJ-format (jal)
- ![](https://i.imgur.com/TYpO760.png)
- unconditional jump
- only for `jal`, unconditional jump-and-link
- ![](https://i.imgur.com/GSrCM7V.png)
- 20-bit immediate，表示要從目前位置跳多少
	- 往回跳 → 負數 (2s complement)
	- 1 instruction 4 bytes
	- 往後跳 x 行 → immediate = 4x/2 (4x 去掉最後一位的 0)
- jump to address = PC+imm i.e. 目前位置 + imm/4 行 
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

#### jump
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
- ![](https://i.imgur.com/UG28Xcy.png)
- length of product = sum of multiplicand & multiplier length, ignoring the sign bit
- ![](https://i.imgur.com/r4vUwwN.png)
- 每輪都上面 pointer 都左移一格
- 每輪下面 pointer 都右移一格
	- 指到 1 → 相加
- e.g.
	- ![](https://i.imgur.com/FVmWzJt.png)
- optimized
	- ![](https://i.imgur.com/S6NL0BB.png)
	- multiplicand & ALU reduced to 64 bits
		- unused portion of registers & adders
	- multiplier placed in the right half of product

#### signed multiplication
- 先弄成正的，乘完再轉回去

#### faster multiplier
- 用多一點加法器，省下時間
- more cost, higher performance
	- cost performance tradeoff
- ![](https://i.imgur.com/XxyrRy2.png)
- 可以 pipeline → 可以很多 in parallel → even faster

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
- ![](https://i.imgur.com/g1OFxzb.png)
- ![](https://i.imgur.com/fRJLg8N.png)
- 每輪 divisor pointer 右移一格，quotient pointer 左移一格
- e.g.
	- 4-bit ver. of 7/2
		- ![](https://i.imgur.com/HrGvEdK.png)
- 每次 cycle 減一次，要很多個 cycle
- optimized divider
	- ![](https://i.imgur.com/aLtn0IG.png)
		- simultaneously, subtract & shift the operands & shift the quotient
		- quotient 放在 remainder 的 right half
			- bc remainder 減完會 shift left，右邊會多出一格 → 給新生出的 quotient 用
	- divisor register & ALU halved 
	- like optimized multiplier
		- ![](https://i.imgur.com/Sip3DHI.png)
	- e.g.
		- ![](https://i.imgur.com/HlRLQql.png)
		- ![](https://i.imgur.com/Ih2qk3o.png)
			- 4-bit → shift 4 次完就終止，然後 remainder left half shift right (at 5th operation)
			- 最後 remainder = remainder left half；quotient = remainder right half

#### signed division
- 正負號不應影響數字
	- e.g. 
		- 7/2 = 3 ... 1
		- -7/2 = -3 ... -1 NOT 4 ... 1

#### faster division
- 不能 parallel 因為需要先知道 remainder 之正負才能繼續
	- if negative → remainder 要加回 divisor
- SRT division
	- predict multiple quotient bits in one step, then correct errors later
- nonrestoring division
	- don't add the divisor back immediately if the remainder's negative
	- 1 clock cycle per step
- nonperforming division

#### instructions
- div, rem
- divu, remu
- no overflow for 除以 0 & overflow
	- return 定義

### instruction set with multiplication & division
![](https://i.imgur.com/QdxrsDH.png)


### float
- 之前介紹的東西都是 integer 的
- $\pm 1.xxxxx_2\times 2^{yyyyyyyy}$
- 2 representations
	- single precision (32-bit)
	- double precision (64-bit)
		- `double` in C

#### format
- IEEE Std 754
- ![](https://i.imgur.com/h6SNGsY.png)
- placed this way for sorting purpose
	- sign → exponent → fraction
- exponent
	- Bias 
		- 把 exponent 轉成正 → unsigned
		- $2^{-100}$ → $2^{-100+Bias}$
	-   127 for single; 1023 for double
		- simplicity for sorting
		-   不然 negative 的 2s complement 看起來很大
	- 000..00 & 111..11 are reserved
		- single
			- min real exponent = 1-127 = -126
			- max real exponent = 254 - 127 = 127
		- double
		- 	min real exponent = 1-1023 = -1022
			- max real exponent = 2046 - 1023 = 1023
		- 但 fraction 還是可以有全 0 & 全 1
	- overflow: 太正
	- underflow: 太負
- fraction = 0-1
- single-precision
	- min 00000001
	- max 11111110
- double-precision
	- min 00000000001
	- max 11111111110
- e.g.
	- ![](https://i.imgur.com/6DoZ7tn.png)
	- ![](https://i.imgur.com/7NmpchQ.png)
	- 1.6875 to hexadicimal representation
		- ![](https://i.imgur.com/4jkKpWc.png)
	- single encode to double
		- ![](https://i.imgur.com/ClGGYQ5.jpg)

#### number representation
- ![](https://i.imgur.com/SnIXuuf.png)
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
![](https://i.imgur.com/bFgTJBs.png)
![](https://i.imgur.com/MPx04i7.png)
![](https://i.imgur.com/84xT9Wf.png)

#### multiplication
![](https://i.imgur.com/YMjRktx.png)
![](https://i.imgur.com/e9W7yvI.png)
FP multiplier is FP adder but use multiplier for significands

#### instructions
![](https://i.imgur.com/og6dgKP.png)
- ![](https://i.imgur.com/buhsiTs.png)

#### examples
##### escaping from barbaric yanks
![](https://i.imgur.com/n8xMAts.png)

```
flw f0, const5(x3) //f0 = 5
flw f1, const(x9) //f1 = 9
fdiv.s f0, f0, f1 //f0 = f0/f1 = 5/9
flw f1, const32(x3) //f1 = 32
fsub.s f10, f10, f1 //f10 = f10 - f1 = f10 - 32
fmul.s f10, f0, f10 //f10 = f0 x f10 = 5/9 x f10
jalr x0, 0(x1) //return
```

##### array multiplication
![](https://i.imgur.com/poiyR71.png)
![](https://i.imgur.com/u6ye4CT.png)
- $a_{2,3}$ in 5x5 → 1x5+3 = 8th item (左到右，上到下)
- 64-bit → 要再 x8 `slli 3`
![](https://i.imgur.com/NS7iJfq.png)

#### rounding
- extra bits of precision
	- guard & round
		- guard 存目標位數後 1st 位，round 存目標位數後 2nd 位，then round with 這兩位
			- e.g. (round to 小數點後第二位) 1.5252 → 1.53 bc $52\in [51,99]$
		- without these 2，則永遠只保留目標位數
		- ![](https://i.imgur.com/cQfcxqf.png)
	- sticky
		- guard & round bit 右邊有非 0 位數 → set to 1，append as 3rd bit
		- 0.500000...000001 → 0.501
- ![](https://i.imgur.com/tPo5qeq.png)
	- nearest even
		- tie (剛好一半) → round to even
		- tie 時 round 完 last bit 絕對是 0
		- ![](https://i.imgur.com/3V7aXS1.png)
- e.g.
	- ![](https://i.imgur.com/4hQyzHm.png)
		- ![](https://i.imgur.com/sRcJ1yX.png)
	- ![](https://i.imgur.com/F0S39OV.png)


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