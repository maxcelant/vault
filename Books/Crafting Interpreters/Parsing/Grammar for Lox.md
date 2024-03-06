Here is our basic grammar for Lox, we will expand on it later:

```js
expression → literal | unary | binary | grouping ;

literal → NUMBER | STRING | "true" | "false" | "nil" ;

grouping → "(" expression ")" ;

unary → ( "-" | "!" ) expression ;

binary → expression operator expression ;

operator → "==" | "!=" | "<" | "<=" | ">" |
		   ">=" |"+" |"-" | "*" | "/";
```

`CAPITALIZED` terminals represent number or string literals.

#### Example
```js
1. expression → literal | unary | binary | grouping
2. binary
3. expression operator expression
4. literal operator grouping
5. NUMBER operator grouping
6. 3.0 "==" grouping
7. 3.0 "==" "(" expression ")"
8. 3.0 "==" "(" unary ")"
9. 3.0 "==" "(" "-" expression ")"
10. 3.0 "==" "(" "-" NUMBER ")"
11. 3.0 "==" "(" "-" 5.0 ")"

3.0 == ( -5.0 )
```

#### Implementing Syntax Trees
