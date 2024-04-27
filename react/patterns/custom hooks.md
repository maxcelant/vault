Using hooks to separate concerns.

```ad-tip
Think about them just as regular functions, except you can do things statefully within them
```

**Example 1: Fetching Data**
```jsx
export default function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return dogs;
}
```

```tsx
export default function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog, i) => (
    <img src={dog} key={i} alt="Dog" />)
  );
}
```

**Example 2: Managing Form Input**
```js
import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}
```

```js
function FormComponent() {
  const name = useFormInput('');
  const email = useFormInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic
    console.log(name.value, email.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...name} placeholder="Name" />
      <input type="email" {...email} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

```