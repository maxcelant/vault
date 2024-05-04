---
tags:
  - dns
  - service
---
- Useful if you need to expose your frontend app to the outside world.
- You can set the service type to `NodePort`
	- each cluster node opens a port on the node itself. 
	- Redirects traffic on that port to the underlying service.
- You can set the service type to `LoadBalancer`
	- Makes service accessible through dedicated load balancer.
	- Provisioned from the cloud infrastructure that k8s is running on.
- Creating an `Ingree` resource.
	- Very different, operates at the HTTP level.  



