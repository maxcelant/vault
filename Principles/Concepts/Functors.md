An object and value combined with a mechanism to do something with that value. Returns a new functor containing that process.

In this case, `Functor` is also an _Endofunctor_ because it has the same shape as the original.

We do _NOT_ care about the structure of the value, we just care that it is a value and has a method to do something with that value.

```python
class Functor:
  def __init__(self, value: Any):
    self.value = value

  def map(self, fn) -> Functor:
    return Functor(fn(self.value))

def add_one(x: int):
  return x + 1


f = Functor(5)

g = f.map(add_one) # new endofunctor
```