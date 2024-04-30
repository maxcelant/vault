---
tags:
  - high-level
  - daemonsets
---
- `DaemonSets` are used when we want one pod running a specific container per every node in the cluster.
- Through `nodeSelectors`, you can also specify only nodes with that selector. 