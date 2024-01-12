Similar to tuples but each instance has it's own type.

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn view_point(point: Point) {
  println!("{} {} {}", point.0, point.1, point.2)
}

fn main() {
  let black = Color(0, 0, 0);
  let origin = Point(0, 0, 0);

  view_point(origin); // works!
  view_point(black);  // fails!
}
```

So you couldn't pass `Color` into a function that needs a `Point`