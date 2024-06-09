### Summary


### Architecture
- On control plane:
	- etcd
	- API server
	- scheduler
	- controller manager
- On worker nodes:
	- kubelet
	- kubernetes service proxy
	- container runtime
- Communication by components and api server are usually initiated by the components.
- Most of the resources (expect for kubelet) run as pods in the `kube-system` namespace.
>![[Pasted image 20240608215919.png]]
### etcd
- fast consistent, distributed, key-value store.
- The API server is the only thing that talks to etcd.
- keys in etcd look like directories, but they are just strings really. like `/registry/configmaps/...`
- Uses RAFT algorithm to achieve consistent state.

### RAFT Algorithm
- Majority rules. If the cluster goes into a "split-brain" situation, the split with more etcd instances will have the true state. 
- Usually there is one "leader" that handles requests and coordinates updates to cluster state.
- The side with minority becomes read only until all instances are synced back up to a new state.