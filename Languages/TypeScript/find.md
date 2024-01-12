Good if you need to locate an element in an array based on a condition and you need that value.

```ts
const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const result = array.find(item => item.id === 2);
console.log(result);  // Outputs: { id: 2, name: 'Bob' }

```