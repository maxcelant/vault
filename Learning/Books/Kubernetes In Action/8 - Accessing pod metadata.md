### Intro to the Downward API
- The downward api allows us to send metadata about the pod and its environment through env variables or files (using downwardAPI volume).
- The downwardAPI is _not_ a REST endpoint that can be hit. Its just metadata about the environment which can be reached using env variables or volumes.

### Exposing metadata through env variables
- These are just a few things that can be looked at from the downwardAPI.
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