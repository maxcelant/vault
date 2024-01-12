The Operating System is the layer that lives between our application and the hardware, and if we mean to communicate between them, we must go through the OS.

The operating system has two main purposes:
1. Protect the hardware from misuse.
2. Provide the application with simple and uniform mechanism for manipulating low-level hardware devices.

#### Processes
An abstraction for a running program. By concurrently, we mean that the instructions of one process are interleaved with the instructions of another process. This is called _context switching_. 

>![[Pasted image 20231202145654.png|  The OS switching between the shell and the running program.]]


**Kernel**: It manages this context switching. It is NOT a separate process. Instead it's a collection of code and data structures that the system uses to manage all processes. 

**Systems Calls**: Made by the processes to interact with the OS and the kernel handles this. This is things like printing, read, writing, etc. This is typically stuff that requires higher privileges that the program can't do on it's own.

#### Threads
A process can have multiple execution units aka threads. They share the code and global data of the process.

#### Virtual Memory
The space provided for a running process. Stuff like stack, heap, and read-only memory. Notice that the kernel gets it's own space, since it may need to interact with the program to make system calls.

> ![[Pasted image 20231202160358.png]]

#### Files
A sequence of bytes. All I/O devices are modeled as files. 

