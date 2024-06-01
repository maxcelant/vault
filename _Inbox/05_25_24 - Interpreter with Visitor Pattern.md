- We off-load the work of each `Expr` subclass to a class that implements the visitor pattern used. 
- In our case, the `Interpreter` is the one that implements the `Visitor`.

```python
class Expr(ABC):
    class Visitor:
        @abstractmethod
        def visit_literal_expr(self, expr: Expr.Literal):
            pass

        @abstractmethod
        def visit_add_expr(self, expr: Expr.Add):
            pass
        
        @abstractmethod
        def visit_sub_expr(self, expr: Expr.Subtract):
            pass

    @abstractmethod
    def accept(self, visitor: Expr.Visitor):
        pass
```

- Each `Expr` subclass gets its own visitor method. Ex: `visit_foo_expr(self)`

```python
    class Literal:
        def __init__(self, value):
            self.value = value

        def accept(self, visitor: Expr.Visitor):
            return visitor.visit_literal_expr(self)
    
    class Add:
        def __init__(self, right, left):
            self.right = right
            self.left  = left

        def accept(self, visitor: Expr.Visitor):
            return visitor.visit_add_expr(self)

    class Subtract:
        def __init__(self, right, left):
            self.right = right
            self.left  = left 

        def accept(self, visitor: Expr.Visitor):
            return visitor.visit_sub_expr(self)
```

- Here we have the `Expr` and all its possibilities. 
- We pass in `self` because each `Expr` subclass can have different data and should be handled differently based on the visitor method used!

```python
class Interpreter(Expr.Visitor):
    def solve(self, expr: Expr):
        return expr.accept(self)

    def visit_literal_expr(self, expr: Expr.Literal):
        return expr.value

    def visit_add_expr(self, expr: Expr.Add):
        right  = self.solve(expr.right)
        left   = self.solve(expr.left)
        return float(right) + float(left)
    
    def visit_sub_expr(self, expr: Expr.Subtract):
        right = self.solve(expr.right)
        left  = self.solve(expr.left)
        return float(right) - float(left)
```

- The important part here is the `solve` method. This is the method that will actually dig into the structure built and solve it from inside out using those `accept()` methods.
- Since each expression can have expressions it, thats why we need to run `solve` on each part (both right and left) of the expression in the add and subtract blocks.

```python
if __name__ == '__main__':
	# 4 + (3 - 5)
    expr = Expr.Add(
                right=Expr.Subtract(
                    right=Expr.Literal(3),
                    left=Expr.Literal(5),
                ),
                left=Expr.Literal(4)
            )
    interpreter = Interpreter()
    print(interpreter.solve(expr))
```

- Normally this expression structure would be created from the parser but here we are hard-coding a structure to understand how the interpreter portion works.