Macros in Rust are metaprogramming constructs that allow you to write code that writes other code (code generation) at compile time. They're used in situations where functions fall short or are inefficient.

1. They can accept a variable amount of args
2. Can generate different code based on their input
3. They are more optimized

```rust
println!("Hello, {}!", "world");
```

#### Creating your own Macros

```rust
macro_rules! square {
    ($x:expr) => {
        $x * $x
    };
}

fn main() {
    let y = square!(5);
    println!("The square of 5 is {}", y); // Outputs: "The square of 5 is 25"
}

```