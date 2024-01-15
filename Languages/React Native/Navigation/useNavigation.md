- Use the **`useNavigation`** hook to move around if you dont pass down the prop.

```tsx
import { useNavigation } from '@react-navigation/native'

const FooScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('BarScreen')
  }
}
```