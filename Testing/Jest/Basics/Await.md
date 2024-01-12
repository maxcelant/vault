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

Using `resolve` and `rejects`

```javascript
test('the data is peanut butter', () => {
	return expect(fetchDataPromise()).resolves.toBe('peanut butter');
})

test('the fetch fails with an error', () => {
	return expect(fetchDataPromise()).rejects.toMatch('error');
})
```