Modules can also contain submodules, and this can be represented in the file system. For instance:
```bash
src/
|-- main.rs
|-- my_module/
    |-- mod.rs
    |-- sub_module.rs
```

```rust
// my_module/mod.rs
pub mod sub_module;
```

```rust
// my_module/sub_module.rs
pub fn sub_module_function() {
    println!("Called `my_module::sub_module::sub_module_function()`");
}
```

```rust
// main.rs
mod my_module;

fn main() {
    my_module::sub_module::sub_module_function();
}
```

Note that if you want a folder or file to be a module. You need to _explicitly_ say it.