Open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. 

- **Service discovery and load balancing:** Kubernetes can expose a container using DNS name or their own IP. If container traffic is high, k8s is able to load balance.
- **Storage orchestration:** Kubernetes allows you to automatically mount a storage system of your choice, like local storages, public cloud providers and more.
- **Automated rollouts and rollbacks:** You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate. *
- **Automatic bin packing:** k8s allows you to specify how much CPU and memory each container needs.
- **Self-healing:** Kubernetes restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don't respond to your health checks and doesn't advertise them to clients until they are ready to serve. 

#### Kubernetes Architecture
- **Master Node:** Responsible for managing the Kubernetes cluster. It coordinates all activities in your cluster: scheduling applications, maintaining applications' desired state, scaling applications, and rolling out new updates.
- **Worker Nodes:** The machines that run your app and cloud workflows. Each worker node contains a Kubelet, which is an agent for managing the node and communicating with the Kubernetes master. Also includes services necessary to run Docker containers, managed by the Kubelet.
- **Pods:** Simples/smallest unit in Kubernetes object model that you create when you deploy. A Pod represents processes running on your cluster.
- **Services:** A way to expose your applications, running on a set of Pods, to the network, either inside your cluster or outside of it.

