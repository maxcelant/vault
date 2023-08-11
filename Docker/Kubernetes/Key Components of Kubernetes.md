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

#### Pods
Meant to run a single instance of a given application / container. It can also contain multiple containers that are tightly coupled and need shared resources.

When you run multiple containers within a single pod, all containers within that pod share the same network namespace. This means they share the same IP address and port space, and can communicate with each other via `localhost`. They also share the same volume mounts, and can communicate with each other using inter-process communication (IPC).

When scaling occurs, we normally scale the number of pods in a worker node. That being said, if your cluster runs out of resources due to adding more pods, you might also need to add more nodes.

**Benefits of Pods**
- Lifecycle management: Kubernetes can manage when pods are created and destroyed based on the desired state of your system.
- Scaling and load balancing: By abstracting the idea of a "service" from the specific containers that run the service, Kubernetes can easily scale services by creating or destroying pods, and can distribute traffic to those pods.
- Isolation: Pods allow for isolation between different parts of your application. If different parts of your application are running in different pods, they can't directly interfere with each other.