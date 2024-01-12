##### `eval` Function
`eval` function is used to evaluate a dynamically created Python expression.
```python
x = 1
print(eval('x+1')) # Output: 2
```

---
##### Splat
Splat allows you to grab or set a series of remaining variables all at once.
```python
def func(a, b, *c):
	pass # c = ("waz", "wiz")

func("foo", "bar", "waz", "wiz")
```

```python
a, b, *c = ("foo", "bar", "waz", "wiz") 
# c = ("waz", "wiz")
```

```python
user = {
    "username": "zeph"
}

profile = {
    "seeking_job": False
}

# shallow copy
user_with_profile = {
    **user,
    **profile
}

print(user_with_profile)
```
---
##### Multiply Letters
```python
s = "Max"
print(s*3) # MaxMaxMax
```
---

