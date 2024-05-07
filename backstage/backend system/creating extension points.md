- Plugin extension points should always be exported from a plugin node library package, for example `@backstage/plugin-catalog-node`.
	- This is to avoid direct dependencies on the plugins.
- Modules depend on [[extension points]] just as a regular dependency by specifying it in the `deps` section.
- You can export as many different extension points as you want, just be mindful of the complexity of the API surface.
	- It is however often better to export multiple extension points with few methods, rather than few extension points with many methods, as that tends to be easier to maintain.


## Defining Extension Points
- Need to provide a type and ID

```ts
import { createExtensionPoint } from '@backstage/backend-plugin-api'

export interface ScaffolderActionsExtensionPoint {
	addAction(action: ScaffolderAction): void;
}

export const scaffolderActionsExtensionPoint = 
	createExtensionPoint<ScaffolderActionsExtensionPoint>({
		id: 'scaffolder.action'
	});
```

## Registering Extension Points
- For modules to use your extension point, an implementation must be registered by the plugin.
- Done using `registerExtensionPoint` in `register` callback.

```ts
export const scaffolderPlugin = createBackendPlugin(
  {
    pluginId: 'scaffolder',
    register(env) {
      const actions = new Map<string, TemplateAction<any>>();

      env.registerExtensionPoint(
        scaffolderActionsExtensionPoint,
        {
          addAction(action) {
            if (actions.has(action.id)) {
              throw new Error(`Scaffolder actions with ID '${action.id}' has already been installed`);
            }
            actions.set(action.id, action);
          },
        },
      );

      env.registerInit({
        deps: { ... },
        async init({ ... }) {
          // Use the registered actions when setting up the scaffolder ...
          const installedActions = Array.from(actions.values());
        },
      });
    },
  },
);
```

[[Backstage/backend system/★ index|Return]]