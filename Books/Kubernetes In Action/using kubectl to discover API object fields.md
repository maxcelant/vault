---
tags:
  - commands
  - kubectl
---
```bash
kubectl explain pods
```

```
DESCRIPTION:
Pod is a collection of containers that can run on a host. This resource

             is created by clients and scheduled onto hosts.

FIELDS:
   kind      <string>

     Kind is a string value representing the REST resource this object
     represents...

   metadata  <Object>
     Standard object's metadata...

   spec      <Object>
     Specification of the desired behavior of the pod...

status <Object>  
Most recently observed status of the pod. This data may not be up to date...
```

