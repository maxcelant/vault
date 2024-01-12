Rather than accessing individual bits, computers access them in blocks aka _bytes_. They are the smallest addressable unit of memory. Programs view memory as a large array of bytes aka _virtual memory_. Each byte in this space has a unique identifier (address). The set of all possible addresses is _virtual address space_.

A pointer just points to the virtual address of the first byte of some storage block. 

#### Data Sizes
**CPU Architecture**: The _word size_ of a CPU refers to the amount of data that it can process during one clock cycle. Most computers are 32-bit to 64-bit word size. This means that the registers in the CPU are that size.

**Memory Addressing**: This is about how the CPU accesses memory. A 32-bit CPU uses 32-bit addresses, which means it can directly address up to 4 GB of memory (2^32 addressable locations). 

> By "_directly address up to X GB_" it means that the CPU can instantly look at any address space from 0 to 2^32/64. Each address typically stores one byte (8 bits) of data.

A 64-bit CPU uses 64-bit addresses, which allows it to directly address a much larger amount of memory (2^64 locations), far exceeding current practical requirements.

> **How is data transferred from memory to the registers?**
> Data is transferred with _data buses_. The width of this bus will determine how much data can be transferred at once (32 or 64).
#### Addressing and Byte Ordering
Multi-byte objects are stored as a contiguous sequence of bytes.

>**Example**
> An `int` is four bytes. So its addresses might be 0x100 to 0x103

**Little Endian vs Big Endian**
In little endian, the least significant part of a number is stored in the smallest addresses. Little endian is useful for adding or subtracting large numbers, because you typically start at at the LSB and move forward.

>**Example**
>Suppose we have a 32-bit number (4 bytes) **0x12345678**
>**0x12** (the first, most significant byte)
>**0x34** (the second byte)
>**0x56** (the third byte)
>**0x78** (the fourth, least significant byte)
>In a little endian system, these bytes would be stored in memory starting from the smallest address to the largest address, but in reverse order. So it would look like this in memory:

>|Memory Address|Data (in Hex)|
|---|---|
|0|78|
|1|56|
|2|34|
|3|12|

**Representing Strings**
A string in C is encoded by an array of characters terminated by the null (having value 0) character. Each character is represented by some standard encoding, with the most common being the ASCII character code.

**Bit-Level Operations**
One common use of bit-level operations is to implement masking operations, where a mask is a bit pattern that indicates a selected set of bits within a word.

The mask `0xFF` turns off all bits except the last two.

>**Example**
>If we had `x = 0x89ABCDEF`, then `x & 0xFF` would equal `0x0000EF`

The expression `~0` will yield a mask of all ones, no matter what.

Logical operators do not evaluate their second argument if the result of the expression can be determined by evaluating the first argument.

>**Example**
>the expression `a && 5/a` will never cause a division by zero.

