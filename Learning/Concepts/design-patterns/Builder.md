Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

---

Our `Car` is going to be made up of many parts. Each part may be difficult or long to add to it.

```python
from abc import ABC, abstractmethod


class Car:
    def __init__(self) -> None:
        self.parts = []

    def add(self, part) -> None:
        self.parts.append(part)

    def show(self) -> None:
        for part in self.parts:
            print(part)
```

Here we have our abstract _Builder_. We lay out all the steps that a builder should follow to add parts to the car. This includes a method that returns the finished product.

```python

class CarBuilder(ABC):
    @abstractmethod
    def build_engine(self) -> None:
        pass

    @abstractmethod
    def build_wheels(self) -> None:
        pass

    @abstractmethod
    def build_seats(self) -> None:
        pass

    @abstractmethod
    def get_result(self) -> Car:
        pass
```

Here we have the concrete implementation that goes through all the steps to create a `SportsCar`!

```python
class SportsCarBuilder(CarBuilder):

    def __init__(self):
        self.car: Car = Car()

    def build_engine(self) -> None:
        self.car.add('V8 engine')

    def build_wheels(self) -> None:
        self.car.add('18 inch wheels')

    def build_seats(self) -> None:
        self.car.add('Leather seats')

    def get_result(self) -> Car:
        return self.car
```

Most importantly, here we have the `Director` that will take a `builder` (which could build any type of car), and actually calls the methods to create it, usually called the `build` method. It then returns the finished product.

```python
class Director:

    def build(self, builder: CarBuilder) -> Car:
        builder.build_engine()
        builder.build_wheels()
        builder.build_seats()
        return builder.get_result()
```

Here we have the client that creates the sports car builder, then makes the director create a car using that builder.

```python
if __name__ == '__main__':
    builder: CarBuilder = SportsCarBuilder()
    director: Director = Director()
    car: Car = director.build(builder)
    car.show()
    # Output:
    # V8 engine
    # 18 inch wheels
    # Leather seats
```