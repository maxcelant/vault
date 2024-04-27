```yaml
apiVersion: runway.aa.com/v1alpha1
kind: WebApp
metadata:
  name: developer-nonprod
  annotations:
    enableCloudIngress: "true"
    datadogEnable: "true"
    backstageName: developer
    largeClientHeaderBuffers: 32k
  labels:
    app-id: developer-nonprod
    data-classification: nonpci
    runway.aa.com/operator-version: golang
    environment: nonprod
spec:
  containerName: packages.aa.com/docker-dev/runway
  containerTag: 4.97.1
  port: 7000
  secrets: runway-secrets
  healthCheck:
    endpoint: /
    port: 7000
    readiness: 
      initialDelaySeconds: 10
    liveness:
      initialDelaySeconds: 15
  resourceLimits:
    mem: 4Gi
    cpu: 4000m
  autoscale:
    minimum: 1
    maximum: 1
  reachableServices:
    - http://kubernetes-gtm-sync-service.kubernetes-gtm-sync-service.svc.8100.mesh
  env:
    - key: AUTH_GITHUB_CLIENT_ID
      name: AUTH_GITHUB_CLIENT_ID
      ...
```