- A [[backstage/backend system/modules|Module]] is able to extend a plugin with additional functionality using the [[extension points]] registered by the plugin.
- A module can only extend one plugin but can interact with multiple [[extension points]] registered by that plugin.
- A module is always initialized before the plugin it extends.
- A module *depends* on the `ExtensionPoint`s exported by the target plugin's library package. 

## Practical Example
- `MyCustomProcessor` is the new addition we are adding to the `catalog`.
- Notice that it relies on `catalogProcessingExtensionPoint` in `deps`

```ts
import { createBackendModule } from '@backstage/backend-plugin-api';
import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node';
import { MyCustomProcessor } from './processor';

export const exampleCustomProcessorCatalogModule = createBackendModule({
  moduleId: 'exampleCustomProcessor',
  pluginId: 'catalog',
  register(env) {
    env.registerInit({
      deps: {
        catalog: catalogProcessingExtensionPoint,
        logger: coreServices.logger,
      },
      async init({ catalog }) {
        catalog.addProcessor(new MyCustomProcessor(logger));
      },
    });
  },
});
```

- Adding to backend instance is done like so:

```ts
// plugins/catalog-backend-module-example-processor/src/index.ts
export { catalogModuleExampleCustomProcessor as default } from './module.ts';
```

```ts
backend.add( 
		import('backstage-plugin-catalog-backend-module-example-processor'), 
);
```



[[backstage/backend system/★ index|Return]]

