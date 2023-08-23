```js
Cluster
│
├─ Master Node
│   └─ ...
├─ Worker Node
│   ├─ Pod
│   │   └─ Container
│   │       └─ Your Application
│   └─ Pod
│       └─ Container
│           └─ Another Application
└─ Worker Node
    └─ ...
```

#### Nodes
The smallest unit of computing hardware in Kubernetes. It can be a virtual machine or physical one. Each node is managed by the Master nodes and can run pods.

Each node runs:
- **Kubelet:** a process responsible for communicating between the worker and master node. It manages the pods and containers running on a machine.
- **Container:** a container runtime responsible for pulling the container image from the registry, unpacking the container, and running the application.

**Master Nodes** control and manage the entire cluster. They perform tasks like scheduling of pods, maintaining the desired state, updating configuration, and scaling.

**Worker Nodes** are where the applications (inside the pods) are running. They communicate and follow instructions from the master node.

