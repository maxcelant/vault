1. `cache` saves the results of function calls. So if the function with the same args is called again, the decorator will just return the cached value.
```python
from functools import cache

@cache
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(30))  # This will be much faster with caching.
```
