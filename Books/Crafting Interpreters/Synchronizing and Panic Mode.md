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
