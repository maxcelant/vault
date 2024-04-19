- When the parser sees an assignment operation (like `a = "value";`), it doesn't know it's an assignment until it encounters the `=` sign. This is because, before seeing the `=`, it could be any kind of expression.
- **L-values and R-values:** The key point is understanding the difference between an expression that evaluates to a value (`r-value`) and something that identifies a location where a value can be stored (`l-value`).
	- **R-value:** An expression that produces a value. For example, in `5 + 3`, both `5` and `3` are r-values, and the expression itself evaluates to another r-value, `8`.
	- **L-value:** An expression that identifies a storage location. For example, in `a = 5`, `a` is an l-value because it represents a location where the value `5` can be stored.
- **Why It Matters:** The parser needs to treat l-values and r-values differently. For an assignment, the left-hand side must be an l-value because you're assigning a value to a location. However, the parser won't know it's dealing with an l-value until it encounters the assignment operator `=`. This makes parsing assignments more complex than other expressions.

---
# Assignment Code Block

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

This piece of code is part of a parser in a programming language interpreter, specifically designed to handle assignment expressions like `a = 5;`. Here's a simplified explanation:

1. **Start with an expression**: The method begins by evaluating an expression to the left of the assignment operator (`=`) using `equality()`. This could be a variable or any expression that boils down to a value.
2. **Check for assignment**: It checks if the next token is an assignment operator (`=`) using `match(EQUAL)`. If it's not, the method just returns the expression evaluated in step 1.
3. **Recursive assignment handling**: If there is an assignment operator, the method recursively calls `assignment()` again to evaluate the right-hand side of the assignment. This allows for handling of nested assignments like `a = b = 5;`.
4. **Handle variable assignments**: If the left-hand side of the assignment is a variable (`expr instanceof Expr.Variable`), it extracts the variable's name and constructs an `Expr.Assign` object. This object represents the assignment operation, holding both the variable's name and the value to be assigned to it.
5. **Error handling**: If the left-hand side is not a variable (for example, an attempt to assign a value to a number or a direct value like `5 = a;`), it triggers an error reporting method with a message saying "Invalid assignment target."
