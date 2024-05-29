### If Statements

```c
statement → exprStmt
			| ifStmt
			| printStmt
			| block ;
			
ifStmt → "if" "(" expression ")" statement
		  ( "else" statement )? ;
```
##### Dangling Else Problem

> ![[Pasted image 20240409120204.png]]

We solve this by having the `else` be a part of the closest `if` block.

##### Parser Code

```python
def if_statement(self) -> Stmt:
    self.consume(TokenType.LEFT_PAREN, "Expect '(' after 'if'.")
    condition: Expr = self.expression()
    self.consume(TokenType.RIGHT_PAREN, "Expect ')' after if condition.")

    then_branch: Stmt = self.statement()
    else_branch: Stmt | None = self.statement() if self.match(TokenType.ELSE) else None
    
    return Stmt.If(condition, then_branch, else_branch) 
```

Get the condition, then get the then and _possibly_ else blocks.

##### Interpreter Code

```python
  def visit_if_stmt(self, stmt: Stmt.If) -> None:
    if self.is_truthy(self.evaluate(stmt.condition)):
      self.execute(stmt.then_branch)
    elif stmt.else_branch:
      self.execute(stmt.else_branch)
```

Pretty straight forward, evaluate the condition and execute the correct path.

---
### Logical Operators

```c
expression → assignment ;

assignment → IDENTIFIER "=" assignment | logic_or ;

logic_or → logic_and ( "or" logic_and )* ;

logic_and → equality ( "and" equality )* ;
```

As you can see, they are pretty low on the precedence table.

##### Parser Code

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

##### Interpreter Code

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

---
### While Loops

##### Grammar

```c
statement → exprStmt | ifStmt | printStmt | whileStmt | block ;

whileStmt → "while" "(" expression ")" statement ;
```

##### Parser

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

##### Interpreter

We simply loop while the condition is true and execute the body on each iteration.

```python
  def visit_while_stmt(self, stmt: Stmt.While) -> None:
    while self.is_truthy(self.evaluate(stmt.condition)):
      self.execute(stmt.body)
```

---
### For Loops
##### Grammar 

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