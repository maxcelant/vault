## `DefaultCatalogCollatorFactoryOptions`
- `discovery` - The DiscoveryService is used to provide a mechanism for backend plugins to discover the endpoints for itself or other backend plugins.
- `tokenManager` - Interface for creating and validating tokens.
- `locationTemplate?` - The location of the template as a string with keys, but the values for that entity need to put slotted in.
- `filter?` 
- `batchSize?` - How many entities to grab at once
- `catalogClient?` - 
- `entityTransformer` - Allows you to customize how entities are shaped in documents.

## `DefaultCatalogCollatorFactory`
- It's a factory, but not in the classic sense. It doesn't encapsulate and return a different object. It still returns itself.
- It's a factory because it abstracts the complexity of configuring the object itself by using a `fromConfig()` static method.

```ts
DefaultCatalogCollatorFactory.fromConfig(config, options)
```

### `fromConfig()`
- Serves as the static factory method for the class that returns an instance of `DefaultCatalogCollatorFactory`.

### `execute()`

Go here to learn more about [[Learning/Concepts/generators|generators]]!

1. Get token and initialize `entitiesRetrieved` and `moreEntitiesToGet`.
2. Goes through the catalog, retrieves entities at the given offset. This is like getting records from a database
3. Update `entitiesRetrieved` based on batch size
4. Yield each entity retrieved and transform that entity based on the `entityTransfomer`.
```ts
  private async *execute(): AsyncGenerator<CatalogEntityDocument> {
    1️⃣
    const { token } = await this.tokenManager.getToken();
    let entitiesRetrieved = 0;
    let moreEntitiesToGet = true;
	
	2️⃣
    while (moreEntitiesToGet) {
      const entities = (
        await this.catalogClient.getEntities(
          {
            filter: this.filter,
            limit: this.batchSize,
            offset: entitiesRetrieved,
          },
          { token },
        )
      ).items;

	  3️⃣
      moreEntitiesToGet = entities.length === this.batchSize;
      entitiesRetrieved += entities.length;

	  4️⃣
      for (const entity of entities) {
        yield {
          ...this.entityTransformer(entity),
          authorization: {
            resourceRef: stringifyEntityRef(entity),
          },
          location: this.applyArgsToFormat(this.locationTemplate, {
            namespace: entity.metadata.namespace || 'default',
            kind: entity.kind,
            name: entity.metadata.name,
          }),
        };
      }
    }
  }
```

### `applyArgsToFormat()`
- Is used to replace the placeholder `key` with the `value`
- For instance `user/:foo/:bar` -> `user/fooValue/barValue`

```ts
  private applyArgsToFormat(
    format: string,
    args: Record<string, string>,
  ): string {
    let formatted = format;

    for (const [key, value] of Object.entries(args)) {
      formatted = formatted.replace(`:${key}`, value);
    }

    return formatted.toLowerCase();
  }
```