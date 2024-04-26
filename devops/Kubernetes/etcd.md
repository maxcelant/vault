Kubernetes' backing store for all cluster data. Ultimate source of truth for the cluster, storing the full configs and state of the cluster.

Think of etcd as the memory of the Kubernetes cluster. Whenever there's a change in the cluster (like a new pod is created, an old one is deleted, a service is updated, etc.), that change is stored in etcd. This means that the current state of your whole Kubernetes cluster is stored in etcd.

#### `Members`
Usually there is a cluster of `etcd` (a group of `etcd` instances/members) working together. They replicate data to each other to ensure that the system remains "available".

#### `Quorum`
With a cluster of `N` etcd members, quorum is achieved when more than `N/2` members are available and can communicate to each other.

This stops from data inconsistency and overwrites. Establishes that only one version of the truth exists. When data is written into etcd, it must be acknowledged by a quorum of members. When one leader fails, another is appointed. 




