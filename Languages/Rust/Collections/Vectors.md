Create one like so:
```rust
let v: Vec<i32> = Vec::new();
```

Or using a macro:
```rust
let v = vec![1, 2, 3];
```

Add to a vector:
```rust
let mut v = Vec::new();

v.push(5);
```

You can read from vectors like so:
```rust
let third: &i32 = &v[2]; // Will cause a panic

let third: Option<&i32> = v.get(2);
match third {
  Some(third) => println!("third element exists");
  None => println!("third element doesn't exist");
}
```

Iterate over a vector like so:
```rust
// Immutable
let v = vec![1, 2, 3];

for i in &v {
  println!("{i}");
}

// Mutable
let mut v = vec![100, 32, 57];
for i in &mut v {
  i* += 50;
}
```

Use `Enum` to store multiple types:
```rust
enum SpreadsheetCell {
	Int(i32),
	Float(f64),
	Text(String),
}

let row = vec![
	SpreadsheetCell::Int(3),
	SpreadsheetCell::Text(String::from("blue")),
	SpreadsheetCell::Float(10.12),
];

for header in &row {
  match header {
    Spread
  }
}
```

