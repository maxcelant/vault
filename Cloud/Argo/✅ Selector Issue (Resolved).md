When we want to select our argo Application for manual syncing or something, we need to use the "selector" for that app. Within the argo application.yaml, we need to add a field for labels, and then set the label to something specific to our app.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ''
  labels:
    backstage-name: developer
spec:
  destination:
    name: ''
    namespace: ''
    server: ''
  source:
    path: ''
    repoURL: ''
    targetRevision: HEAD
  sources: []
  project: ''

```

We can then use the selector to make updates using the argo API. (like for syncing in our case)

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: runway
  description: ...
  annotations:
	...
    argocd/app-selector: 'backstage-name=developer'
```

In this case, we give our apps the `'backstage-name=developer'` name so we can sync all our apps with this selector.