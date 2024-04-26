Basically allows some functionality of a plugin to be used outside of the plugin.

```js
// In the Math plugin (e.g., math-plugin.ts)
import { createRoutableExtension } from '@backstage/core-plugin-api';

export const MathMagicRoutableExtension = createRoutableExtension({
  component: () => import('./components/MathMagic').then(m => m.MathMagic),
  mountPoint: mathMagicRouteRef,
});
```

Now we can use `MathMagicRoutableExtension` within your app or a different plugin.

```js
// In another plugin or main app (e.g., main-app.tsx)
import { MathMagicRoutableExtension } from 'math-plugin';
```

---
#### Wrapping it in `plugin.provide()`

When you wrap an extension with `plugin.provide(...)`, you're essentially saying, "This extension is a part of this plugin, and it should have access to everything this plugin knows and provides."

```js
export const FooPage = plugin.provide(
  createRoutableExtension({
    name: 'FooPage',
    component: () => import('./components/FooPage').then(m => m.FooPage),
    mountPoint: fooPageRouteRef,
  }),
);
```