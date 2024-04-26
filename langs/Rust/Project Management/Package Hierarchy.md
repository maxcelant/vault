>![[Pasted image 20231208230928.png]]

- Rust lets you split a package into multiple crates and a crate into modules so you can refer to items defined in one module from another module. 
- You can do this by specifying absolute or relative paths. 
- These paths can be brought into scope with a `use` statement so you can use a shorter path for multiple uses of the item in that scope. 
- Module code is private by default, but you can make definitions public by adding the `pub` keyword.

