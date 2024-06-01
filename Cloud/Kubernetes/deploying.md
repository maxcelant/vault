#### `General Template`
```bash
kubectl create <resource-type> <resource-name>
```

- Simply creates a single pod named `pingpong` using an `alpine` image with the custom command to ping `1.1.1.1`.
```bash
kubectl run pingpong --image alpine ping 1.1.1.1
```

- Creates a deployment, replicaset, and pod.
	- **Deployments** provide higher level features like scaling, rolling updates and rollbacks.
	- **ReplicaSets** guarantee that a certain number of pods are always running.
	- **Pods** allow you to run containerized applications
```bash
kubectl create deployment pingpong --image alpine -- ping 1.1.1.1
```

