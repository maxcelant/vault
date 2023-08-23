#### **1.1. What is Parallelism and Concurrency?**

- **Parallelism**: The concept of doing multiple things at the same time. This usually involves multiple processors or cores. For instance, a quad-core processor can potentially execute four tasks simultaneously, one on each core.
- **Concurrency**: A broader concept that deals with multiple things happening in overlapping time periods. It doesn't always mean things happen at the exact same time. Concurrency is more about dealing with lots of things at once.

To understand the difference better: Imagine a single chef in a kitchen who is cooking multiple dishes. The chef might start cooking one, then while it's simmering, chop ingredients for the next dish. This chef is working concurrently but not in parallel. Now, imagine four chefs in that kitchen, each working on a different dish. They are working in parallel.

#### **1.2. Challenges of Parallel and Concurrent Programming**
- **Race Conditions**: Occurs when the behavior of a piece of code depends on the sequence or timing of uncontrollable events. A classic example is two threads updating the same global variable simultaneously.
    
- **Deadlocks**: A situation where two or more threads are unable to proceed with their execution because each is waiting for the other to release some resource.
    
- **Starvation**: Occurs when a thread is perpetually denied the resources it needs to proceed. For instance, a lower-priority thread might be waiting to acquire a lock, but higher-priority threads keep coming in and taking the lock first.

#### **1.3. Why Python?**
Python, due to its widespread adoption and versatile libraries, is a good language to learn the basics of multithreading and parallelism. However, it has a unique limitation in its standard implementation (CPython):

- **The Global Interpreter Lock (GIL)**: This is a mutex (a type of lock) that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once in a single process. This means that in a multi-core system, even if you have multiple threads, only one will execute Python code at a time.

The GIL was introduced to handle memory management issues in CPython and isn't a feature of the Python language itself. Alternative Python implementations, such as Jython or IronPython, don't have the GIL. However, even with the GIL, multithreading can be beneficial in I/O-bound programs, where the program spends time waiting for input/output operations.