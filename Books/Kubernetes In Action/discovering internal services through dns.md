---
tags:
  - service
  - commands
  - dns
---
- The `kube-system` namespace has a pod called `kube-dns`, which runs a DNS server.
- All other pods running in the cluster are automatically configured to use it.
- Any DNS query performed by a process running in a pod will be handled by k8s own DNS server, which knows all the services running in your system.
- Each service gets a DNS entry in the internal DNS server, and client pods that know the name of the service can access it through its fully qualified domain name (FQDN) instead of resorting to environment variables.

```
backend-database.default.svc.cluster.local
```

- `backend-database`: name of the service
- `default`: namespace the service is defined in
- `svc.cluster.local`: configurable cluster domain suffix.

If a pod wanted to communicate with that service, all three of these work:
```
root@kubia-3inly:/# curl http://backend-database.default.svc.cluster.local
root@kubia-3inly:/# curl http://backend-database.default
root@kubia-3inly:/# curl http://backend-database
```



