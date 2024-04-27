1. Use `createdb <db name>` to create your test database
2. Create a `test` file with `test_helper.py` and `__init__.py` in it
3. Add this code to `pytest.ini`
```ini
[pytest]
addopts =
    -p test.test_helper
    -v
    -s
asyncio_mode=auto
```

4. Add this code to `test_helper.py`
```python
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../.env.test"))
```

5. Use a fixture to make sure your table data doesn't pollute your tests!
```python
import pytest
from httpx import AsyncClient

from .main import app
from .database import SessionLocal, engine

@pytest.fixture(autouse=True)
async def clear_data():
    db = SessionLocal()
    try:
        db.execute("delete from users;")
        db.commit()
    finally:
        db.close()
```