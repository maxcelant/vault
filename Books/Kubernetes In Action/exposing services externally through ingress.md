---
tags:
  - ingress
  - service
  - networking
  - yaml
---
- Unlike a `LoadBalancer` service which requires its own load balancer with its own public IP address.
- Ingress only requires one.
- When a client sends a http request, the host and path in the request determine which service the request gets forwarded to.

> ![[Pasted image 20240501160830.png]]

- You need an Ingress Controller for this to work.

```yaml
apiVersion: v1
kind: Ingree
metadata:
  name: kubia
spec:
  rules:
    - host: kubia.example.com
      http:
        paths:
          - path: /
            backend:
              serviceName: kubia-nodeport
              servicePort: 80
```

- This defines a single rule that makes sure that any requests from `kubia.example.com` will be sent to `kubia-nodeport` at port `80`.
- 