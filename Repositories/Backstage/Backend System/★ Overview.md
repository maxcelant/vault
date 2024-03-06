## Plugins, Modules and Services

#### Plugins
Plugins are our backend routers i.e. any plugin that ends in `-backend`. These are mostly unchanged, except now we wrap our `createRouter` in a `createBackendPlugin`, passing in it's dependencies.

_Example_
```ts
const plugin: ServicesType['plugin'] = { name: 'activeDirectoryService', hasAuthSsoMiddleware: true };

export const adService = createBackendPlugin({
  pluginId: plugin.name,
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        httpRouter: coreServices.httpRouter,
        restClient: restClientServiceRef
      },
      async init({ httpRouter, logger, config, restClient }) {
        const winstonLogger = loggerToWinstonLogger(logger)
        await middlewareConfigurator({ router: httpRouter, config, logger: winstonLogger, plugin})
        
        httpRouter.use(
          await createRouter({
            logger: winstonLogger,
            config,
            restClient
          }),
        );
      },
    });
  },
});
```

Since this plugin requires auth middleware configuration (through `middlwareConfigurator`), we have `hasAuthSsoMiddleware`  set to `true` in the `plugin` object at the top. All of the plugins made by us should have that set to `true`. Notice that the services (or dependencies) are established in the `deps` object. This is the convention moving forward. The router should be wrapped in the `httpRouter` to become part of the root router for the backend system.

Adding the plugin is simple, you need to export it as `default` from its `index.ts` file, and then import the plugin according to its name in its `package.json`

```ts
export { adService as default } from './plugin'
```

```ts
const backend = createBackend();

backend.add(import('@runway/plugin-ad-service-backend'));

backend.start();
```

#### Modules
Modules are simply extensions of a plugin. They add some functionality to an existing plugin. They extend the plugin through what's called an **extension points**. Modules are always initialized before plugins are, which is important for things like middleware (more on this later).

_Example_
```ts
export const scaffolderModuleCustomActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'custom-actions',
  register(env) {
    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ config, scaffolder }) {
        const integrations = ScmIntegrations.fromConfig(config);
        scaffolder.addActions(myCustomAction(config));
      },
    });
  },
});
```

In this example above, the extension point would be `scaffolderActionsExtensionPoint`, and this modules entire job is to add additional custom actions to the existing scaffolder. 

#### Services
Services are high level capabilities that plugins or modules may rely on i.e logger, config, restClient. Services have a reference and a factory for instantiating them. The factory should be added to the backend `index.ts` file. Notice that services can depend on other services. 

```ts
// plugins/notification-service-backend/src/lib/notificationService.ts

export const notificationServiceRef = createServiceRef<NotificationServiceApi>({
  id: 'runway.notification',
});

export const notificationServiceFactory = createServiceFactory({
  service: notificationServiceRef,
  deps: { 
    config: coreServices.rootConfig,
    logger: coreServices.logger,
    restClient: restClientServiceRef
  },
  async factory({ config, logger, restClient }) {
    return new NotificationService(config, loggerToWinstonLogger(logger), restClient);
  },
});
```

```ts
// packages/backend/index.ts

const backend = createBackend();

backend.add(notificationServiceFactory())

backend.start();
```

##### Local Services
If a service is used _mostly_ locally within that plugin, then it should be placed within `/lib` directory within that plugin's `/src` directory.

##### Global Services
If a service is used across many plugins and is not pertaining to any plugin specifically, it can be created in the `devkit-backend` and `devkit-common`. The implementation details from which the service is made can be put in the `devkit-common`, while the factory and ref for that service can be put in their respective directories (`/factories` and `/refs`) within the `devkit-backend`. 

>![[Pasted image 20240206132719.png]]


## Standalone Backends and Middleware
#### Standalone Backends
If a backend plugin exists _outside_ of the Runway repo but should still hook into our backend, we can still handle those backends with ease. We just need to make a wrapper around them using `createBackendPlugin`. This works if they have an outward facing `createRouter` within their backend plugin, which they should.

```ts
import { createRouter } from '@runway/plugin-kpaas-mailing-list-backend';

const plugin: ServicesType['plugin'] = { name: 'kpaasMailingList', hasAuthSsoMiddleware: true };

export const kpaasMailingList = createBackendPlugin({
  pluginId: plugin.name,
  register(env) {
    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
      },
      async init({ httpRouter, config, logger }) {
        const winstonLogger = loggerToWinstonLogger(logger)
        await middlewareConfigurator({ router: httpRouter, config, logger: winstonLogger, plugin})
        httpRouter.use(
          await createRouter({
            config,
            logger: winstonLogger
          }),
        );
      },
    });
  },
});
```

Here is an example of the `kpaas-mailing-list-backend` which follows this pattern.

#### Adding Middleware
Adding middleware to a plugin is very simple. You simply use `httpRouter.use` with your intended plugin within the `createBackendPlugin`

```diff
const plugin: ServicesType['plugin'] = { name: 'activeDirectoryService', hasAuthSsoMiddleware: true };

export const adService = createBackendPlugin({
  pluginId: plugin.name,
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        httpRouter: coreServices.httpRouter,
        restClient: restClientServiceRef
      },
      async init({ httpRouter, logger, config, restClient }) {
+       httpRouter.use(myCustomMiddlware())
        httpRouter.use(
          await createRouter({
            logger: winstonLogger,
            config,
            restClient
          }),
        );
      },
    });
  },
});
```

Adding middleware to a backstage plugin is as little trickier. You need either create a module for that plugin, or add your middleware to the existing backstage module within the `./modules` directory in the `backend` directory. 

```diff
export const catalogModuleCustomExtensions = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'custom-extensions',
  register(env) {
    env.registerInit({
      deps: {
        catalog: catalogProcessingExtensionPoint,
        config: coreServices.rootConfig,
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        restClient: restClientServiceRef,
        tokenManager: coreServices.tokenManager,
        identity: coreServices.identity,
        observeServiceRecordStore: observeRecordStoreRef,
      },
      async init({ catalog, config, httpRouter, logger, restClient, observeServiceRecordStore }) {
+       httpRouter.use(myCustomMiddleware())
        httpRouter.use(catalogObserveMiddleware(loggerToWinstonLogger(logger), observeServiceRecordStore));
        catalog.addProcessor(new ObservabilityEntitiesProcessor());
        if (config.getOptionalBoolean('entityProcessor.userEmailProcessor.enabled')) {
          catalog.addProcessor(new UserEmailProcessor(config, loggerToWinstonLogger(logger), restClient));
        }
      },
    });
  },
});
```

In the above example, we are adding middleware to the software catalog. Since we don't have direct access to the catalog plugin, this is the best we can do since we have established that modules are initialized _before_ plugins. 

#### Root Level Middleware
There may be some middleware in the future that needs to be added at the root router level, we can do that utilizing Backstage's `rootHttpRouterServiceFactory`. We have our own created in `backend/src/middleware`. 

```diff
export default rootHttpRouterServiceFactory({
  configure: ({ app, middleware, config, logger, routes }) => {
    app.use(middleware.helmet());
    app.use(middleware.cors());
    app.use(middleware.compression());
    app.use(cookieParser());
    app.use(json());
    app.use(middleware.logging());

    app.use(backstageAuthMiddleware({ config, logger }));

    app.use(routes);

    app.use(middleware.notFound());
    app.use(middleware.error());
+   app.use(myRootLevelMiddleware())
  },
});
```

## Adding Scaffolder Actions
In the future, you may need to add a new custom action to the scaffolder. All you need to do is add your action to the `/backend/src/modules/scaffolder-custom-actions` file. Add your action to the `/actions` folder and then slot it in.

```diff
export const scaffolderModuleCustomActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'custom-actions',
  register(env) {
    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
      },
      async init({ config }) {
	    ...
+       scaffolder.addActions(myCustomAction(config));
      },
    });
  },
});
```

## Adding Catalog Processors
Similarly to adding an action to the scaffolder, you can add processors to the catalog using their `catalogProcessingExtensionPoint`. This can be found at `/backend/src/modules/catalog-custom-extensions`.

```diff
export const catalogModuleCustomExtensions = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'custom-extensions',
  register(env) {
    env.registerInit({
      deps: {
        ...
      },
      async init({ ... }) {
+       catalog.addProcessor(new MyCustomProcessor())
      },
    });
  },
});
```