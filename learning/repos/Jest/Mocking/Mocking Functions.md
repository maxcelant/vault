It's a double wrapper. `mockConstructor` has the original function already inside it and then it surrounds it in the mock state. We then wrap this `mockConstructor` in this string function to give it the original name of the function that was mocked

>![[Pasted image 20240106152326.png]]

#### `matchArity`
Does the heavy lifting by wrapping the original function in the mock state.

```ts
let mockState = {
  calls: [],
  callCount: 0
};

const mockConstructor = (originalFoo) => {
  return function(...args) {
      mockState.calls.push(args);
      mockState.callCount++;

      return originalFoo.apply(this, args);
  }
}

const originalFoo = (arg) => `Original foo called with: ${arg}`;

const MOCK_CONSTRUCTOR_NAME = 'mockConstructor';
const bindCall = `.bind(null)`;

const body = 
    `return function foo() {` + 
    `  return ${MOCK_CONSTRUCTOR_NAME}.apply(this,arguments);` +
    `}${bindCall}`;

const createConstructor = new Function(
  MOCK_CONST
);

const boundFoo = mockConstructor(originalFoo);
const foo = createConstructor(boundFoo);

// Call foo multiple times
console.log(foo('Test 1'));
console.log(foo('Test 2'));

// Examine the mock state
console.log('Mock state:', mockState);

```