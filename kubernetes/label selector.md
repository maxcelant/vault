A way to select a group of resources, like Pods, based on their labels. It allows for filtering resources based on key-value pairs.

##### `Example`

Imagine you have 3 [[kubernetes/pods]] with these labels:

```bash
app=frontend, tier=web
app=frontend, tier=database
app=backend, tier=web
```

If you only wanted frontend apps, you could do this:

```bash
kubectl get pods -l app=frontend
```