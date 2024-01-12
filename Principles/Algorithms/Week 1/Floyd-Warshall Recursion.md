- `π(u,v,r)` = length of the shortest path from `u` to `v` that can only use vertices <= `r`.

>![[Pasted image 20231018151040.png]]

1. If `r = 0` that means you go straight from `u` to `v` (direct path).
2. Otherwise there are two possibilities:
	1. What's the shortest path between classroom `u` and `v` considering paths that might pass through any classroom numbered less than `r` but still excluding classroom `r`?
	2. distance with `r`
3. Then choose the shorter of the two.

---
#### Example
Imagine you have 4 classrooms: A, B, C, and D. You want to find the shortest path from A to D.

1. When `r=0` (no classrooms considered):
    - The distance is just the direct path from A to D.
2. Now, when considering `r=2` (classroom C), but looking at `dist(A,D,r−1)``:
    - This would be the shortest path between A and D that might include classroom B (since it's numbered less than 2) but still excludes C.

So while both cases exclude classroom `r`, the latter has considered other paths that could include classrooms numbered up to `r−1`.