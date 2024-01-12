- CLI tool for Kubernetes API
- On our machines, there is a `~/.kube/config` file with:
	- the Kubernetes API address
	- the path to our TLS certificates used to authenticate
- You can also use the `--kubeconfig` flag to pass a config file
- `kubectl api-resources` will list all available *resource* types (remember that resources are things you can mess with!)

### `get`

```bash
kubectl get node
kubectl get nodes -o wide  // More info
kubectl get no -o yaml     // Gives YAML file of info
```

### `describe`
Gives you some extra info about your resource

```bash
kubectl describe node/<node>
kubectl describe node <node>
```

### `explain`
Can view the definition of a resource type, a field in a resource, or get a list of all fields and sub-fields. 

```bash
kubectl explain type
kubectl explain node.spec
kubectl explain node --recursive
```