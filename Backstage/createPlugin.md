Allows you to define a self-contained piece of functionality that can be added to a Backstage application. Might represent a tool, service, visualization or more.

```javascript
import { createPlugin, createRouteRef, createRoutableExtension } from '@backstage/core-plugin-api'
```

Used to create a unique reference to a route within the plugin. This will later be used to associate a specific URL path with a component. Basically says "hey, start the route endpoint with this `id` value".

```javascript
const rootRouteRef = createRouteRef({
	id: 'my-plugin',
})
```

Creates the plugin itself. Associated with a route  called `rootRouteRef`

```javascript
const myPlugin = createPlugin({
	id: 'my-plugin',
	routes: {
		root: rootRouteRef
	}
})
```

`createRoutableExtension` is used to define a "routable extension" for the plugin. A routable extension is a component that can be loaded and displayed when the user navigates to a specific URL.

- `component`: Specifies the component to be loaded when the user navigates to the route. In this case, it's using dynamic import (`import('./Router').then(m => m.RoutesList)`) to load the component asynchronously.
- `mountPoint`: The route reference where the component should be mounted. Here, it's the `rootRouteRef` created earlier.
- `name`: A human-readable name for the component.

```javascript
export const MyPluginPage = myPlugin.provide(
	createRoutableExtension({
		// this just means it wont be loaded until this plugin is used
		component: () => import('./Router').then(m => m.RoutesList),
	    mountPoint: rootRouteRef,
	    name: 'My Plugin',
	})
)
```

Within the app itself, it can be travelled to like so:

```javascript
import { MyPluginPage } from '@runway/plugin-my-plugin';

<Route path="/my-plugin" element={<MyPlugin />} />
```