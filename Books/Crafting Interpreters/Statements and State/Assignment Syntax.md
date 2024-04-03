We're adding to the existing [[Precedence]] Grammar.

```js
expression → assignment ;

assignment → IDENTIFIER "=" assignment | equality ; // NEW!

equality → comparison ( ( "!=" | "==" ) comparison )* ;
...
```


#### `l-values` and `r-values`
- When the parser sees an assignment operation (like `a = "value";`), it doesn't know it's an assignment until it encounters the `=` sign. This is because, before seeing the `=`, it could be any kind of expression.
- **L-values and R-values:** The key point is understanding the difference between an expression that evaluates to a value (`r-value`) and something that identifies a location where a value can be stored (`l-value`).
	- **R-value:** An expression that produces a value. For example, in `5 + 3`, both `5` and `3` are r-values, and the expression itself evaluates to another r-value, `8`.
	- **L-value:** An expression that identifies a storage location. For example, in `a = 5`, `a` is an l-value because it represents a location where the value `5` can be stored.
- **Why It Matters:** The parser needs to treat l-values and r-values differently. For an assignment, the left-hand side must be an l-value because you're assigning a value to a location. However, the parser won't know it's dealing with an l-value until it encounters the assignment operator `=`. This makes parsing assignments more complex than other expressions.

```java
private Expr assignment() {
    Expr expr = equality();
    if (match(EQUAL)) {
      Token equals = previous();
      Expr value = assignment();
      if (expr instanceof Expr.Variable) {
         Token name = ((Expr.Variable)expr).name;
         return new Expr.Assign(name, value);
}
      error(equals, "Invalid assignment target.");
    }
    return expr;
  }
```