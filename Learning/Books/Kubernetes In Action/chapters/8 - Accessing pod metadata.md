### Summary
- You can use the `downwardAPI` to get metadata about the Pod's environment through a volume or environment vars.'
- You can speak to the Kubernetes API from a Pod through a proxy.
- You can also authenticate and/or use an ambassador to communicate with it.
- For more complex tasks, you can use a dedicated kubernetes client.

### Intro to the Downward API
- The downward api allows us to send metadata about the pod and its environment through env variables or files (using `downwardAPI` volume).
- The downwardAPI is _not_ a REST endpoint that can be hit. Its just metadata about the environment which can be reached using env variables or volumes.

### Exposing metadata through env variables
- These are just a few things that can be looked at from the `downwardAPI`.
- `annotations` and `labels` cannot be exposed through environment variables because they can't be changed while the pod is alive.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: downward
spec:
  containers:
    env:
    - name: POD_NAME
      valueFrom:
        fieldRef:
          fieldPath: metadata.name
    - name: POD_NAMESPACE
      valueFrom:
        fieldRef:
          fieldPath: metadata.namespace
    - name: POD_IP
      valueFrom:
        fieldRef:
          fieldPath: status.podIP
    - name: NODE_NAME
      valueFrom:
        fieldRef:
          fieldPath: spec.nodeName
```

### Exposing metadata through volume
- `path` refers to the file name in which the metadata will be stored.
- If you want to expose as containers resource field, then you need to specify the name of that container.
```yaml
apiVersion: v1
kind: Pod
spec:
  containers:
    volumeMounts:
    - name: downward
      mountPath: /etc/downward
  volumes:
  - name: downward
    downwardAPI:
      items:
      - path: "podName"
        fieldRef:
          fieldPath: metadata.name
      - path: "podNamespace"
        fieldRef:
          fieldPath: metadata.namespace
      - path: "labels"
        fieldRef:
          fieldPath: metadata.labels
      - path: "annotations"
        fieldRef:
          fieldPath: metadata.annotations
      - path: "containerCpuRequestMilliCores"
        resourceFieldRef:
          containerName: main
          resource: requests.cpu
          divisor: 1m
      - path: "containerMemoryLimitBytes"
        resourceFieldRef:
          containerName: main
          resource: limits.memory

```

### Kubernetes API
- When you need metadata other than that of the Pod, you will need to use the Kubernetes API.
- You need to use a proxy to talk to the k8s API.
- It allows you to learn about how resources can be used.

```bash
$ curl http://localhost:8001/apis/batch/v1
```

- For instance this can show you information about `batch/v1`. Giving information about `Jobs` like what operations can be done on that resource, etc.

```bash
$ curl http://localhost:8001/apis/batch/v1/jobs
```

- Going further, you can look at the jobs running in your cluster.
- You can also look at a specific job (or any resource) if you have it's `name`.
- You can get the exact same info by doing: `kubectl get job my-job -o json`

### Talking to API Server from a Pod
- For a Pod to talk to the API server, you need to authenticate the communication.
- To find the k8s API you can do `kubectl get svc` and look for the `kubernetes` service.
- You can also do `grep` the `KUBERNETES_SERVICE` from within the pod in the `env` folder.

```
root@curl:/# env | grep KUBERNETES_SERVICE

KUBERNETES_SERVICE_PORT=443
KUBERNETES_SERVICE_HOST=10.0.0.1
KUBERNETES_SERVICE_PORT_HTTPS=443
```

- You can also point to `curl https://kubernetes:443`
- To verify you are talking to the API server, you need to check if the server's cert is signed by the CA.
- The `ca.cert`, `token` and `namespace` can all be found in a secret volume attached to every Pod.
- `namespace` contains the namespace that the Pod is running in.

>![[Pasted image 20240602174900.png]]

### Using an ambassador container
- You can use this to communicate with the k8s API securely.
- You run an ambassador container along side your app container and connect your app to it. Then let the ambassador talk to the API server.
- `kubectl proxy` binds to port 8001. Since both containers share a [[Loopback and Network Interface|network interface]], this works!

>![[Pasted image 20240602180520.png]]

### Using a client library
- If you plan on doing more than simple API requests, its better to use a dedicated k8s API client library.