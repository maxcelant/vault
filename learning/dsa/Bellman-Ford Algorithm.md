- [[Single Source SP]] Algorithm.
- Can handle negative weights as well.
- Good for detecting negative weight cycles.

---

1. **Initialize**:
    - Set the distance to the source node as 0 and the distance to all other nodes as infinity.
2. **Relaxation**:
    - You will run `V - 1` iterations in total.
    - For each iteration, you will cycle through each vertex, look at their outgoing edges and see if their distance can be reduced.
1. **Check for Negative Cycles**:
    - For every edge `(u, v)` with weight `w`, if the distance to `u` + `w` is less than the distance to `v`, then there's a negative cycle.

>![[Pasted image 20231018133054.png]]

---

- `V`: Set of vertices
- `E`: List of edges, each represented as a tuple (u, v)
- `L`: Function that returns the weight of the edge (u, v)
- `s`: Source vertex

```python
def bellman_ford(V, E, L, s):
    dist = {u: float('infinity') for u in V}
    prev = {u: None for u in V}
    dist[s] = 0

    # Relaxation
    for _ in range(len(V) - 1):
        for (u, v) in E:
            update(u, v, dist, L)

    return dist, prev

def update(u, v, dist, L):
    if dist[u] + L(u, v) < dist[v]:
        dist[v] = dist[u] + L(u, v)

# Sample usage
V = {'A', 'B', 'C', 'D', 'E'}
E = [('A', 'B'), ('A', 'C'), ('B', 'C'), ('B', 'D'), ('B', 'E'), ('D', 'B'), ('D', 'C'), ('E', 'D')]
L = lambda u, v: {
    ('A', 'B'): -1,
    ('A', 'C'): 4,
    ('B', 'C'): 3,
    ('B', 'D'): 2,
    ('B', 'E'): 2,
    ('D', 'B'): 1,
    ('D', 'C'): 5,
    ('E', 'D'): -3
}.get((u, v), float('infinity'))

distances, predecessors = bellman_ford(V, E, L, 'A')
```
