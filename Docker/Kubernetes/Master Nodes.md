Responsible for maintaining the desired state of the cluster, like which applications or services are running and which nodes they run on. In a production environment, it's recommended to have multiple master nodes for high availability. This ensures that your cluster remains operational even if one of the master nodes fails.

### etcd
Kubernetes' backing store for all cluster data. Ultimate source of truth for the cluster, storing the full configs and state of the cluster.

Think of etcd as the memory of the Kubernetes cluster. Whenever there's a change in the cluster (like a new pod is created, an old one is deleted, a service is updated, etc.), that change is stored in etcd. This means that the current state of your whole Kubernetes cluster is stored in etcd.

### kube-apiserver
The central management entity receiving all API requests for operations (like starting or stopping pods, scaling the number of replicas of a deployment, and so forth). Any component that needs to interact with the cluster does so by interacting with the apiserver.

For **example**, if you sent a request to create a new Pod, the kube-apiserver would receive that request, validate it, and then update the state of the system in etcd to reflect that a new Pod should be created. The kube-apiserver itself doesn't create the Pod.

### kube-scheduler
Watches for newly created pods that have no node assigned, and selects a node for them to run on. It takes into consideration individual and collective resource requirements, quality of service requirements, hardware/software/policy constraints, affinity and anti-affinity specifications, data locality, inter-workload interference, and deadlines.

So, in essence, kube-scheduler's job is to decide which pod goes on which node. It doesn't actually put the pod on the node, it just makes the decision. The actual job of starting the pod on the selected node is done by kubelet, the agent running on each node.

### kube-controller-manager
In the Kubernetes "city", kube-controller-manager oversees a number of different "services" (controllers), each responsible for a specific aspect of the cluster. These controllers include the node controller, which reacts when nodes go down, the replication controller, which maintains the correct number of pods for every replication controller object in the system, and the service account and token controllers, which create default accounts and access tokens for new namespaces, among others.

So, kube-controller-manager's job is to start and manage these various controllers. It's constantly checking the state of the cluster and making changes as needed to drive the current state towards the desired state. For example, if a pod goes down, the kube-controller-manager would notice this and instruct the system to start a new pod to replace it.

### cloud-controller-manager
The cloud-controller-manager handles the interactions that are specific to your particular cloud provider. This includes node controller for checking the cloud provider to see if a node has been deleted in the cloud after it stops responding, route controller for setting up routes in the underlying cloud infrastructure, and service controller for creating, updating and deleting cloud provider load balancers.

## Example
1. The kube-controller-manager detects that a pod went down (the current state of the system does not match the desired state defined in the configuration).
2. The kube-controller-manager communicates this state change to the kube-apiserver, which is the main control hub for the entire Kubernetes system.
3. The kube-apiserver then communicates this state change to the kube-scheduler. The kube-scheduler's job is to determine on which node the new pod should be created.
4. Once the kube-scheduler decides where to place the pod, it updates the kube-apiserver with this information.
5. The kube-apiserver communicates this decision to the kubelet running on the selected node. The kubelet's job is to ensure that containers are running in a pod.
6. Finally, the kubelet interacts with the container runtime (like Docker) on its node to start the new pod.
