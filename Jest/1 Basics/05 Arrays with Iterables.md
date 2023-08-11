**Checking for a specific item in an array**
```javascript
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});
```


**Length of array**
```javascript
test('there is one beer in the fridge', () => {
  const beers = ['Heineken'];
  expect(beers).toHaveLength(1);
});
```

**Checking for specific object properties within an array**
```javascript
const myArray = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'pear', color: 'green' }
];

test('my array contains a yellow banana', () => {
  expect(myArray).toContainEqual({ name: 'banana', color: 'yellow' });
});
```

**Checking arrays or iterables against a list of items**
```javascript
const myArray = ['apple', 'banana', 'pear'];

test('my array has three elements', () => {
  expect(myArray).toEqual(['apple', 'banana', 'pear']);
});
```