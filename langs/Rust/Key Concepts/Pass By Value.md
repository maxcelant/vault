```rust
fn foo(mut x: i32) -> i32 {
  x += 10;
}

fn main() {
  let x: i32 = 5;
  x = foo(x);
  println!("{}", x) // 15!
}
```

`foo` takes ownership of `x`, so we will lose the variable unless we return it to `main`!



