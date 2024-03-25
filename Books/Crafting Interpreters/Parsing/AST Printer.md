This printer takes a Parse Tree made up of `Expr` types like `Literal`, `Grouping`, `Unary`, `Binary`. From those, it will traverse the "tree" and do something with it. In this case, it just builds a simple output string

```python
from pylox.parser.productions import Expr, Visitor


class AstPrinter(Visitor):
  def print(self, expr: Expr):
    return expr.accept(self)
  

  def visit_binary(self, binary: Expr.Binary):
    return self.parenthesize(binary.operator.lexeme, binary.left, binary.right)
  

  def visit_grouping(self, grouping: Expr.Grouping):
    return self.parenthesize("group", grouping.expression)
  

  def visit_literal(self, literal: Expr.Literal):
    if literal.value == None: 
      return "nil"
    return str(literal.value)
  

  def visit_unary(self, unary: Expr.Unary):
    return self.parenthesize(unary.operator.lexeme, unary.right)
  
  
  def parenthesize(self, name: str, *exprs: Expr):
    builder = [f"({name}"]
    for e in exprs:
      builder.append(f" {e.accept(self)}")
    builder.append(")")
    return "".join(builder)
  

```

Run through how this expression is built 
```python
expression = Expr.Binary(
    Expr.Unary(TokenItem(TokenType.MINUS, "-", None, 1),
               Expr.Literal(123)),
    TokenItem(TokenType.STAR, "*", None, 1),
    Expr.Grouping(Expr.Literal(45.67))
)
print(AstPrinter().print(expression))
```

to get this outcome:

```
(* (- 123) (group 45.67))
```