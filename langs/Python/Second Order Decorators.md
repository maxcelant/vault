They allow you to create a decorator that takes args.
Definitely check out [[First Order Decorators|first order decorators]] first
In this example, we are repeating the function multiple times

```python
def repeat(num_times=1):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator


@repeat(num_times=3)
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")

```

It's technically the equivalent of doing:

```python
say_hello = repeat(num_times=3)(say_hello)
```