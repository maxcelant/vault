### Setup and Teardown for each test

If you need to run some task before a test runs, use `beforeEach`. Similarly, to clean up you can use `afterEach`.

```javascript
let db = null;

beforeEach(() => {
	db = new Database();
	db.connect();
})

afterEach(() => {
	db.disconnect();
})

test('the data is valid', () => {
	expect(db.data).toBe('valid data');
})
```

### Setup and Teardown for all tests

Sometimes you just want to setup and teardown once.

```javascript
let myDatabase = null;

beforeAll(() => {
  myDatabase = new Database();
  myDatabase.connect();
});

afterAll(() => {
  myDatabase.disconnect();
});

test('the data is valid', () => {
  expect(myDatabase.data).toBe('valid data');
});

test('the user is valid', () => {
  expect(myDatabase.user).toBe('valid user');
});
```