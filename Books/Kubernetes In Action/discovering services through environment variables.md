---
tags:
  - commands
  - service
---
```
$ kubectl exec kubia-3inly env

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=kubia-3inly
KUBERNETES_SERVICE_HOST=10.111.240.1 
KUBERNETES_SERVICE_PORT=443
...
KUBIA_SERVICE_HOST=10.111.249.153 
KUBIA_SERVICE_PORT=80
```

- If you have a frontend pod that requires a backend pod, you expose the backend pod through a service called `backend-database` and then have the frontend pod look up its IP address and port through env vars.
	- `BACKEND_DATABASE_SERVICE_HOST` and `BACKEND_DATABASE_SERVICE_PORT`.
