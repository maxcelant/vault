The `some` method is a built-in array method in JavaScript that tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value: `true` if any of the array elements satisfy the testing function, and `false` if none of the elements do.

For instance, this would return `true` because 8 is even!
```js
const numbers = [1, 3, 5, 7, 8, 9];
const hasEvenNumber = numbers.some(num => num % 2 === 0); 
```