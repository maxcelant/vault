### Summary
- HorizontalPodAutoscaler is a resource that will automatically scale your pods to keep them below a resource threshold.
- Vertical autoscaling is not yet available (sad).
- Cluster autoscaling allows kubernetes to provision more/less nodes from the cloud provider depending on the usage.
- PodDisruptionBudget allows you to set a min and max for number of pods that are always available of a label in the cluster.
### Horizontal pod autoscaling
- Performed by Horizontal controller which is configured by a HorizontalPodAutoscaler (HPA).
- Uses heapster to get its stats.
- Calculating the required replica count is simple when it considers only a single metric.

```ad-example
Pod 1: 60% CPU utilization
Pod 2: 90% CPU utilization
Pod 3: 50% CPU utilization
Target Utilization: 50% CPU
(60 + 90 + 50) / 50 = 200 / 50 = 4 (replicas)
```

- HPA only modifies on the Scale sub-resource.
- This allows it to operate on any scalable resource (e.g. pods, deployments, statefulsets).
- Autoscaler compares a pods actual cpu consumption and its requested amount so pods will need to have that set.
- `autoscale` command can create a HPA quickly.
- Remember that a container's cpu utilization is the container's **actual** cpu usage divided by its requested cpu.

```bash
$ k autoscale deployment kubia --cpu-percentage=30 --min=1 --max=5
```

### Creating a HorizontalPodAutoscaler

```yaml
apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  name: kubia    // Does not need to match name of deployment
spec:
  maxReplicas: 5
  metrics:
    - resource:
        name: cpu
        targetAverageUtilization: 30
      type: Resource
  minReplicas: 1
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: kubia
status:
  currentMetrics: []
  currentReplicas: 3
  desiredReplicas: 0
```

- There is a limit on how many replicas an hpa can create in a single operation.
- 
### Running commands in the cluster

```bash
$ kubectl run -it --rm --restart=Never loadgenerator --image=busybox
➥ -- sh -c "while true; do wget -O - -q http://kubia.default; done"
```

- This allows you to create an unmanaged pod on the cluster that will be deleted when you type CTRL+C.

### Metric Types
- `Resource`: bases its autoscaling on a resource.

```yaml
... spec:
  maxReplicas: 5
  metrics:
  - type: Resource
	resource:
      name: cpu
      targetAverageUtilization: 30
```

- `Pods`: any metrics related to pods directly like queries per second (QPS).

```yaml
spec:
  metrics:
  - type: Pods
	resource:
      metricName: qps
      targetAverageValue: 100
```

- `Object`: scales pods on a metric that doesn't pertain directly to those pods. The autoscaler obtains a single metric from the single object (e.g. Ingress).

```yaml
... spec:
  metrics:
  - type: Object
    resource:
      metricName: latencyMillis
      target:
        apiVersion: extensions/v1beta1
        kind: Ingress
        name: frontend
      targetValue: 20
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: kubia
...
```

### Vertical pod autoscaling
- Kubernetes does not currently support this.
- You can use a Admission Control plugin called InitialResources to set usage requests for a deployment by looking at the historical usage for that deployment.

### Cluster Autoscaler
- Automatically provisions additional nodes when the existing nodes are full.
- Nodes are grouped by type (called pools). So you need to specify the node type when you want an additional one.

>![[Pasted image 20240628130934.png]]


- If the cpu and memory requests on a given node are below 50%, that node is considered "unnecessary".
- If a system pod is running on a node, the node won't be relinquished.
- If a node is selected for shut down, all the pods are evicted.

### Cordoning and draining nodes
- `kubectl cordon <node>` marks the node as unschedulable.
- `kubectl drain <node>` marks the node as unschedulable and then evicts all the pods from the node.

### PodDisruptionBudget resource
- Allows you to set how many pods of a certain label should always be available.

```yaml
$ kubectl get pdb kubia-pdb -o yaml

apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
  name: kubia-pdb
spec:
  minAvailable: 3
  selector:
    matchLabels:
      app: kubia
status:
...
```

- the `kubectl drain` command will adhere to it and will never evict a pod with the `app=kubia` label if that would bring the number of such pods below three.