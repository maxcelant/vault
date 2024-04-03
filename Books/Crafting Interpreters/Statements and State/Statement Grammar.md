We are adding new rules to our [[Precedence]] Grammar. Check out [[Expressions vs Statements]].

```c
program → statement* EOF ;

declaration → varDecl | statement ;

statement → exprStmt | printStmt ;

varDecl → "var" IDENTIFIER ( "=" expression )? ";" ;

exprStmt → expression ";" ;

printStmt → "print" expression ";" ;
```



