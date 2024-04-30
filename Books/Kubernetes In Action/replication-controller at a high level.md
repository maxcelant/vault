---
tags:
  - service
  - replicationcontroller
  - high-level
---
- It's job is to make sure that there's always the instance of pods alive that you wanted. (more or more replications of a pod).
- We now use [[replica-sets at a high level|ReplicaSets]]
- This is what creates the actual pod object.
- To make a pod accessible from outside the cluster, we tell Kubernetes to expose all pods managed by that `ReplicationController` as a single service.
- Think of it as a cookie cutter, you can change the cookie shape and it will start creating those types of cookies.

>![[Pasted image 20240418223533.png]]

There are three important aspects:
- **_label selector_** dictates which pods are in the ReplicaController's scope.
- **_pod template_** are used when creating new pod replicas.
- **_replica count_** specifies the desired number of pods should be running.

```ad-tip
Don’t specify a pod selector when defining a ReplicationController. Let Kubernetes extract it from the pod template. This will keep your YAML shorter and simpler.
```