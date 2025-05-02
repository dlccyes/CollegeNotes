# Deadlock vs. Livelock

deadlock: wait when can't acquire lock, keep waiting

```go
package main

import (
	"sync"
	"time"
)

func main() {
	var mu1, mu2 sync.Mutex
	var wg sync.WaitGroup
	wg.Add(2)

	// G1: lock A then B
	go func() {
		defer wg.Done()
		mu1.Lock()
		time.Sleep(10 * time.Millisecond) // give G2 time to grab mu2
		mu2.Lock()                        // <— blocks forever
	}()

	// G2: lock B then A
	go func() {
		defer wg.Done()
		mu2.Lock()
		time.Sleep(10 * time.Millisecond)
		mu1.Lock()                        // <— blocks forever
	}()

	wg.Wait()
}
```

livelock: skip when can't acquire lock, keep looping

```go
package main

import (
	"sync"
	"time"
)

func main() {
	var mu1, mu2 sync.Mutex
	var wg sync.WaitGroup
	wg.Add(2)

	// G1: lock A then B
	go func() {
		defer wg.Done()
		for {
    		if mu1.TryLock() {
        		time.Sleep(10 * time.Millisecond)
        		if mu2.TryLock() {
                	doStuff()
                    mu2.Unlock()        		
                }
                mu1.Unlock()
    		}
		}
	}()

	// G2: lock B then A
	go func() {
		defer wg.Done()
		for {
    		if mu2.TryLock() {
        		time.Sleep(10 * time.Millisecond)
        		if mu1.TryLock() {
                	doStuff()
                    mu1.Unlock()        		
                }
                mu2.Unlock()
    		}
		}
	}()
	wg.Wait()
}
```

