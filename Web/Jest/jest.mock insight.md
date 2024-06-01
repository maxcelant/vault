#### `mock` function
- **Purpose:** This is the method exposed to Jest users to mock a module.
- **Parameters:**
    - `moduleName`, `mockFactory`, and `options` similar to `setMock`.
- **Functionality:**
    - If a `mockFactory` is provided, it calls `setMockFactory`.
    - It gets the `moduleID` of a module and sets it to be mocked.
- **Returns:** The `jestObject`, allowing for chaining other Jest methods.

```ts
const mock: Jest['mock'] = (moduleName, mockFactory, options) => {
  if (mockFactory !== undefined) {
	return setMockFactory(moduleName, mockFactory, options);
  }

  const moduleID = this._resolver.getModuleID(
	this._virtualMocks,
	from,
	moduleName,
	{conditions: this.cjsConditions},
  );
  this._explicitShouldMock.set(moduleID, true);
  return jestObject;
};
```

#### `setMockFactory`
- **Purpose:** A helper function to call `setMock`.
- **Functionality:** It delegates the work to `setMock` with the given parameters.
- **Returns:** The `jestObject`, for method chaining.
```ts
const setMockFactory = (
  moduleName: string,
  mockFactory: () => unknown,
  options?: {virtual?: boolean},
) => {
  this.setMock(from, moduleName, mockFactory, options);
  return jestObject;
};
```

#### `setMock`
- **Purpose:** This function sets up the mock for a given module.
- **Parameters:**
    - `from`: The file that is requesting the mock.
    - `moduleName`: The name of the module to be mocked.
    - `mockFactory`: A function that returns the mock implementation.
    - `options`: Additional options, like `virtual` to indicate if it's a virtual mock.
- **Functionality:**
    - If `virtual` is true, it sets up a virtual mock path.
    - It determines the module's ID based on the provided `moduleName`.
    - It explicitly marks this module ID to be mocked.
    - It stores the `mockFactory` for later use when the module is required.

```ts
setMock(
    from: string,
    moduleName: string,
    mockFactory: () => unknown,
    options?: {virtual?: boolean},
  ): void {
    if (options?.virtual) {
      const mockPath = this._resolver.getModulePath(from, moduleName);

      this._virtualMocks.set(mockPath, true);
    }
    const moduleID = this._resolver.getModuleID(
      this._virtualMocks,
      from,
      moduleName,
      {conditions: this.cjsConditions},
    );
    this._explicitShouldMock.set(moduleID, true);
    this._mockFactories.set(moduleID, mockFactory);
  }
```

---
#### Process with MockFactory included
Your understanding of the process is mostly correct. Let's clarify and expand on the last part where your understanding gets iffy, specifically about what happens when you import the actual module after setting up a mock with `jest.mock`.

#### Step-by-Step Breakdown

1. **Calling `jest.mock` with a Factory Function:**
   - When you call `jest.mock('./foo', mockFactory)`, two key actions occur:
     - Jest registers the mock factory for the module `'./foo'`. It stores this factory function in the `_mockFactories` map, keyed by the module's ID.
     - Jest also marks this module as explicitly mocked in the `_explicitShouldMock` map using the module's ID.

2. **Hoisting of `jest.mock`:**
   - `jest.mock` calls are hoisted to the top of the file by Jest's preprocessor. This ensures that the mocking is set up before any module imports/require statements are executed.

3. **Importing the Mocked Module:**
   - Now, when your test file imports `'./foo'`, Jest intercepts this import:
     - It doesn't go to the file system to fetch the real `./foo` module.
     - Instead, Jest checks its internal maps. It finds that `'./foo'` is in `_explicitShouldMock`.
     - Jest then uses the module ID to retrieve the corresponding mock factory function from `_mockFactories`.

4. **Instantiation of the Mock Module:**
   - Jest calls the mock factory function to instantiate the mock module. This mock module is what gets returned by the import/require statement in your test file.
   - This means that in your test file, when you interact with `'./foo'`, you are interacting with the mock instance, not the real module.

5. **Using the Mock in Tests:**
   - During the execution of your tests, any call to methods or access to properties of the `'./foo'` module will use the mocked versions defined in your mock factory.
   - This allows you to control the behavior and track interactions with the `'./foo'` module within your tests.

#### Key Points

- The import statement in your test file doesn’t actually load the real module. Instead, it's Jest's module resolution system that provides the mock module in place of the real one.
- The actual module file (`./foo`) is not involved in the test execution unless explicitly required (like using `jest.requireActual`).
- The mock module created by the factory function completely replaces the real module in the context of your tests.

By understanding this process, you can see how Jest enables isolated testing by intercepting module imports and replacing them with mocks, as defined by your `jest.mock` setup.
#### Process without MockFactory included
When Jest mocks a module without a specified mock factory (`jest.mock('./foo')` without a second argument), it automatically replaces each of the module's exports with appropriate mock values. For functions, this means replacing them with Jest's mock functions (`jest.fn()`). The process is a bit more complex than just checking and replacing, involving a combination of Jest's module resolver and its automatic mocking system. Let's break down how this works:

#### Automatic Mocking Process
1. **Module Identification:**
   - When you call `jest.mock('./foo')`, Jest identifies the module `./foo` and marks it for automatic mocking.
   - The actual content of the module isn't immediately checked or altered at this point.

2. **Test File Execution:**
   - When your test file runs and encounters an `import` or `require` statement for `./foo`, Jest's custom module resolver steps in.
   - Instead of fetching the real module from the file system, Jest looks at its internal map (set up by `jest.mock`) and realizes that `./foo` is supposed to be mocked.

3. **Automatic Mock Creation:**
   - Jest then uses its automatic mocking system to create a mock version of `./foo`.
   - It does this by loading the actual module (in a sandboxed environment, so it doesn't affect your tests) to inspect its exports.
   - For each function export, Jest replaces it with `jest.fn()`.
   - For non-function exports (like objects, strings, numbers), Jest provides suitable mock replacements (like empty objects, `null`, or `undefined`).

4. **Providing Mocks to Test Code:**
   - The resulting mock module (with all exports mocked) is then cached and used for any import/require statement in your tests.
   - This means that in your test file, when you interact with any export from `./foo`, you're interacting with these automatically generated mocks.

5. **Customizing Mocks:**
   - Even though Jest automatically creates mocks for each export, you can still customize the behavior of these mocks in your tests, using methods like `mockImplementation()` on the mock functions.

### Key Points

- **Isolation:** This automatic mocking isolates your tests from the actual implementation details of the module, allowing for unit testing that focuses solely on the behavior of the code under test.
- **Flexibility:** Despite the automatic nature of this process, Jest provides ways to further customize the mocks, either by using mock factory functions or by modifying the automatically created mocks within the tests.

In summary, Jest's automatic mocking feature is a sophisticated mechanism designed to create a fully mocked version of a module with minimal setup required from the developer. This feature enhances the testing experience by providing a high level of control and isolation in unit testing.