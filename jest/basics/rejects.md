This is used to test that a Promise is rejected. When you expect a function to return a Promise that is going to be rejected, you use `.rejects` to handle that.

```js
test('Promise rejects with an error', async () => {
    const mockFunction = jest.fn().mockRejectedValue(new Error('Failure!'));
    
    await expect(mockFunction()).rejects.toThrow('Failure!');
});
```