>![[Pasted image 20231103222629.png]]

- The residual network is a transformed version of the original network that represents the remaining capacity for flow after considering the current flow.
- While looking at a particular augmenting path P, the bottleneck capacity is the smallest residual capacity of the edges along that path. This capacity limits how much additional flow can be sent along that path.
- If you have a flow �f and you find an augmenting path �P in the residual network, you can increase the flow �f along that path by the bottleneck capacity.

The pseudocode `AUGMENT(f, c, P)` describes the steps to update the flow in the network:
1. Find the bottleneck capacity δ of the augmenting path P.
2. For each edge e in the path P:
    - If e is a forward edge (part of the original network), increase the flow f(e) by δ.
    - If e is a reverse edge (not part of the original network but part of the residual network to allow "undoing" flow), decrease the flow f(e_reverse​) by δ.
3. Return the updated flow f.