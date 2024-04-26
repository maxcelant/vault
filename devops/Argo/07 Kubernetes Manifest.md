```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-repo/my-app:1.0.0
        ports:
        - containerPort: 8080

# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080

```

We defined a Deployment and a Service for an app called **`my-app`**.

**`Deployment`** creates 3 instances (or replicas) of our app. Each instance will run a Docker container at **`my-repo/my-app`** tagged with **`1.0.0`**. Make that container listen on port **`8080`**.

**`Service`** manifest declares a way to access the app. Creates a service that listens on port **`80`** and forwards incoming connections to port **`8080`** of the app.

In the context of an Argo CD Application, these manifests would be located in the path specified in the Application's **`spec.source.path`** field in the Git repository.