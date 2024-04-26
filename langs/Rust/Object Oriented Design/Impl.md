To define methods on structs (or even on enums and traits), you use the `impl` keyword followed by the name of the type. This is similar to the method section of a class in other languages. 

```rust
struct Dog {
	name: String,
	age: i32
}

impl Dog {
    // Constructor (associated function, not a method)
    fn new(name: String, age: i32) -> Self {
        Dog { name, age }
    }

    // Method (takes &self, &mut self, or self as the first parameter)
    fn bark(&self) {
        println!("Woof! My name is {}", self.name);
    }

    // Another method
    fn have_birthday(&mut self) {
        self.age += 1;
    }
}

fn main() {
  let dog = Dog::new("Pluto", 12);
}
```

Note the distinction between associated functions and methods:
- **Associated Functions**: Functions that don't take a `self` parameter. The `new` function above is an example. They are similar to static methods in other languages.
- **Methods**: Functions that take a `self`, `&self`, or `&mut self` parameter, indicating they operate on an instance of the struct.
