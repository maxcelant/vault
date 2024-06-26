It's an agent that lives within a [[nodes|node]] that talks to the [[api server]] server. 

The Kubelet has a handful of responsibilities:
- Registering a node to the cluster.
- Watches API server for [[podspecs]] assigned to its node.
- Ensures that all the containers that should be running are running.

#### `In-Depth`
- Controls the lifecycle of [[pods|pods]] within its node. It communicates constantly with the Kubernetes API to ensure the latest desired state of each pod.
- Communicates directly with the container runtime (CRI). 
- Gathers the resources of the containers running (like CPU, memory, network, etc) and reports them to the API server.
- Periodically probes containers to perform 'liveness' checks.
- Logs it's operations in a detailed introspection endpoint.



