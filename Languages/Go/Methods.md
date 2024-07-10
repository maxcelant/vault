- You should still use pointers with methods

```go
type Square struct {
  Side int
}
       
func (s *Square) Scale(factor int) {
  s.Side = s.Side * factor
}

func main() {
  s := &Square{10}
  s.Scale(2)
  fmt.Println(s.Side)  // 20
}
```

- Use value receivers when: concurrency, is (slice, map, func, chan), reduce garbage collection
- 