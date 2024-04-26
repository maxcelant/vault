#### `DefaultCatalogCollatorFactory` ([Link](https://github.com/backstage/backstage/blob/master/plugins/search-backend-module-catalog/src/collators/DefaultCatalogCollatorFactory.ts))
- A factory class for creating custom collators.
- `fromConfig` static method is used to create new instances of this factory, to create a custom collator, like so:

```js
indexBuilder.addCollator({
    schedule,
    factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {
      discovery: env.discovery,
      tokenManager: env.tokenManager,
    }),
  });
```


- Allows you specify things like `filter` and `batchSize`
- Class that basically prepares and sends streams of entities based on some data we want.
- `execute()` is a generator function that sends a batch of entities once they are suitable for indexing.
- `getCollator()` wraps `execute()` and ensures that whatever is consuming the data can do so in a stream-like fashion.

---
#### `defaultCatalogEntityTransformer` [Link](https://github.com/backstage/backstage/blob/master/plugins/search-backend-module-catalog/src/collators/defaultCatalogCollatorEntityTransformer.ts)
- Called the `entityTransformer` within the above file.
- Basically just takes an entity and returns some an object of important data about that entity.
- Things like title, kind, owner, etc.

