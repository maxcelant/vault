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