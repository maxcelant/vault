Reduces the array into a single output. `reduceRight(callback)` does the same thing but starts from the right.

**Structure:**

```ts
array.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

```

**Example:**

```ts
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, cur) => total + cur, 0);
console.log(sum);  // Outputs: 10

```