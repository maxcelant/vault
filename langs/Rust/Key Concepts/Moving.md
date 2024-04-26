In Rust, when an argument is passed to a function and it's not explicitly returned, you can't use the original variable anymore.
We call this "moving" a variable.

We should use `clone()` if we want to make a copy of it.

```rust
#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0); //vec0 is moved to vec1

    assert_eq!(vec0, vec![22, 44, 66]); // so we cant access it 
    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec; // vec0 is being set to something else here

    vec.push(88);

    vec
}
```