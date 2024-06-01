Allows you to wrap a function in some functionality.

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        duration = end_time - start_time
        print(f"{func.__name__} executed in {duration:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function(duration):
    time.sleep(duration)
    return "Finished sleeping!"

result = slow_function(2)

```

- The outer function takes the function it's wrapping as an argument
- The `wrapper` then takes the args of that function you are wrapping with `*args` and `**kwargs`.
