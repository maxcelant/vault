```ad-important
**Page 155** starts a great example showing up dependency injection and this idea of "accept interfaces, return structs". Check it out!
```

- Go uses parameters of pointer type to indicate the parameter might be modified in the function. Same goes for method receivers.
- Go automatically converts it to a pointer type if the receiver is a pointer type.
- Methods can handle `nil` pointer receivers. You can use this to your advantage in some edge cases like a tree walking algorithm to see if the current node is `nil` or not.
- You can create closures by creating method values with a struct type.
	- Example
		```go
		adder = Adder{value: 10} 
		fn := adder.AddTo  // has closure with value of 10
		fmt.Println(fn(5)) // prints 15 
		```
- You can create types from an existing type you made. This doesn't give them any kind of inheritance, it's strictly for you to know that they are related in some way.
- Types are a way to make your code's intent clearer.
- `iota` are Go's enumerations. 
	- Example: Each one in the const grouping gets their incremented value as a `MailCategory` type.
		```go
		const (
			Uncategorized MailCategory = iota
			Personal
			Spam
			Social
			Advertisements
		)
		```
- Any fields or methods of an embedded field are promoted to the containing struct and can be invoked directly.
	- Example
		```go
		type Manager struct {
		  Employee
		  Reports []Employee
		}
		
		m := Manager {
		  Employee: Employee{
		    Name: 'John',
		    ID: '213452'
		  }
		  Reports: []Employee{}
		}

		fmt.Println(m.ID)   // 213452
		fmt.Println(m.Name) // John
	    ```
- Accept interfaces, return structs. 
- In order for an interface to be considered `nil`, both the type and the value must be `nil`.
	- Example
		```go
		var s *string
		fmt.Println(s == nil) // true
		var i interface{}
		fmt.Println(i == nil) // true
		i = s
		fmt.Println(i == nil) // false
		```
	- Because the interface now has a _type_ that isn't `nil`, the interface is no longer `nil`.
- `var i interface{}` is an empty interface which means it can have any structure. This is good for when you dont know what some data looks like.
	- In the `json.Marshal` function, the second param is a `interface{}` because it has no way of knowing what your struct might look like.
- Type assertions are used to "reveal" underlying types. Most common use case is seeing if an interface _also_ implements a different interface.
	- Example: if the `dst` Writer also implements the `WriterTo` interface, then it can do this piece of code much quicker. Same goes with `src` with `ReaderFrom`.
		```go
		func copyBuffer(dst Writer, src Reader, buf []byte) (written int64, err error) {
		  
		  // If the reader has a WriteTo method, use it to do the copy.
		  // Avoids on allocation and a copy
		  if wt, ok := src.(WriterTo); ok {
		    return wt.WriteTo(dst)
		  }

		  if rt, ok := dst.(ReaderFrom); ok {
		    return rt.ReadFrom(src)
		  }
		  // Func continues...
		}
		```
- Type Switches -> `switch j := i.(type)` let you resolve for different possible types of a value.