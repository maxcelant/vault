In Rust, the last expression in a function is used as its return value.

**Expressions** evaluate to a value and do not include a semicolon at the end.
**Statements** perform an action and do not return a value.

```rust
fn square(num: i32) -> i32 {
    num * num;
}
```

`num * num;` is a statement because of the semicolon at the end. This makes the function implicitly return the unit type `()`, which is the default when no value is explicitly returned.

```rust
fn square(num: i32) -> i32 {
    num * num
}
```

Now, `num * num` is an expression, and its value (the result of the multiplication) is returned from the function.