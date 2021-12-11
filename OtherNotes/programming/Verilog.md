---
title: Verilog
layout: meth
parent: Programming
---
# Verilog
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## resources
https://www.youtube.com/watch?v=Y3xzOLp1OsE

## syntax	
### always block
```verilog
always @ (sensitivily list) begin
	[statements]
end
```
- `always @ (a or b)` → execute when `a` or `b` changes
- `*` =  all of the wires that the always block depends on
	- `always @ (*)`

https://www.chipverify.com/verilog/verilog-always-block

## intro

![](https://i.imgur.com/7ytJc9s.png)

- levels of modeling
	- behavioral level
	- register transfer level (RTL)
		- [[Computer Architecture]]
	- gate level
		- gates & wires 去兜出來
		- 數位系統設計、積體電路設計
	- transistor level
		- 類比電路設計、電子電路設計
		- 最底層
- primitive
	- and, or, xor, ...
- port
	- `inout` 不要亂用
	- `adder adder_name (.out(c), .in1(A), .in2(b))`
		- 這樣寫不用管 variable 順序，
	- 不要留東西不接
		- e.g. `adder adder_name (.out(c), .in1(A), .in2())`
- data types
	- nets
		- 管 `wire` `wand` 就好
		- wire
			- 線，do not store value
			- `input` `output` 屬於 wire
	- registers
		- flip-flop
	- integer
- vector
	- wire & reg 可用
	- 建議 high to low
	- `wire [7:0] bus` → 8-bit bus
	- slice
		- `bus[7]` → 7th bit of vector `bus`
		- `addr[1:0]` → 2 most(?) significant bits of vector `addr`
- array
	- reg, integer, time 可用
	- low to high
	- multi-dimensional
		- `integer matrix [4:0][4:0]`
- memory
- string
- logic
	- 1
	- 0
	- z
		- 沒接到東西
		- impedance = $\infty$
	- x
		- unknown
		- 電路設計有問題
- number representation
	- `[size]'[base][number]`
	- base
		- `b` = binary
		- `o` = octal
		- `d` = decimal
		- `h` = hexadecimal
	- only number → 32-bit binary (不建議)
	- e.g.
		- ![](https://i.imgur.com/0KdXdyH.png)
- parameter
	- 就是 variable

## logic design
- `reg [4:0] a;` unsigned
- `reg [4:0] signed a;` signed
- `#10` → 10 時間單位
- negation operator
	- `!` logical negation
		- !有值 → 0
		- !0 → 1
		- !z → x
		- !x → x
	- `~` bitwise negation
		- ~4'b01zx → 10xx
- unary reduction operator
	- `&` logical AND
	- `|` logical OR
	- `^` logical XOR
- shift operator
	- `>>` right logical shift
	- `<<` left logical shift
		- `slli`
	- `>>>` right arithmetic shift
		- 補 sign bit
- sensitivity list
	- always block, variable 有變 → 執行
- blocking & nonblocking
	- ![](https://i.imgur.com/s7tkR3K.png)
	- blocking
		- 計算完馬上更新
		- `x = a + b`
	- nonblocking
		- 都計算完後才一起更新
			- s.t. 不會馬上更新又影響到其他人
		- `x <= a + b`
- 東西都要寫滿，每個 variable 都要 specify
	- ![](https://i.imgur.com/AiY9jZM.png)
	- not full case → latch
- switch case
	- ![](https://i.imgur.com/RQeo9Mb.png)
- combinational circuit
	- memoryless
	- use blocking
- sequential circuit
	- has memory
	- use nonblocking

## finite state machine
- 期末考會考
- moore
	- output 只跟 current state 有關
- mealy
	- output 跟 current state & input 有關