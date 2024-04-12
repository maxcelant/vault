`__set__` allows you to check/modify the step in which you are setting a value.
`__get__` allows you to check/modify the step in which you retrieve a value.

```python
class TypeChecked:
  def __init__(self, expected_type):
    self.expected_type = expected_type
    self.name = None

  def __get__(self, instance, owner):
    return instance.__dict__[self.name]

  def __set__(self, instance, value):
    assert isinstance(value, self.expected_type), \ 
	    f'{value} is not of type {self.expected_type}'
    instance.__dict__[self.name] = value
    print(instance.__dict__)

  def __set_name__(self, owner, name):
    self.name = name


class Foo:
  name = TypeChecked(str)
  age  = TypeChecked(int)

foo = Foo()
foo.name = 'Max'
foo.age = '23'    # AssertionError: 23 is not of type <class 'int'>
```

