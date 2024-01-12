Tests whether all elements in the array pass the test implemented by the provided function.

- Can be good for checking types in a list or list of objects.
- Range checking
- Data integrity (ensuring objects have the right fields).
- Whitelisting
- Comparisons in combination with `includes`

```ts
const array1 = [1, 2, 3];
const array2 = [1, 2, 3, 4, 5];
const isIncluded = array1.every(item => array2.includes(item));
console.log(isIncluded);  // Outputs: true
```