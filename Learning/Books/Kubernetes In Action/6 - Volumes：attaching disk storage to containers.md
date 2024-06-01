### Summary
- Volumes allow containers within a Pod to share data, and they are ephemeral.
- `emptyDir` volumes provide a shared empty directory for containers.
- `gitRepo` volumes clone a git repository into an `emptyDir`.
- PersistentVolumes (PVs) and PersistentVolumeClaims (PVCs) provide persistent storage, decoupling storage from pods.

### Introducing Volumes
- Volumes all containers within the same Pod to share data.
- Each container can mount the volume in any location in their filesystem.
- Volumes are ephemeral — they will be lost when the Pod restarts.

### Using `emptyDir`
- Used to share data between containers.
- Literally just creates an empty directory which containers can read/write to.
- In the example below, the volume is being shared between the two containers. Notice how they are mounting it at different locations.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: fortune
spec:
  containers:
	- image: luksa/fortune
	  name: html-generator
	  volumeMounts:
	  - name: html
	    mountPath: /var/htdocs
	- image: nginx:alpine
	  name: web-server
	  volumeMounts:
	  - name: html
		mountPath: /usr/share/nginx/html
	    readOnly: true
	  ports:
	  - containerPort: 80
	    protocol: TCP
	volumes:
	- name: html
	  emptyDir: {}
```

### Using `gitRepo`
- It just `emptyDir` but then a git repo is cloned into that directory.
- Can use this to serve the latest version of your git repo.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: gitrepo
spec:
  containers:
	- image: nginx:alpine
	  name: web-server
	  volumeMounts:
	  - name: html
		mountPath: /usr/share/nginx/html
	    readOnly: true
	  ports:
	  - containerPort: 80
	    protocol: TCP
	volumes:
	- name: html
	  gitRepo:
	    repository: https://github.com/maxcelant/pylox.git
	    revision: master
	    directory: .      // Clone into the root dir of the volume
```

### Using `hostPath`
- This type of volume allows you to point to a node's filesystem.
- Don't store Pod specific data on a node though, because if that pod changes nodes, that will be lost.
- Only good for persistent storage on a _one node cluster_ like Minikube.
>![[Pasted image 20240506160006.png]]

### PersistentVolumes and PersistentVolumeClaims
- You create a `PersistentVolume` resource where you specify the size and access it supports.

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mongodb-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
    - ReadOnlyMany
  persistentVolumeClaimPolicy: Retain
  gcePersistentDisk:
    pdName: mongodb
    fsType: ext4
```

- By setting the `persistentVolumeClaimPolicy: Retain`, that means that even after this volume detaches from the Pod, itll still hold that data.
- User submits a `PersistentVolumeClaim` resource where they configure how much capacity and what access rights to they need and k8s will bind a `PersistentVolume` to the Pod based on that claim!

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongodb-pvc
spec:
  resource:
    requests:
      storage: 1Gi
  accessModes:
    - ReadWriteOnce
```

- PersistentVolumes, like cluster nodes, dont belong to any specific namespace.
- In your pod manifest, you reference the PVC not the PV directly, decoupling the storage from the requester.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: fortune
spec:
  containers:
	- image: mongodb
	  name: mongodb
	  volumeMounts:
	  - name: mongodb-data
		mountPath: /data/db
	  ports:
	  - containerPort: 27017
	    protocol: TCP
	volumes:
	- name: mongodb-data
	  persistentVolumeClaim:
	    claimName: mongodb-pvc   // Reference the claim!
```

