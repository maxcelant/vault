#### `map` Method

```rust
let a = [1, 2, 3];

let mut iter = a.iter().map(|x| 2 * x);

assert_eq!(iter.next(), Some(2));
assert_eq!(iter.next(), Some(4));
assert_eq!(iter.next(), Some(6));
```

#### `iter_mut` Method

```rust
let x = &mut [1, 2, 4];
for elem in x.iter_mut() {
    *elem += 2;
}
assert_eq!(x, &[3, 4, 6]);
```

#### `reverse` Method

```rust
let mut v = [1, 2, 3];
v.reverse();
assert!(v == [3, 2, 1]);
```
