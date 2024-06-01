#### Amdahl's Law
To significantly speed up the entire system, we must improve the speed of a very large fraction of the overall system.

#### Concurrency and Parallelism
**Concurrency**: A system with multiple, simultaneous activities.
**Parallelism**: The use of concurrency to make a system run faster.

#### Thread-Level Concurrency
**Multi-core** processors have several CPUs (or cores) integrated into one circuit chip.

> ![[Pasted image 20231202164547.png]]

**Hyperthreading** also called _simultaneous multi-threading_ that allows a single CPU to execute multiple flows of control. 

#### Instruction-Level Parallelism
Modern processors can execute multiple instructions at one time, a property known as instruction-level parallelism. 

**What is a clock cycle and how fast is it?**
It's like the heartbeat of the computer. Each tick allows the processor to perform a task or part of a task.

The speed of a clock cycle is measured in hertz (Hz), with modern CPUs typically operating in the gigahertz (GHz) range, which is billions of cycles per second. For example, a 3 GHz processor has a clock cycle that occurs 3 billion times per second.

#### Single-Instruction, Multiple-Data (SIMD) Parallelism
Special hardware that allows a single instruction to cause multiple operations to be performed in parallel. Like having an instruction that can add 8 pairs of single precision floating point numbers in parallel. SIMD instructions are mostly to speed up apps that process images, sound or video data.