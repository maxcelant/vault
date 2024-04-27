- Used to wire the plugins together
- It is up to you to decide how many different backends you want to deploy. 
- You can have all features in a single one, or split things out into multiple smaller deployments. All depending on your need to scale and isolate individual features.
- You can add any feature to a backend instance using `.add()`. Features include: [[plugins]], [[backstage/backend system/modules]], or [[service factory|service factories]].
- As mentioned previously there's also the ability to create multiple of these backends in your project so that you can split apart your backend and deploy different backends that can scale independently of each other. 
	- For instance you might choose to deploy a backend with only the catalog plugin enabled, and one with just the scaffolder plugin enabled.

```ts
import { createBackend } from '@backstage/backend-defaults';
import { catalogPlugin } from '@backstage/plugin-catalog-backend';

// Create your backend instance
const backend = createBackend();

// Install all desired features
backend.add(catalogPlugin());

// This is what they prefer:
backend.add(import('@backstage/plugin-catalog-backend''))

// Start up the backend
await backend.start();
```

[[backstage/backend system/★ index|Return]]