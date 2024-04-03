The GIL forces only one thread at a time to run python code but it allows multiple threads to take control depending on how long one thread has had control and whether a given thread is performing non-python computations.

**Cooperative**: A thread will give up the GIL when it is performing a non-python task so that another thread can take it. 
**Preemptive**: A thread gets the GIL taken away from it so that another thread can do some computation. 

```ad-tldr
If you want to perform async/IO operations faster, use _threads_.

If you want to perform Python code faster, use _processes_.
```