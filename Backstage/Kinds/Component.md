A Component describes a software component. Usually something that is a deployable and linkable.

Typically under the name `catalog-info.yaml`

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component # Hence why its a Component
metadata:
  name: artist-web
  description: The place to be, for great artists
spec:
  type: website
  lifecycle: production
  owner: artist-relations-team
  system: artist-engagement-portal
  dependsOn:
    - resource:default/artists-db
  providesApis:
    - artist-api
```

- `spec.type` - Type of component.
	- `service` - backend service like an API.
	- `website` - a website.
	- `library` - like npm module or Java library.
	- `other` - Anything else
- `spec.lifecycle` - State of the component
	- `experimental`
	- `production`
	- `deprecated`
- `spec.owner` - Bearer of responsibility for this component.
- `spec.system` - The system that the component belongs to.
- `spec.providesApis` - Array of entity references to the APIs that are provided by the component.
- `spec.consumesApis` - Array of APIs that this component uses