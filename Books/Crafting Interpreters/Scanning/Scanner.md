```ad-tldr
Scans a character at a time, and figures out what kind of _token_ each _lexeme_ is. 
```

#### Token Types
- **Keywords** - Reserved works like `while` or `fun`.
- **Identifiers** - Variable names like `foo`.
- **Single Character Tokens** - Things like `;` or `(`
- **Two Character Tokens** - Things like `==` or `!=`

#### Token Item
- An object that represents a complete token
```python
token = {
  token_type: TokenType.NUMBER,
  lexeme: '1',
  literal: 1.0,
  line: 15
}
```

#### Scanner
