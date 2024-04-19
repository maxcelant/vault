
## Grammar

```c
statement → exprStmt | ifStmt | printStmt | whileStmt | block ;

whileStmt → "while" "(" expression ")" statement ;
```

## Parser

Very straight forward. Consume the first parenthesis. The thing that follows is the condition, which is consumed as an expression.

The body is a statement, which means it could be pretty much anything, but most likely a `stmt.Body`.

```python
  def while_statement(self) -> Stmt:
    self.consume(TokenType.LEFT_PAREN, "Expect '(' after 'while'.")
    condition: Expr = self.expression()
    self.consume(TokenType.RIGHT_PAREN, "Expect ')' after condition.")
    body: Stmt = self.statement()

    return Stmt.While(condition, body)
```

## Interpreter

We simply loop while the condition is true and execute the body on each iteration.

```python
  def visit_while_stmt(self, stmt: Stmt.While) -> None:
    while self.is_truthy(self.evaluate(stmt.condition)):
      self.execute(stmt.body)
```