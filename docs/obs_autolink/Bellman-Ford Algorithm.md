## Bellman-Ford Algorithm

$O(VE)$

```python
def bellman_ford(graph, src):
    # graph format: {"node1", [("node2", 10)]}
    dist = {node: float('inf') for node in graph}
    dist[src] = 0

    n = len(graph)
    for _ in range(n - 1): # at most n-1 edge from src to dst
        for n1, (n2, weight) in graph.items():
            dist[n2] = min(dist[n2], dist[n1] + weight)

    # optional: detect negative cycles
    for n1, (n2, weight) in graph.items():
        if dist[n1] + weight < distances[n2]:
            raise ValueError("Graph contains a negative-weight cycle")

    return distances
```

## optimized with queue - Shortest Path Faster Algorithm SPFA

Use a queue to store updated nodes and only calculate the updated nodes.

```python
from collections import deque

def spfa(graph, start):
    distances = {node: float('inf') for node in graph}
    in_queue = {node: False for node in graph}
    count = {node: 0 for node in graph}

    distances[start] = 0
    queue = deque([start])
    in_queue[start] = True # to prevent duplicate enqueue

    while queue:
        u = queue.popleft()
        in_queue[u] = False

        for v, weight in graph[u]:
            if distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
                if not in_queue[v]:
                    queue.append(v)
                    in_queue[v] = True
                    count[v] += 1
                    if count[v] > len(graph):
                        raise ValueError("Negative-weight cycle detected")

    return distances

```

