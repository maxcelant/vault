## Grammar 

```c
statement → exprStmt
			| forStmt
			| ifStmt
			| printStmt
			| whileStmt
			| block ;

forStmt → "for" "(" ( varDecl | exprStmt | ";" )
			  expression? ";"
			  expression? ")" statement ;

```

For loop is really just _syntactic sugar_ on top of a while loop

1. First portion finds the initializer which could be nothing, a declaration or an expression.
2. The condition is either an expression or nothing.
3. The increment is either an expression or nothing as well.
4. The body is created by seeing whats after the for parenthesis. Thats put in the `body` variable.
5. Next we build on top of that by adding the incrementer into that block!
6. Next we create a `While` loop by stuffing that body with a possible condition.
7. Next we stuff the initializer before the while loop even runs and put all of that in another block.

```python
def for_statement(self) -> Stmt:
    self.consume(TokenType.LEFT_PAREN, "Expect '(' after 'for'.")

	# 1
    initializer: Stmt
    if self.match(TokenType.SEMICOLON):
      initializer = None
    elif self.match(TokenType.VAR):
      initializer = self.var_declaration()
    else:
      initializer = self.expression_statement()

	# 2
    condition: Expr = None
    if not self.check(TokenType.SEMICOLON):
      condition = self.expression()
    self.consume(TokenType.SEMICOLON, "Expect ';' after loop condition.")

	# 3
    increment: Expr = None
    if not self.check(TokenType.RIGHT_PAREN):
      increment = self.expression()
    self.consume(TokenType.RIGHT_PAREN, "Expect ')' after for clauses.")

	# 4
    body: Stmt = self.statement()

	# 5
    if increment:
      body = Stmt.Block([body, Stmt.Expression(increment)])

	# 5
    if not condition:
      condition = Expr.Literal(True)
    body = Stmt.While(condition, body)

	# 7
    if initializer:
      body = Stmt.Block([initializer, body])

    return body
```