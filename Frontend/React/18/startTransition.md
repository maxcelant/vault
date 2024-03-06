```ad-tldr
With `useTransition`, we can have some heavy computation happening behind the scenes without blocking the UI while its happening.
```

### Create the Filter Component
In your project, create a new component `FilteredList.js`. This component will include an input field for the filter query and display a list of filtered items.

```javascript
// FilteredList.js
import React, { useState, useTransition } from 'react';

function FilteredList() {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([...Array(10000).keys()]); // Simulate a large list
  const [isPending, startTransition] = useTransition();

  const updateQuery = (e) => {
    setQuery(e.target.value);

    startTransition(() => {
      const filteredList = [...Array(10000).keys()].filter(item =>
        item.toString().includes(e.target.value)
      );
      setList(filteredList);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={updateQuery}
        placeholder="Filter items..."
      />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {list.slice(0, 100).map((item) => ( // Only render a portion for performance
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
```

### How It Works
- The `useTransition` hook returns a pair: the current state of the transition (`isPending`) and a function (`startTransition`) to trigger the transition.
- When the user types in the input field, `updateQuery` is called. Instead of setting the list state directly within this event handler, we wrap the state update function (`setList`) inside `startTransition`. This marks the update as non-urgent.
- React will then update the list state asynchronously, allowing other urgent updates, like typing in the input, to be processed immediately. This keeps the UI responsive.
- We use `isPending` to show a loading indicator, giving the user feedback that the application is processing their request without freezing the UI.

By using `startTransition`, you ensure that user interactions remain smooth and responsive, even when performing heavy tasks like filtering a large list.