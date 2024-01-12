**Bottom-up Approach**
```python
def fib(n):
    memo = {}

    for i in range(2, n+1):
        memo[i] = memo.get(i-1, 1) + memo.get(i-2, 0)

    return memo[n]


x = fib(8)
print(x)
```

**Bottom-up Approach (Save space)**
```python
def fib2(n):
    prev = 0
    curr = 1

    for i in range(1, n+1):
        next = prev + curr
        prev = curr
        curr = next

    return curr
```