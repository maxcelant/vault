1. Creating a new resource
```python
def create_flight(db: Session, flight: schemas.FlightCreate):
    db_flight = models.Flight(origin_city=flight.origin_city,
                              destination_city=flight.destination_city,
                              tail_number=flight.tail_number,
                              capacity=flight.capacity,
                              number_of_passengers=flight.number_of_passengers)
    
    db.add(db_flight)
    db.commit()
    db.refresh(db_flight)
    return db_flight
```

2. Getting all resources
```python
def get_all_flights(db: Session):
	return db.query(models.Flight).all()
```

3. Getting a single resource by id
```python
def get_flight_by_id(id: int, db: Session):
	return db.query(models.Flight).get(id)
```

4. Updating a resource by id
```python
def update_flight_by_id(id: int, flight: schemas.Flight, db: Session):
    db_flight = db.query(models.Flight).get(id)
    db_flight.origin_city = flight.origin_city
    db_flight.destination_city = flight.destination_city
    db_flight.tail_number = flight.tail_number
    db_flight.capacity = flight.capacity
    db_flight.number_of_passengers = flight.number_of_passengers

    db.add(db_flight)
    db.commit()
    
    return db_flight
```

5. Patching attributes of a resource
```python
def update_record_with_patch(id: int, car: Vehicle, db: Session):
    db_vehicle = db.query(models.Vehicle).get(id)

    for key, value in car.dict(exclude_unset=True).items():
        setattr(db_vehicle, key, value)

    db.add(db_vehicle)
    db.commit()
    return db_vehicle

```

7. Deleting a resource by id
```python
def delete_flight_by_id(id: int, db: Session):
    db.query(models.Flight).filter(models.Flight.id == id).delete()
    db.commit()
```