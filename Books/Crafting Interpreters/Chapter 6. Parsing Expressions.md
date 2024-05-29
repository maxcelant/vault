### Precedence

Right now the precedence from lowest to highest is:

>![[Pasted image 20240322204442.png]]

We need to define a different rule for each precedence, otherwise there will be no order of computation in our parse tree!

**Completed Expression Grammar**
```python
expression → equality ;

equality → comparison ( ( "!=" | "==" ) comparison )* ;

comparison → term ( ( ">" | ">=" | "<" | "<=" ) term )* ;

term → factor ( ( "-" | "+" ) factor )* ;

factor → unary ( ( "/" | "*" ) unary )* ;

unary → ( "!" | "-" ) unary | primary ;

primary → NUMBER | STRING | "true" | "false" | "nil"
| "(" expression ")" ;
```

```ad-note
In this about notation, `primary` has the highest precedence meaning that numbers, strings, booleans and parenthesized expressions are evaluted before anything else.
```

An important note is that each rule needs to match expressions at that precedence level _or higher_, so we need to let this match a primary expression.

```python
unary → ( "!" | "-" ) unary | primary ;
```


```ad-example
**RULE:** `factor → unary ( ( "/" | "*" ) unary )* ;`
1. `unary / unary * unary`
2. `-primary / primary * primary`
3. `-5 / 3 * 10`
```

### Recursive Descent

One of my parsing techniques. Considered a "top-down parser" because it starts from the outermost grammar (`expression`) and goes down to the nested subexpressions.

```ad-tldr
The descent is described as “recursive” because when a grammar rule refers to itself -- directly or indirectly--that translates to a recursive function call.
```

**Rule Translation**

| Grammar     | Code                              |
| ----------- | --------------------------------- |
| Terminal    | Code to match and consume a token |
| Nonterminal | Call to that rule's function      |
| "\|"        | `if` or `switch` statement        |
| * or +      | `while` or `for` loop             |
| "?"         | `if` statement                    |

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


### Parser Class

```python
class Parser:
  def __init__(self, tokens: list[TokenItem]):
    self.tokens  = tokens
    self.current = 0

  def match(self, *types: TokenType) -> bool:
    for t in types:
      if self.check(t):
        self.advance()
        return True
    return False
  
  def check(self, token_type: TokenType) -> bool:
    if self.is_at_end():
      return False
    return self.peek().token_type == token_type

  def advance(self) -> TokenItem:
    if not self.is_at_end():
      self.current += 1
    return self.previous()
  
  def is_at_end(self) -> bool:
    return self.peek().token_type == TokenType.EOF
  
  def peek(self) -> TokenItem:
    return self.tokens[self.current]
  
  def previous(self) -> TokenItem:
    return self.tokens[self.current - 1]
```

- `match`: looks through types and sees if the current token (we haven't consumed yet) is of that type. If so, it consumes it and returns true.
- `check`: sees if `token_type` of the token is equal to the given parameter `token_type`
- `advance`: Moves the `current` pointer up 1 and returns the previous token.
- `is_at_end`: checks to see if we've reached the last token in the list.
- `peek`: Looks at current token _we have yet to consume_.
- `previous`: Looks at the previous token (most recently consumed).

#### Synchronizing and Panic Mode

When the parser finds something that doesn't make sense, it enters "panic mode" to handle the mistake.

In _our_ case, we know we reach the end of statement because we reach a semicolon. Which gives us a great indicator for synchronization.

1. **Find Synchronization Point:** The parser looks for a specific point in the code that it understands (a "synchronization point"), which is usually a place where a new statement or a clear structure begins.
2. **Jump to Synchronization Point:** It then skips or ignores parts of the code until it reaches this point. This way, it aligns itself with a part of the code that makes sense again.
3. **Resume Parsing:** With the parser and the code aligned at a recognizable point, parsing can continue, hopefully without being thrown off by the initial error.

```python
  def synchronize(self) -> None:
    self.advance()

    while not self.is_at_end():
      if self.previous().token_type == TokenType.SEMICOLON:
        return

      if self.peek().token_type in {
        TokenType.CLASS,
        TokenType.FUN,
        TokenType.VAR,
        TokenType.FOR,
        TokenType.IF,
        TokenType.WHILE,
        TokenType.PRINT,
        TokenType.RETURN,
      }:
        return
      
      self.advance()
```
