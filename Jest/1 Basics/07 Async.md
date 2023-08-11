1. **Testing async code with callbacks**
This test checks to see if `fetchDataCallback` correctly fetches 'peanut butter'. This function is presumed to be an async function that has a callback as a parameter. Testing async code in JS can be tricky since it can finish before the async call is done, that's why using `done()` is important. 

Check out [[Callback Functions]] for more info on the subject.

```javascript
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchDataCallback(callback);
});
```

2. **Testing Promises**

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

3. **Testing Async/Await**

```javascript
test('the data is peanut butter', async () => {
	data = await myAsyncFn();
	expect(data).toBe('peanut butter');
})
```

For failing tests:

```javascript
test('the fetch fails with error', async () => {
	expect.assertions(1);
	try {
		await fetchDataAsync();
	} catch (e) {
		expect(e).toBe('error');
	}
});
```

4. **Using `resolve` and `rejects`**

```javascript
test('the data is peanut butter', () => {
	return expect(fetchDataPromise()).resolves.toBe('peanut butter');
})

test('the fetch fails with an error', () => {
	return expect(fetchDataPromise()).rejects.toMatch('error');
})
```