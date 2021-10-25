# RISC-V
with [[Computer Architecture]]

IDE－Jupiter
https://github.com/andrescv/Jupiter

doc
https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md


## general registers
- https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md#general-registers
- https://riscv.org/wp-content/uploads/2015/01/riscv-calling.pdf
- > Values are returned from functions in integer registers a0 and a1 and floating-point registers fa0 and fa1.
- ![](https://i.imgur.com/xpNQn5r.png)
	- ![](https://i.imgur.com/0clQgx7.png)

## syntax
- lui
	- load upper intermediate's immediate
	- https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md#load-upper-immediates-immediate
- ori
	- or immediate
	- OR the two values

```
ori S1, S0, 0x5678

   0x12340000
OR 0x00005678
   ----------
   0x12345678 = S1
```


- la
	- load address
	- https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md#load-address
- load & store global
	- byte/halfword/word/doubleword
	- https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md#load-and-store-global
	- `ld a b`
		- load a to b
		- e.g. 
			- `ld x9, 64(x22)` → x9 = x22[8]
	- `sd a b`
		- store a to b
	- `li x19, 0` → x19 = 0
	- `mv a, b` → a=b

## examples
https://hackmd.io/@sysprog/By5OE6fOr
### recursive
#### bubble sort
https://github.com/Shengyuu/Assignment_computer_arch/blob/master/Lab1_bubble_sort/bubble.s

#### fibonacci
https://courses.cs.washington.edu/courses/cse378/02sp/sections/section4-5.html
```risc-v
fib:  addi $sp, $sp,   -8     # Entry code
      sw   $ra, 0($sp)
      sw   $fp, 4($sp)
      add  $fp, $sp,   $zero  # End of entry code

      # Compare n with 2
      lw   $t0, 8($fp)        # $t0 holds the argument n
      slti $t1, $t0,   2      # if $t0 < 2 ...
      beq  $t1, $zero, over   # ... skip the next two instructions

      # n < 2
      addi $v0, $zero, 1      # We're done with the recursion
      j    exit               # Jump to the exit code

over: # n >= 2

      # Calculate fib(n - 1)
      addi $t0, $t0,   -1     # Calculate n - 1

      # Set up to call fib with argument n - 1
                              # No registers need to be saved
      addi $sp, $sp,   -4     # Allocate space for arguments
      sw   $t0, 0($sp)        # n - 1 is our argument
      jal  fib                # Call the fib procedure

      # Clean up after calling fib with argument n - 1
      addi $sp, $sp,   4      # Pop off the argument
                              # No registers need to be restored

      # $v0 holds the result of fib(n - 1)
      add  $t1, $v0,   $zero  # Put the result into $t1

      # Calculate fib(n - 2)
      lw   $t0, 8($fp)        # $t0 holds the argument n
      addi $t0, $t0,   -2     # Calculate n - 2

      # Set up to call fib with argument n - 2
      addi $sp, $sp,   -4     # Allocate space for saved register
      sw   $t1, 0($sp)        # Save $t1 (the result of fib(n - 1))
      addi $sp, $sp,   -4     # Allocate space for arguments
      sw   $t0, 0($sp)        # n - 2 is our argument
      jal  fib                # Call the fib procedure

      # Clean up after calling fib with argument n - 2
      addi $sp, $sp,   4      # Pop off the argument
      lw   $t1, 0($sp)        # Restore $t1 (the result of fib(n - 1))
      addi $sp, $sp,   4      # Deallocate space for saved register

      # $v0 holds the result of fib(n - 2)
      add  $v0, $t1,   $v0    # Result is fib(n - 1) + fib(n - 2)

exit: lw   $ra, 0($sp)        # Exit code
      lw   $fp, 4($sp)
      addi $sp, $sp,   8
      jr   $ra                # End of exit code

```