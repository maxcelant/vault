Generate a sequence of numbers. Since the array is initialized with `undefined` on each position, the value of `v` below will be `undefined`

```ts
Array.from({ length: 5 }, (v, i) => i);
```

Check it out [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)