A standard JS object that provides a universal way of accessing the global object across different environments.

```ts
// Setting a global variable
globalThis.myGlobalVar = 'Hello, world!';

// Accessing the global variable
console.log(globalThis.myGlobalVar); // Output: "Hello, world!"

```

### How It Works
- **Universal Reference**: `globalThis` always refers to the global object, be it `window` in browsers, `global` in Node.js, or `self` in web workers.
- **Safety**: Using `globalThis` is safer and more predictable when writing code that needs to run in multiple environments.