React components go through several stages from creation to deletion. These stages can be divided into three categories: Mounting, Updating, and Unmounting.

- **Mounting** is the stage when the component is being created and inserted into the DOM.
- **Updating** is the stage when the component is being re-rendered as a result of changes either in props or state.
- **Unmounting** is the final phase when the component is being removed from the DOM.

In class components, there are lifecycle methods corresponding to each of these stages, like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

In functional components, all these lifecycle stages can be handled using the `useEffect` hook. The function you pass to `useEffect` will run after the render is committed to the screen, and the cleanup function will run before the component is removed, and before subsequent effects are run.

Let's look at a more detailed example using a component that fetches user data from an API:

```jsx
import React, { useState, useEffect } from 'react';

function User({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();

    // Cleanup function
    return () => {
      setUser(null); // not necessary in this specific example, but shows you could clean up if needed
    };
  }, [userId]); // Re-run the effect when `userId` changes

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

```