### Summary
- Kubernetes uses ConfigMaps and Secrets to securely manage and decouple application configurations from container images.
- Embedding configs in Docker images is insecure; Kubernetes overcomes this with dynamic config management.
- `ENTRYPOINT` and `CMD` define container behavior, while environment variables and command-line arguments can be injected into pods.
- Secrets manage sensitive information securely, and Kubernetes ensures atomic updates to config files.

### Problem with Docker and Configs
- Using configuration files in Docker containers is tricky because you would have to "bake it" into the container image. 
- This is roughly equivalent to hard-coding config values into the app.
- This is also insecure.

### `ENTRYPOINT` and `CMD`
- `ENTRYPOINT` defines the executable invoked when the container is started.
- `CMD` specifies the args that get passed to the `ENTRYPOINT`.
- Use `exec` form for `ENTRYPOINT`

### Command and arguments in K8s
- You can also run your pods and inject command line arguments into them with the Pod yaml.

```yaml
kind: Pod
spec:
  containers:
  - image: some/image
	command: ["/bin/command"]
	args: ["arg1", "arg2", "arg3"]
```

### Environment variables in k8s
- Setting env vars is done in the container definition
```yaml
kind: Pod
spec:
 containers:
 - image: luksa/fortune:env
   env:
   - name: INTERVAL
value: "30"
   name: html-generator
```

### `ConfigMap`s purpose
- We want to decouple the app's config from the app itself. Because those options can change!
- ConfigMap is a map of key-value pairs. These contents are passed to the containers as environment variables or as files in a volume.
- You can have ConfigMap's with the same name, living in the different namespaces (dev, prod). 
- The actual contents of the ConfigMaps will be different (because its different namespaces) but this allows you to use the same name in the Pod specs of each namespace.

### Creating a `ConfigMap`
```yaml
apiVersion: v1
data:
  sleep-interval: "25"
kind: ConfigMap
metadata:
  creationTimestamp: 2016-08-11T20:31:08Z
  name: fortune-config
  namespace: default
  resourceVersion: "910025"
  selfLink: /api/v1/namespaces/default/configmaps/fortune-config
  uid: 88c4167e-6002-11e6-a50d-42010af00237
```
- Your sources can be anything from a json file to a whole directory.
```bash
$ kubectl create configmap my-config
	--from-file=foo.json  
	--from-file=bar=foobar.conf  
	--from-file=config-opts/
	--from-literal=some=thing
```

### Using env variables from a `ConfigMap`
- The environment variables is called `INTERVAL`.
- We reference the key `sleep-interval`.
```yaml
metadata:
  name: fortune-env-from-configmap
spec:
  containers:
  - image: luksa/fortune:env
    env:
    - name: INTERVAL
	  valueFrom:
		configMapKeyRef:
		  name: fortune-config
		  key: sleep-interval
```
- You can also expose all the keys from a `ConfigMap` using a prefix.
```yaml
spec:
  containers:
  - image: some-image
    envFrom:
    - prefix: CONFIG_
      configMapRef:
        name: my-config-map
```
- So if it had `FOO` and `BAR` in the config map, that would be `CONFIG_FOO` and `CONFIG_BAR`.
- You can also pass config map keys as command-line arguments.

### Using a `ConfigMap` volumes
- Mostly used for larger config files.
- This gives you the ability to update the config without recreating the pod or restarting the container.
- Anything in the `configmap-files` directory will be added to the configmap.

```bash
$ kubectl create configmap fortune-config \
			--from-file=configmap-files

configmap "fortune-config" created
```
- You can also mount volumes with only a _portion_ of the key-values in a configmap.
```yaml
volumes:
- name: config
  configMap:
    name: fortune-config
    items:
    - key: my-nginx-config.conf // Which keys to include
      path: gzip.conf           // Entrys value stored here
```

### How Mounting Directories Works
- When you mount a volume at a certain directory, the original content at the position will be overridden by the mounted volume.
- So make sure you put it in a place that doesn't already have important info!
- You can use `subPath` to mount it there _without_ affecting the pre-existing data there.

```yaml
spec:
  containers:
  - image: some/image
    volumeMounts:
    - name: myvolume
      mountPath: /etc/someconfig.conf // Only mounting a file
      subPath: myconfig.conf   // Only mounting this entry
```

### Atomically updating the config
- What happens if the app detects a config file change and reloads before k8s is done updating all the files in the config volume?
- When the configmap is updated, k8s creates a dir, writes all the files to it and the relinks a `..data` symbolic link to point to this new dir.
- Doing this effectively atomically updates all of them at once.
- Updating a config map mounted at a volume does not happen synchronously across all instances. It can take up to a whole minute for pods to sync.

### Using `Secrets` resource
- Secrets are encoded in base64. This allows it contain binary values, not just plain-text.
- You can expose secrets as env variables similar to configmaps, but this is not recommended because env variables are usually dumped in error reports.
- In general, use secret volumes.
- When a secret volume is exposed to a container (or as a env variable), it is decoded and written to the file in actual form.

### Pod Yaml Definiton Breakdown

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: fortune-https
spec:
  containers:
    - image: luksa/fortune:env
      name: html-generator
      env:
        - name: INTERVAL
          valueFrom:
            configMapKeyRef:
              name: fortune-config
              key: sleep-interval
      volumeMounts:
        - name: html
          mountPath: /var/htdocs
    - image: nginx:alpine
      name: web-server
      volumeMounts:
        - name: html
          mountPath: /usr/share/nginx/html
          readOnly: true
        - name: config
          mountPath: /etc/nginx/conf.d
          readOnly: true
        - name: certs
          mountPath: /etc/nginx/certs/
          readOnly: true
  ports:
    - containerPort: 80
    - containerPort: 443
  volumes:
    - name: html
      emptyDir: {}
    - name: config
      configMap:
        name: fortune-config
        items:
          - key: my-nginx-config.conf
            path: https.conf
    - name: certs
      secret:
        secretName: fortune-https
```

- It mounts three volumes: `html`, `config`, and `certs`.
- The `config` volume is mapped to a `configMap` called `fortune-config`
	- From that, we want the `my-nginx-config.conf` key. 
	- This will be available at `/etc/nginx/conf.d/https.conf`.
	- More info on the `conf.d` convention [[06_01_24 - Linux dir.d convention|here]].
- The `certs` volume is populated from the data in `fortune-https`.
	- This data is mounted at `/etc/nginx/certs/`

### Image Pull Secrets
- When pulling images from a private docker hub repo, you need to specify `imagePullSecrets`.
