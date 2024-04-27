An [[enums]] defined by standard library. Encodes the common scenario where a value could be something or nothing (null). Rust doesn't have `null` and instead opts to handle it this way.

```rust
enum Option<T> {
  None,
  Some(T)
}
```

#### Why is it better?
- Safety, Explicitness, Compatibility with [[ownership system]].
- No null pointer exceptions.

#### Usage
Eliminating the risk of incorrectly assuming a not-null value helps you to be more confident in your code. In order to have a value that can possibly be null, you must explicitly opt in by making the type of that value `Option<T>`. Then, when you use that value, you are required to explicitly handle the case when the value is null.

```rust
fn find_number(numbers: &[i32], target: i32) -> Option<usize> {
    for (index, &number) in numbers.iter().enumerate() {
        if number == target {
            return Some(index);
        }
    }
    None
}

fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    match find_number(&numbers, 3) {
        Some(index) => println!("Found at index {}", index),
        None => println!("Not found"),
    }
}

```

