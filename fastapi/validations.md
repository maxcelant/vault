1. Here, we don't want certain fields to be blank `('registration', 'aircraft_type')`
```python
class AirplaneCreate(CamelModel):
    registration: str
    aircraft_type: str
    cabin_configuration: str
    delivered_month: int
    delivered_year: int

    @validator('registration', 'aircraft_type')
    def must_not_be_blank(cls, v):
        if len(v.strip()) == 0:
            raise ValueError('must not be blank')
        return v.strip()
```