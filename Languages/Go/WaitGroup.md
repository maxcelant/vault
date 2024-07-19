```go
func (f *FineCalculator) CalculateFines(patrons []types.Patron) float64 {
	result := float64(0)
	fees := make(chan float64)
	for _, p := range patrons {
		go f.CalculateFeeForPatron(p, fees)
	}
	var wg sync.WaitGroup
	wg.Add(len(patrons)) // WaitGroup counter is 3
	go func() { 
		for {
			select {
			case feeResult := <-fees:
				result += feeResult
				wg.Done() // decrement WaitGroup counter by 1
			default:
				time.Sleep(1 * time.Second)
			}
		}
	}()
	wg.Wait() // Blocks until WaitGroup counter reaches 0 (which means all patrons were dealt with)
	return result
}
```
