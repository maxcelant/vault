In Rust, there aren't "classes" in the same sense as in languages like Java or C++. Instead, Rust has a combination of `structs` and `impl` blocks that together provide functionality similar to classes. Let's break this down.

`structs` in Rust define a data type with potential fields. Think of them as a dataclass in python.

```rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool
}
```

#### Creating Instances
Remember that it's up to you to make the [[mut Keyword|mut]]!

```rust
let user1 = User {
  email: String::from("max@gmail.com"),
  username: String::from("maxcelant"),
  sign_in_count: 1,
  active: true
}
```

You can create a new instance using info from an existing one, similar to splat/spread.

```rust
let user2 = {
  email: String::from("foo@bar.com"),
  ..user1
}
```

#### Printing
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {:?}", rect1);
}
```