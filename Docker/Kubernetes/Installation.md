1. Install the Kubernetes CLI
```bash
brew install kubectl
```

2. Install `minikube`
```bash
brew install minikube
```

3. Starts your k8s cluster
```bash
minikube start
```

4. Verifies that cluster is running
```
kubectl get nodes
```

When you start Minikube, it spins up a virtual machine (VM) on your local machine and installs a single-node Kubernetes cluster on that VM.

5. If you want to stop the cluster
```bash
minikube stop
```

6. To delete the cluster
```bash
minikube delete
```

