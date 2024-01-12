Check them out [here](https://github.com/backstage/backstage/blob/master/packages/backend-plugin-api/src/services/definitions/coreServices.ts).

| Service               | Functionality                                                      |
| --------------------- | ------------------------------------------------------------------ |
| CacheService          | Speeds up functionality by caching data                            |
| RootConfigService     | Config management, fetching global configs                         |
| DatabaseService       | Interaction with a db, allowing plugins to do CRUD                 |
| DiscoveryService      | Allows communication among services                                |
| HttpRouteService      | Ensures that HTTP requests are directed to the correct endpoints   |
| LifecycleService      | Manages lifecycle events like init and teardown for plugins        |
| LoggerService         | Provides logging for events, errors and more                       |
| PermissionService     | Manages permissions, ensuring auth                                 |
| PluginMetadataService | Provides metadata for plugins like version, author, deps, etc      |
| SchedulerService      | Manages scheduled tasks, ensures certain ops run at specific times |
| TokenManagerService   | Manages auth tokens                                                |


