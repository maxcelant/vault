### `CatalogCollatorExtensionPoint`
- A type that provides a `setEntityTransformer` function that takes a transformer.
```ts
export type CatalogCollatorExtensionPoint = {
  setEntityTransformer(transformer: CatalogCollatorEntityTransformer): void;
};
```
### `catalogCollatorExtensionPoint`
- Uses the `type` to create the extension point, we also give it a unique id (`search.catalogCollator.extension`).

```ts
export const catalogCollatorExtensionPoint =
  createExtensionPoint<CatalogCollatorExtensionPoint>({
    id: 'search.catalogCollator.extension',
  });
```
### `createBackendModule`
- We create the actual module that uses that extension point above.
- Within the module is the implementation of that `setEntityTransformer` that we talked about above. All this function does is set the entityTransformer to the one we pass into this function!

```ts
export default createBackendModule({
  pluginId: 'search',
  moduleId: 'catalog-collator',
  register(env) {
    let entityTransformer: CatalogCollatorEntityTransformer | undefined;

    env.registerExtensionPoint(catalogCollatorExtensionPoint, {
      setEntityTransformer(transformer) {
        if (entityTransformer) {
          throw new Error('setEntityTransformer can only be called once');
        }
        entityTransformer = transformer;
      },
    });

    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
        discovery: coreServices.discovery,
        tokenManager: coreServices.tokenManager,
        scheduler: coreServices.scheduler,
        indexRegistry: searchIndexRegistryExtensionPoint,
        catalog: catalogServiceRef,
      },
      async init({
        config,
        discovery,
        tokenManager,
        scheduler,
        indexRegistry,
        catalog,
      }) {
        indexRegistry.addCollator({
          schedule: scheduler.createScheduledTaskRunner(
            readScheduleConfigOptions(config),
          ),
          factory: DefaultCatalogCollatorFactory.fromConfig(config, {
            entityTransformer,
            discovery,
            tokenManager,
            catalogClient: catalog,
          }),
        });
      },
    });
  },
});
```

In this example below, roadie uses this `catalogCollatorExtensionPoint` to set a custom transformer using the `setEntityTransformer` extension.

```ts
const customTransformer: CatalogCollatorEntityTransformer = entity => ({
  title: entity.metadata.title || entity.metadata.name,
  text: entity.metadata.description || '',
  componentType: entity.spec?.type?.toString() || 'other',
  type: entity.spec?.type?.toString() || 'other',
  namespace: entity.metadata.namespace || 'default',
  kind: entity.kind,
  lifecycle: (entity.spec?.lifecycle as string) || '',
  owner: (entity.spec?.owner as string) || '',
});

...

createBackendModule({
    pluginId: 'search',
    moduleId: 'my-catalog-collator-options',
    register(reg) {
      reg.registerInit({
        deps: { 
	      collator: catalogCollatorExtensionPoint 
	    },
        init({ collator }) {
          collator.setEntityTransformer(customTransformer);
        },
      });
    },
  }),
```

#### `Summary`
This goes to show that modules can also establish and utilize extension points. In this case the catalog module for search uses this `catalogCollatorExtensionPoint`. What this really means is that if you ever want to use this module (catalog for search) then you can _also_ customize its **entity transformer**, if you want to.