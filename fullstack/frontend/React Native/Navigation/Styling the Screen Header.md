You can have different styles for different screens:

```tsx
...
<Stack.Screen
  name="MenuScreen"
  component={MenuScreen}
  options={{
    title: 'All Categories',
    headerStyle: { backgroundColor: 'black' }
    headerTintColor: 'white'
    // Screen background
    contentStyle: { backgroundColor: 'black' }
  }}
  ...
```

You can also have default styles:

```tsx
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: 'black' }
    headerTintColor: 'white'
    contentStyle: { backgroundColor: 'black' }
  }}
```

## Header Buttons
You can add buttons to the header

```tsx
<Stack.Screen
  name="MenuScreen"
  component={MenuScreen}
  options={{
    headerRight: () => {
      return (
        <Text>In the Header</Text>
      )
    }
  }}
```

You can also do it like this using **`.setOptions`**:

```tsx
import { useLayoutEffect } from 'react'

const FooScreen = ({ route, navigation }) => {
  const { foo, bar } = route.params;
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Text>In the Header</Text>
        )
      }
    })
  }, [navigation])
}
```