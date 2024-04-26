- [[Single Source SP]] Algorithm.
- Maintains a set of unvisited nodes and continuously selects the node with the smallest distance to the source, then explores its neighbors.

---

1. **Initialize**:
    - Set the distance to the source node as 0, and the distance to all other nodes as infinity.
    - Set the source node as the current node.
    - Create a set of unvisited nodes.
2. **Iterate**:
    - For the current node, consider all its unvisited neighbors and calculate their tentative distances from the source. If the newly calculated tentative distance is less than the current assigned value, update the distance.
    - Mark the current node as visited.
    - Select the unvisited node with the smallest distance (from the source), set it as the new current node, and return to the previous step.
3. **Terminate**:
    - The algorithm terminates when all nodes are visited. At this point, the shortest path from the source node to every other node has been determined.

---

```python
import heapq

def dijkstra(graph, start):
	shortest_path = {}
	for node in graph:
		shortest_path[node] = float('infinity')
	shortest_path[start] = 0

	priority_queue = [(0, start)] # (distance, node)

	while priority_queue:
		current_distance, current_node = heapq.heappop(priority_queue)

		# Make sure most up-to-date distance is used
		if current_distance > shortest_path[current_node]:
			continue

		for neighbor, weight = graph[current_node]:
			distance = current_distance + weight

			# If new path is shortest than known path
			if distance < shortest_path[neighbor]:
				shortest_path[neighbor] = distance
				heapq.heappush(priority_queue, (distance, neighbor))
	
	return shortest_path
		
```