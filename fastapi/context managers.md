1. Doing stuff before and after your code
```python
import sys

class RedirectStdout:
    def __init__(self, filename):
        self.filename = filename

    def __enter__(self):
        self.original_stdout = sys.stdout
        sys.stdout = open(self.filename, 'w')
        return self

    def __exit__(self, type, value, traceback):
        sys.stdout.close()
        sys.stdout = self.original_stdout

with RedirectStdout('output.txt'):
    print("This will go to output.txt instead of the console")

```

2. Using `yield`. You can only yield once in a context manager!
```python
@contextmanager
def env_var(key, val):
	original_value = os.getenv(key)
	os.environ[key] = value

	yield "yummy" # Runs the stuff in the with ("Sandwiched")

	if original_value:
		os.environ[key] = original_value
	else:
		del os.environ[key]

with env_var("foo", "bar") as taste:
	print(f"Sandwiched is {taste}")
```

3. Handling exceptions that will stop the `__exit__` for running
```python
@contextmanager
def env_var(key, val):
	original_value = os.getenv(key)
	os.environ[key] = value

	try:
		yield # Runs the stuff in the with ("Sandwiched")
	finally:
		if original_value:
			os.environ[key] = original_value
		else:
			del os.environ[key]

with env_var("foo", "bar"):
	print("Sandwiched")
	raise Exception("oopsy")
```

4. Makes a database connection, no matter what
```python
def get_db():
	db = SessionLocal()
	try:
		yield db
	finally:
		db.close()
```