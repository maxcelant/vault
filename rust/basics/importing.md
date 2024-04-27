To reference an enum (or any other item) defined in one Rust file from another Rust file, you would typically use Rust's module system. Here's a step-by-step guide:

1. **Organize Your Files**:
Suppose you have the following directory structure:
```
my_project/
|-- src/
|   |-- main.rs
|   |-- directions.rs
```

In `directions.rs`, you've defined an enum:
```rust
// directions.rs
pub enum Direction {
    North,
    South,
    East,
    West,
}
```

The `pub` keyword makes the `Direction` enum public, meaning it can be accessed from other modules.

2. **Declare the Module in Your Main File**:
In `main.rs`, declare the `directions` module. By default, Rust will look for the module's contents in a file with the same name as the module (i.e., `directions.rs`).

```rust
// main.rs
mod directions;

fn main() {
    let dir = directions::Direction::North;
    println!("The direction is {:?}", dir);
}
```

3. **Use the `use` Keyword for Conciseness**:
To make your code more concise, you can bring the enum into scope with the `use` keyword.

```rust
// main.rs
mod directions;
use directions::Direction;

fn main() {
    let dir = Direction::North;
    println!("The direction is {:?}", dir);
}
```

4. **If You're Using a Library Crate**:
If you're working inside a library crate (i.e., creating a library), and you want your modules to be organized in different files, remember to also adjust your `lib.rs` (the root of the library crate) to declare and potentially re-export items.

For example, if `Direction` was inside a library crate, and you want external users of the crate to access it, you would do:

```rust
// lib.rs
pub mod directions;
```

This makes the `directions` module public for anyone using your library crate.

Remember, Rust's module system and its file system mapping can seem a bit complex at first, but it's designed for clarity and to prevent accidental public exposure of internal details. The key is to understand the relationship between module declarations (`mod`) and file organization, as well as the use of `pub`