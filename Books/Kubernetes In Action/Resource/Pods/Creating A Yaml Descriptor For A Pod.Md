---
tags:
  - pods
  - yaml
---
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: kubia-manual
spec:
  containers:
    - image: luksa/kubia
      name: kubia
      ports:
        - containerPort: 8080
          protocol: TCP
```

- Specifying ports in a pod is purely informational.
- If a pod is accepting connections through a port bound to the `0.0.0.0` address, other pods can always connect to it.
- Though you should so that everyone using your cluster can see what ports each pod exposes.
- 