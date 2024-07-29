- Your timer should have a `duration` and a channel for pausing/resuming.
- When you want to pause or resume, you send an empty struct into the `pauseChan`. 
- This will cause the timer loop to pause until another struct is passed down the channel.
- The countdown is started in a goroutine as well as the user input.

### Code Sample

```go
type Timer struct {
  duration  int
  pauseChan chan struct{}
}

func (t *Timer) Decrement() {
  t.duration--
}

func (t *Timer) Countdown() {
  ticker := time.NewTicker(1 * time.Second)
  defer ticker.Stop()

  for {
	select {
	case <-ticker.C:
	  fmt.Println(t.duration)
	  t.Decrement()
	  if t.duration == 0 {
	    fmt.Println("Countdown finished.")
		return
	  }
	case <-t.pauseChan:
	  fmt.Println("Paused")
	  <-t.pauseChan 
	  fmt.Println("Resumed")
	}
  }
}

func (t *Timer) Pause() {
  t.pauseChan <- struct{}{}
}

func (t *Timer) Resume() {
  t.pauseChan <- struct{}{}
}

func main() {
  t := &Timer{duration: 10, pauseChan: make(chan struct{})}
  go t.Countdown()

  reader := bufio.NewReader(os.Stdin)
  isOn := true

  go func() {
    for {
		fmt.Print("Press Enter to pause/resume: ")
		_, _ = reader.ReadString('\n')
      if isOn {
        isOn = false
			  t.Pause()
      } else if !isOn {
        isOn = true
        t.Resume()
      }
    }
  }()
  
  select {}
}

```