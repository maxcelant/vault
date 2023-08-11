```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
  labels:
    app: my-app
    type: front-end
spec:
  containers:
  - name: my-app
    image: my-app:1.0
```
Notice the labels we've added: `app: my-app` and `type: front-end`.

Now let's define a Service:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
    type: front-end
  ports:
  - protocol: TCP
    port: 80
    targetPort: 9376
```

Here, in the Service definition, the `spec.selector` field has `app: my-app` and `type: front-end`. This means that this service is set to route traffic to any Pods that have both of these labels. Since our `my-app-pod` has these labels, it would be selected by `my-app-service`.

The `port` field is the port number which will be exposed by this Service outside the cluster. The `targetPort` is the port on the Pod where the traffic will be received.