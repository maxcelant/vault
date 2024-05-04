# Creating Services

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
      port: 80          // Port this service is available on
      targetPort: 8080  // Container port the service will forward to
    - name: https
      port: 443          // Port this service is available on
      targetPort: 8443   // Container port the service will forward to
      
  selector:
    app: kubia  // All pods with app=kubia will be part of service
```

- You can hit the service from a pod using `exec`:

```bash
kubectl exec <pod-name> -- curl -s http://<SERVICE-IP>
```

- If you specify port names of the Pod manifest, then you can reference those port names  in the service. This is helpful so that when you change one number, you dont need to change the other.
- You can discover service IPs through env variables, DNS, or FQDN.

# Connecting to Services via FQDN

```
backend-database.default.svc.cluster.local
```

- `backend-database` is the service name.
- `default` is the namespace.
- These are the only two things that are necessary to hit the service.

