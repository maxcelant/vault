`pub` allows you to expose submodules inner workings to their parent modules. This basically makes them public. Be aware that you'll need to make both the module and the specific functionality you want public.

```rust
mod front_of_house {
    pub mod hosting { // Module
        pub fn add_to_waitlist() {} // Functionality
    }
}

pub fn eat_at_restaurant() {
    // Absolute path
    crate::front_of_house::hosting::add_to_waitlist();

    // Relative path
    front_of_house::hosting::add_to_waitlist();
}
```

`front_of_house` is a sibling to `eat_at_restaurant` so we don't need to put `pub` on it.

---

For `struct`'s, you can choose which fields you want to make public / private, like other languages.

```rust
pub struct Breakfast {
	pub toast: String, // can be changed
	fruit: String // cannot be changed
}
```

---

For `enum`'s, once they are public, they are all public.
`
```rust
mod back_of_house {
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

pub fn eat_at_restaurant() {
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;
}
```