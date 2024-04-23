---
tags:
  - "#control-flow"
  - "#functions"
---
- Functions that the interpreter exposes to user code but are implemented in the host language (Python) and not Lox.
- Here we create a clock function that implements [[LoxCallable]].

```python
class ClockFunction(LoxCallable):
    def arity(self):
        return 0

    def call(self, interpreter, arguments):
        return time.time()

    def __str__(self):
        return "<native fn>"
```

```python
class Interpreter(Expr.Visitor, Stmt.Visitor):

  def __init__(self, error_callback):
    self.error_callback = error_callback
    self._globals = Environment()
    self.environment = self._globals

    self._globals.define("clock", ClockFunction())
```