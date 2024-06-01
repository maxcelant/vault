```jsx
import {useAsync} from 'react-use';

const Demo = ({url}) => {
  const state = useAsync(async () => {
    const response = await fetch(url);
    const result = await response.text();
    return result
  }, [url]);

  return (
    <div>
      {state.loading
        ? <div>Loading...</div>
        : state.error
          ? <div>Error: {state.error.message}</div>
          : <div>Value: {state.value}</div>
      }
    </div>
  );
};
```

- `state` is going to be storing an object with three values (`value`, `loading`, and `error`).
- The returned component conditionally renders based on the state of the async operation.
- The `useAsync` function will run when its dependencies change i.e. `url`.

Here is a simplified view of `useAsync`
```ts
import { useState, useEffect } from 'react';

function useAsync(asyncFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await asyncFunction();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [asyncFunction]);

  return { data, loading, error };
}

```

