Rust functions can indeed have return values, but you might be observing a pattern that's common in Rust: the absence of an explicit `return` keyword for the last expression in a function.

In Rust, if the last expression in a function is not terminated with a semicolon, it becomes the return value of the function. This idiom is used frequently in Rust code. Here's how it works:

1. **Function with an explicit return:**

    ```rust
    fn add(a: i32, b: i32) -> i32 {
        return a + b;
    }
    ```

2. **Function with an implicit return (more idiomatic in Rust):**

    ```rust
    fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    ```

Both of the above functions do the same thing. The second one is simply using Rust's convention of making the last expression the return value if there's no semicolon.

This feature has nothing to do with Rust's ownership model directly. It's just a language design choice that can make the code a bit more concise.

If a function doesn't specify a return type (or is specified to return `()`), then it is said to return the unit type `()`, which is analogous to `void` in languages like C and Java. In that case, you don't need to return anything, and the function is generally used for its side effects.