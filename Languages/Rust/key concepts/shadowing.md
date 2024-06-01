You can declare new variable with the same name as a previous variable. 

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
```

```
The value of x in the inner scope is: 12
The value of x is: 6
```

Also let's you change the data type of the variable.

```rust
let spaces = "   ";
let spaces = spaces.len();
```