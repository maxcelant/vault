![[Pasted image 20230926102442.png]]
#### Nodes
Single server in the Kubernetes cluster.
- **[[kubelet]]:** Kubernetes agent running on nodes that connects to the API server, reports the node status, and obtains the list of containers to run.
- **kube-proxy:** Necessary but insufficient network component
- Container Engine (typically Docker)
#### Control Plane / Master
Set of containers that manage the cluster. This is commonly a dedicated node. Usually replicated for redundancy. On some distributions, the control plane is invisible.
- **[[etcd]]:** Distributed storage system for key-value pairs.
- **[[api server]]:** How we issue orders to Kubelet to the cluster and talk to it.
- **[[Cloud/Kubernetes/scheduler]]:** Controls when and where the containers are placed on the nodes in objects called Pods.
- **[[controller manager]]:** Tries to get it's current state to the state you've asked for.
- **Core DNS:** Flexible and extensible DNS server that can be used in Kubernetes to provide name resolution for services within the cluster.