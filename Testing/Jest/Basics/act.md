Ensures that all side effects of a React component or hook have been processed and applied before you make any assertions in your test.

Without `act()`, you might find your assertions running before React has finished updating the DOM or processing side effects.

```js
import { act } from '@testing-library/react-hooks';

act(() => {
  // trigger some event or state update
  componentInstance.handleClick();
});

expect(/* some condition based on the update */).toBeTruthy();
```

It also works with asynchronous operations.

**Note:** You don't really need to use `act()` when working with `@testing-library/user-event'` since it handles that for you.

