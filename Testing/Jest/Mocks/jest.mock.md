#### What happens when you do `jest.mock('file')`?
If you don't provide a factory function, you're telling Jest that you want it to automatically mock the module.

1. **Module Replacement:** All the functions and classes are replaced with mock counterparts.
2. **Function Behavior:** Return undefined by default.
3. **Mock Returned Value:** Can easily use `mockReturnedValue()` on the functions in the module.
4. **Deep Mocking**: For exported objects that have methods, the methods within those objects are replaced with mock functions.

---
#### Mocking Default Exports
```ts
// Assuming a module 'myModule' with a default export
import myModule from './myModule';

jest.mock('./myModule', () => {
  return jest.fn(() => 'mocked value');
});
```

#### Mocking Named Exports
```ts
// Assuming a module 'myModule' with named exports
import { namedExport1, namedExport2 } from './myModule';

jest.mock('./myModule', () => ({
  namedExport1: jest.fn(() => 'mocked value 1'),
  namedExport2: jest.fn(() => 'mocked value 2'),
}));
```

#### Mocking a Class
```ts
import MyClass from './MyClass';

jest.mock('./MyClass', () => {
  return jest.fn().mockImplementation(() => {
    return {
      method1: jest.fn().mockReturnValue('mocked value 1'),
      method2: jest.fn().mockReturnValue('mocked value 2'),
    };
  });
});
```

#### Mocking Specific Methods
```ts
import MyClass from './MyClass';

jest.mock('./MyClass'); // This auto-mocks all exports from MyClass

// In your tests
test('some test', () => {
  const instance = new MyClass();
  jest.spyOn(instance, 'method1').mockImplementation(() => 'mocked value 1');
  // Use the instance as needed in your test
});

```

---
#### Example 1: Nunjucks environment object
We have this object called `configure` that holds several methods, but we only care about mocking `renderString`.
```ts
import nunjucks from 'nunjucks'

const env = nunjucks.configure('./', {
  autoescape: false,
  tags: {
    variableStart: '${{',
    variableEnd: '}}',
  },
});

console.log(env.renderString('foo', 'bar'))
```

```ts
jest.mock('nunjucks', () => ({
  configure: jest.fn().mockReturnValue({
    renderString: jest.fn().mockReturnValue('renderString')
  })
}));
```

#### Example 2: Mocking module functions
We have some functions in a module that we want to mock here.

```ts
import { foo, bar } from "./baz";

jest.mock('./baz');

const mocked = (component: unknown) => component as jest.Mock;

mocked(foo).mockResolvedValue('foo')
mocked(bar).mockResolvedValue('bar')
```

---
#### Partial Mocks
If you want to mock only some functions of a module, you can do so like this:
```js
jest.mock('./store', () => {
    const originalModule = jest.requireActual('./store')
    return {
        ...originalModule,
        processPayment: mockProcessPayment
    }
})
```

