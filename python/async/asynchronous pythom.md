```ad-quote
Style of concurrent programming in which tasks release the CPU during _waiting periods_ so that other _tasks_ can use it.
```

- Async frameworks need a scheduler, usually called "event loop"
- Check out [[grok the gil]] for more info on how this sharing works with a single thread.
- 