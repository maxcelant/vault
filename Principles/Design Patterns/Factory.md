Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

The "Factory" design pattern involves a `method` for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. Rather than calling a constructor directly to create an object, a factory method is used to create the object.

---

Firstly, we create the `interface` for the object we will create (that we want different versions of) and we also create the factory that includes the abstract function for creating a different version of the `Burger`.

```python
from abc import ABC, abstractmethod


class Burger(ABC):
    @abstractmethod
    def describe(self) -> None:
        pass


class BurgerFactory(ABC):
    def eatBurger(self) -> None:
        burger = self.createBurger()
        burger.describe()
        print("Munch. Munch. Munch🍔")

    @abstractmethod
    def createBurger(self) -> Burger:
        pass
```

Now we create the different implementations of both the `Burger` and the factory which will create that type of `Burger`!

```python
class VeganBurger(Burger):
    def describe(self) -> None:
        print("A yummy vegan burger🥬")


class CheeseBurger(Burger):
    def describe(self) -> None:
        print("A yummy cheese burger🧀")


class CheeseBurgerFactory(BurgerFactory):
    def createBurger(self) -> Burger:
        return CheeseBurger()


class VeganBurgerFactory(BurgerFactory):
    def createBurger(self) -> Burger:
        return VeganBurger()
```

Lastly, we create each type of Burger we want, seeing that they each follow that default `BurgerFactory` class instead of their concrete implementation.

```python 
if __name__ == '__main__':
    cheese_factory: BurgerFactory = CheeseBurgerFactory()
    cheese_factory.eatBurger()

    vegan_factory: BurgerFactory = VeganBurgerFactory()
    vegan_factory.eatBurger()

```