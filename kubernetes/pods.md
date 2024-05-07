Represent the smallest deployable unit in Kubernetes.

Pods have some interesting attributes:
- Has one or more containers working together that share resources (but usually one.) 
- Kubernetes can't manage containers directly, hence pods.
- IP addresses are associated with pods, not individual containers.
- Containers in the same pod share `localhost` and volumes.
- When scaling occurs, we normally scale the number of pods.

##### `Benefits`

^fa651a

- **Lifecycle management**: Kubernetes can manage when pods are created and destroyed based on the desired state of your system.
- **Scaling and load balancing**: By abstracting the idea of a "[[Kubernetes/services|service]]" from the specific containers that run the service, Kubernetes can easily scale services by creating or destroying pods, and can distribute traffic to those pods.
- **Isolation**: Pods allow for isolation between different parts of your application. If different parts of your application are running in different pods, they can't directly interfere with each other.