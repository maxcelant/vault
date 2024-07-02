### Summary


### Understanding the pod's lifecycle
- Like tiny VMs dedicated to running only a single application.
- Local IP and hostname will change.
- Anything written to the disk or containers filesystem will be lost when a pod is moved or killed.
- Using volumes will persist data on container restarts (but not pod restarts).

>![[Pasted image 20240628133311.png]]

- Using volumes to preserve files across container restarts like this is a double-edged sword. What if the data gets corrupted and causes the newly created process to crash again?
- The replicaset does not care if one of its pods is dead, only that the desired pod count is correct.

### Init containers
- 1 or more containers that you can set to run before your main container.
- Can be used to ping the service when your app is coming up and then have it stop when the service finally up and running.

```yaml
spec:
  initContainers:
  - name: init
    image: busybox
    command:
    - sh
    - -c
	- 'while true; do echo "Waiting for fortune service to come up...";
	  'wget http://fortune -q -T 1 -O /dev/null >/dev/null 2>/dev/null
	  '&& break; sleep 1; done; echo "Service is up! Starting main'
	  'container."'
```

- You’re defining an init container, not a regular container. The init container runs a loop that runs until the fortune Service is up.

### Post-start hook
- Initiates after the app has started.
- Runs in parallel with the main process.
- Until the hook completes, the container will be in `Waiting` state with reason `ContainerCreating`. The pod status will be `Pending` instead of `Running`.
- If the hook fails or returns a non-zero exit code, the main container is killed.

### Pre-stop hook
- Executes immediately before a container is terminated.
- Can be used to initiate a graceful shut down.

```yaml
 lifecycle:
   preStop:
     httpGet:
        port: 8080
        path: shutdown
```

- This is a pre-stop hook that performs an HTTP GET request. The request is sent to `http://POD_IP:8080/shutdown`.
- Lifecycle hooks target containers, not pods.
- Your app should react to a `SIGTERM` signal.

### Shell form vs direct execution
- If the SIGTERM signal isn't hitting your app it could be because your Dockerfile is set to use the shell form (`ENTRYPOINT /mybinary`) instead of executing it directly (`ENTRYPOINT ["/mybinary"]`).
- The problem is that in shell form, it creates a shell in the container _then_ runs your app in the shell as a "child process".
- This means that if a signal hits the shell, it'll have to forward it to the app.

### Ensuring all client requests are handled properly
- Have readiness probes so that k8s knows that the pod is ready to accept connections.
- Wait for a few seconds, then stop accepting new connections.  
- Close all keep-alive connections not in the middle of a request. 
- Wait for all active requests to finish. 
- Then shut down completely.
- Maybe adding a pre-stop hook to sleep for 5 seconds.

### Making the apps easy to run and manage
- Don't use `latest` tag for containers.
- Make small and manageable containers.
- Use more than one label for your resources.
- Add annotations to describe your resources.
- In microservice architecture, pods could contain lists of names the other services the pod is using.
- Use a `terminationMessagePath` field in the container definition in the pod spec.
	- It will show up in a `k describe pod` to see why a pod terminated.
	- You can see the reason why the container died without having to inspect its logs.
- You can use `k logs` with `--previous` to see the logs of the previous container.
- You can copy logs to your local using `k cp foo-pod:/var/log/foo.log foo.log`

### Best practices for development and testing
- You can connect to a backend service using those environment variables to find the service. If you need it on the outside, you can use a `NodePort` to connect from outside -> inside.
- Run `kubectl proxy` on your local machine, run your app locally, and it should be ready to talk to your local `kubectl proxy`.

### Using Minikube
- Use `minikube mount` to mount your local filesystem into the minikube vm.
- You can copy local docker images to the minikube vm.

```bash
$ docker save <image> | (eval $(minikube docker-env) && docker load)
```

- Just make sure the `imagePullPolicy` in your pod spec isn't set to `Always`.
- 