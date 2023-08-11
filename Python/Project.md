Modules are stateful

##### Data Classes
```python
from dataclasses import dataclass

@dataclass
class User:
	name: str
	age: int

@dataclass
class Post:
	user: User
	text: str
```

#### Imports
```python
from user import User, some_func as foo
```
Is the same as...
```python
import user
User = user.User
foo = user.some_func
```

Primitive values will be copied but there will be no reference to those values in the other modules. So be careful about changing those values! (look at `age_limit`)

![[Pasted image 20230622142650.png]]



