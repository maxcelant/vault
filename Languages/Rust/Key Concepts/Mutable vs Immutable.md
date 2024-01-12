- `&mut T`: This is a mutable reference to `T`. When you have a mutable reference to a value, you can change the underlying value. However, Rust ensures that you can have only one mutable reference to a particular value in a certain scope, preventing data races.

- `&T`: This is an immutable reference to `T`. When you have an immutable reference, you can read the value, but you cannot change it. You can have multiple immutable references to a value in a certain scope, since they all promise not to change the underlying value.

Here's a quick example:

```rust
fn main() {
    let mut x = 10;
    
    modify(&mut x);  // Pass a mutable reference
    println!("x after modification: {}", x);  // x after modification: 20
    
    display(&x);     // Pass an immutable reference
}

// This function takes a mutable reference and can modify the underlying value.
fn modify(val: &mut i32) {
    *val *= 2;
}

// This function takes an immutable reference and cannot modify the underlying value.
fn display(val: &i32) {
    println!("Value: {}", val);  // Value: 20
}
```

The borrow checker in Rust ensures that references (whether mutable or immutable) adhere to these rules, making sure your code is memory-safe.