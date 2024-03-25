1. `lazy` takes an anonymous function whos only job is to import a module and return its default export. 
2. Within `lazy`, that module is imported and what we get in return the default export, saved in a var called `func`, next it calls that default export (`func`) with the args passed in. 
3. All of this occurs within an anonymous async function so that it happens when the `loadedFn` is actually called/triggered.

```ts
function lazy(
  getFunc: () => Promise<(...args: any[]) => Promise<void>>,
): (...args: any[]) => Promise<never> {
  return async (...args: any[]) => {
    try {
      const func = await getFunc();
      await func(...args);

    } catch (error) {
      console.log(error)
    }
  };
}

const loadedFn = lazy(() => import('./foo.js').then(m => m.default));

loadedFn();
```