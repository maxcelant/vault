| Name | Explanation |  |  |
| ---- | ---- | ---- | ---- |
| `plugin-<pluginId>-backend` | the plugin itself |  |  |
| `plugin-<pluginId>-node` | houses the [[extension points|extension points]] and other utilities |  |  |
| `plugin-<pluginId>-backend-module-<moduleId>` | houses modules that extend the plugins via extension points |  |  |
| `backend` | is the backend itself that wires everything together to something you can deploy |  |  |

More info [here](https://backstage.io/docs/overview/architecture-overview/#package-architecture).

---
### Plugins

| Description | Pattern      | Examples                            |
| ----------- | ------------ | ----------------------------------- |
| export      | `<id>Plugin` | `catalogPlugin`, `scaffolderPlugin` |
| ID          | `'<id>'`     | `'catalog'`, `'scaffolder'`         |

Example:

```ts
export const catalogPlugin = createBackendPlugin({
  pluginId: 'catalog',
  ...
})
```

### Modules

| Description | Pattern                      | Examples                            |
| ----------- | ---------------------------- | ----------------------------------- |
| export      | `<pluginId>Module<ModuleId>` | `catalogModuleGithubEntityProvider` |
| ID          | `'<moduleId>'`               | `'githubEntityProvider'`            |

Example:

```ts
export const catalogModuleGithubEntityProvider = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'githubEntityProvider',
  ...
})
```

### Extensions

| Description | Pattern                          | Examples                               |
| ----------- | -------------------------------- | -------------------------------------- |
| Interface   | `<PluginId><Name>ExtensionPoint` | `CatalogProcessingExtensionPoint`      |
| Reference   | `<pluginId><Name>ExtensionPoint` | `catalogProcessingExtensionPoint`      |
| ID          | `'<pluginId>.<name>'`            | `'catalog.processing'`, `'foo.barBaz'` |

Example:

```ts
export interface CatalogProcessingExtensionPoint {
  ...
}

export const catalogProcessingExtensionPoint = createExtensionPoint<CatalogProcessingExtensionPoint>({
  id: 'catalog.processing',
  ...
})
```

### Services

| Description | Pattern                | Examples                                           |
| ----------- | ---------------------- | -------------------------------------------------- |
| Interface   | `<Name>Service`        | `LoggerService`, `DatabaseService`                 |
| Reference   | `<name>ServiceRef`     | `loggerServiceRef`, `databaseServiceRef`           |
| ID          | `<pluginId>.<name>`    | `'core.rootHttpRouter'`, `'catalog.catalogClient'` |
| Factory     | `<name>ServiceFactory` | `loggerServiceFactory`, `databaseServiceFactory`   |

Example:

```ts
export interface CatalogClientService {
  ...
}

export const catalogClientServiceRef = createServiceRef<CatalogClientService>({
  id: 'catalog.catalogClient',
  ...
})

export const catalogClientServiceFactory = createServiceFactory({
  service: catalogClientServiceRef,
  ...
})
```

An exception to the above service reference naming pattern has been made for the all of the core services in the core API. The `@backstage/backend-plugin-api` makes all core service references available via a single `coreServices` collection. Likewise, the `@backstage/backend-test-utils` exports all mock service implementations via a single `mockServices` collection. This means that the table above is slightly misleading, since `loggerServiceRef` and `databaseServiceRef` are instead available as `coreServices.logger` and `coreService.database`. We recommend that plugins avoid this patterns unless they have a very large number of services that they need to export.

While it is often preferred to prefix root scoped services with `Root`, it is not required. For example, `RootHttpRouterService` and `RootLifecycleService` follow this pattern, but `ConfigService` doesn't and it is a root scoped service.

[[backstage/backend system/★ index|Return]]