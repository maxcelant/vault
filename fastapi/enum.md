1. You should use this when you want the user to only have a few different options that they can use
```python
from enum import Enum
from fastapi import FastAPI

class ItemEnum(str, Enum):
    Foo = "foo"
    Bar = "bar"
    Baz = "baz"

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: ItemEnum):
    if item_id == ItemEnum.Foo:
        return {"item_id": "foo"}
    elif item_id == ItemEnum.Bar:
        return {"item_id": "bar"}
    elif item_id == ItemEnum.Baz:
        return {"item_id": "baz"}

```