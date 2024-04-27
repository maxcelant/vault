Similar to `interfaces` in other programming languages.

```rust
trait Spellcaster {
    fn cast(&self);
}
```

```rust
struct Elf {
    name: String,
}

struct Human {
    name: String,
}

impl Spellcaster for Elf {
    fn cast(&self) {
        println!("{} is casting a spell!", self.name);
    }
}

impl Spellcaster for Human {
    fn cast(&self) {
        println!("{} is casting a spell!", self.name);
    }
}
```

#### Default Implementation
You can give your functions default behavior:

```rust
trait Describe {
    // Default implementation
    fn describe(&self) -> String {
        let description = self.describe();
        format!("{} {}", description, description)
    }
}

```

In this case `describe` has a default implementation that can be changed by the struct inheriting it. So we don't technically need to write it in our inheriting class if we don't want to.

