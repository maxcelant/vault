`@property` decorator allows you to define a method in a class that can be accessed like an attribute but behaves like a method.

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        print("Getting radius value...")
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative!")
        print("Setting radius value...")
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @property
    def area(self):
        import math
        return math.pi * (self._radius ** 2)

c = Circle(5)
print(c.radius)       # This calls the @property method for 'radius'
c.radius = 10         # This calls the @radius.setter method
print(c.diameter)     # This calls the @property method for 'diameter'
print(c.area)         # This calls the @property method for 'area'
```

Output:

```bash
Getting radius value...
5
Setting radius value...
20
314.1592653589793
```