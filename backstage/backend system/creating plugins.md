- The plugin ID must match the plugin ID in the package name without the `backend` suffix
- You can also depend on services exported or created.

```ts
// plugins/example-backend/src/plugin.ts
import {
  configServiceRef,
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';

export const examplePlugin = createBackendPlugin({
  pluginId: 'example',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
      },
      async init({ logger }) {
        logger.info('Hello from example plugin');
      },
    });
  },
});
```

Better example [[backend plugin example|here]].

The plugin can then be installed in the backend like so:

```ts
backend.add(examplePlugin());
// OR
backend.add('backstage-plugin-example-backend')
```

May also optionally accept an `options` object:

```ts
export const examplePlugin = createBackendPlugin({
  pluginId: 'example',
  register(env, options?: { silent?: boolean }) {
    env.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        if (!options?.silent) {
          logger.info('Hello from example plugin');
        }
      },
    });
  },
});
```

If you're pushing it with options, then like so:

```ts
backend.add(examplePlugin({ silent: true }));
```

[[backstage/backend system/★ index|Return]]