- You can pass props with **`navigate`**:

```ts
const MenuScreen = () => {
  const handleNavigation = () => {
    navigation.navigate('MenuScreen', {
	  category: item.category,
	  name: item.name
    })
  }
}

const FoodScreen = ({ route }) => {
  const { category, name } = route.params;
  ...
}
```

Alternatively, you can use the `useRoute` hook:

```ts
import { useRoute } from '@react-navigation/native'
  
const HomeScreen = () => {
  const route = useRoute();
  const { category, name } = route.params;
  ...
}
  
```
