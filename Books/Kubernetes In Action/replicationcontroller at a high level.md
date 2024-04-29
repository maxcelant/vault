---
tags:
  - service
  - replicationcontroller
  - high-level
---

- It's job is to make sure that there's always the instance of pods alive that you wanted. (more or more replications of a pod)
- This is what creates the actual pod object.
- To make a pod accessible from outside the cluster, we tell Kubernetes to expose all pods managed by that ReplicationController as a single service.

>![[Pasted image 20240418223533.png]]

