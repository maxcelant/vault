### Summary
- Concurrent updates replace all pods at once, while rolling updates switch versions gradually, both methods being prone to errors.
- Use Deployments to manage updates declaratively, ensuring smoother rollouts and rollback capabilities.
- Choose between `Recreate` (all at once) and `RollingUpdate` (one by one) for updating pods.
- Parameters like `maxSurge` and `maxUnavailable` help manage the rollout rate and availability.

### Updating Pods Manually — Concurrent
- Before Deployments were a thing, the old way of rolling out a new container version was changing the Pod template to refer to container `v2`, and slowly deleting the pods of `v1` and letting the ReplicaSet start up the new ones.
- This method means deleting all the pods at once and letting the ReplicaSet create all of the new ones at the same time.

### Updating Pods Manually — Rolling
- Performing a manual rolling update is more difficult. It involves having to ReplicaSets and winding down the Pods in `v2` while increasing those in `v2`.
- This is obviously more error prone, because its more commands also your app may not support multiple concurrent version types.

### Updates to Same Image Tag
- Currently, if you update an image but use the same tag, it probably wont be updated because the image is cached on the node, and that will be pulled instead.

### Rolling Updates of a ReplicationController
- This method is no longer the way to do things but you use to be able to do a rolling-update using a replicationcontroller.
- `kubia-v1` is the controller you want to replace.
- `kubia-v2` is the name of the new one
- `foo/kubia:v2` is the image to start running in the Pods.

```bash
kubectl rolling-update kubia-v1 kubia-v2 --image=foo/kubia:v2
```

- The Pods get a new label with key `deployments` and some `id` as the value. That value is to denote which replicationcontroller is in charge of it.

>![[Pasted image 20240607221719.png]]

- All it does it starts scaling the old controller down while scaling the other up.

### Why rolling-update is obsolete
- rolling-update actually _modifies_ resources, which is kind of against kubernetes law in a way. Since it should be a _declarative_.
- Also, this is performed by the client and not the server. So if something happens to the connection along the way, it could cause some issues.

### Deployments to Update Declaratively
- Deployment manages the replicasets, replicasets manage the pods
- The deployment name shouldn't have an app version, since it controls that.

```yaml
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: kubia
spec:
  replicas: 3
  template:
    metadata:
      name: kubia
      labels:
        app: kubia
    spec:
      containers:
      - image: luksa/kubia:v1
name: nodejs
```

- Use `--record` flag when creating a deployment. It records revision history which is useful for rollbacks.
- When you look at the names of the pods run by a deployment, the middle hash is the replicaset that controls them. So when you do rolling updates, you'll see those change.

```bash
$ kubectl get po
NAME                     READY     STATUS    RESTARTS   AGE
kubia-1506449474-otnnh   1/1       Running   0          14s
kubia-1506449474-vmn7s   1/1       Running   0          14s
kubia-1506449474-xis6m   1/1       Running   0          14s
```

- All you need to do is reference a new container image, and it will automatically start the update!
- `kubectl set image` lets you set a new container image.
- Unlike the rolling-update, this is performed by the control plane, not the client.

### Deployment Strategies
- `Recreate` removes all the old pods and starts all the new ones at once.
- `RollingUpdate` removes them one by one, keeping the app available the whole time.

### Controlling Rate of Rollout
- `maxSurge` means "how many MORE pods can we create than your replica count?"
	- So if you have total pods set to 3 and `maxSurge` set to 1, then at most, there will be 4 pods.
- `maxUnavailable` means "how many pods can we make unavailable relative to your replica count?"
	- So if you have a total of 4 pods and set `maxUnavailable` to 1, then there will always be 3 running.
- Remember that these are both _relative_ to your replica count.

>![[Pasted image 20240608092553.png]]

### Rolling Back
- The deployment will keep the replicaset of the previous version so that if you need to perform a rollback, all you need to do is start increasing the pod count on that replicaset and decreasing the current version.
- `undo` command is used to abort or undo a roll out.

```bash
$ kubectl rollout undo deployment kubia
```

- Each replicaset stores the complete information of the deployment at that specific revision, so don't delete it manually.
- `revisionHistoryLimit` is how many recent replicasets to keep.
- You can also pause a rollout. This can work like a canary release. Can also allow you to make multiple changes to deployment and then kick it off.

```bash
$ kubectl rollout pause deployment kubia
```


### Slowing Roll Outs
- `minReadySeconds` specifies how long a pod should be ready before the pod is treated as _available_.
- Once the pod is available, the rollout will continue.
- You should set `minReadySeconds` to a higher value, to make sure that pods are steady before continuing.
- If a pod starts failing before `minReadySeconds` amount of time, it will automatically roll back.
- For example, if you set it to 10 seconds. Then a Pod needs to be ready for _at least_ 10 seconds.