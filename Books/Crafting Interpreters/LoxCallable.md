---
tags:
  - functions
  - control-flow
---
- Interface implemented by functions in Lox.

```python

from abc import ABC, abstractmethod
from pylox.interpreter.interpreter import Interpreter

class LoxCallable(ABC):
  @abstractmethod
  def arity() -> int:
    pass

  @abstractmethod
  def call(interpreter: Interpreter, arguments: list[object]) -> object:
    pass
```