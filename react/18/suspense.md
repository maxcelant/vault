`Suspence` and `React.lazy` can be used to lazy load components so that the overall JavaScript bundle will be smaller, making things faster.

```jsx
import React, { Suspense } from 'react';
const HeavyComponent = React.lazy(() => import('./HeavyComponent')); // Lazy-load

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

#### How it works
- `React.lazy` takes a function that must call a dynamic `import()`. This function returns a Promise which resolves to a module with a `default` export containing a React component.
- `Suspense` wraps the component and also has a fallback component until the heavy one is served.
- 

