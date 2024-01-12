**The Max-Flow Min-Cut Theorem** states that in a flow network, the maximum amount of flow that can get from the source to the sink is equal to the total weight (or capacity) of the edges in the smallest (minimum capacity) cut.

Which intuitively makes sense, you'll only be able to get as much flow through as the tightest paths from A to B.

In general, the min-cut will have it's edges completely filled.

>![[Pasted image 20231104092857.png]]

---

In the context of identifying a minimum cut in a flow network after computing the maximum flow, we use the residual graph to determine which edges would be 'cut' to prevent any further flow from the source to the sink. A residual graph includes edges that have remaining capacity (where the flow can still be increased) after the maximum flow has been determined.

To find a minimum cut after you have established the maximum flow:

1. Start at the source and identify all nodes that are reachable in the residual graph using edges that have remaining capacity.
2. The cut consists of all edges that go from the set of reachable nodes to the set of unreachable nodes in the original graph, not the residual graph.