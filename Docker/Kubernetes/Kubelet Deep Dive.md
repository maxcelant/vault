Essential component that runs on every worker node in the cluster. Ensures that containers are running in a pod. Takes PodSpecs (which are descriptions of desired state) that are provided in various ways and ensures that containers described in those PodSpecs are running and healthy.

#### PodSpecs
Provided via Kubernetes API server (usually in response to a user command like `kubectl run`) or provided to the kubelet directly by placing them in a specific directory on the node. 

It's important to note that each pod has it's own PodSpec. When more pods are created of the same type, they still get their own PodSpec file.

This is typically a YAML or JSON file:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  containers:
  - name: my-app
    image: my-app:1.0
    ports:
    - containerPort: 8080
    resources:
      limits:
        cpu: "1"
        memory: "1Gi"
      requests:
        cpu: "500m"
        memory: "500Mi"
```

#### Node Status
Maintains a report of the node's health and sends that report to the master node. Provides things like how much resources are available and which pods are running on the node.

#### Resource Management
Responsible for managing resources on the node. Ensures all pods get the resources they need (according to limits you set).

#### Health Checks
Determines if a pod is running correctly. Kubelet can restart it, if it's not.

#### Pod Lifecycle
Manages lifecycle of a pod. Starts, stops and restarts containers as needed to maintain the desired state.

