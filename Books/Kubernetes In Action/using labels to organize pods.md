---
tags:
  - labels
  - pods
  - commands
  - yaml
---
- Labels are key-value pairs that can be attached to any k8s resource.
- Good for organizing into different categories like _release type_ and _app type_

>![[Pasted image 20240429101711.png]]

```diff
apiVersion: v1
kind: Pod
metadata:
  name: kubia-manual
  labels:
+    creation_method: manual
+    env: prod
spec:
  containers:
    - image: luksa/kubia
      name: kubia
      ports:
        - containerPort: 8080
          protocol: TCP
```

- You can view labels in a few different ways

```bash
$ kubectl get po --show-labels
$ kubectl get po -L creation_method,env
```

- You can also do things like modify and add labels to existing pods

```bash
$ kubectl label po kubia-manual creation_method=manual
$ kubectl label po kubia-manual-v2 env=debug --overwrite
```