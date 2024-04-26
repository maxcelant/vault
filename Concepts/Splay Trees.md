- **Self-Adjusting**: Every time a node is accessed (through insertion, search, or deletion), it is moved to the root of the tree using a process called splaying. This involves a series of tree rotations.
- **No Balance Guarantee**: Splay trees do not guarantee that the tree will be perfectly balanced at all times. Instead, they offer a form of "amortized balance." This means that while individual operations can be slow (in the worst case), a sequence of operations is guaranteed to be performed in a reasonably fast, average time.
- **Recently Accessed Elements**: They have the property that recently accessed elements are quick to access again, which can be very beneficial in applications where certain elements are accessed repeatedly over short periods.

#### Find Operation
- Make rotations when we find the item, it is going to be the root node (splaying).

#### Zig-Zag Situation
- If the given node X is a right child of a left child
	- Rotate X to the left first
	- ![[Pasted image 20240109190507.png]]
	- Rotate X to the right
	- ![[Pasted image 20240109190608.png]]
	- 
- If given node X is a left child of a right child
	- We do the opposite

#### Zig-Zig (Rollercoaster) Situation
- If given node X is a left child of a left child
	- We start by rotating its parent to the right! (NOT X)
	- ![[Pasted image 20240109190853.png]]
	- Then we rotate X to the right
	- ![[Pasted image 20240109192319.png]]
- If given node X is a right child of a right child

#### Zig Situation
- Repeat the previous two steps repeatedly until we get to the root.
- ![[Pasted image 20240109192331.png]]
