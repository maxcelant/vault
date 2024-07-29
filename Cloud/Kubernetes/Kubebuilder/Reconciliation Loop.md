```go
func (r *MyAwesomeConfigSourceReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	_ = log.FromContext(ctx)

	var awesomeConfigSource syncv1.MyAwesomeConfigSource
	if err := r.Get(ctx, req.NamespacedName, &awesomeConfigSource); err != nil {
		logger.Error(err, "unable to fetch MyAwesomeConfigSource")
		return ctrl.Result{}, client.IgnoreNotFound(err)
	}

	return ctrl.Result{}, nil
}
```

- The `req.NamespacedName` only has the `namespace` of the resource and the `name` of it.
- Doing `r.Get` allows us to grab the whole resource definition and store it in `awesomeConfigSource`.
- If the reconciler returns an empty result, it is good!
- Our controller is now able to...
	1. Get updates when our crd is changed.
	2. Run the reconciliation loop
	3. This triggers the creation/modification of configmap items that have a `data` map in them.

```ad-todo
Made it to **Running Reconciliation Live** section. [Link](https://classroom.superorbital.io/labs/production_controllers)
```