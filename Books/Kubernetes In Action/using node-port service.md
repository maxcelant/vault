---
tags:
  - node-port
  - service
  - yaml
---
```yaml
apiVersion: v1
kind: Service
metadata:
  name: kubia-nodeport
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 808
      nodePort: 30123
```

- This service will be accessible through port `30123` of each of your cluster nodes.
- So the service is accessible at:
	- `<Node-IP>:30123` or `<CLUSTER-IP>:80`
- Any incoming connection to one of those ports will be handled by the service and redirected to a randomly selected pod.
- It may be a pod that is not even running on the same node that the connection was made on.
- The reason we put a load balancer in front of the nodes is so that if one node goes down, we dont lose a connection from outside. 

>![[Pasted image 20240501154427.png]]