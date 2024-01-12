A less verbose way of handling values that match one pattern while ignoring the rest.

```rust
enum Coin {
  Penny(String),
  Nickle(String),
  Dime(String),
  Quarter(String),
}

fn main() {
  let special_penny = Coin::Penny(String::from("My Special Penny"));

  // Before
  match special_penny {
    Coin::Penny(phrase) => println!("This Is {}", phrase),
    _ => ()
  }

  // After
  if let Coin::Penny(phrase) = special_penny {
    println!("This Is {}", phrase);
  }
}
```

#### With `struct`

```rust
let my_bard = Class::Bard(ClassFields { 
  name: String::from("Jaskier"), 
  subclass: String::from("College of Secrets") 
});

if let Class::Bard(ClassFields { name, subclass }) = my_bard {
  println!("{} {}", name, subclass);
}
```