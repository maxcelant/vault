How we refer to an item in a module tree.
- **Absolute Path**: full path starting from a crate root. For an external crate, we start with that crates name. For the current crate, we start with `crate`.
- **Relative Path**: Starts from the current module and uses `self`, `super`, or an identifier in the current module.

```rust
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}
    }
}

pub fn eat_at_restaurant() {
    // Absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // Relative path
    front_of_house::hosting::add_to_waitlist();
}
```

