```rust
loop {
	println!('repeat');
	break;
}

let mut num = 3;
while num != 0 {
	println!("{}!", num);
	num -= 1;
}

for i in 0..num {
	println!("Ring! Call number {}", i + 1);
}

let a = [10, 20, 30, 40, 50];
for ele in a.iter() {
	println!("The value is: {}", ele);
}
```