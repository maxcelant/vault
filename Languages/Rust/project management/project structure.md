>![[Pasted image 20231208230928.png]]

In a typical Rust project:
- You have a `src` folder containing all your source code.
- The entry point for a binary crate is `src/main.rs`.
- If you have a library crate in the same project, its entry point is `src/lib.rs`.
- Other modules can be in separate files or folders and are referenced from the entry points (`main.rs` or `lib.rs`).