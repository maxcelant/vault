```rust
fn foo(x: &mut i32) {
    *x = 10;
}

fn main() {
    let mut x = 5;
    foo(&mut x);
    println!("{}", x); // 15!
}
```

`foo` modifies `x` through a mutable reference. The ownership of `x` remains with `main`. The modifications are made directly to `x` in `main`!

For more basic types, we can normally just [[Pass By Value]], but for more advanced types like [[Passing Objects|Objects]], it may be best to pass by reference. Because it's more efficient in terms of memory and performance.