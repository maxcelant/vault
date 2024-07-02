### Summary
- StatefulSets solve the problem of managing unique, stateful pods with stable names and persistent storage, allowing replication.
- Stateless instances are replaceable like cattle, while stateful instances are unique like pets, needing consistent identity.
- Headless services provide unique DNS entries for each pod, enabling direct connections and communication.
- Persistent volume claims ensure data persistence, preventing loss during scaling or pod deletion.

### Problem Statement
- How do you create pods that have independent state and their own storage volumes, but can still be replicated by a replicaset?
- There are some tricks but none of them really provide a good way of doing this in k8s.
- stateful sets fix this problem. Where instances of an application need to be treated as "non-fungible" individuals where they have a stable name and state.

### Pets vs Cattle Analogy
- Stateless instances are like cattle, you dont really care about them individually and you dont name them. One can die, and another can be created without issue.
- Stateful instances are more important — like pets. When one dies, you can't just replace it. In the case of apps, the new instances need to have the same name and identity as the old one.

### StatefulSets
- When a stateful pod instance dies, the new on will get the same name, network identity and state as the one it's replacing.
- They can be scaled similar to replicationcontrollers and replicasets.
- Each pod created by a statefulset gets its own set of volumes/storage.
- Pods in stateful sets are given incremental index names (`A-0`, `A-1`, ...) because that makes them predictable.
- These pods need to retain their hostname as well, because you may want to work on a specific pod that has a specific state.

### Headless (Governing) Service
- All "headless" means is it does not have a stable IP address (cluster IP). When queried, it returns the IP addresses of the individual pods, allowing clients to connect directly to these pods.
	- _Think about it, if something is headless it means it doesn't come through a single source._
- In order to retain their hostnames, you need to create a governing headless service to provide the actual network identity to each pod.
- In this service, each pod gets its own DNS entry.
- So a pod in a statefulset might be reachable via `a-0.foo.default.svc.cluster.local`
- You can look up all the pods in a statefulset via SRV records for `foo.default.svc.cluster.local`.

### Persistent Volume Claims
- For every pod that statefulset creates, it also needs to create a persistent volume claim from a template that exists in the statefulset.

>![[Pasted image 20240609112334.png]]

- Scaling down deletes the pods, but not the claims. Because if it did, those volumes would be recycled and lost. We dont want that because if a pod gets accidentally deleted, we don't want its data to be lost.

### StatefulSet Manifest

```yaml
apiVersion: apps/v1beta1
kind: StatefulSet
metadata:
  name: kubia
spec:
  serviceName: kubia  // Name of headless service 
  replicas: 2
  template:
    metadata:
      labels:
        app: kubia
    spec:
      containers:
      - name: kubia
        image: luksa/kubia-pet
        ports:
        - name: http
          containerPort: 8080
        volumeMounts:
        - name: data
          mountPath: /var/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      resources:
        requests:
          storage: 1Mi
      accessModes:
      - ReadWriteOnce
```

- `volumeClaimTemplates` will be used to create a persistent volume claim for each pod. The names of the pvc for each pod become `<vc-template-name>-<pod-name>`

### SRV records
- These records point to the hostnames of the pods backing the headless service.
- This allows these stateful pods to discover and communicate with each other! 

### How StatefulSets Deal With Failures
- It won't create a new pod until it knows for certain the old one has stopped running.
- If a node's network goes down, the control plane may never know if the pod got actually deleted so you'll have to manually delete it.
- Don't do this unless you are 100% sure that the node is no longer running or reachable.

