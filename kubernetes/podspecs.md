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