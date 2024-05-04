---
tags:
  - labels
  - pods
  - nodes
  - yaml
---
- You can schedule pods to certain nodes using labels.
- You may want to do that if some nodes have certain hardware benefits like providing a GPU.

```diff
apiVersion: v1
kind: Pod
metadata:
  name: kubia-manual
spec:
+ nodeSelector:
+   gpu: true
  containers:
    - image: luksa/kubia
      name: kubia
      ports:
        - containerPort: 8080
          protocol: TCP
```

- You can also schedule a pod to a specific node using `kubernetes.io/hostname` and make the value the node name.