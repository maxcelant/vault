- Since you are just getting the pointer that points to an address of a struct, its a lot quicker.
- The alternative is sending the entire actual object around whenever you pass it into a function, which is cumbersome when you use large objects.
- In Go, when you "pass by value" (not use a pointer), you are creating a copy of that struct, which means not only is it a bad idea for size reasons but you'd also be modifying a copy of it.
- Java makes **class types** as references by default.

### When to use pointers
- Large structs
- Mutable data

### When not to use pointers
- Small simple data
- Immutable data

```go
// Create a pointer to a Lexer struct
func New(input string) *Lexer {
  l := &Lexer{input: input}
  return l
}
```

```go
// Get the actual struct that the pointer points to
func (l *Lexer) readChar() {
...
}
```