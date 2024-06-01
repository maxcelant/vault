Used to test that a function throws an error when it's called. Doesn't specifically relate to Promises - it's just for checking errors thrown by the function.

```js
test('Function throws an error', () => {
    const throwFunction = () => {
        throw new Error('Something went wrong!');
    };
    
    expect(throwFunction).toThrow('Something went wrong!');
});
```