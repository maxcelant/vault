You can either [[pass by reference]] or [[pass by value]].

Under most circumstances, we want opt for *passing by reference*, especially if the object is large or expensive to copy. It's more efficient for memory and performance.

#### Passing By Value
```rust
#[derive(Debug)]
struct Foo {
    x: i32,
    y: i32
}

fn bar(mut foo: Foo) -> Foo {
    foo.x += 10;
    foo.y += 5;
    foo
}

fn main() {
    let mut foo = Foo { x: 5, y: 10 };
    foo = bar(foo);
    println!("{:?}", foo);
}
```

#### Passing By Reference
```rust
#[derive(Debug)]
struct Foo {
    x: i32,
    y: i32
}

fn bar(foo: &mut Foo) {
    foo.x += 10;
    foo.y += 5;
}

fn main() {
    let mut foo = Foo{ x: 5, y: 10 };
    bar(&mut foo);
    println!("{:?}", foo);
}
```