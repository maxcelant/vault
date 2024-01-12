> ![[Pasted image 20231126194144.png]]

Made up of four stages: (preprocessor, compiler, assembler, and linker) are known collectively as the **compilation system**.

1. **Preprocessing Phase**: Modifies the C program, adds header files like `#include <stdio.h>` to the program text. Creates `hello.i` file.
2. **Compilation Phase**: Turns C into Assembly. Creates `hello.s` file.
3. **Assembly Phase:** Translates Assembly to machine language instructions. Packages them in a _relocatable object program_. Creates `hello.o` file.
4. **Linking Phase**: Links other object files with our object file. Like the `printf.o` object file. The result is the `hello` executable object file.