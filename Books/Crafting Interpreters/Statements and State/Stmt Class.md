The `Stmt` class kind of acts as a wrapper for the `Expr` class. Since [[Statement Grammar]] are _actions_, they wrap over the expression.

```ad-tip
We _execute_ as a "statement".
We _evaluate_ a "expression".
```

```python
class Stmt(ABC):

  @abstractmethod
  def accept(self, visitor: Stmt.Visitor):
    pass


  class Visitor(ABC):
    @abstractmethod
    def visit_print_stmt(self, expr: Stmt.Expr):
      pass


    @abstractmethod
    def visit_expression_stmt(self, expr: Stmt.Expr):
      pass


  class Expression:
    def __init__(self, expression: Expr):
      self.expression = expression


    def accept(self, visitor: Stmt.Visitor):
      visitor.visit_expression_stmt(self)


  class Print:
    def __init__(self, expression: Expr):
      self.expression = expression


    def accept(self, visitor: Stmt.Visitor):
      visitor.visit_print_stmt(self)

```

The `Stmt` class also has its own Visitor where it can handle those specific calls like printing or just performing a normal expression. More will be added later.

