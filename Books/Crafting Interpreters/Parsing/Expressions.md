These are our terms for the language (as it stands).


```python
class Expr(ABC):
  @abstractmethod
  def accept(self, visitor: Visitor):
    pass


  class Binary:
    def __init__(self, left: Expr, operator: TokenItem, right: Expr):
      self.left = left
      self.operator = operator
      self.right = right

    def accept(self, visitor: Visitor):
      return visitor.visit_binary(self)


  class Grouping:
    def __init__(self, expression: Expr):
      self.expression = expression

    def accept(self, visitor: Visitor):
      return visitor.visit_grouping(self)


  class Literal:
    def __init__(self, value: object):
      self.value = value

    def accept(self, visitor: Visitor):
      return visitor.visit_literal(self)


  class Unary:
    def __init__(self, operator: TokenItem, right: Expr):
      self.operator = operator
      self.right = right

    def accept(self, visitor: Visitor):
      return visitor.visit_unary(self)
```