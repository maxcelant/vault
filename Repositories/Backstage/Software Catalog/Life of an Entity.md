Aims to understand the process of an entity being added to the software catalog.

#### Step 1: Ingestion
This is handled by the *entity providers*. Their job is to fetch data from their respective sources (usually `catalog-info.yaml`) and translate that data into an entity object.

They also are responsible for notifying the database when an entity has been added or removed.

The database also keeps track of which entity belongs to which provider. There are two main providers: one that deals with registered locations (like URLs to YAML files), and those that deal with static locations in the app-config.

Note that most of the more in-depth processing will be done by the next step.

#### Step 2: Processing
Entities come into the funnel and are usually processed as soon as possible. The *processors* are responsible for taking the unprocessed entity and running their specific task on the unprocessed entity.

When it's finished, it stores that data as a "processed entity" and any by-products like relations to other entities are also stored.

If a processor finds a relation to another entity (like say an API entity in a Component entity), then it will emit that API entity to the list to be processed.

When data is "emitted", it typically goes back into the system via the catalog database with a new timestamp indicating it needs to be processed. This acts as a queue.

Relationships between entities are stored in a dedicated relations table in the database. During the "stitching" phase, these relations are used to connect entities together.
