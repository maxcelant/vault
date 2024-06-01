Responsible for maintaining the desired state of the cluster. In a production environment, it's recommended to have multiple master nodes for high availability.

Has five main components:
- [[etcd]] - Backing store for all cluster data.
- [[api server]] - Central management entity receiving all API requests.
- [[Cloud/Kubernetes/scheduler]] - Decides which pod goes on which node.
- [[controller manager]] - Start and manage various controllers.
- [[cloud controller manager]] - 

#### Example
1. The `Controller Manager` detects that a pod went down (the current state of the system does not match the desired state defined in the configuration).
2. The `Controller Manager` communicates this state change to the `API Server`, which is the main control hub for the entire Kubernetes system.
3. The `API Server` then communicates this state change to the `Scheduler`. The Scheduler's job is to determine on which node the new pod should be created.
4. Once the `Scheduler` decides where to place the pod, it updates the `API Server` with this information.
5. The `API Server` communicates this decision to the kubelet running on the selected node. The [[kubelet|kubelet]]'s job is to ensure that containers are running in a pod.
6. Finally, the kubelet interacts with the container runtime (like Docker) on its node to start the new pod.
