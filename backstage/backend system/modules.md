- Use Extension Points to introduce new functionality or augment the behavior of plugins.
- "plugins for plugins"
- An example is like adding a new Scaffolder Action.
- Each module is designed to extend only one plugin.
- The module and plugin must be deployed together on the same backend instance.
- They are always initialized before the plugins.
- Modules can't access all parts of the plugin. They interact with it exclusively through it's registered [[extension points]].
- Can access and utilize [[backstage/backend system/services]] and can rely on their own service implementations.

[[backstage/backend system/★ index|Return]]