- Same idea applies as the previous ones

>![[Pasted image 20231018144851.png]]

There are two main cases:
- **Case 1:** `l = 1`, the shortest distance between `u` and `v` using 1 edge is simply weight of the edge `w(u → v)`. 
- **Case 2:** `l > 1`, shortest path between `u` and `v` using up to `l` edges is the min of:
	- The existing path between `u` and `v` using up to `l/2` edges.
	- The sum of two paths: one path from `u` to some vertex `x` using up to `l/2` edges and another from `x` to `v` also using up to `l/2` edges. This is evaluated for all vertices `x` and we take the minimum of these sums.

- By splitting in half, we are reducing the number of edges considered in each recursive call. 
- 