- `get` keyword before a function to define a getter for a property.

```ts
const obj = {
  get propertyName() {
    return 'someValue';
  }
}

...

const val = obj.propertyName; // 'someValue'
```

- So knowing this, you can have it call a function when a property is called.

```ts
function getObject {

  const lazyFunc = () => {
    return 'someValue'
  }

  return {
    get propertyName() {
      return lazyFunc();
    }
  }
}

...
const obj = getObject();
const val = obj.propertyName; // 'someValue'
```