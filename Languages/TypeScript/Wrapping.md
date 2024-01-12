`createConstructor` acts as a generator for this wrapper, allowing you to pass in `mockConstructor` so that any call made to `myMockFunction` will be passed down.

```ts
const createConstructor = new Function("mockConstructor", "return function myMockFunction() { return mockConstructor.apply(this,arguments);}");

function mockConstructor() {
    console.log("Mocked function called");
}

const myMockFunction = createConstructor(mockConstructor);

myMockFunction(); 
```