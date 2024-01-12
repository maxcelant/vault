---
tags:
  - "#DevOps"
---
The central management entity receiving all API requests for operations (like starting or stopping pods, scaling the number of replicas of a deployment, and so forth). Any component that needs to interact with the cluster does so by interacting with the apiserver.

- Kubernetes API is mostly RESTful
- Allows you to create, read, update and delete _resources_
- A few common resource types are:
	- **[[Nodes]]** - a physical or virtual machine in the cluster
	- **[[Pods]]** - Group of containers running together on a node
	- **[[Cloud/Kubernetes/Services]]** - Stable network endpoint to connect to one or multiple containers

For **example**, if you sent a request to create a new Pods, the kube-apiserver would receive that request, validate it, and then update the state of the system in etcd to reflect that a new Pod should be created. The kube-apiserver itself doesn't create the Pod.

