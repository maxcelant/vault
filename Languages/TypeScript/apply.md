Works kinda like decorators in Python

```js
const innerFn = (x) => {
  console.log(`Inside innerFn: ${x}`);
};

const wrapperFn = function() {
  console.log('Inside wrapperFn...');
  console.log('This is ', this);
  this.apply(null, arguments); 
};

wrapperFn.apply(innerFn, ['hello!']);

// ❯ node pp/apply.js
// Inside wrapperFn...
// This is  [Function: innerFn]
// Inside innerFn: hello!
```
