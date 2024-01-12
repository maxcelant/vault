>![[Pasted image 20231126192126.png]]

When we execute the `./hello` executable, the instructions are loaded from disk to main memory. From there, the CPU can begin executing the machine language instructions of `hello`.

---

**Buses**: Transfer fixed-sized chunks of bytes called _words_ between components.

**I/O Devices**: Computers connection to outside world. 

**Main Memory**: Temporary storage device that holds both the program and the data it manipulates while the processor is executing the program. A collection of DRAM chips. Organized as a linear array of bytes. 

**Processor (CPU)**: Executes the instructions stored in main memory pointed at by the Program Counter. Possible operations it could carry out:
- **Load**: Copy a byte/word from main memory into a register (can overwrite what was previously there).
- **Store**: Copy a byte/word from a register into main memory (can overwrite what was previously there).
- **Operate**: Copy contents of two registers to ALU and perform some arithmetic operation.
- **Jump**: Extract a word from instruction itself and copy it into the PC, overwriting the previous PC pointer value.

**Register File**: Small storage device that consists of a collection of word-sized registers, each with its own name.

**Program Counter (PC)**: Within the CPU, A storage device (register) that points at the some machine-language instruction in main memory.

**Arithmetic Logic Unit (ALU):** Performs arithmetic operations on one or two registers and returns an output.




