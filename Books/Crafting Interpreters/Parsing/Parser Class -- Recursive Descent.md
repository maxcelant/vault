The reason the lower precedence call the higher precedence terms is because those will be calculated first in the parse tree! Aka they will be the leaf nodes that we compute first.

```python
  def equality(self) -> Expr:
    expr: Expr = self.comparison()

    while self.match(TokenType.BANG_EQUAL, TokenType.EQUAL_EQUAL):
      operator: TokenItem = self.previous()
      right: Expr = self.comparison()
      expr = Expr.Binary(expr, operator, right)

    return expr
```

Because of the recursive nature, the value of `expr` evolves from just being a value to being the entire left side expression and so one.

**Example**

>![[Pasted image 20240323181644.png]]