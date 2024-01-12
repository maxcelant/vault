Allows you to compare your value against a series of patterns. **All possible cases need to be handled.** Kind of like a coin sorting machine. 

There are two parts to a `match` arm: The pattern and some code. Each arm can have different params based on the Enum variant.

```rust
impl Role {
    fn call(&self) {
        match self {
            Role::Developer { name, years_of_experience } => {
                println!("{} has {} years of experience", name, years_of_experience)
            }
            Role::Manager { name, team } => {
                println!("{} works on the team called {}", name, team)
            }
            Role::ProductOwner { name, product } => {
                println!("{} owns a product called {}", name, product)
            }
            Role::TechLead { name, expertise } => {
                println!("{} has has expertise in {} ", name, expertise)
            }
        }
    }
}
```

#### Matching with `Option<T>`
If we want to get the inner `T` out of the `Some` in [[Option]], we can do so using `match`.

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
	match x {
		None => None,
		Some(i) => Some(i + 1),
	}
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
```

#### Catch-all Patterns and _ Placeholder
`other` and `_` act as catch-alls in `match` statements, but have different use cases.
Use `other` when you want to use the value in the code part. Use `_` when you don't want to use it. You can use `()` if you want nothing to happen at all for those catch-all parts.

```rust
// Using `other`
match dice_roll {
  1 => natural_one()
  20 => natural_twenty()
  other => normal(other)
}

fn normal(roll: u8) {}

// Using `_`
match dice_roll {
  1 => natural_one()
  20 => natural_twenty()
  _ => normal()
}

fn normal() {}

// Using `()`
match dice_roll {
  1 => natural_one()
  20 => natural_twenty()
  _ => ()
}

```