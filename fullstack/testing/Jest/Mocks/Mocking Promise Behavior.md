```ts
then: jest.fn(callback => Promise.resolve(filteredRecords).then(callback)),
```

We are mocking the `then` method in the promise chain to take the original `callback`, resolve it to `filteredRecords` and then continue with that `callback`

For instance

```ts
function getUserById(id) {
    const records = {
        1: { name: "Alice", age: 30 },
        2: { name: "Bob", age: 25 }
    };

    const filteredRecords = records[id] || null;
    return Promise.resolve(filteredRecords).then(record => {
	    // Do something
        return record;
    });
}

```