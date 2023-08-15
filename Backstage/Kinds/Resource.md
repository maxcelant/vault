A resource describes the infrastructure a system needs to operate, like BigTable databases, Pub/Sub topics, S3 buckets or CDNs. Modelling them together with components and systems allows to visualize resource footprint, and create tooling around them.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Resource
metadata:
  name: artists-db
  description: Stores artist details
spec:
  type: database
  owner: artist-relations-team
  system: artist-engagement-portal
```

- `spec.type` - The type of resource as a string, e.g. `database`. This field is required. There is currently no enforced set of values for this field, so it is left up to the adopting organization to choose a nomenclature that matches the resources used in their tech stack.
	- `database`
	- `s3-bucket`
	- `cluster`
- 