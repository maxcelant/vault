Allows you to "spy" on the behavior of a function, manipulate its return value and observe its usage stats.

Often used to isolate the code being tested and remove dependencies that a function may have.

### Creating a mock function

```javascript
const mockFunction = jest.fn();
```

Jest keeps track of its usage and arguments its called with, the value returned and more.

### Inspecting a mock function

```javascript
console.log(mockFunction.mock.calls); // Prints: [ [ 'arg1', 'arg2' ] ]
console.log(mockFunction.mock.calls.length); // Prints: 1
console.log(mockFunction.mock.calls[0][0]); // Prints: 'arg1'
```

### Manipulating the return value

```javascript
const mockFunction = jest.fn().mockReturnValue('hello world')

console.log(mockFunction()); // "hello world"

// OR

const mockFunction = jest.fn();

mockFunction.mockReturnValue('hello world');

console.log(mockFunction()); // "hello world"
```

### Mocking implementations

```javascript
const mockFunction = jest.fn((x, y) => x + y);

console.log(mockFunction(2,3)) // 5
```