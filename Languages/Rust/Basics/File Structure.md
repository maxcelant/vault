The file structure of a Rust application (or library) is conventionally organized, especially when you use `cargo` to manage your project. Understanding this structure will help you navigate and organize your code efficiently.

### Typical File Structure:

When you create a new project using `cargo new`, you'll get a structure like this:

```
my_project/
├── Cargo.toml
└── src/
    └── main.rs
```

For a library, instead of `main.rs`, you'll get `lib.rs`.

Here's what each component represents:

- **`Cargo.toml`**: This is the manifest file for `cargo`. It contains metadata about the project, its dependencies, and other configurations.
- **`src/`**: This directory contains your Rust source files.
- **`main.rs`**: This is the entry point for binary projects.
- **`lib.rs`**: This is the entry point for library crates.

### Modules and File References:

In Rust, files can be treated as modules. By default, the file hierarchy corresponds to the module hierarchy.

For example, if you have the following structure:

```
src/
├── main.rs
└── utils/
    └── mod.rs
    └── helper.rs
```

- **`main.rs`** is the entry point and can refer to the `utils` module directly.
- **`utils/mod.rs`** serves as the entry point for the `utils` module and can be used to declare what the `utils` module exposes. It can also refer to its sub-modules, like `helper`.
- **`utils/helper.rs`** is treated as a submodule of `utils`.

To refer to modules and use their contents:

1. **In `main.rs`**:

   ```rust
   mod utils;  // This includes the utils module (i.e., utils/mod.rs)

   fn main() {
       utils::some_function_in_mod();
   }
   ```

2. **In `utils/mod.rs`**:

   ```rust
   mod helper;  // This includes the helper module (i.e., utils/helper.rs)

   pub fn some_function_in_mod() {
       helper::function_in_helper();
   }
   ```

3. **In `utils/helper.rs`**:

   ```rust
   pub fn function_in_helper() {
       // Some code...
   }
   ```

### Other Notes:

- **External Crates**: If you want to use external libraries (crates), you add them to your `Cargo.toml`, and then you can directly use them in your code with `use` statements, e.g., `use regex::Regex;`.
- **`use` Statement**: The `use` statement allows you to bring paths into scope, reducing redundancy. For instance, if you're frequently accessing a deeply nested module or type, you can use `use` to make your code more concise.
- **Visibility**: By default, everything (functions, types, modules) is private in Rust, except for the contents of the root module (like `main.rs` or `lib.rs`). To make something accessible outside its module, you use the `pub` keyword.

This is a basic overview of Rust's file and module system. As projects grow, there are more advanced features like re-exporting (`pub use`), renaming imports (`use x as y`), and organizing large projects with "workspaces", but the structure and concepts described above form the foundation.