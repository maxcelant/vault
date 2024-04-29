---
tags:
  - pods
---
- Each container in a pod share the same set of linux namespaces so that they can communicate within the pod.
- This means that they share the same IP addresses and port spaces.
	- So any intra-pod communication needs to be careful not to have port conflicts.
	- This does **not** matter for pod-to-pod communication though.
- The filesystem of each container is still isolated though.
- Containers within the same pod can communicate through `localhost`.