---
tags:
  - service
  - high-level
---
- `Services` are used to expose a group of pods through a single IP address.
- It acts as a proxy/load-balancer.
- Similar to other resources, you use a label selector to dictate which pods it should proxy.

>![[Pasted image 20240430131957.png]]

- You can define names for your ports in your Pod manifest and then use those names in your `Service`.
	- This is handy because then you dont have to change the port numbers in both places when you want to change them in your Pod.


**Example**
```yaml
apiVersion: v1
kind: Service
spec:
  containers:
    - name: kubia
      ports:
        - name: http
          containerPort: 8080
```

```yaml
apiVersion: v1
kind: Service
spec:
  ports:
    - name: http
      port: 80
      targetPort: http
```