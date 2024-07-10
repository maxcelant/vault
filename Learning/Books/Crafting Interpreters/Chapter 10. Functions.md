- In call syntax, the **"callee"** just needs to result to a callable function, it doesn't necessarily need to be a name like `average` in `average(1,2)`. It's more flexible. 
- The **"call syntax"** is the parenthesis `()` that follows the callee.

```js
getCallback()()
```

- In the example `getCallback` would be the callee for the first pair of parenthesis.
- `getCallback()` would be the callee for the second pair of parenthesis.

```go
expression     → assignment ;
assignment     → IDENTIFIER "=" assignment | logic_or ;
logic_or       → logic_and ( "or" logic_and )* ;
logic_and      → equality ( "and" equality )* ;
equality       → comparison ( ( "!=" | "==" ) comparison )* ;
comparison     → term ( ( ">" | ">=" | "<" | "<=" ) term )* ;
term           → factor ( ( "-" | "+" ) factor )* ;
factor         → unary ( ( "/" | "*" ) unary )* ;
unary          → ( "!" | "-" ) unary | call ;

call           → primary ( "(" arguments? ")" )* ; // ⭐️ NEW!
primary        → NUMBER | STRING | "true" | "false" | "nil" | IDENTIFIER | "(" expression ")" ;
arguments      → expression ( "," expression )* ; // ⭐️ NEW!
```

- notice how `primary` is all it needs to be, making the "callee" quite flexible