#### `Overview`
- This class is located [here](https://github.com/jestjs/jest/blob/main/packages/jest-mock/src/index.ts#L1005)
- Responsible for generating mocks for various JS entities like functions, objects, classes and more.
- Extracts metadata from real functions and objects.
- Can create spies using `spyOn` to track function information.
- Can clean up mocks to restore them to their original state.
- Integrates with the [[globalthis]] to ensure mocks can appropriately interact with global objects and functions.

The `ModuleMocker` object is then used in the `packages/jest-runtime/src/index.ts`

```ts
const fn = this._moduleMocker.fn.bind(this._moduleMocker);
const spyOn = this._moduleMocker.spyOn.bind(this._moduleMocker);
const mocked =
  this._moduleMocker.mocked?.bind(this._moduleMocker) ??
  (() => {
	throw new Error(
	  'Your test environment does not support `mocked`, please update it.',
	);
  });
```

#### `_defaultMockState`
- Sets a default Mock State for a component which is basically just empty lists for all the fields.
- The mock state is described [[types and interfaces|here]].

#### `_generateMock()`
- Takes metadata about what to mock
- Makes a base mock object/function based on provided metadata using `_makeComponent()`.
- Loops through all the `slots` of the `metadata.members` and it either generates a mock for them by recursively calling this func or sets up a callback to assign the correct reference later.
- returns a `Mocked<T>` object.

#### `_makeComponent()`
- Has different overloads to handle different component types like `array` or `function`.
- Handling functions is tricky. It involves creating a `jest.fn()` that closely mimics the behavior of the original.
- `matchArity` is called to make sure the mock has the same arity as the real one.
- If the original function has a prototype with its own properties (methods), these are copied to the mock function’s prototype. This step is crucial for classes or functions with additional methods attached to their prototype.

#### `getMetadata()`
- **Params**: `component: T`, `_refs?: Map<T, number>`
- **Returns:** `MockMetadata<T>`
- Goes through and figures out important meta data about a component. Creates a `MockMetadata` object. It contains things like:
	- `type` (function or object, etc)
	- `refID` a unique identifier
	- `members` an object with the methods and props of the component which are also MockMetadata objects.
	- `length` which is the number of args for that function (if a function).

#### `spyOn()`
- **Params**: `object: T`, `methodKey: keyof T`, `accessType?: 'get' | 'set'`
- **Returns**: `MockInstance`
- Look at how [[spying]] works first.
- Checks that the `methodKey` (method) is indeed in the `object`.
- Retrieves the original method and checks that its not already a mock.
- Uses `_makeComponent` to create a mock function. This will replace the original `method`.
- Wraps the original function in a mock and then returns it.
```ts
mock.mockImplementation(function (this: unknown) {
  return original.apply(this, arguments);
});
```

#### `fn()`
- **Type**: `<T extends FunctionLike = UnknownFunction>`
- **Params**: `implementation?: T`
- **Returns:** `Mock<T>`
- Creates a mock function. If an `implementation` is provided, we first find the number of args for that function and make sure our mock one has that many too.
- We also set the implementation to our created mock.

```ts
const JestMock = new ModuleMocker(globalThis);

const fn = JestMock.fn.bind(JestMock);
const spyOn = JestMock.spyOn.bind(JestMock);
const mocked = JestMock.mocked.bind(JestMock);
...
```

- The four important methods of this class `fn`, `spyOn`, `mocked`, and `replaceProperty` are "bound" with the context of a `ModuleMocker` object so that no matter where you use these methods, they will always have that context.

#### `matchArity`
- Creates a mock middleware so that the original function stays in tact but has all the mock features on top of it.
- This is how [[apply]] works
