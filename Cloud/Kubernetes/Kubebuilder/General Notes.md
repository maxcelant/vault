- "api" in kubebuilder just means crd.
- Creating your resource in `api/v1/[resource]_types.go` will then create the crd yaml in `config/crd/bases/[...].yaml`
- `internal/controller/[resource]_controller.go` is where the reconciliation logic lies.
- RBAC annotations allow kubebuilder to generate RBAC roles for us. In this case so that we can manipulate configmaps.
```
//+kubebuilder:rbac:groups="",resources=configmaps,verbs=create;get;list;update;patch;delete;watch
```
- You can look at `config/rbac/role.yaml` to see these privileges.

