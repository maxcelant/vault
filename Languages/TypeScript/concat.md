Merging two or more arrays into one

**Structure:**

```ts
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

**Examples:**

```ts
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);

console.log(array3);  // Outputs: ['a', 'b', 'c', 'd', 'e', 'f']

```

```ts
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatArray);  // Outputs: [1, 2, 3, 4, 5, 6]

```

