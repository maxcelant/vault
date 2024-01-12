An abstraction that defines a set of [[Pods]] and enables traffic exposure, load balancing, and service discovery for those Pods.

Some of the functionalities include:
- Exposes the Service on the same port of each [[Nodes|Node]] in the cluster using NAT.
- Makes a service accessible from outside the cluster using `<NodeIP>:<NodePort>`.
- Cloud provider provides the load balancer to the Pods.
- Use [[Label Selector|label selectors]] to determine which Pods will receive traffic.
- As Pods are created and deleted, the set of Pods the Service refers to will change accordingly.

### How are they defined?

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
```

- `apiVersion: v1`: This is the version of the Kubernetes API we're using to create this object.
- `kind: Service`: This tells Kubernetes we want to create a new service.
- `metadata`: This is data that helps uniquely identify the object.
    - `name: my-service`: This is the name of our service. We can use it to reference our service.
- `spec`: This is where we specify the desired state of our object.
    - `selector`: This is how our service knows which pods to manage traffic for. It selects any pods with labels that match what's specified here. In this case, it will select pods with the label "app: MyApp".
    - `ports`: This is where we specify the port configuration for our service.
        - `protocol: TCP`: This is the network protocol this port will use.
        - `port: 80`: This is the port the service will listen on.
        - `targetPort: 9376`: This is the port on the pods that traffic should be directed to.

### Example
1. **You navigate to a website**: When you type in a URL into your browser, it makes a request to that server. The server is typically listening on port 80 for HTTP requests or port 443 for HTTPS requests. In the adjusted scenario, let's assume you're connecting securely, so you're using port 443.
    
2. **Arrival at the Kubernetes Service**: If you have set up a Kubernetes Service to listen on port 443 and forward traffic to port 3000 on your front-end Pods, the request from your browser would be sent to one of your front-end Pods.
    
3. **Front-end makes a request to the backend**: Your front-end application may need to retrieve or manipulate some data. In this case, it makes an API call to the backend, which is listening on another port (in this case, 5000). Note that this port is within the Kubernetes cluster network, not exposed directly to the outside world. In this scenario, there would be another Kubernetes Service managing backend Pods, receiving requests on a certain port (for instance, 5000), and forwarding them to the appropriate Pods.
    
4. **Backend sends response to front-end**: After the backend has done its work, it sends a response back to the front-end through the same path. The front-end then uses this data to create the final webpage that gets sent back to your browser.
    
5. **Front-end sends response to user**: Finally, the front-end sends a response back through the original Service (listening on port 443), which sends the data back to your browser. Your browser then displays the webpage.
