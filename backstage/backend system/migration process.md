[Link](https://backstage.io/docs/backend-system/building-backends/migrating/)

```bash
# from the repository root 
yarn add --cwd packages/backend @backstage/backend-defaults @backstage/backend-plugin-api
```

```ts
import { createBackend } from '@backstage/backend-defaults';
/* highlight-add-next-line */
import { legacyPlugin } from '@backstage/backend-common';

const backend = createBackend();
/* highlight-add-next-line */
backend.add(legacyPlugin('todo', import('./plugins/todo')));
backend.start();
```

## Custom Environments

```ts
import {
  makeLegacyPlugin,
  loggerToWinstonLogger,
} from '@backstage/backend-common';
import { coreServices } from '@backstage/backend-plugin-api';

const legacyPlugin = makeLegacyPlugin(
  {
    cache: coreServices.cache,
    config: coreServices.rootConfig,
    database: coreServices.database,
    discovery: coreServices.discovery,
    logger: coreServices.logger,
    permissions: coreServices.permissions,
    scheduler: coreServices.scheduler,
    tokenManager: coreServices.tokenManager,
    reader: coreServices.urlReader,
    identity: coreServices.identity,
    // ... and your own additions
  },
  {
    logger: log => loggerToWinstonLogger(log),
  },
);

const backend = createBackend();  
backend.add(legacyPlugin('todo', import('./plugins/todo')));  
backend.start();
```

[[backstage/backend system/★ index|Return]]

