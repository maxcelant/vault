```c
expression → assignment ;

assignment → IDENTIFIER "=" assignment | logic_or ;

logic_or → logic_and ( "or" logic_and )* ;

logic_and → equality ( "and" equality )* ;
```

As you can see, they are pretty low on the precedence table.

## Parser Code

```python
  def logic_or(self) -> Expr:
    expr: Expr = self.logic_and()

    while self.match(TokenType.OR):
      operator: TokenType = self.previous()
      right: Expr = self.logic_and()
      expr = Expr.Logical(expr, operator, right)

    return expr
  

  def logic_and(self) -> Expr:
    expr: Expr = self.equality()

    while self.match(TokenType.AND):
      operator: TokenType = self.previous()
      right: Expr = self.equality()
      expr = Expr.Logical(expr, operator, right)

    return expr
```

Following the grammar, this makes sense. Check to see if the tokens create an `or` or `and` expression.

## Interpreter Code

```python
  def visit_logical_expr(self, expr: Expr.Logical):
    left: object = self.evaluate(expr.left)

    if expr.operator.type == TokenType.OR:
      if self.is_truthy(left): 
        return left
    else:
    # If its an AND operation and the left side is  
    # False, then theres no point checking the right
      if not self.is_truthy(left): 
        return left
    
    return self.evaluate(expr.right)
```

If the left hand side resolves to a _truthy_ value, then we dont even look at the right side, we just return the left.

This is exactly what python does.
