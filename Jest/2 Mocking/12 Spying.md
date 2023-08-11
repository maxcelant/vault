Spying allows you to record calls that have been made, along with the arguments that have been passed. They can also have controlled return values.

```javascript
const spy = jest.fn();
spy('arg1', 'arg2');

console.log(spy.mock.calls); // Prints: [ [ 'arg1', 'arg2' ] ]
```

### Spying on methods of objects
This is useful to see how a function interacts with an object's methods.

```javascript
const myObject = {
	method: () => 'hello world';
}

jest.spyOn(myObject, 'method');

myObject.method();

expect(myObject.method).toHaveBeenCalled();
```

### Spying without affecting original implementation
By default, `jest.spyOn` replaced the spied method with a mock version. You can undo this by adding `true` as a third param

```javascript
jest.spyOn(myObject, 'method', 'true');
```

### Altering the field

```javascript
const myObject = {
	method: () => 'hello world';
}

jest.spyOn(myObject, 'method').mockImplementation(() => 'altered value')
```

### Restoring the original value

After spying , the original implementation can be restored with `mockRestore`

```javascript
const myObject = {
  method: () => "original value"
};

const spy = jest.spyOn(myObject, 'method');

spy.mockRestore();

console.log(myObject.method()); // Prints: 'original value'
```