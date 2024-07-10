- Errors are types that can be operated on
- We can see the type by doing `err.(type)`

```go
if err != nil {

  switch e := err.(type) {
  case *PathError:                                 👇👇
    fmt.Printf("PathError specific handling: %s.", e.Op)
  default:
    // handle unknown error
  }
}
```
- Allows us to see what type of error it is.
```go
var BadErr = errors.New("Not good!")                    

func FailNow() error {
	return BadErr
}

func main() {
	err := FailNow()
           👇👇👇👇👇
	if errors.Is(err, BadErr) {
		fmt.Println("It's bad!")
	}
}
```
- You can wrap errors to make them better
- `error.Is()` can go up the chain of wrapped errors
- This is the conical way of doing it with `Errorf` because it lets you add additional info to the error call. It basically does the wrapping for you.
```go
var BadErr = errors.New("Not good!")

func Risky() (string, error) {
  if (math.Round(rand.Float64()) == 0) {
    err := fmt.Errorf("Risky failed: %w", BadErr)
    return "", err
  }
  return "success", nil
}
```
- Here is how Go itself creates the `PathError`
>![[Pasted image 20240709155154.png]]

- Error is smart enough to call the `Error()` function when you use it in a Printf with `%s`.