- Convention to have a `./store` folder for the app state.
- Basically allows you to create a global "state" that can contain objects and functions!

```tsx
import { createContext } from 'react'

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
})

const FavoritesContextProvider = ({ children }) => {
  const [ ids, setIds ] = useState([]);

  const addFavorite = (id) => {
    setIds((prev) => [...prev, id])
  }

  const removeFavorite = (id) => {
    setIds((prev) => 
      prev.filter(mealId => mealId !== id)
    )
  }

  const value = {
    ids,
    addFavorite,
    removeFavorite
  }
  
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

```

In your root, you want to wrap it in the context.

```tsx
const App = () => {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
      ...
      </NavigationContainer>
    </FavoritesContextProvider>
  )
}
```

If you want to use the context within any child element, you need to use the **`useContext`** hook.

```tsx
const MealDetails = ({ mealId }) => {
  const ctx = useContext(FavoritesContext); 

  const isFavoriteMeal = ctx.ids.includes(mealId)

  const handleFavoriteStatus = () => {
    if(isFavoriteMeal) {
      ctx.removeFavorite(mealId);
      return;
    }
    ctx.addFavorite(mealId);
  }
}
```