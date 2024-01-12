- Allows you to define and create a self-contained piece of functionality that can be added to a Backstage application. 
- Might represent a tool, service, visualization or more.
- You can provide an ID, register APIs, and also define route references for potential pages or components you'll be displaying.
- It doesn't directly involve the act of routing but rather sets up the identity and capabilities of your plugin.

Plays an integral role along side [[createRouter]].

```javascript
import { createPlugin, createRouteRef, createRoutableExtension } from '@backstage/core-plugin-api'
```

First we create our [[routeRef|symbolic route reference]]:

```javascript
const rootRouteRef = createRouteRef({
	title: 'my-plugin',
})
```

Creates the plugin itself. Associated with a route called `rootRouteRef`

```javascript
const myPlugin = createPlugin({
  id: 'my-multi-page-plugin',
  routes: {
    page1: page1RouteRef,  // Registering the first route reference
    page2: page2RouteRef,  // Registering the second route reference
  },
})
```

Within the app itself, it can be travelled to like so:

```javascript
import { MyPluginPage } from '@runway/plugin-my-plugin';

<Route path="/my-plugin" element={<MyPlugin />} />
```
