Update the [[Grammar for Lox]] to include if statements!

```c
statement → exprStmt
			| ifStmt
			| printStmt
			| block ;
			
ifStmt → "if" "(" expression ")" statement
		  ( "else" statement )? ;
```


## Dangling Else Problem
> ![[Pasted image 20240409120204.png]]

We solve this by having the `else` be a part of the closest `if` block.

## Parser Code

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

## Interpreter Code

```python
  def visit_if_stmt(self, stmt: Stmt.If) -> None:
    if self.is_truthy(self.evaluate(stmt.condition)):
      self.execute(stmt.then_branch)
    elif stmt.else_branch:
      self.execute(stmt.else_branch)
```

Pretty straight forward, evaluate the condition and execute the correct path.

