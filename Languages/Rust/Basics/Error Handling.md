Rust doesn't have exceptions, it has a `Result` type that can either return `Err` or `Ok`.

```rust
fn divide(a: f64, b: f64) -> Result<f64, &'static str> {
    if b == 0.0 {
        Err("Cannot divide by zero")
    } else {
        Ok(a / b)
    }
}
```

