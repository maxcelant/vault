You can test your custom made hooks to make sure they are functioning as normal.

You can do so using the `'@testing-library/react-hooks'` library with the `renderHook` function.

`renderHook` let's you render the hook in isolation and returns an object to interact with it.

```js
import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return { count, increment, decrement };
};

export default useCounter;
```

```js
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should increment and decrement the count', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });

  it('should accept an initial value', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });
});
```