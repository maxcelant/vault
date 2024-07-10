Steps for the lexer:
- Establish your tokens: keywords, identifiers, etc.
- Your lexer should step through your string one char at a time and "tokenize" it.
- Keep track of your current position, call it `cur`, and the one after to do peek aheads, call it `next`.
- When it runs into an established single character token, simply return the established token version.

```go
type TokenType string

struct Token {
  Type TokenType
  Literal string 
}
```

