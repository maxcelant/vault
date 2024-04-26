1. Pydantic models are used to validate incoming data and serialize outgoing data. The actual creation and management of the IDs is typically handled by your database and ORM (like SQLAlchemy in your case).
2. You can also validate data like this:
```python
from pydantic import BaseModel, Field

class Item(BaseModel):
    name: str
    description: str = Field(None, max_length=300)
    price: float = Field(..., gt=0)
    tax: float = None
```
3. 