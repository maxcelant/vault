**What is it?**: It compiles into a format that's not directly executable but can be used by other Rust programs. It's a collection of code that provides functionality to be used elsewhere, like functions, structs and traits.

**Simple analogy**: Consider a library crate as a parts supplier for cars. It doesn't create a complete car but provides parts (like engines, wheels) that can be used to build or enhance cars.

---

You can create a library crate by doing `cargo new my-library --lib`. We can use `mod` to define modules and function signatures within `src/lib.rs`.

If `add_to_waitlist` is accessed outside of `hosting` then you would do that with `pub` keyword.

Our root is typically used as the entry point for a library crate, and its primary role is to define the structure of the crate, such as which modules and submodules it includes, and to expose public interfaces (functions, types, traits, etc.) of the library.

```rust
// src/lib.rs
mod front_of_house {
    pub mod hosting;
    mod serving;
}
```

Each of these files would contain the implementations of their respective functions.

```rust
// src/front_of_house/hosting.rs

pub fn add_to_waitlist() {
    // Implementation of add_to_waitlist function goes here
}

fn seat_at_table() {
    // Implementation of seat_at_table function goes here
}
```

The benefit here is that we understand exactly what functionality lives within each module/submodule

```
crate
 └── front_of_house
     ├── hosting
     │   ├── add_to_waitlist
     │   └── seat_at_table
     └── serving
         ├── take_order
         ├── serve_order
         └── take_payment
```

Actual implementation of the functions would be inside their respective modules. The file structure might look like so:

```rust
your_project/
│
├── src/
│   ├── lib.rs              // The entry point for the library crate
│   │
│   └── front_of_house/     // The `front_of_house` module directory
│       ├── hosting.rs      // The `hosting` submodule
│       └── serving.rs      // The `serving` submodule
│
└── Cargo.toml              // Cargo configuration file for the project

```

You can easily then use your library crate code in your binary crate.

```rust
extern crate your_library_crate;

use your_library_crate::common_func;
use your_library_crate::front_of_house::hosting:add_to_waitlist;

fn main() {
  common_func();
  add_to_waitlist();
}
```