```ts
// Creating a WeakMap
const myWeakMap = new WeakMap();

// Creating objects to use as keys
const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

// Setting key-value pairs in the WeakMap
myWeakMap.set(obj1, 'Additional data for Object 1');
myWeakMap.set(obj2, 'Additional data for Object 2');

// Accessing values by their keys
console.log(myWeakMap.get(obj1)); // Outputs: 'Additional data for Object 1'
console.log(myWeakMap.get(obj2)); // Outputs: 'Additional data for Object 2'

// Checking if a key is in the WeakMap
console.log(myWeakMap.has(obj1)); // Outputs: true

// Deleting a key-value pair
myWeakMap.delete(obj1);
console.log(myWeakMap.has(obj1)); // Outputs: false

// obj1 can be garbage collected at this point if there are no other references to it

// Note: We can't get a list of keys or values from a WeakMap
```