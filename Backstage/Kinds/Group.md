Describes a team, business unit, etc. Members are modeled as the `kind` [[User]].

```yaml
apiVersion: backstage.io/v1alpha1
kind: Group
metadata:
  name: infrastructure
  description: The infra business unit
spec:
  type: business-unit
  profile:
    displayName: Infrastructure
    email: infrastructure@example.com
    picture: https://example.com/groups/bu-infrastructure.jpeg
  parent: ops
  children: [backstage, other]
  members: [jdoe]
```

- `spec.type` - The type of group
	- `team`
	- `business-unit`
	- `product-area`
	- `root` - as a common virtual root of the hierarchy, if desired
- `spec.profile` \[Optional\] - Just info about the team.
- `spec.parent` - parent of the group; not necessary
- `spec.children` - The immediate child groups of this group in the hierarchy (whose `parent` field points to this group).
- `spec.members` - The users that are direct members of this group. The items are not guaranteed to be ordered in any particular way.