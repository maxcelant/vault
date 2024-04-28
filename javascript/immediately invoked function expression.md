```ad-tldr
**Immediately Invoked Function Expression**, These are functions that fire off immediately. They are really useful for creating closures.
```

```js
var userId = (function() {
  let id = 0;

  return function() {
    id += 1;
    return id;
  }
})()

console.log(userId()) // 1
console.log(userId()) // 2
```

Check out [[transpilation of classes]] to learn more on the subject.
