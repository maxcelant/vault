Allows you to test the "output" of your code and ensure it doesn't change unexpectedly over time. Useful for React Components, since the output is the rendered UI.

Snapshots are stored in a specific folder. 

```js
import React from 'react';
import renderer from 'react-test-renderer';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  it('renders correctly with a given user', () => {
    const mockUser = {
      avatar: 'http://example.com/avatar.jpg',
      name: 'Jane Doe',
      username: 'janedoe',
      bio: 'Software Engineer at Tech Corp'
    };

    const tree = renderer.create(<UserProfile user={mockUser} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

1. When you run the test for the first time, Jest will generate a snapshot of how the `UserProfile` component should look with the provided `mockUser` data.
2. If you later make changes to the `UserProfile` component (e.g., modify its structure, add new elements), the snapshot test will fail if the new output doesn't match the stored snapshot.
3. This gives you a quick feedback loop to ensure you didn't unintentionally change the component's rendered output.