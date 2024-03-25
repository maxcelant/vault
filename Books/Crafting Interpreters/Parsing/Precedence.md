´Right now the precedence from lowest to highest is:

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