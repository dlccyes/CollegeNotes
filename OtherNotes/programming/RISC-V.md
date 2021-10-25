# RISC-V

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
- la
	- load address
	- https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md#load-address
- load & store global
	- byte, half word, word or double word
	- https://github.com/riscv-non-isa/riscv-asm-manual/blob/master/riscv-asm.md#load-and-store-global