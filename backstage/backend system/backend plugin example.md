In this example, we will examine their `adr-backend` plugin to see how it works!

##### `packages/backend-next/src/index.js`
- This is where all the backend plug in together
```ts
import { createBackend } from '@backstage/backend-defaults';

const backend = createBackend();

backend.add(import('@backstage/plugin-adr-backend'));
...
// All other backend plugins

backend.start();
```

##### `plugins/ard-backend/src/plugin.ts`
- This is where the plugin is being created.
- it uses a handful of [[core services]] like logger and cache.
```ts
import { loggerToWinstonLogger } from '@backstage/backend-common';
import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

export const adrPlugin = createBackendPlugin({
  pluginId: 'adr',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        reader: coreServices.urlReader,
        cache: coreServices.cache,
        httpRouter: coreServices.httpRouter,
      },
      async init({ httpRouter, logger, reader, cache }) {
        httpRouter.use(
          await createRouter({
            logger: loggerToWinstonLogger(logger),
            reader,
            cacheClient: cache,
          }),
        );
      },
    });
  },
});
```

#### `plugins/ard-backend/src/service/router.ts`
- This is where the actual routes are placed for the plugin.
```ts
import { Logger } from 'winston';
import express from 'express';
import Router from 'express-promise-router';

export type AdrRouterOptions = {
  reader: UrlReader;
  cacheClient: CacheClient;
  logger: Logger;
};

export async function createRouter(
  options: AdrRouterOptions,
): Promise<express.Router> {
  const { reader, cacheClient, logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/list', async (req, res) => {
    // functionality
  });

  router.get('/file', async (req, res) => {
    // functionality
  });

  return router;
}

```

[[backstage/backend system/★ index|Return]]