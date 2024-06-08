- You can use generics to establish a restriction on a dynamic `options` object for a factory.

```ts
type AnyOptions = Record<string, string>

type Config<T extends AnyOptions> = {
  name: string;
  description: string;
  create: (options: T) => void;
}
```

- This allows our `create` to have dynamic `options` depending on what we are creating!

```ts
type Factory = Config<AnyOptions>

const createFactory<T extends AnyOptions>(
  config: Config<T>
): Factory {
  return config as Factory;
}
```

- This `Factory` type is just concrete type based on the generic. 

```ts
type Options = {
  id: string;
  team: string;
}

const frontendPlugin = createFactory<Options>({
  name: 'Plugin',
  description: 'Create a frontend plugin',
  create: (options: Options) => {
    console.log(options);
  }
})
```

- Now one of my factory outputs can have the exact `Options` object that it needs!

- **Full Coding Example**
	- 
	  ```ts
		type AnyOptions = Record<string, string>;

		type Config<T extends AnyOptions> = {
		  name: string;
		  description: string;
		  create: (options: T) => void;
		};
		
		type Factory = Config<AnyOptions>;
		
		function createFactory<T extends AnyOptions>(
		  config: Config<T>
		): Factory {
		  return config as Factory;
		}
		
		type FrontendOptions = { framework: string };
		
		const frontendPlugin = createFactory<FrontendOptions>({
		  name: 'plugin',
		  description: 'Create a frontend plugin',
		  create: (options: FrontendOptions) => {
		    console.log('creating using options: ', options);
		  }
		});
		
		type BackendOptions = { apiName: string }
		
		const backendPlugin = createFactory<BackendOptions>({
		  name: 'plugin',
		  description: 'Create a backend plugin',
		  create: (options: BackendOptions) => {
		    console.log('creating using options: ', options);
		  }
		});
		
		backendPlugin.create({ apiName: '/orders'})
		frontendPlugin.create({ framework: 'react@21'})
		```