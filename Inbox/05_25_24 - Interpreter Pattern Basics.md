
- The interpreter pattern allows you to build each expression as a building block of a bigger whole.
- Then you can iterate through it using the same method.
- Having a base-case aka the `Number` is important here, otherwise what will you be interpreting exactly?

```python
from abc import abstractmethod


class Expr:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    @abstractmethod
    def interpret(self):
        pass


    class Number:
        def __init__(self, value):
            self.value = value

        def interpret(self):
            return self.value
    
    class Add:
        def __init__(self, x, y):
            self.x = x
            self.y = y

        def interpret(self):
            return self.x.interpret() + self.y.interpret()

    class Subtract:
        def __init__(self, x, y):
            self.x = x
            self.y = y

        def interpret(self):
            return self.x.interpret() - self.y.interpret()
    
    class Multiply:
        def __init__(self, x, y):
            self.x = x
            self.y = y

        def interpret(self):
            return self.x.interpret() * self.y.interpret()


if __name__ == '__main__':
    expr = Expr.Add(
                x=Expr.Number(2), y=Expr.Multiply(
                    x=Expr.Number(4), y=Expr.Number(3)
                )
            )

    print(expr.interpret())

```