Enums allow you to create "variants", it can start 

#### Simple
```rust
enum Role {
    Manager,
    TechLead,
    ProductOwner,
    Developer,
}

fn main() {
    let wayne_kimball = Role::Manager();
    let max_celant = role::AssociateDeveloper();
}
```

#### With Data Types
Instead of creating a struct that has a `kind`/`state`, you can make enums that have that built in, like in this case, giving each enumeration a name for the person. Each can be different.

```rust
enum Role {
    Manager(String),
    TechLead(String),
    ProductOwner(String),
    Developer(String)
}

fn main() {
    let wayne_kimball = Role::Manager(String::from("Wayne Kimball"));
    let max_celant = role::AssociateDeveloper(String::from("Max Celant"));
}
```

#### With Structs
We can go even further and give each enum variant custom properties.
You could do this exact same thing by making them all structs, but then you would lose the 'role' that connects them all.

```rust
enum Role {
    Manager {
        name: String,
        team: String
    },
    TechLead {
        name: String,
        expertise: String,
    },
    ProductOwner {
        name: String,
        product: String,
    },
    Developer {
        name: String,
        years_of_experience: i8,
    }
}

fn main() {
    let wayne_kimball = Role::Manager {
        name: String::from("Wayne Kimball"),
        team: String::from("Runway")
    };

    let max_celant = Role::Developer {
        name: String::from("Max Celant"),
        years_of_experience: 3
    };
}
```

#### With Methods
Enums can even have methods attached to them. We will go further into match later.

```rust
enum Role {
    Manager {
        name: String,
        team: String
    },
    TechLead {
        name: String,
        expertise: String,
    },
    ProductOwner {
        name: String,
        product: String,
    },
    Developer {
        name: String,
        years_of_experience: i8,
    }
}

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

fn main() {
    let wayne_kimball = Role::Manager {
        name: String::from("Wayne Kimball"),
        team: String::from("Runway")
    };

    let max_celant = Role::Developer {
        name: String::from("Max Celant"),
        years_of_experience: 3
    };

    max_celant.call();
}
```