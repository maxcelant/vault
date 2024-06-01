Unlike string literals (`str`), Strings can grow and shrink in size.
Creating a `String`:
```rust
let mut s = String::new();
```

Can turn a string literal into a `String` type:
```rust
let data = "initial";
let s = data.to_string();
let s = "initial".to_strin();
```

You can also create a `String` with initial content like so:
```rust
let s = String::from("initial");
```

You can append to an existing string:
```rust
let mut s = String::from("foo");
s = s + "bar";
println!("{s}");
```

You can also use `push_str`:
```rust
let mut s1 = String::from("foo");
let s2 = "bar";
s1.push_str(s2);
println!("s2 is {s2}");
```

Or `push` to add a single character:
```rust
let mut s = String::from("lo");
s.push("l");
```

Something to note, if you want to concatenate to strings, the second needs to be a reference! `s1` can no longer be used since ownership has been passed to `s3`.

```rust
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2;
```

Use `format!` macro for creating complicated strings:
```rust
let s1 = String::from("tic");
let s2 = String::from("tac");
let s3 = String::from("toe");

let s = format!("{s1}-{s2}-{s3}");
```

Strings don't support indexing, but it does support slices.
```rust
let hello = "Здравствуйте";
let s = &hello[0..4];
```

You can iterate over a `String` using `.chars()` or get the raw `bytes()`:
```rust
for c in "foo".chars() {
  println!("{c}");
}

for b in "foo".bytes() {
  println!("{b}");
}
```

