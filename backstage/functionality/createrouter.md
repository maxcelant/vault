Used to generate the routes for a plugin. Associates route references with actual React components. Primarily works with front-end components.

For creating [[routeref|symbolic route reference]]:

```js
export const myRouteRef = createRouteRef({
  id: 'My Plugin Page',
});
```

Associates those route references with actual components to display when the route is accessed:

```js
export const Router = createRouter({
  routes: {
    page1: {
      routeRef: page1RouteRef,
      component: Page1Component,
    },
    page2: {
      routeRef: page2RouteRef,
      component: Page2Component,
    },
  },
});
```

```jsx
import { myRouteRef, Router as MyPluginRouter } from '@my-plugin';

// ...

<Routes>
  {/* ... other routes ... */}
  <Route path="/my-plugin-route" element={<MyPluginRouter />} />
</Routes>
```

