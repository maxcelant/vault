`super` allows you to create paths that start in the parent module. It's like start with the `..`  syntax with a file system.

```rust
fn deliver_order() {}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::deliver_order();
    }

    fn cook_order() {}
}
```

