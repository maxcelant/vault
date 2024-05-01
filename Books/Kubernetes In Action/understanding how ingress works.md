---
tags:
  - ingress
  - networking
  - controller
---
1. Client performs DNS lookup of `kubia.example.com`.
2. DNS server (or local operating system) returned the IP of the Ingress controller.
3. Client sends HTTP request to ingress controller and specified `kubia.example.com` in the `Host` header.
4. From the header, controller determined which service the client is trying to access
5. Looked up the pod IPs through the `Endpoints` object associated with the service.
6. Forwarded the client's request to one of the pods.

```ad-note
The Ingress controller did NOT forward the request to the service. It only used it to select a pod.
```

