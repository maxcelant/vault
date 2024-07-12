- Channels allow you to send messages across threads
- Channels are FIFO queues
- Channels block until there is something to read
- If you attempt to read from a channel that is closed, it will return the zero value
- You can use `select` to break out of blocking cases
- You can use a for loop with a select to block for some time. 
- Share data rather than access the same memory when working with threads.
- Synchronize when necessary.

### Examples
```go
func (f *FineCalculator) CalculateFines(patrons []types.Patron) float64 {
	result := float64(0)
	fees := make(chan float64)
	for _, p := range patrons {
		go f.CalculateFeeForPatron(p, fees)
		patronFee := <-fees
		fmt.Printf("Got new result for patron: %0.2f\n", patronFee)
		result += patronFee
	}
	return result
}

func (f *FineCalculator) CalculateFeeForPatron(p types.Patron, feeResult chan float64) {
	feeResult <- float64(p.LateFeeCount) * f.PiCalculator.CalculatePi()
}
```
- When using an unbuffered channel (i.e., a channel with no buffer space), the `feeResult <-` operation will block until there is a corresponding receiver ready to receive the value.
- If the channel had buffer space (e.g., `make(chan float64, 1)`), the `feeResult <-` operation could proceed without blocking as long as there is buffer space available. The `feeResult <-` operation would only block if the buffer is full.
- On the other side, `patronFee := <-fees` would block only if there is no value in the buffer to receive.
- Not using go routines with channels can cause deadlocks errors. If we didn't have `CalculateFeeForPatron` as a go routine then it would

```go
func (f *FineCalculator) CalculateFines(patrons []types.Patron) float64 {
	result := float64(0)
	fees := make(chan float64)
	for _, p := range patrons {
		go f.CalculateFeeForPatron(p, fees) // starts the threads
	}

	for i := 0; i < len(patrons); i++ { // captures their responses from their channel
		result += <-fees
		fmt.Printf("Result is now %0.2f\n", result)
	}

	return result
}
```

- This is improved because before we were blocking after each routine and waiting for the response but now we are starting all the routines and waiting for the responses.

### Using a WaitGroup

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

- 