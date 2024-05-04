---
tags:
  - dns
  - service
  - endpoints
  - yaml
---
- If you want to connect to outside services, you will need to create an `Endpoints` resource. 
- You want to make sure your `Endpoints` resource has the same name as your `Service`.

>![[Pasted image 20240501100911.png]]

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-service
spec:
  ports:
    - port: 80
```

```yaml
apiVersion: v1
kind: Endpoints
metadata:
  name: external-service
subsets:
  - addresses:
    - ip: 11.11.11.11
    - ip: 22.22.22.22
    ports:
      - port: 80
```

- You can also create an `externalName` to point to a specific public api.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-service
spec:
  type: ExternalName
  externalName: someapi.somecomapany.com
  ports:
    - port: 80
```