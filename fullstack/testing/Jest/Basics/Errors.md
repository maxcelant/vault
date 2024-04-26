
```javascript
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error); // Error type
  expect(compileAndroidCode).toThrow('you are using the wrong JDK'); // message
  expect(compileAndroidCode).toThrow(/JDK/); // regex of message
});
```