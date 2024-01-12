Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

- For instance, `Antique`, `Modern`, `Artsy` furniture all stem from being furniture.

---

First we create the `interfaces` for the factory and the objects the factory will create.

```python
from abc import ABC, abstractmethod

class Car(ABC):
    @abstractmethod
    def drift(self) -> None:
        pass


class Bus(ABC):
    @abstractmethod
    def drive(self) -> None:
        pass


class AbstractCarFactory(ABC):
    @abstractmethod
    def car(self) -> Car:
        pass

    @abstractmethod
    def bus(self) -> Bus:
        pass
```

Next we actually create the concrete implementations of those interfaces. Here we just do `Sports` but we could as many implementations as we want, like: `OldSchool` or `Rusty`.

```python
class SportsCar(Car):
    def drift(self) -> None:
        print("Drifting the sports car")


class SportsBus(Bus):
    def drive(self) -> None:
        print("Driving the sports bus")


class SportsCarFactory(AbstractCarFactory):
    def car(self) -> Car:
        return SportsCar()

    def bus(self) -> Bus:
        return SportsBus()
```

Finally, we actually create the objects based off of the factory we chose.

```python
if __name__ == '__main__':
    factory: AbstractCarFactory = SportsCarFactory()

    car: Car = factory.car()
    bus: Bus = factory.bus()

    car.drift()
    bus.drive()
```