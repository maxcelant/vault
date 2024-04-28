How does a typescript class get converted to javascript? Part of the answer is [[immediately invoked function expression]].

Let's start with constructors

```ts
class Car {
  model: string;
  
  constructor(model) {
    this.model = model
  }
}

const car = new Car("BMW");
```

In JavaScript, we need to use a IIFE to return a function "constructor" that we can make equal to a variable of the same name. 

```ad-note
This "constructor" is actually an object. That is why we still need the `new` keyword when we instantiate it here. 
```

```js
var Car = (function() {
  function Car(model) {
    this.model
  }

  return Car;
})

var car = new Car("BMW");
```

Since the inner `Car` function is actually an object, we can add `prototypes` to it. This is equivalent to adding methods to a class.

```ts
class Car {
  model: string;
  
  constructor(model) {
    this.model = model
  }

  drive() {
    console.log('vroom');
  }
}

const car = new Car("BMW");
```

```js
var Car = (function() {
  function Car(model) {
    this.model;
  }

  Car.prototype.drive = function() {
    console.log('vroom');
  }

  return Car;
})

var car = new Car("BMW");
```