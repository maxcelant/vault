All functions defined within an `impl` block are called _associated functions_ because they’re associated with the type named after the `impl`. We can define associated functions that don’t have `self` as their first parameter (and thus are not methods) because they don’t need an instance of the type to work with. We’ve already used one function like this: the `String::from` function that’s defined on the `String` type.

Associated functions that aren’t methods are often used for constructors that will return a new instance of the struct. These are often called `new`, but `new` isn’t a special name and isn’t built into the language. For example, we could choose to provide an associated function named `square` that would have one dimension parameter and use that as both width and height, thus making it easier to create a square `Rectangle` rather than having to specify the same value twice:

```rust
struct Square {
    x: i32,
    y: i32,
}

impl Square {
    fn new(x: i32, y: i32) -> Self {
        Self { x: x, y: y }
    }

    fn display(&self) {
        println!("x: {}, y: {}", self.x, self.y);
    }
}

fn main() {
    let square = Square::new(5, 6);
    square.display();
}
```

