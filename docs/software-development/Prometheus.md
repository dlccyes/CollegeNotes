# Prometheus

Monitoring tool

## With [[Go]]

<https://prometheus.io/docs/guides/go-application/>

Simple example with a counter metric

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

func main() {
	opsProcessed := promauto.NewCounter(prometheus.CounterOpts{
		Name: "wales_golf_madrid",
		Help: "Gareth Bale's based count",
	})

	n := 10
	for i := 0; i < n; i++ {
		opsProcessed.Inc()
	}

	fmt.Println("serving on http://localhost:2112")
	http.Handle("/metrics", promhttp.Handler())
	http.ListenAndServe(":2112", nil)
}
```

Now `curl http://localhost:2112/metrics` and it will say `wales_golf_madrid 10` in the last line.

## Data types

<https://prometheus.io/docs/concepts/metric_types/>