---
tags:
  - service
  - networking
  - yaml
---
- When making external connections, sometimes the node you go through may not end up being the same one that hosts the pod you connect to.
- You can stop this unnecessary network hop by doing:

```yaml
spec:
  externalTrafficPolicy: Local
```

- Be aware that this may mess up the load balancing.