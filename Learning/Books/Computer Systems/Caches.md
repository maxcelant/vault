A lot of copying is taking place to get the program from disk to main memory to the processor. 

**Processor-Memory Gap**: CPUs execute instructions really quick but getting those instructions isn't as fast.

**Cache Memories** is a way to solve this issue. They serve as temporary staging areas for info the CPU may need soon. Implemented by _Static Random Access Memory (SRAM)_. Static because it keeps the memory as long as it has power.

- **L1 Cache** is nearly as fast as using a register.
- **L2 Cache** is larger yet slower and connected to the CPU via a special bus.

**Locality**: Tendency of a CPU to access the same set of memory locations more than once within a localized region.