You can use `describe` blocks to group related tests and `beforeEach`/`afterEach` will apply to each tests only in their respective block.

`it` is the same as `test`.

```javascript
let db = null;

beforeAll(() => {
	db = new Database();
	db.connect();
})

afterAll(() => {
	db.disconnect();
})

describe('city data tests', () => {

	beforeEach(() => {
		cityData = db.getCityData();
	});

	it('has Paris in data', () =>{
		expect(cityData).toContain('Paris')
	});

	it('has London in data', () =>{
		expect(cityData).toContain('London')
	});
})
```

### Fit Function
`fit` is used to run only a specific test.