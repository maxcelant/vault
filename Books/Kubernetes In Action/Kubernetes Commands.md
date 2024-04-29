---
tags:
  - minikube
  - commands
---
**Starting Minikube**
```bash
minikube start
```

**Displaying Cluster Info**
```bash
kubectl cluster-info
```

**Listing Cluster Nodes**
```bash
kubectl get nodes
```

**Additional Details Of An Object**
```bash
kubectl describe node <node-name>
```

**Deploying Node.js App**
```bash
kubectl run kubia --image=luksa/kubia --port=8080 --generator=run/v1
```

**Listing Pods**
```bash
kubectl get pods
```

**Creating a Service Object**
```bash
kubectl expose rc kubia --type=LoadBalancer --name kubia-http
```

**Listing Services**
```bash
kubectl get services
```



