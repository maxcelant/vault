##### General
- **Arity**: The number of parameters a function/method has.
- Keyword args of a function can be called in any order.

##### Scope
- Functions defined in a module have access to all members of the module.
- Must declare before you call it.

##### Functions
```python
def hello():
	return "Hello"

def goodbye():
	return "Goodbye"

options = {"Morning": hello, "Night": goodbye}

print(options["Morning"]())
```