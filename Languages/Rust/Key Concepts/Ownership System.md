1. Each value in Rust has a variable that's its owner.
2. There can only be one owner at a time.
3. Whenever the owner goes out of scope, the value will be dropped.
	1. So you will need to make copies if you want to let others use your value.


**Ownership in Rust**: When a function takes ownership of a value, it becomes responsible for its memory. After the function call, the original variable can't be used unless the ownership is returned.

**Borrowing in Rust**: When you pass a reference (borrow), you temporarily lend the value to a function without giving up ownership. It allows the original variable to be reused later.

**Mutable References**: Rust allows mutable references, but they come with restrictions. You can't reassign a mutable reference to point to a different value.

#### Example

```rust
fn main() {
	// You have a blue crayon.
    let my_crayon = String::from("blue"); 
	
	// You give the blue crayon to your friend.
    give_crayon_to_friend(my_crayon); 

    // Oops! You can't use my_crayon
    // The next line of code would give you an error
    println!("I have a {} crayon", my_crayon);
}

fn give_crayon_to_friend(crayon: String) {
    println!("My friend has a {} crayon", crayon);
    // The crayon gets put back in the box (gets dropped) when the function is done.
}

```

- When you create `my_crayon`, you have a blue crayon.
- When you call `give_crayon_to_friend`, you give your crayon to your friend. Now you can’t use `my_crayon` anymore because you gave it away.
- Inside `give_crayon_to_friend`, your friend has the crayon, and they can use it.
- When `give_crayon_to_friend` is done, the crayon gets put back in the box.