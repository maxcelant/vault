#### Overview
- `Model` - used to serialize python object into a SQL record
- `Scheme` - used to turn a JSON object into a python class
- Usually when creating a new object into a table you have to
	1. Create an object (`schema`) from that JSON input.
	2. Turn that `schema` into a `model` object to be put into the SQL table

1. Creating the Schema (this is used for Python to interpret to a SQL record from a JSON object)
```python
from fastapi_camelcase import CamelModel

class AirplaneCreate(CamelModel):
	registration: str
	aircraft_type: str
	cabin_configuration: str
	delivered_month: int
	delivered_year: int


class Airplane(AirplaneCreate):
	id: int

class Config:
	orm_mode = True
```

2. The Model is used to represent how the resource exists in the database
```python
from sqlalchemy import Column, Integer, String
from .database import Base

class Airplane(Base):
	__tablename__ = "airplanes"
	
	id = Column(Integer, primary_key=True, index=True)
	registration = Column(String)
	aircraft_type = Column(String)
	cabin_configuration = Column(String)
	delivered_month = Column(Integer)
	delivered_year = Column(Integer)
```

3. CRUD is a functional layer that interacts with the database and models. It turns the schema into the model, then inserts the model into the database
```python
from sqlalchemy.orm import Session
from . import models, schemas

def create_airplane(db: Session, airplane: schemas.AirplaneCreate):
    db_airplane = models.Airplane(registration=airplane.registration,
                                  aircraft_type=airplane.aircraft_type,
	                        cabin_configuration=airplane.cabin_configuration,
                                  delivered_month=airplane.delivered_month,
                                  delivered_year=airplane.delivered_year)
    db.add(db_airplane)
    db.commit()
    db.refresh(db_airplane)
    return db_airplane

```

4. The main part of the app contains the routes
```python
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/airplanes/", response_model=schemas.Airplane, status_code=201)
def create_airplane(airplane: schemas.AirplaneCreate, db: Session = Depends(get_db)):
    db_airplane = crud.create_airplane(db=db, airplane=airplane)
    return db_airplane

```

5. Response Model tells FastAPI how to serialize the response. If we don't it'll just think the response is a string.
```python
class Computer(CamelModel):
	os: str
	ram: str
	used: bool

class ComputerSummary(CamelModel):
	used: int
	windows: int
	total_ram: int

@app.post('/computers', response_model=ComputerSummary)
def group_computers(computer: list[Computer])

	...

	return {
		"used": num_of_used,
		"windows": num_of_windows,
		"total_ram": total_ram
	}
```

6. When interacting with the database (aka CRUD), use the `model` since this is what the database knows
```python
def get_airplane_by_id(id: int, db: Session):
    return db.query(models.Airplane).get(id)
```

7. FastAPI and Pydantic automatically turn a `model` into a `schema` when using the `response_type`
```python
@app.get('/flights/{id}', response_model=schemas.Flight, status_code=200)
def get_flight_by_id(id: int, db: Session = Depends(get_db)):
    return crud.get_flight_by_id(id=id, db=db)
```
