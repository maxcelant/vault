You can create a fake timer. So you can control the passage of time in your tests. Useful for when your code relies on timers like `setTimeout` and `setInterval`.

```js
jest.useFakeTimers();
```

You can move time forward in your timer.

```js
jest.advanceTimersByTime(msToRun);
```

You can also clear your timers.

```js
jest.clearAllTimers();
```

Here is an example of a function that has a `delay`.

```js
// debounce.js
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default debounce;
```

```js
// debounce.test.js
import debounce from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  it('calls the provided function after the specified delay', () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 1000);

    debounced();
    
    // At this point, no time has passed, so callback shouldn't be called yet
    expect(callback).not.toBeCalled();

    // Advance timers by 500ms (still not enough to trigger the debounce)
    jest.advanceTimersByTime(500);
    expect(callback).not.toBeCalled();

    // Advance timers by another 500ms (now it's enough)
    jest.advanceTimersByTime(500);
    expect(callback).toBeCalled();
  });
});
```