Argo CD creates a "master blueprint" (which is a Git repository), which is the source of truth for your project. If changes are made to the blueprint, they are automatically applied to the actual application. If something goes wrong, you can use the blueprint to fix the problem.

It's important to note that it also keeps track of configuration settings:
- How many instances of a service should be run
- What resources each instance is allowed
- What network settings it needs

This practice is known as [[git-ops]]

Argo CD keeps track of all the configurations in the Git repo. The configuration files are stored in a format like YAML or JSON typically. These files could be Kubernetes manifests, Helm charts, kustomize files, jsonnet files or any format that Kubernetes can understand. These configuration files define what resources should be running, their settings and how they relate to each other.

Usually the repo is split into `dev`, `staging`, and `prod` files, all having their own configs.

When you say you want to see the 'dev' version of the project, you would have an Argo CD 'Application' set up that points to the 'dev' configuration in your repository. Argo CD would then ensure that the Kubernetes cluster matches the 'dev' configuration.

**Please note** that Argo CD is not typically used for switching an entire cluster between dev/staging/production environments. More commonly, you would have a separate cluster or namespace for each environment, and Argo CD would ensure each one matches the corresponding configuration in your Git repository.