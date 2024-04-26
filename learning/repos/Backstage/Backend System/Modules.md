- Use Extension Points to introduce new functionality or augment the behavior of plugins.
- "plugins for plugins"
- An example is like adding a new Scaffolder Action.
- Each module is designed to extend only one plugin.
- The module and plugin must be deployed together on the same backend instance.
- They are always initialized before the plugins.
- Modules can't access all parts of the plugin. They interact with it exclusively through it's registered [[Extension Points]].
- Can access and utilize [[learning/repos/Backstage/Backend System/Services]] and can rely on their own service implementations.

[[learning/repos/Backstage/Backend System/★ Index|Return]]