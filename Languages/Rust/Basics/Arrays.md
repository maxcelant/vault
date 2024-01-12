- An array's type is denoted as `[T; N]`, where `T` is the type of each element and `N` is the number of elements. For example, `[i32; 5]` is an array of five `i32` integers.

```rust
let a = ["foo"; 100]; // Creates 100 "foo"s
```

- Slicing arrays like so:

```rust
let arr = [1, 2, 3, 4, 5];

let slice = &arr[1..4]; // 1, 2, 3
```