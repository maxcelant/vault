>![[Pasted image 20231018134408.png]]

#### Goal
- `dist(u, v, l)` - shortest path from `u` to `v` with at most `l` edges

#### Recursive Definition
- if `l = 0` and `u = v` then they are the same vertex.
- if `l = 0` and `u ≠ v` then their distance is infinity.
- if `l > 0`...
	- The shortest path from `u` to `v` using `l - 1` edges: `dist(u, v, l - 1)`
	- The shortest path from `u` to some intermediate vertex `x` using `l - 1` edges plus the edge weight between `x` and `v` (i.e., `w(x → v)`).
	- The second possibility essentially considers all vertices `x` as potential "stepping stones" between `u` and `v`. For each `x`, it computes the path length from `u` to `x` using `l - 1` edges and then adds the direct edge from `x` to `v`. The minimum among all these possibilities becomes the shortest path for `l` edges.

#### Termination

The recursion will eventually reach a point where **l = 0**, and it will use the base cases provided. Thus, it's guaranteed to terminate.

#### Conceptually

Think of the formulation as building paths progressively. Start with paths of length 0, then 1, then 2, and so on. For each increment in the path length, we consider either keeping the old shortest path or building a new path by extending a path of one less length through some intermediate vertex.

The idea behind this recursive formulation is to then optimize it using Dynamic Programming (DP). With DP, you can "remember" previously computed shortest paths to avoid redundant calculations, which can drastically speed up the process.