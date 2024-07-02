### Summary
- Services provide load-balanced communication to pods based on labels, accessible within or outside the cluster.
- Use `Endpoints` to connect to external services and `Ingress` for exposing services to external clients with path-based routing.
- Readiness probes ensure a pod is ready to handle requests before traffic is sent to it.
- Headless Services, with `clusterIP` set to `None`, directly expose pod IPs without an assigned service IP.

### Creating Services

- Allow you a load-balanced way to communicate to all pods of a certain label.
- Use label selectors to decide which pods are part of the service.
- `CLUSTER-IP` means it's only accessible within the cluster, not outside.
- Services are meant to expose a group of pods to another group of pods _within the cluster and outside_.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: kubia
spec:
  ports:
    - name: http
      port: 80           // Port this service is available on
      targetPort: 8080   // Container port the service will forward to
    - name: https
      port: 443          // Port this service is available on
      targetPort: 8443   // Container port the service will forward to
      
  selector:
    app: kubia  // All pods with app=kubia will be part of service
```

- You can hit the service from a pod using `exec`:

```bash
kubectl exec <pod name> -- curl -s http://<SERVICE IP>
```

- If you specify port names of the Pod manifest, then you can reference those port names  in the service. This is helpful so that when you change one number, you dont need to change the other.
- You can discover service IPs through env variables, DNS, or FQDN.

### Connecting to Services via FQDN

```
backend-database.default.svc.cluster.local
```

- `backend-database` is the service name.
- `default` is the namespace.
- These are the only two things that are necessary to hit the service.

```
kubectl exec -it <pod name> bash
...
root@kubia-3inly:/# curl http://kubia.default
> You’ve hit kubia-3inly
```

### Connecting to Services outside of the cluster
- You can create an `Endpoints` resource where you establish a set of IPs to hit.
- Couple that with a service resource to talk to an outside service.

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
spec:
  type: ExternalName
  externalName: someapi.somecompany.com
  ports:
    - port: 80
subsets:
  - addresses: 
    - ip: 11.11.11.11
    - ip: 22.22.22.22
```

- You can use direct IP addresses or FQDN of the service.

### Exposing services to external clients using Ingress
- You can make services accessible externally using `NodePort`, `LoadBalancer` or `Ingress`.
- A `NodePort` service makes the service accessible from outside the cluster.
- When a client sends a request to an Ingress, the host and path in the request determines which service the request is forwarded to.
- Ingress is just a filter for the given client request.

- Notice how we can configure different hosts as well as different paths.
- You can also enable TLS (Transport Layer Security), which encrypts communication from the client to the ingress controller (_Page 179_).

```yaml
apiVersion: v1
kind: Ingress
metadata:
  name: kubia
spec:
  rules:
    - host: kubia.example.com
      http:
        paths:
          - path: /kubia
            backend:
              serviceName: kubia-nodeport
              servicePort: 80
		  - path: /foo
            backend:
              serviceName: foo
              servicePort: 80
    - host: foo.example.com
      http:
        paths:
          - path: /
            backend:
              serviceName: bar
              servicePort: 80
            
```

### Readiness Probes
- Probe a pod by sending a request to it and seeing the response.
- When the response is successful, we can start sending client requests to that pod.
- `readinessProbe` is added to the Pod manifest.

### Creating a Headless Service
- Setting the `clusterIP` field to `None` makes a Service _headless_.
- This means you k8s won't assign an IP to the service.
- This will give you the Pod IP's directly.