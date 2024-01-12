- A way to organize code in Rust within a crate (library or binary). Not necessarily just folders
- They can be sections within a file or entire files. 
- They help you organize related functionality and control the scope and privacy of your code.

```bash
src/
|-- main.rs
|-- my_module.rs
```

```rust
// main.rs
mod my_module;

fn main() {
    my_module::public_function();
}
```

By saying `mod my_module` in `main.rs`, we are telling rust that `my_module.rs` is a module. There are other ways to establish this.

