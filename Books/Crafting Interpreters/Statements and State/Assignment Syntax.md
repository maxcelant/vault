We're adding to the existing [[Precedence]] Grammar.

```js
expression → assignment ;

assignment → IDENTIFIER "=" assignment | equality ; // NEW!

equality → comparison ( ( "!=" | "==" ) comparison )* ;
...
```

