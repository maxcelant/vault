### Expressions vs Statements
##### Expressions:
Expressions evaluate to a value. They can be simple calculations, function calls that return a value, or any other code that results in a value.

1. `42` - A simple numeric value.
2. `"Hello, World!"` - A string literal is also an expression.
3. `3.14 * r * r` - Assuming `r` is defined, this expression calculates the area of a circle.
4. `[1, 2, 3, 4].pop()` - Calls the `pop` method, which is an expression that returns a value (the last item of the list).
5. `len("Python")` - The `len` function call is an expression that returns the length of the string `"Python"`.

##### Statements:
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

---
### Statement Grammar

```c
program → statement* EOF ;

declaration → varDecl | statement ;

statement → exprStmt | printStmt ;

varDecl → "var" IDENTIFIER ( "=" expression )? ";" ;

exprStmt → expression ";" ;

printStmt → "print" expression ";" ;
```

---
### Stmt Class

The `Stmt` class kind of acts as a wrapper for the `Expr` class. Since [[Statement Grammar]] are _actions_, they wrap over the expression.

```ad-tip
We _execute_ as a "statement".
We _evaluate_ a "expression".
```

```python
class Stmt(ABC):

  @abstractmethod
  def accept(self, visitor: Stmt.Visitor):
    pass


  class Visitor(ABC):
    @abstractmethod
    def visit_print_stmt(self, expr: Stmt.Expr):
      pass


    @abstractmethod
    def visit_expression_stmt(self, expr: Stmt.Expr):
      pass


  class Expression:
    def __init__(self, expression: Expr):
      self.expression = expression


    def accept(self, visitor: Stmt.Visitor):
      visitor.visit_expression_stmt(self)


  class Print:
    def __init__(self, expression: Expr):
      self.expression = expression


    def accept(self, visitor: Stmt.Visitor):
      visitor.visit_print_stmt(self)

```

The `Stmt` class also has its own Visitor where it can handle those specific calls like printing or just performing a normal expression. More will be added later.

---
### l-values and r-values
- When the parser sees an assignment operation (like `a = "value";`), it doesn't know it's an assignment until it encounters the = sign. This is because, before seeing the =, it could be any kind of expression.
- **L-values and R-values:** The key point is understanding the difference between an expression that evaluates to a value (`r-value`) and something that identifies a location where a value can be stored (`l-value`).
	- **R-value:** An expression that produces a value. For example, in `5 + 3`, both `5` and `3` are r-values, and the expression itself evaluates to another r-value, `8`.
	- **L-value:** An expression that identifies a storage location. For example, in `a = 5`, `a` is an l-value because it represents a location where the value `5` can be stored.
- **Why It Matters:** The parser needs to treat l-values and r-values differently. For an assignment, the left-hand side must be an l-value because you're assigning a value to a location. However, the parser won't know it's dealing with an l-value until it encounters the assignment operator =. This makes parsing assignments more complex than other expressions.

---
### Assignment Grammar

```js
expression → assignment ;

assignment → IDENTIFIER "=" assignment | equality ; // NEW!

equality → comparison ( ( "!=" | "==" ) comparison )* ;
```
##### Assignment Code Block

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

1. **Start with an expression**: The method begins by evaluating an expression to the left of the assignment operator (=) using `equality()`. This could be a variable or any expression that boils down to a value.
2. **Check for assignment**: It checks if the next token is an assignment operator (=) using `match(EQUAL)`. If it's not, the method just returns the expression evaluated in step 1.
3. **Recursive assignment handling**: If there is an assignment operator, the method recursively calls `assignment()` again to evaluate the right-hand side of the assignment. This allows for handling of nested assignments like `a = b = 5;`.
4. **Handle variable assignments**: If the left-hand side of the assignment is a variable (`expr instanceof Expr.Variable`), it extracts the variable's name and constructs an `Expr.Assign` object. This object represents the assignment operation, holding both the variable's name and the value to be assigned to it.
5. **Error handling**: If the left-hand side is not a variable (for example, an attempt to assign a value to a number or a direct value like `5 = a;`), it triggers an error reporting method with a message saying "Invalid assignment target."

---
### Block Scope

- **Lexical scope (or static scope)** is a style of scope where the program shows where the scope starts and ends.
- In Lox, curly-braces control scope. 

##### Simple implementation of Block Scope

1. As we visit statements in a block, keep track of variables declared.
2. When the last statement is executed, tell the environment to delete all those variables.

##### Environment Chaining
- We define a fresh environment for each block containing only variables defined in that scope.
- We need to chain environments together. Because inner scopes should still have reference to variables in outer scopes.
- Start with innermost scope and go out until we find the variable. 

> ![[Pasted image 20240407212405.png]]

##### Environment Class Update

- Each environment will have a reference to the scope that wraps it. So checking the `enclosing` is like going up!

```python
class Environment:
  def __init__(self, enclosing: Environment | None = None):
    self.values = {}
    self.enclosing = enclosing            # Nested environment

  def get(self, name: TokenItem):
    if name.lexeme in self.values:
      return self.values[name.lexeme]
    if self.enclosing:
      return self.enclosing.get(name)     # Check nested environment
    
    raise RuntimeException(name, f"...")
```

##### Block Syntax and Semantics

We are going to add to the [[Statement Grammar]].

```c
declaration → varDecl | statement ;

statement → exprStmt | printStmt | block ;

block → "{" declaration* "}"
```


##### Parser Code

```python
def statement(self) -> Stmt:
  if self.match(TokenType.IF):
    return self.if_statement()
  if self.match(TokenType.PRINT):
    return self.print_statement()
  if self.match(TokenType.LEFT_BRACE):
    return Stmt.Block(self.block()) # <---
  return self.expression_statement()

...

def block(self) -> list[Stmt]:
  statements: list[Stmt] = []

   while not self.check(TokenType.RIGHT_BRACE) and \
     not self.is_at_end():
      statements.append(self.declaration())

  self.consume(TokenType.RIGHT_BRACE, "Expect '}' after block.")
  return statements
```

If we see a left bracket, start funneling all the statements into a list of statements until we see a closing right bracket.

##### Interpreter Code

```python
  def execute_block(self, statements, environment):
    previous = self.environment
    try:
      self.environment = environment
      for stmt in statements:
        self.execute(stmt)
    finally:
      self.environment = previous
```

When executing a block of code, the environment represents the _current_ one. Then it resets once the block is done, getting rid of those variables.

We just loop through those statements that we created in the parser and execute them.