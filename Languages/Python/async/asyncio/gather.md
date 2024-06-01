- `gather` is used to run various async tasks concurrently. 
- When you pass a list of [[coroutine]] objects to `asyncio.gather`, it schedules them to run at the same time waits for them all to finish. 
- It also returns the results of these tasks as a list

#### Example
```python
import asyncio

async def fetch_data(delay):
  print(f'Starting to fetch with {delay}...')
  await asyncio.sleep(delay)
  print(f'Finished to fetch with {delay}.')
  return f'data: {delay}'

async def main():

  tasks = [fetch_data(delay) for delay in range(10)]
  results = await asyncio.gather(*tasks)

  for r in results:
    print(r)

asyncio.run(main())

```