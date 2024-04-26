You need to integrate Argo into an existing Kubernetes environment / cluster.

1. Set up your k8s cluster on Azure, GCP, or AWS.
2. Install Argo CD on your cluster by applying the necessary Argo CD Kubernetes manifests. You can do this in the terminal using **`kubectl`**, the Kubernetes command-line tool.

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

This creates a dedicated namespace **`argocd`** then installs Argo CD in that namespace.

3. After installation, you access Argo CD API server through UI, CLI or REST to create and manage Argo 'Applications'. Each Application points to a Git repo and a path within it, which contains the k8s manifests of a part of your project.

4. Your apps config (code, Dockerfile, k8s manifest, etc) need to be in the Git repo.

```
/my-app
  Dockerfile
  /app
    app.py
  /manifests
    deployment.yaml
    service.yaml
```

5. In the Argo CD Web UI, you create an application that points to your repo and the path to the k8s manifests. Argo CD would then deploy your application based on those manifests.

