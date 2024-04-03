### Expressions:
Expressions evaluate to a value. They can be simple calculations, function calls that return a value, or any other code that results in a value.

1. `42` - A simple numeric value.
2. `"Hello, World!"` - A string literal is also an expression.
3. `3.14 * r * r` - Assuming `r` is defined, this expression calculates the area of a circle.
4. `[1, 2, 3, 4].pop()` - Calls the `pop` method, which is an expression that returns a value (the last item of the list).
5. `len("Python")` - The `len` function call is an expression that returns the length of the string `"Python"`.

### Statements:
Statements perform an action. They might include variable assignments, loops, conditionals, etc., and don’t necessarily have to produce a value.

1. `import sys` - An import statement that brings a module into the current namespace.
2. `x = 5` - An assignment statement that assigns the value `5` to the variable `x`.
3. `print("Hello, World!")` - A print statement that outputs a string to the console.
4. `for i in range(5): print(i)` - A loop statement that iterates and prints numbers 0 through 4.
5. `if x > 0: print("Positive")` - A conditional statement that checks if `x` is greater than 0 and then prints "Positive".

**Differences Recap**:
- Expressions are parts of code that calculate a value.
- Statements are entire lines of code that perform actions and don’t necessarily produce a value directly.
- While statements represent an action or command, expressions are involved in producing values. Statements might contain expressions, but not the other way around.