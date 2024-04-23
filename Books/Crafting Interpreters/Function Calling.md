---
tags:
  - control-flow
  - functions
---
# Grammar

```c
unary → ( "!" | "-" ) unary | call ;

call → primary ( "(" arguments? ")" )* ;

arguments → expression ( "," expression )* ;
```

- Since arguments _one or more_. `call` handles the zero case

# Multiple Calls

```javascript
const callback = (text) => {
  return function() {
    return function() {
      console.log(text)
    }
  }
}

callback("hi")()() // -- hi
```

- It calls the function, then immediately calls the function that the callback returns. Then does that again.
- In theory, you could have this go as deep as you want.

# Parser

```python
  def call(self) -> Expr:
    expr: Expr = self.primary()

    while True:
      if self.match(TokenType.LEFT_PAREN):
        expr = self.finish_call(expr)
      else:
        break
    
    return expr
```

- we call `finish_call()` to parse the call expression, using the previously parsed expression as the callee.

```python
def finish_call(self, callee: Expr) -> Expr:
  arguments: list[Expr] = []

  if not self.check(TokenType.RIGHT_PAREN):
    arguments.append(self.expression())
    while self.match(TokenType.COMMA):
      if len(arguments) >= 255:
        self.error(self.peek(), "Can't have more than 255 args.")
      arguments.append(self.expression())
    
  paren: TokenItem = self.consume(TokenType.RIGHT_PAREN, "Expect ')' after args.")
  return Expr.Call(callee, paren, arguments)
```

- We just add all the args to a list until we see a right parenthesis.
- Once we do, we simply return it as a `Expr.Call`

# Interpreter

```python
  def visit_call_expr(self, expr: Expr.Call):
    function = self.evaluate(expr.callee)

    arguments: list[object] = []
    for arg in expr.arguments:
      arguments.append(self.evaluate(arg))

    if not isinstance(function, LoxCallable):
      return self.error_callback('Can only call functions and classes.')
    if len(arguments) != function.arity():
      return self.error_callback(f'Expected {function.arity()} arguments but got {len(arguments)}.')
    
    return function.call(self, arguments)
```

- First we deal with `callee`, which is typically just an _identifier_ that looks up the function by its name.
- Then we evaluate each of the arguments.