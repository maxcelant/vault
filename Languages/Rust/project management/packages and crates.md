**Crate**: The smallest amount of code that Rust compiler considers at a time.
- Crates can contain modules, and the modules may be defined in other files that get compiled with the crate.
- Can either be a [[binary crate]] or [[library crate]].
- _crate root_ is a source file that Rust compiler starts from and makes up the root module of your crate.

**Package**: Bundle of one or more crates that provides a set of functionality. A package contains a `Cargo.toml` file that describes how to build those crates. 
- _Cargo_ is a package that contains a binary crate for the command-line tool.
- _Cargo_ also contains a library crate that the binary crate depends on. (Other packages can also depend on this same library crate).
- You can have multiple binary crates in a package but only **ONE** library crate.
	- This is to decrease complexity and give your package a centralized location for shared logic.
	- You have to run each binary crate independently within the same package.
		- `cargo run --bin app1`, `cargo run --bin app2`, etc.

#### Creating a Package

```bash
$ cargo new my-project
     Created binary (application) `my-project` package
$ ls my-project
Cargo.toml
src
$ ls my-project/src
main.rs
```

- Cargo knows `src/main.rs` is our crate root of a binary crate with the same name as the package.
- Cargo knows `src/lib.rs` is our crate root of a library crate with the same name as the packages.