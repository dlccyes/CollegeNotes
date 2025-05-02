---
title: Dijkstra's Algorithm
layout: meth
parent: Algorithms
---
# Dijkstra's Algorithm

BFS with heap, $O((V + E)\log V)$

- visit at most each $V$ nodes, a heap pop each visit
- visit at most each $E$ edges, a heap push each visit

```python
import heapq

def dijkstra(graph, start):
    # graph format: {"node1", [("node2", 10)]}
    heap = [(0, start)]
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    while heap:
        curr_dist, node = heapq.heappop(heap)
        if curr_dist > distances[node]:
            continue

        for nxt, weight in graph[node]:
            distance = curr_dist + weight
            if distance < distances[nxt]:
                distances[nxt] = distance
                heapq.heappush(heap, (distance, nxt))
    
    return distances
```

![[dijkstra's-algorithm-1.jpg]]

1. initialize the starting node to 0, every other node to $\infty$
2. color first node to red
3. calculate all red's next nodes and find the one with the least cost, color it to red, repeat this step
4. all nodes have been colored to red, now go from the destination node, following how it got its cost, back to the starting node, there goes the least cost path

[[Data Structure#Dijkstra's Algorithm]]
