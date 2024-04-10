```ad-question
**What is an Event Loop?**

The event loop has to do with coroutines _in the same thread_. So if one async operation is taking a while, we will move on to the next one and then come back to the previous when its done.
```


- The `get_event_loop` method in `asyncio` is used to obtain the current event loop for the current context or thread. 
- It plays a crucial role in scenarios where you need explicit control over the event loop.
- While `task1` is working/waiting, we move on to `task2` and then go back to `task1`!

```python
import asyncio

async def compute(x, y):
    print(f"Computing {x} + {y}")
    await asyncio.sleep(1.0)
    return x + y

async def print_sum(x, y):
    result = await compute(x, y)
    print(f"{x} + {y} = {result}")

# Get the current event loop
loop = asyncio.get_event_loop() 
try:
    task1 = loop.create_task(print_sum(1, 2))
    task2 = loop.create_task(print_sum(3, 4))

    loop.run_until_complete(asyncio.gather(task1, task2))
finally:
    loop.close()


```

**This code written easier using `gather`**

```python
import asyncio

async def compute(x, y):
    print(f"Computing {x} + {y}")
    await asyncio.sleep(1.0)
    return x + y

async def print_sum(x, y):
    result = await compute(x, y)
    print(f"{x} + {y} = {result}")

async def main():
    await asyncio.gather(
        print_sum(1, 2),
        print_sum(3, 4)
    )

asyncio.run(main())

```

**This same code in JavaScript**

```js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function compute(x, y) {
    console.log(`Computing ${x} + ${y}`);
    await sleep(1000);
    return x + y;
}

async function printSum(x, y) {
    const result = await compute(x, y);
    console.log(`${x} + ${y} = ${result}`);
}

async function main() {
    await Promise.all([
        printSum(1, 2),
        printSum(3, 4)
    ]);
}

main().then(() => console.log('All tasks completed!'));

```
