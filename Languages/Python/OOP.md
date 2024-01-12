- `self.__foo` -> private variable
- `self._foo` -> protected variable
- `self.foo` -> public variable
- Nothing in Python is actually private

##### Getters and Setters
```python
def plug_in(self, time):
	self.__level = time * 0.5
```
This is a mutator / setter / instance method

```python
def level(self):
	return self.__level
```
This is an accessor / getter

##### 
In terms of interfaces and superclasses, Python uses "duck-typing"
Duck-typing just means it will assume that the object has that method or property.
```python
def format(foo_or_bar: Union[Foo, Bar]):
	print(foo_or_bar.do_stuff())
```

##### Static Variables
- The class has a value, but each object created also get its own version of it that it can change.
- Changing the classes variable will affect any new object created
```python
class Foo:
	bar = "baz"

foo1 = Foo()
foo2 = Foo()

foo1.bar = "foo1"
foo2.bar = "foo2"
Foo.bar = "what?"

print(foo1.bar)  # foo1
print(foo2.bar)  # foo2
print(Foo.bar)   # what?
print(Foo().bar) # what?
```

##### Static Method
```python
class Foo:
	@staticmethod
	def build():
		# do stuff
```

##### Class Method
```python
def Foo:
	@classmethod
	def do_stuff(cls, stuff):
		instance = cls()
		
```