- Remember that _changing_ the pointer itself in a function won't work because its still a _copy_ of the original. However, modifying the value it _points to_ will work.
- A map in Go is just a pointer to a struct.
- To store something on the stack, you need to know exactly how big it is.
- This is why the size of an array is important, so it can be stored on the stack instead of the heap.

```ad-warning
A common C bug is returning a pointer to a local variable in a function. That local variable won't exist when you return because that stack frame is gone!
```

- A slice of structs has all its memory laid out in sequence, meanwhile... a slice of pointers to structs means that the data might be scattered across RAM.
- Java Lists are actually pointers to an array of pointers. 

>![[Pasted image 20240714162300.png]]



