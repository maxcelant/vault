### Questions
- resource versions?
- Kubebuilder?
- What is KEP?

### Server Side 
- server side apply is a good way to say "i only want to modify this specific thing on a resource"
- server side apply will conflict if theres been a client side apply

### Mutation and Validation Webhook
- Kuma is injected as a sidecar to a pod when the pod is deployed to the cluster using a _mutating webhook.
	- Look into [kuma](https://github.com/kumahq/kuma)
- _validating webhook_ are used to validate that the resource has a certain attribute or follows a certain rule.

### CRDs
- Equivalent to a CREATE TABLE.
- CRDs are like the "class definition", resources are like "instances".
- [Ephemeral CRD](https://github.com/AAInternal/runway-ephemeral-operator/blob/main/api/v1alpha2/ephemeral_types.go)
- CEL Validations allow you to perform more refined validation using `self`.
- If you're updating your CRD, you'll probably need to create a migration webhook to convert to the new version you are expecting.
- Downgrades that lose a field can be stored as an annotation. 

```ad-note
Lets say v2 adds a field: `spec.workers`
v1 does not have that field.

If your primary version is lower (v1) than the new one (v2), if you dont store that `spec.workers` somewhere, it'll be removed. 

So you can use annotations to store that value somewhere for some time. 
```

- "Racheting" allows existing apps that dont conform to a new set of properties to continue to run without breaking them. 

```ad-example
`v2` now requires WebApps to have `maxReplicas` set to > 4.

WebApp `foo` has `maxReplicas` set to 2. It will _not_ break that app.
```

### Production Grade Controllers
- Continually converge reality with your desired state.
- A container where you watch the endpoints you need to watch and react to them.
- You usually cannot just do the steps in a sequential way.
- Make GET requests before POST requests.
- OODA loop (Observe, Orient, Decide, Act)
- `Reconciler` is the important part. `Finalizer`'s usage is a bit more vague?

>![[Pasted image 20240724120328.png]]

- Informer for each type (ex: one for jobs, etc).
- When a change occurs the resource version will change so if the resource version is not aligned, it will know that and reconcile.

### Kubebuilder
- Basically a kubernetes operator framework.
- Api in kubebuilder is just a custom resource.
- Allows us to write go structs and turn that into our crd
	- Ex:
		```go
		type BackgroundWorkersSpec struct {
		    Foo string `json:"foo,omitempty"`
		}
		
		type BackgroundWorkersStatus struct {
		}
		
		type BackgroundWorkers struct {
		    metav1.TypeMeta   `json:",inline"`
			metav1.ObjectMeta `json:"metadata,omitempty"`
	
			Spec   BackgroundWorkersSpec   `json:"spec,omitempty"`
			Status BackgroundWorkersStatus `json:"status,omitempty"`
		}
		
		type BackgroundWorkerList struct {
			metav1.TypeMeta `json:",inline"`
			metav1.ListMeta `json:"metadata,omitempty"`
			Items           []BackgroundWorker `json:"items"`
		}
		```
### Leases
- We need a locking mechanism so two instances don't change the same thing.
- `leaderelection` package can help ensure only one of our controllers is running at one time.
- The `Lease` resource represents the lease in its spec, rather than via an annotation.
- The Lease spec has a `holderIdentity` that shows who is the current leader.