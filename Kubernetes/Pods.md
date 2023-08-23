Meant to run a single instance of a given application / container. It can also contain multiple containers that are tightly coupled and need shared resources.

When you run multiple containers within a single pod, all containers within that pod share the same network namespace. This means they share the same IP address and port space, and can communicate with each other via `localhost`. They also share the same volume mounts, and can communicate with each other using inter-process communication (IPC).

When scaling occurs, we normally scale the number of pods in a worker node. That being said, if your cluster runs out of resources due to adding more pods, you might also need to add more nodes.

**Benefits of Pods**
- Lifecycle management: Kubernetes can manage when pods are created and destroyed based on the desired state of your system.
- Scaling and load balancing: By abstracting the idea of a "service" from the specific containers that run the service, Kubernetes can easily scale services by creating or destroying pods, and can distribute traffic to those pods.
- Isolation: Pods allow for isolation between different parts of your application. If different parts of your application are running in different pods, they can't directly interfere with each other.