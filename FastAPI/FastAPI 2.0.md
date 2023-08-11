1. Creating models from existing models
```python
from pydantic import BaseModel, create_model


class FooModel(BaseModel):
    foo: str
    bar: int = 123


BarModel = create_model(
    'BarModel',
    apple=(str, 'russet'),
    banana=(str, 'yellow'),
    __base__=FooModel,
)
print(BarModel)
#> <class 'pydantic.main.BarModel'>
print(BarModel.model_fields.keys())
#> dict_keys(['foo', 'bar', 'apple', 'banana'])
```

2. You can also add validators to the new class, might be useful
```python
from pydantic import ValidationError, create_model, field_validator


def username_alphanumeric(cls, v):
    assert v.isalnum(), 'must be alphanumeric'
    return v


validators = {
    'username_validator': field_validator('username')(username_alphanumeric)
}

UserModel = create_model(
    'UserModel', username=(str, ...), __validators__=validators
)

user = UserModel(username='scolvin')
print(user)
#> username='scolvin'

try:
    UserModel(username='scolvi%n')
except ValidationError as e:
    print(e)
    """
    1 validation error for UserModel
    username
      Assertion failed, must be alphanumeric [type=assertion_error, input_value='scolvi%n', input_type=str]
    """
```

3. You can use `Annotated` validators to run functions on data to make sure they pass before assigning them
```python
from typing import Annotated

from pydantic import BaseModel, ValidationError, field_validator
from pydantic.functional_validators import AfterValidator


def check_squares(v: int) -> int:
    assert v**0.5 % 1 == 0, f'{v} is not a square number'
    return v


def check_cubes(v: int) -> int:
    # 64 ** (1 / 3) == 3.9999999999999996 (!)
    # this is not a good way of checking cubes
    assert v ** (1 / 3) % 1 == 0, f'{v} is not a cubed number'
    return v


SquaredNumber = Annotated[int, AfterValidator(check_squares)]
CubedNumberNumber = Annotated[int, AfterValidator(check_cubes)]


class DemoModel(BaseModel):
    square_numbers: list[SquaredNumber] = []
    cube_numbers: list[CubedNumberNumber] = []
```