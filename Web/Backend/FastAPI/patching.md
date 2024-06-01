
1. You need to make another class for patching in the `schemas`
```python
class ClassicCarPatch(CamelModel):
    make: str | None
    model: str | None
    year: int | None
```

2. This is how patching would work
```python
def update_record_with_patch(id: int, car: Vehicle, db: Session):
    db_vehicle = db.query(models.Vehicle).get(id)

    for key, value in car.dict(exclude_unset=True).items():
        setattr(db_vehicle, key, value)

    db.add(db_vehicle)
    db.commit()
    return db_vehicle

```

3. `exclude_unset` keeps track of if an attribute was set in a resource or not.
```python
car_1 = Vehicle(make="Ford", model="Explorer", year=None)
print(f"{car_1.dict(exclude_unset=True)=}")
# car_1.dict(exclude_unset=True)={'make': 'Ford', 'model': 'Explorer', 'year': None}

car_2 = Vehicle(make="Ford", model="Explorer")
print(f"{car_2.dict(exclude_unset=True)=}")
# car_2.dict(exclude_unset=True)={'make': 'Ford', 'model': 'Explorer'}

```

4. `setattr` is a more elegant way of setting values in a dict
```python
    for key, value in car.dict(exclude_unset=True).items():
        setattr(db_vehicle, key, value)
```
