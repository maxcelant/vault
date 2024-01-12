- Instead of recomputing the `dist(u, v, l)` each time recursively, you can store it in a table `dist[u, v, l]`

![[Pasted image 20231018142845.png]]

```python
def APSP(V, E, w):
	initialize dist[u, v, 0] = 0 for all vertices u
	initialize dist[u, v, 0] = ∞ for all vertices u and v with u ≠ v

	for l from 1 to V - 1:
		for all vertices u:
			for all vertices v with u ≠ v:
				set dist[u,v,l] = min( dist[i,v,l-1],
					                   dist[u,x,l-1] + w(x➔v) : for all edges x➔v)
```

- Maybe the best way to get from `u` to `v` using `l` edges is just to use an old path (with `l-1` edges).
- OR, maybe it's better to first go to some other place `x` (using `l-1` edges) and then directly jump to `v`.

#### Refactored Approach
- We can remove `l` from the DP table making the size `O(V^2)` instead of `O(V^3)`
- This is because as we iterate through, we only really care about the layer before and `dist[u,v]` will have that value.

```python
def APSP(V, E, w):
	initialize dist[u, v, 0] = 0 for all vertices u
	initialize dist[u, v, 0] = ∞ for all vertices u and v with u ≠ v

	for l from 1 to V - 1:
		for all vertices u:
			for all vertices v with u ≠ v:
				set dist[u,v] = min( dist[u,v],
					                 dist[u,x] + w(x➔v) : for all edges x➔v)
```

[[Principles/Algorithms/Week 1/📌 Index|Return]]