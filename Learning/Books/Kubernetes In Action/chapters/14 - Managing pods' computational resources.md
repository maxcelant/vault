### Summary
- You can give max and mins for cpu and memory resources in a cluster.
- Quality of Service classes categorize your pods in a "to-kill" priority.
- LimitRange resources give resource mins and maxes for newly created pods in a namespace.
- ResourceQuota set hard resource limits (as well as other limits) for the whole namespace. 
- Pod resource monitoring is done by cAdvisor to Heapster.

### Requesting Resources
- The _minimum_ amount of resources your pod needs, not the _max_.
- Specified for each container in a Pod.
- `cpu: 200m` means 200 milicores which means 1/5 of a cpu. 

```bash
k exec -it requests-pod top
```

- `top` can give you the CPU consumption.
- The scheduler takes this into account when assigning a pod to a node.
- Scheduling always works on how much was _actually_ allotted not how much is currently being used. 
	- So if a node is technically 80% full but its only really using 70% and a new pod requests at least 25%, it can't be scheduled to that node.
- Scheduler prioritizes nodes with heavy requests on them to bundle pods tightly to hopefully free up and remove unused nodes.
- If the scheduler can't fulfill your resource requests on any node, the pod will remain `Pending`.
- Any free cpu is split up accordingly between the pods on the node.

>![[Pasted image 20240624115700.png]]

### Limiting Resources
- You should limit the memory given to a container, because that cannot be taken back like the cpu can.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: limited-pod
spec:
  containers:
  - image: busybox
    command: ["dd", "if=/dev/zero", "of=/dev/null"]
    name: main
	resources:
	  limits:
		cpu: 1
		memory: 20Mi
```

- Sum of all resource limits are _allowed_ to exceed 100% of the nodes capacity.
- CPU is throttled, so it cannot exceed its limit.
- If a process tries to exceed its memory allocated, it is killed and restarted.
- `OOMKilled` means a pod was killed because "Out of Memory".
- You can see why a pod was killed by doing a `describe` on it.
- `top` command shows the memory and cpu amounts of the whole node the container is running on.

### Quality of Service (QoS) classes
- Resource limits can be overcommitted. QoS decides which pod stays and which pod is killed when necessary.
- Can be found in pod yaml at `status.qosClass`.
- `BestEffort` are pods with no resource limits or requirements. They are the first killed.
- `Guarenteed` are pods that have limits set (or their requests match their limits)
- `Burstable` are pods which resource limits don't match its requests.
- Priority is `Guarenteed` > `Burstable` > `BestEffort`
>![[Pasted image 20240624142848.png]]

- To determine which pod is killed when the pods have the same QoS, you need to look at OutOfMemory (OOM) score.
	- percentage of available memory the process is consuming and fixed OOM score (based on pods QoS class and containers requested memory.)
- Basically the one using more memory gets killed off first.

### LimitRange object
- Used by LimitRange Admission control plugin. 
- When you post your pod spec, the resource is validated to make sure the pod doesn't go above the resource limits.
- These limits apply to all pods created in the same namespace as the limitrange resource.
- You can also use this to set defaults for pods without explicit resource limits.

### ResourceQuota object
- Used by ResourceQuota Admission control plugin
- Allows you to specify the _overall_ cpu and memory the pods in a namespace are allowed to consume.

```yaml
apiVersion: v1
	kind: ResourceQuota
	metadata:
	  name: cpu-and-mem
	spec:
	  hard:
		requests.cpu: 400m
		requests.memory: 200Mi
		limits.cpu: 600m
		limits.memory: 500Mi
```

- It will block new pods created that will cause you to exceed these hard limits.
- If you try to create a pod without requests or limits it will fail if you have a resource quota.
- Can also limit different resource types.
- `activeDeadlineSeconds` is the amount of time a pod will live for before it is killed and restarted.
- You can apply quotas for pods with a specific QoS.

### Monitoring pod usage
- **cAdvisor** on the kubelet performs a basic collection of resource consumption data.
- **Heapster** is a component that gathers that data for the whole cluster.

>![[Pasted image 20240624150127.png]]

```bash
$ k top node // displays cpu and memory usage
```

```bash
$ k top pod --all-namespaces // actual cpu and mem usage of pods
```

