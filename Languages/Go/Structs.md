- Copying is _shallow_ if you have a pointer to a struct.
- You can embed structs.
- There is a `"encoding/json"` package.
- Struct tags give encoding json hints

```go
type Car struct {
  Model string
  Brand string `json:"Make"`
  Year  int    `json:", omitempty"`
}

func main() { 
	var jsonOfCar = []byte(` {"Model": "camry", "Make": "toyota", "Year": 2012} `) 
	var car Car 
	json.Unmarshal(jsonOfCar, &car) 
	fmt.Println(car) 
}
```

- Allows us to map json types to structs
- `omitempty` Prevents unset fields from being serialized
- `json:", omitempty"` means it expects "Year" as the name
- `json.Unmarshal` goes from json -> go struct
- `json.Marshal` goes from struct -> json

```go
type Book struct {
	Title     string       `json:"book_title"`
	ISBN      ISBN         `json:"isbn"`
	PageCount int          `json:"count"`
	Authors   []string     `json:"authors"`
	Reviews   []BookReview `json:"reviews,omitempty"`
}
```

- `BookReview` is a slice and it does not need to be a pointer, because it already has one.
- 