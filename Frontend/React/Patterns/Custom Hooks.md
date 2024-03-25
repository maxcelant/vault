Using hooks to separate concerns

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