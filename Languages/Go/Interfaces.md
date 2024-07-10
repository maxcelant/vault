- "Satisfied" means that the struct _implements_ ALL the behaviors of an interface without explicitly saying so.
- So you could create a random struct and if that struct implements the `Error()` method, then it will be treated as one!
- Functions should use interfaces as args and return structs.

```go

```