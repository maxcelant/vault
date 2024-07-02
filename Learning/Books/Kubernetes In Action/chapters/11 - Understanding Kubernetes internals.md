### Summary
- The control plane consists of etcd, API server, scheduler, and controller manager, while worker nodes have kubelet, kube-proxy, and container runtime.
- etcd is a fast, consistent, distributed key-value store accessed only by the API server using the RAFT algorithm.
- The API server provides a RESTful interface for CRUD operations on etcd and handles client requests through authentication, authorization, and admission control.
- The scheduler assigns pods to nodes based on resource availability and affinity, while kubelet deploys and manages these pods on each node.
- kube-proxy manages iptables rules for service traffic routing, and CNI plugins enable node-to-node communication.
- Pods communicate through a NAT-less network set up by CNI plugins, using virtual ethernet pairs and network bridges on each node.

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

### RAFT algorithm
- Majority rules. If the cluster goes into a "split-brain" situation, the split with more etcd instances will have the true state. 
- Usually there is one "leader" that handles requests and coordinates updates to cluster state.
- The side with minority becomes read only until all instances are synced back up to a new state.

### API Server
- A RESTful API that can perform CRUD operations on the etcd.
- An interface for querying and modifying the cluster state.
- `kubectl` is one of the clients we are familiar with using to communicate to the apiserver.
- A client request goes through 4 main stages.
	- Authentication: Figures out who you are.
	- Authorization: Figures out if you can do what you want.
	- Admission Control: Modify resources for different reasons, like init missing fields or overriding them.

>![[Pasted image 20240609094141.png]]

- The API server is _observed_ by other components. So changes to a resource by the API server may alert another resource that is interested in that change.
- For instance, if a resource is created, changed or deleted, the control plane component is notified.
- Every time an object is updated, the server sends the new version of the object to all connected clients that are subscribed to it.

### Scheduler
- All the scheduler does is update the pod definition through the API server.
- The kubelet (who watches the API server for updates) is the one who actually deploys the pod.
- It first finds _acceptable pods_ by looking at hardware resources, pod affinity and more.
- It then picks the best option from the bunch.

### Controllers running in the Controller Manager
- The controllers do the job of converging to the desired state as specified in the resources deployed through the API server.
- There is a controller for each resource, to basically manage it.
- ★ "Resources are _descriptions_ of what should be running in the cluster, Controllers are the **_active_** kubernetes components that perform the actual work as a result of the deployed resources."
- Each controller subscribes to the API server for the resources they are responsible for. (Using "watch" mechanism).
- Keep in mind that controllers post the api server the same way a user would.

### Controllers
- **ReplicaSet Controller**: It sees that the desired pod state is not met, it creates new Pod manifests and posts them to the API server. Then it lets the scheduler and kubelet do their jobs.
- **Deployment Controller**: It works by creating or removing replicasets.
- **Namespace Controller:** When a namespace is deleted, all the resources are also deleted.
- **Endpoints Controller**: Keeps the endpoints list constantly updated with the IPs and ports of pods matching the label selector.

### Kubelet
- Registers the node its running on by creating a Node resource.
- Monitors the API server for pods that have been scheduled to its node.
- It then starts those Pod's containers.
- It also monitors all the containers and reports their status to the api server.
- Kubelet is the thing running the container liveness probes and restarts then when they fail.
- It can also run containerized versions of the control plane.

### kube-proxy
- One kube-proxy runs on each node.
- The kube-proxy watches for changes to services using the api server's watch mechanism and updates the [[iptables]] rules depending on the ips of the pods. 
- iptables perform the actual load-balancing.

### How DNS server works
- All pods use the cluster's internal DNS by default.
- kube-dns pod watches for changes to services and endpoints and updates the dns records with every change.

### How Ingress controllers work
- Its a [[Reverse Proxy]].
- Watches for changes in ingress, services, and endpoints resources and updates the config of the proxy server (e.g. nginx) accordingly.
- It does **not** involve iptables, the reverse proxy handles the traffic in this case.
- It routes directly to the Pods and does not go through services at all.

### Event resource
- The control plane and kubelet emit Events.
- `kubectl get events --watch` to retrieve events as they occur.

### Understanding what a running Pod is
- A "pause" container is created when a Pod is created on a Node.
- This container is what holds all the containers of a Pod together!
- It serves as an infrastructure container so that the containers of a Pod share the same network and [[Linux Namespace|linux namespace]].
- The lifecycle of this Pod is tied to that of the other containers in the Pod.

### Inter-pod networking
- It's [[NAT]]-less and each Pod gets its own unique IP address.
- This is setup by a Container Network Interface (CNI) plugin.
- For communication between Pods to work, the IPs must remain consistent, hence the NAT-less.
- Pods talking to outside services does have NAT.
- Pods on a node are connected to the same bridge through **_virtual ethernet interface pairs_**.

>![[Pasted image 20240622132025.png]]

- One interface of the pair remains in the host's namespace (node) listed `vethXXXX`. The other is moved into the "pause" container's networking namespace and renamed `eth0`.
- These work like two ends of a pipe.
- The interface of the host's network namespace is attached to a network bridge.
- So if pod A sends a network packet to pod B, the packet first goes through pod A’s veth pair to the bridge and then through pod B’s veth pair. All containers on a node are connected to the same bridge, which means they can all communicate with each other.
- For each pod on a node, there is one network interface (the host end of the veth pair) in the host's network namespace that connects to the network bridge.

>![[Pasted image 20240622132855.png]]

- Connecting between nodes means connecting the node bridge to the physical network adapter of the node.
- Then the connection travels "over the wire" to the other node.
- It's also worth noting that each node has a certain IP range for its pods so that there is no overlap.

### Container Network Interface (CNI)
- They are the layer of network that allows for node-to-node communication.

### How Services are implemented
- The service IP isn't real. Its just used by the iptables to know "when you see IP A, re-route that to pod IPs B-Z". That's why it isn't pingable.
- kube-proxy uses iptables rules to redirect packets destined for the service IP and reroute them to one of the pod ips backing the service.

>![[Pasted image 20240622133945.png]]

### Running highly available clusters
- Leader election means that one of them is doing stuff while the others are inactive.
- It can also mean that one is performing the writes while the others are readonly.
- Its normal to have multiple instances of the control plane, with only one being active.
- They choose who is leader by racing to see who is the first to put that title in their `metadata.annotations`.
- It uses [[Optimistic Concurrency|optimistic concurrency]] to do this safely.

