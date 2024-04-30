---
tags:
  - commands
  - pods
---
```bash
$ kubectl port-forward kubia-manual 8888:8080
```

```bash
$ curl localhost:8888
```

- You can do this to talk to a specific pod without going through a service.
- This is good for debugging purposes.
> ![[Pasted image 20240429100907.png]]