This is invoked when you create the object.

```python
from time import sleep

class Descriptor:
  def __init__(self):
    self.name = None

  def __set_name__(self, cls, name):
    print(f'__set_name__ called {owner=} {name=}')
    self.name = name

  def __set__(self, instance, value):
    print(f'__set__ called {instance=} {value=}')
    instance.__dict__[self.name] = value


class User:
  attribute = Descriptor()   

sleep(1)
user = User()           
# __set_name__ called owner=<class '__main__.User'> name='attribute'
sleep(1)
user.attribute = 'foo'
# __set__ called instance=<__main__.User object at 0x100832850> value='foo'
```