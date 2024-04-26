Used to define and describe the entity that should be displayed in Backstages software catalog.
### Common to All Kinds: The Envelope
- `kind` - High level entity type being described. Check out the [[Kinds of Entities]].
- `apiVersion` - Used to be able to evolve that format.
- `metadata` - Contains metadata about the entity. 
- `spec` \[Varies\] - Actual specification data that describes the entity. This will depend on the `kind` of entity you have.

### Common to All Kinds: The Metadata
- `name` - Name of the entity. Must be unique. Used for computers and humans.
- `namespace` - ID of a namespace that the entity belongs to
- `uid`
- `title` - Display name for entity, used in place of `name` in UI
- `description` - Human readable description of entity.
- `labels` 
- `annotations` - Used to link to external systems like a link to a Git repo, links to monitoring tools and more.
- `tags` - list of single valued strings, to classify catalog entities. 