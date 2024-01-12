The `&` symbol in Rust represents a reference. Rust uses references to borrow ownership of a value. References allow you to access and possibly modify data without taking ownership of it, ensuring memory safety without the need for a garbage collector.

Here's a breakdown of its usage:

1. **Immutable Reference (`&T`)**:
    - Allows you to read data through the reference, but not modify it.
    - Multiple immutable references can coexist simultaneously for the same data.
    
    ```rust
    let x = 5;
    let y = &x;  // y is an immutable reference to x
    println!("{}", *y);  // Dereferencing y to get the value
    ```

2. **Mutable Reference (`&mut T`)**:
    - Allows you to read and modify data through the reference.
    - Only one mutable reference to a particular piece of data can exist in a particular scope. This ensures there are no data races.
    
    ```rust
    let mut x = 5;
    let y = &mut x;  // y is a mutable reference to x
    *y += 1;  // Dereferencing and modifying the value through y
    ```

3. **Reference in Function Arguments**:
    - You can also pass references as function arguments to avoid transferring ownership.
    
    ```rust
    fn print_value(x: &i32) {
        println!("{}", x);
    }

    let z = 10;
    print_value(&z);
    ```

4. **Dereferencing (`*` operator)**:
    - To get the underlying value from a reference, you use the dereference operator `*`.
    
    ```rust
    let x = 5;
    let y = &x;
    assert_eq!(5, *y);  // *y gives the underlying value
    ```

5. **`&` in Pattern Matching**:
    - When matching references in patterns, you can use `&` to match against them.
    
    ```rust
    let reference = &4;

    match reference {
        &val => println!("Got a value via destructuring: {:?}", val),
    }
    ```

The borrowing and referencing system in Rust is crucial for its promise of memory safety without a garbage collector. The rules associated with `&` (and its mutable counterpart `&mut`) prevent data races, ensure there are no null/dangling references, and allow for efficient and safe access to memory.