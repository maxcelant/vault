### Mocking implementations once
```javascript
const mockFunction = jest.fn();

mockFunction
	.mockImplementationOnce(() => 'first call')
	.mockImplementationOnce(() => 'second call');

console.log(mockFunction()); // Prints: 'first call'
console.log(mockFunction()); // Prints: 'second call'
```

### Mock resolved values from Promises
They are the same as `mockReturnedValue` but for async functions.

```javascript
const mockAsyncFunction = jest.fn();

mockAsyncFunction.mockResolvedValue('mock resolved value');

mockAsyncFunction().then(console.log); // 'mock resolved value'
```

### Mock rejected values from Promises
Check [[Promises|this]] out for more
```javascript
const mockAsyncFunction = jest.fn().mockRejectedValue(new Error('mock error'));

mockAsyncFunction().catch(error => console.log(error)); // Prints: Error: 'mock error'
```

### Mocking a module
Allows you to replace a [[jest.mock|module]] with with a custom implementation.

```javascript
jest.mock('./path/to/module', () => {
	return {
		functionToMock: jest.fn(() => 'mocked value');
	};
});

const moduleToTest = require('./path/to/module');

test('should return mocked value', () => {
	expect(moduleToTest.functionToMock())).toBe('mocked value')
})
```

In this example, we replace the implementation of `functionToMock` in `module` with a Jest mock function that always returns `'mocked value'`.

If you call `jest.mock` without a factory function, it will mock every function in the module.

```javascript
jest.mock('./path/to/module');

const moduleToTest = require('./path/to/module'); // This will now return the mocked module

test('should have been called', () => {
  moduleToTest.functionToMock();
  expect(moduleToTest.functionToMock).toHaveBeenCalled();
});
```

### `.rejects` Keyword




### `.toThrow` Keyword



