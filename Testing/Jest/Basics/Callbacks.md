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