#### Testing Promises

```javascript
test('the data is peanut butter', () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  });
});
```

If you expect a promise to be reject, use `.catch`.

```javascript
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromise().catch(e => expect(e).toMatch('error'));
});
```
