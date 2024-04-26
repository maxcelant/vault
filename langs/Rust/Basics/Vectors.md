Vectors in Rust are dynamic arrays that can grow or shrink in size. They are implemented using the `Vec<T>` type provided by the Rust standard library. Below are steps and examples on how to declare and use vectors in Rust.

Also checkout [[Advanced Vector Methods]]

```rust
let mut v: Vec<i32> = Vec::new(); // using Vec::new()
let mut v = vec![1, 2, 3]; // using the vec! macro

v.len() // Length

v.capacity() // Total size

v.shrink_to_fit() // Make cap == length

v.push(4); // Adding elements to end

v.remove(2) // Removing at index 2

// Getting
match v.get(2) {
    Some(third) => println!("Third element: {}", third),
    None => println!("There is no third element."),
}

let third: &i32 = &v[2];

// Iterating (Immutable)
for i in &v {
    println!("{}", i);
}

// Iterating (Mutable)
for i in &mut v {
	*i += 50;
}

// Mutating
v[1] = v[1] + 5;

// VecDeque
use std::collections::VecDeque;

let mut dq = VecDeque::new();
dq.push_back(1);
let one = dq.pop_front().unwrap();
```

