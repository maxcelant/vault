- Convention to have a `./store` folder for the app state.

```
npm install @reduxjs/toolkit react-redux
```

- You create _Slices_ of state and how you manage that state
- `reducers` are functions used to change our state
- `state` is some piece of data that exists with the `initialState`
- `action` can hold some extra data that you can establish

```ts
import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: []
  },
  reducers: {
    addFavorite: (state, action) => { 
      state.ids.push(action.payload.id) 
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})

export const addFavorite = favoritesSlice.actions.addFavorite
export const removeFavorite = favoritesSlice.actions.removeFavorite
export const favoritesReducer = favoritesSlice.reducer
```

```ts
// store.js
import { configureStore } from '@reduxjs/toolkit'
import { favoritesReducer } from './favorites'

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer
  }
})
```

```tsx
// App.js
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      ...
      </NavigationContainer>
    </Provider>
  )
}
```

```jsx
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/store'

const MealDetails = ({ }) => {
  const favoriteMealIds = useSelector((state) => {
    state.favoriteMeals.ids
  })

  const dispatch = useDispatch();

  const changeFavoriteStatus = (id) => {
    if(isFavorite) {
      dispatch(removeFavorite({ id }))
    } else {
      dispatch(addFavorite({ id }))
    }
  }
}
```