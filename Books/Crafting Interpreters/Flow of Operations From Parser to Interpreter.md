The interpreter takes the parsing tree created by the parser and "interprets" it by doing a **post-order traversal** of the nodes in the parsing tree.

Since its a post-order traversal, that means _each node evaluates its children before doing its own work._

>![[Pasted image 20240330115906.png]]

---
**Example**

An expression like so:
```
8 / 2 + (12 * 3)
```

Is then parsed into this:
```javascript
Expr.Binary(
    left=Expr.Binary(
	    left=Expr.Literal(8), 
	    right=Expr.Literal(2), 
	    operator=TokenType.SLASH // '/'
	),
    right=Expr.Grouping(
        expression=Expr.Binary(
	        left=Expr.Literal(12), 
	        right=Expr.Literal(3), 
	        operator=TokenType.STAR // '*'
	    )
    ),
    operator=TokenType.PLUS
)
```

1. The parser returns this as a variable `expression`.
2. We pass that into our interpreter through the `interpreter.interpret(expression)`.
3. `interpret()` will call `self.evaluate(expression)`.
4. Since the highest element is a `Expr.Binary`, we call `expr.accept()` which then in turn calls `visit_binary()` (look at [[Visitor Pattern]] to learn more).
5. Inside `visit_binary()`, We immediately recursively call `evaluate(expr.right)` on the right sub-expression.
6. Since the right sub-expression is a `Expr.Grouping`, then we will move to the `visit_grouping()`.

```diff
Expr.Binary(
	...
+	right=Expr.Grouping(
        expression=Expr.Binary(
	        left=Expr.Literal(12), 
	        right=Expr.Literal(3), 
	        operator=TokenType.STAR // '*'
	    )
+   )
```

1. This in turn just calls `evaluate()` on the expression within the grouping.
2. That brings us back to `visit_binary()` because the expression within was a `Expr.Binary` 
3. Now we call `self.evaluate(expr.right)` which is the `Expr.Literal(12)`.
4. We move to the `visit_literal()` which simply returns the value within, which is **3**.
5. We do the same thing with `expr.left`, which returns **12**.
6. Now we recursively move back up to the `visit_binary` method after finding the values of the left and right. Now its time to figure out what operation to perform on them.

```python
  def visit_binary(self, expr: Expr.Binary):
    right: object = self.evaluate(expr.right) # 3
    left: object = self.evaluate(expr.left) # 12

	...

    if expr.operator.token_type == TokenType.STAR:
      self.check_number_operands(expr.operator, left, right)
      return float(left) * float(right)
```

- Before we do the calculation, we call `check_number_operands`. This is just to verify that they are both numbers (floats).
- Since the `TokenType` is `STAR` that means we multiply **12 x 3** and return the result.
- Now we make our way back up to the upper level `visit_binary` and find the result for the left side

```js
Expr.Binary(
    left=Expr.Binary(            // Time for this one! 
	    left=Expr.Literal(8), 
	    right=Expr.Literal(2), 
	    operator=TokenType.SLASH
	)
    right=36,                    // Just calculated this!
    operator=TokenType.PLUS
)
```

- Since it's a `Expr.Binary` we immediately recursively call `visit_binary` to find the `left` and `right` sub-expressions
- In this case, we can easily see that they will return **8** for left and **2** for right.
- Now we perform the correct calculation in the `visit_binary` method depending on the operator, in this case its `SLASH` or division.

```python
  def visit_binary(self, expr: Expr.Binary):
    right: object = self.evaluate(expr.right) # 3
    left: object = self.evaluate(expr.left) # 12

	...

    if expr.operator.token_type == TokenType.SLASH:
      self.check_number_operands(expr.operator, left, right)
      return float(left) / float(right)
```

- So we return **12 / 3**, so **4**. 
- No we recursively return to the original `visit_binary`, with our newly computed `left` and `right` values.

```js
Expr.Binary(
    left=4
    right=36,                    // Just calculated this!
    operator=TokenType.PLUS
)
```

- All thats left is to compute the operation based on the `TokenType` which is `PLUS` (+).
- Since we are adding two numbers instead of two string, we perform the first `if` statement.

```python
```python
def visit_binary(self, expr: Expr.Binary):
    right: object = self.evaluate(expr.right) # 36
    left: object = self.evaluate(expr.left) # 4

	...

    if expr.operator.token_type == TokenType.PLUS:
      if isinstance(left, float) and isinstance(right, float):
        return float(left) + float(right)
      if isinstance(left, str) and isinstance(right, str):
        return str(left) + str(right)
      raise RuntimeException(expr.operator, "...")

```

- So finally, we return `4 + 36` which is `40`!