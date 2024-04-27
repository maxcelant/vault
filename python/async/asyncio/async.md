```ad-important
**Concurrent Execution:** Async operations allow tasks to run _concurrently_, not necessarily in parallel. It's about tasks yielding execution during waiting periods, allowing other tasks to run in the meantime.

**Single Thread:** Typically runs in a single thread, utilizing an event loop to manage tasks. This avoids the overhead and complexity of thread management.

**Use Case:** Ideal for I/O-bound tasks, where the program spends a lot of time waiting for external operations to complete (e.g., network requests, file I/O).
```

