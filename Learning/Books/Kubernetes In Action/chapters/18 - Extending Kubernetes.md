### Summary


### CustomResourceDefinitions
- You create this definition describing your custom resource.
- Then you can start creating that resource.

```ad-quote
_Instead of dealing with Deployments, Services, ConfigMaps, and the like, you’ll create and manage objects that represent whole applications or software services. A custom controller will observe those high-level objects and create low-level objects based on them._
```


### Example `Website` CRD
- We want the `Website` resource to create a service and a pod with our app.

```yaml
kind: Website
metadata:
  name: kubia
spec:
  gitRepo: https://github.com/luksa/kubia-website-example.git
```

- We also need to create the crd itself

```yaml
apiVersion: apiextensions.k8s.io/v1beta1
kind: CustomResourceDefinition
metadata:
  name: websites.extensions.example.com // long to prevent name clash
spec:
  scope: Namespaced
group: extensions.example.com
version: v1
names:
  kind: Website
  singular: website  
  plural: websites
```

- Website controller talks to the API server through a proxy (in an ambassador container).
- The proper way to watch objects through the API server is to not only watch them, but also periodically re-list all objects in case any watch events were missed.

### Running the controller as a pod
- You can run it locally and use `kubectl proxy` as an ambassador to the api server.
- Once its ready to deploy to prod, make it a deployment!

```yaml
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: website-controller
spec:
  replicas: 1   // just one replica
  template:
metadata:
  name: website-controller
  labels:
    app: website-controller
spec:
  serviceAccountName: website-controller   // special service account
  containers:
  - name: main
    image: luksa/website-controller
  - name: proxy
    image: luksa/kubectl-proxy:1.6.2   // proxy sidecar
```

- One container runs your controller, whereas the other one is the ambassador container used for simpler communication with the API server.
- 