1. `services` are the `cruds`. 
```sql
app/
    main.py
    api/
        __init__.py
        routes/
            __init__.py
            user_routes.py
    models/
        __init__.py
        user.py
    schemas/
        __init__.py
        user_schemas.py
    services/
        __init__.py
        user_service.py
```

- `api/routes/`: This is where your route handlers (functions decorated with `@app.route()`) live. Each file in this directory corresponds to a different route.
- `models/`: This is where your SQLAlchemy models live. Each file defines a different model.
- `schemas/`: This is where your Pydantic schemas live. Each file defines different schemas for a specific model.
- `services/`: This is where your business logic lives. Each file in this directory corresponds to a different model and includes functions to interact with the database.

##### `user_routes.py`
```python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas import user_schemas
from app.services import user_service
from app.database import get_db

router = APIRouter()
api
@router.post('/', response_model=user_schemas.User, status_code=201)
def create_user(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    return user_service.create_user(db=db, user=user)

@router.post('/{id}', response_model=user_schemas.User, status_code=201)
def some_route_name(id: int, db: Session = Depends(get_db)):
    # your code here
```

##### `user_services.py`
```python
from sqlalchemy.orm import Session
from app.schemas import user_schemas
from app.models import user

def create_user(db: Session, user: user_schemas.UserCreate):
    db_user = user.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
```

##### In `main.py`, include all routes
```python
from fastapi import FastAPI
from app.api.routes import user_routes

app = FastAPI()

app.include_router(user_routes.router, prefix="/users", tags=["users"])
```