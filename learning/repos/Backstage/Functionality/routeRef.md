Used to create a unique reference to a route within the plugin. This will later be used to associate a specific URL path with a component. Basically says "hey, start the route endpoint with this `id` value".

*Think of it like a library with lots of books. Instead of referencing a book by its title, author, etc, there's usually an ID that points you to that book.*

```js
export const myRouteRef = createRouteRef({
  id: 'My Plugin Page',
});
```

At first glance, looks relatively unimportant however they are important to how Backstage works!

- Instead of hardcoding paths, plugins work using these references. This allows for actual paths to be defined at higher level, offering more flexibility.
- It is "type-safe", by ensuring you are referring to existing routes.
