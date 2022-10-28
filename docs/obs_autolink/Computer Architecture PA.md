---
title: Computer Architecture PA
layout: meth
parent: Computer Architecture
---
# Computer Architecture PA
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## HW1 [[../OtherNotes/Software Development/RISC-V]]
### recursion
T(n) = 2T(n/2) + 8n + 5, T(1) = 4

python
```py
import sys

n = int(sys.argv[1])

def Tfunc(n):
    if(n==1):
        return 4
    else:
        return 2*Tfunc(n//2)+8*n+5

print(Tfunc(n))
```

RISC-V
```
.globl __start

.rodata
    msg0: .string "This is HW1-1: T(n) = 2T(n/2) + 8n + 5, T(1) = 4\n"
    msg1: .string "Enter a number: "
    msg2: .string "The result is: "

.text
################################################################################
  # You may write function here
  
################################################################################

__start:
  # Prints msg0
    addi a0, x0, 4
    la a1, msg0
    ecall

  # Prints msg1
    addi a0, x0, 4
    la a1, msg1
    ecall

  # Reads an int
    addi a0, x0, 5
    ecall

################################################################################ 
  # Write your main function here. 
  # Input n is in a0. You should store the result T(n) into t0
  # HW1-1 T(n) = 2T(n/2) + 8n + 5, T(1) = 4, round down the result of division
  # ex. addi t0, a0, 1
  
    jal tfunc        # tfunc(5)
    j result
  
tfunc:       # n in a0, return tfunc(n) in t0
    addi  sp, sp, -8    # reserve our stack area
    sw ra, 0(sp)    # ra -> 0(sp) # save the return address
    li t1, 1        # t0 <- 1
    beq a0, t1, base_case # n=1 → a1 <- 4
    sw a0, 4(sp)    # n -> 4(sp)
    srli a0, a0, 1  # n <- n/2
    jal tfunc       # call tfunc(n/2)
                    # t0 <- tfunc(n/2)
    slli t0, t0, 1  # t0 <- 2t0 = 2tfunc(n/2)
    lw t1, 4(sp)    # t1 <- n
    slli t1, t1, 3  # t1 <- 8n
    add t0, t0, t1  # t0 += 8n
    addi t0, t0, 5  # t0 += 5
    j done

base_case:
    li t0, 4        # t0 <- 4 when n=1 # tfunc(1)=4

done:
    lw ra, 0(sp)    # ra <- ra # retore ra
    addi sp, sp, 8  # free our stack frame
    jr ra           # and return
  
################################################################################

result:
  # Prints msg2
    addi a0, x0, 4
    la a1, msg2
    ecall

  # Prints the result in t0
    addi a0, x0, 1
    add a1, x0, t0
    ecall
    
  # Ends the program with status code 0
    addi a0, x0, 10
    ecall
```


### Caesar
shift characters by 3

```
.globl __start

.rodata
    msg0: .string "This is HW1-2: \n"
    msg1: .string "Plaintext:  "
    msg2: .string "Ciphertext: "
.text

################################################################################
  # print_char function
  # Usage: 
  #     1. Store the beginning address in x20
  #     2. Use "j print_char"
  #     The function will print the string stored from x20 
  #     When finish, the whole program with return value 0

print_char:
    addi a0, x0, 4
    la a1, msg2
    ecall
    
    add a1,x0,x20
    ecall

  # Ends the program with status code 0
    addi a0,x0,10
    ecall
    
################################################################################

__start:
  # Prints msg
    addi a0, x0, 4
    la a1, msg0
    ecall

    la a1, msg1
    ecall
    
    addi a0,x0,8
    li a1, 0x10130
    addi a2,x0,2047
    ecall
    
  # Load address of the input string into a0
    add a0,x0,a1

################################################################################ 
  # Write your main function here. 
  # a0 stores the begining Plaintext
  # Do store 66048(0x10200) into x20 
  # ex. j print_char
    addi t0, x0, 123 # t0 <- 123 i.e. t0 = ord('z')+1
    addi t3, x0, 32  # t3 <- 32 i.e. t3 = ord(' ')
    li   t2, 0x10200 # t2 <- target
    addi t4, x0, 0 # t3 <- 0 i.e. space count = 0

Loop:
    lb    t1, 0(a0) # t1 <- plaintext[i]
    beq   t1, t3, space
    beq   x0, t1, end # if t1 == ending → end
    addi  t1, t1, 3 # t1 <- t1+3 i.e. shift letter
    bge   t1, t0, shift # if t1 >= 123 → shift to ord()
    j store

space:
    #mv t1, t4 # t1 <- t4
    addi t1, x0, 48 # t1 <- 48 i.e. t1 = ord('0')
    add t1, t1, t4 # t1 <- t1 + t4 i.e. t1 += space count
    addi t4, t4, 1 # t4 <- t4 + 1 i.e. space count ++
    j store

shift: # bascially %26
    addi  t1, t1, -26
    j store  

store: # store the excrypted letter and move pointer 
    sb    t1, 0(t2) # t1 -> ciphertext[j] i.e. store the shifted letter
    addi  a0, a0, 1 # pointer of plaintext ++ i.e. i++
    addi  t2, t2, 1 # pointer of ciphertext ++ i.e. j++
    j     Loop

end: # end
    sb    x0, 0(t2)
    li   x20, 0x10200
    j     print_char
  
################################################################################
```

## HW2 [[../OtherNotes/Software Development/Verilog]] ALU
![](https://i.imgur.com/wwncllN.png)

```
source /usr/cad/cadence/cshrc && source /usr/cad/synopsys/CIC/synthesis.cshrc
ncverilog HW2_tb.v HW2.v +access+r
```

## final project [[../OtherNotes/Software Development/Verilog]] CPU
![](https://i.imgur.com/3qLc5gk.png)

IF → ID → EX → MEM → WB

- IF
	- RS1 = instruction[19-15]
	- RS2 = instruction[24-20]
	- RD = instruction[11-7]

109-1 CSIE  
single-cycle CPU  
very complete  
<https://github.com/tzutengweng33176/Computer_Architecture_109_1>  
note that this uses 64-bit

<https://www.fpga4student.com/2017/04/verilog-code-for-16-bit-risc-processor.html>

pipelined CPU
<https://github.com/HouHou0925/MIPS_CPU>

Control signals
![](https://i.imgur.com/EICWqCN.png)
<https://www.d.umn.edu/~gshute/mips/control-signal-summary.html>

Data Memory  
<https://stackoverflow.com/questions/36879351/data-memory-unit>

```
source /usr/cad/cadence/cshrc && source /usr/cad/synopsys/CIC/synthesis.cshrc
ncverilog Final_tb.v +define+leaf +access+r
```
- jal
	- jal x1, offset → x1 = PC+4, PC = PC+offsetx2
	- ![](https://i.imgur.com/21ilYxU.png)
		- need 1 MUX & 1 control signal
			- the adding part is the same as branch
		- <https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi4ufPVhLb1AhVQwosBHSOgD8MQFnoECAsQAQ&url=http%3A%2F%2Fusers.ece.cmu.edu%2F~jhoe%2Fcourse%2Fece447%2FS21handouts%2FL03.pdf&usg=AOvVaw0TEcEVp4avM4EoFBc_8C6G>
	- ![](https://i.imgur.com/nJvkahk.png)
		- <https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi4ufPVhLb1AhVQwosBHSOgD8MQFnoECCYQAQ&url=http%3A%2F%2Fmeseec.ce.rit.edu%2Feecc550-winter2005%2F550-chapter5-exercises.pdf&usg=AOvVaw1vEta27SUXw8gQbGcmNgCx>
- jalr
	- jalr x1, imm(rs1) → PC = rs1+imm
	- need 1 control signal (merged into 1 PC selector)
	- ![](https://i.imgur.com/LIJhddO.png)
- AUIPC
	- auipc rd, 3 → rd[31:12] = 3, rd += PC
	- 融進 jal & jalr 的 write back MUX
- leaf
	- JALR
	- JAL
	- ADD
	- SUB
	- AUIPC
	- LW
	- SW