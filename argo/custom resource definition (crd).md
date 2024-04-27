In our case, `WebApp` is a custom resource not native to kubernetes.
#### Focus on `WebApp` Kind
In your team's case, you're using ArgoCD to manage the deployment of a `WebApp` kind. This could be a custom resource definition (CRD) in Kubernetes that defines the structure and behavior of your web application. 
#### How ArgoCD Manages `WebApp`:
1. **YAML Configuration**: You define your `WebApp` in a YAML file within your Git repository. This file specifies the desired state of your web application, including its Docker image, scaling settings, environment variables, etc.
2. **Automatic Deployment**: When you push changes to this YAML file in your Git repository, ArgoCD detects these changes and automatically applies them to your Kubernetes cluster, updating the `WebApp` deployment as needed.
3. **Version Control and Rollbacks**: Since your application's configuration is version-controlled in Git, it's easy to track changes and roll back to previous versions if something goes wrong.
4. **Scaling and Management**: ArgoCD not only deploys the `WebApp` but also ensures that its state remains consistent with the configuration in your Git repo. This can include scaling up/down based on the defined parameters.