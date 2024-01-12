Can save you money, space, and time.

1. Function that `yields` results. You rarely call `next`, this is just how it works under the hood
```python
def count_me():
	yield "hello"
	yield "world"

gen = count_me()

A = next(gen)
B = next(gen)

print(A, B) # "hello, world"
```

2. `list` calls `next` automatically on the generator and knows when to stop.
```python
def count_me():
	yield "hello"
	yield "world"

gen = count_me()

print(list(gen)) # ["hello", "world"]
```

3. You can also use `max`, `min`, and more
```python
def count_me():
	yield 5
	yield 9
	yield 2

gen = count_me()

print(min(gen)) # 2
print(max(gen)) # 9
```

4. This is also a generator, looks similar to a list comprehension, the difference is that the generator saves you a bunch of RAM because its not creating a list then getting what you want.
```python
print( list( str(i) for i in range(2, 24, 6)))

print( min(i for i in range(2, 24_000_000, 6)))
```

5. Here is `range` as a generator
```python
def dummy_range(start, stop, step):
	i = start
	yield i
	while i < stop:
		i += step
		yield i

print( list( dummy_range(1, 10_000_000, 1)))
```

6. This one grabs the repos from Github
```python
def generator():
    url = "https://api.github.com/users/rails/repos"
    response = httpx.get(url)
    yield response.json()
    while next_link := response.links.get('next'):
        response = httpx.get(next_link.get('url'))
        yield response.json()


results = {}
for page in generator():
    for item in page:
        results[item['name']] = item['node_id']
```