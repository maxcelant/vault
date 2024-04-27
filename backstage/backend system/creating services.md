## Service Interface
- Best to keep the parameters down to an `options`param.
```ts
export interface FooService {
  foo(options: FooOptions): Promise<FooResult>;
}
```

## Service References
- This will be a reference that you export in order to allow users to interact with your service. 
- Very similar to `ApiRef`s on the frontend system.
- `plugin` scoped services will be created once per plugin/module, `root` scoped will be created once per backend instance.
```ts
import { createServiceRef } from '@backstage/backend-plugin-api';

export interface FooService {
	foo(options: FooOptions): Promise<FooResults>;
}

export const fooServiceRef = createServiceRef<FooService>({
	scope: 'plugin' // or 'root'
	id: 'example.foo',
});
```

## Service Factories

^af1e42

- How we create a concrete implementation of our service.
- This defines how its created and any of its deps.
- The `factory` function must return a value that implements the service interface.

```ts
import { createServiceFactory } from '@backstage/backend-plugin-api';

class DefaultFooService implements FooService {
  async foo(options: FooOptions): Promise<FooResult> {
    // ...
  }
}

export const fooServiceFactory = createServiceFactory({
  service: fooServiceRef,
  deps: { bar: barServiceRef },
  factory({ bar }) {
    return new DefaultFooService(bar);
  },
});
```

## Default Service Factories

^56c151
- Users of the service don't need to worry about installing the service manually.
- Good practice to define a default factory for services exported for use in other plugins or modules.

```ts
import {
  createServiceFactory,
  createServiceRef,
} from '@backstage/backend-plugin-api';

export const fooServiceRef = createServiceRef<FooService>({
  id: 'example.foo',
  defaultFactory: async service =>
    createServiceFactory({
      service,
      deps: {},
      factory() {
        return new DefaultFooService();
      },
    }),
});
```

## Adding Service to Backend

```ts
const backend = createBackend();
...
backend.add(fooServiceFactory());
```

---
## Example
Look at how the todo Service interacts with its Plugin [here](https://github.com/backstage/backstage/blob/master/plugins/todo-backend/src/service/router.ts). Even though its only being used within this plugin, the service is being called similarly to how we are doing it now with our route / class structure.

```ts
export class TodoReaderService implements TodoService {

  constructor(options: TodoReaderServiceOptions) {
	...
  }

  async listTodos(
    req: ListTodosRequest,
    options?: { token?: string },
  ): Promise<ListTodosResponse> {
    ...
  }
}

export const todoServiceRef: ServiceRef<TodoService> =
  createServiceRef<TodoService>({
    id: 'todo.client',
    defaultFactory: async service =>
      createServiceFactory({
        service,
        deps: {
          catalogApi: catalogServiceRef,
          todoReader: todoReaderServiceRef,
        },
        async factory({ catalogApi, todoReader }) {
          const todoReaderService = new TodoReaderService({
            catalogClient: catalogApi,
            todoReader,
          });
          return todoReaderService;
        },
      }),
  });

```

```ts
export const todoPlugin = createBackendPlugin({
  pluginId: 'todo',
  register(env) {
    env.registerInit({
      deps: {
        todoReader: todoServiceRef,
        http: coreServices.httpRouter,
      },
      async init({ http, todoReader }) {
        http.use(
          await createRouter({
            todoService: todoReader,
          }),
        );
      },
    });
  },
});
```

```ts
export interface RouterOptions {
  todoService: TodoService;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {

  const { todoService } = options;

  router.get('/v1/todos', async (req, res) => {
    ...
    const todos = await todoService.listTodos(
      {
        entity,
        offset,
        limit,
        orderBy,
        filters,
      },
      {
        token: getBearerToken(req.headers.authorization),
      },
    );
    res.json(todos);
  });

  return router;
}

```


[[backstage/backend system/★ index|Return]]
