You can dynamically set information from the **`Stack.Screen`** in `./App.jsx`.

```tsx
<Stack.Screen
  name="FooScreen"
  component={FooComponent}
  options={({ route, navigation }) => {
    const { foo, bar } = route.params;
	return {
	  title: foo
	}
  }}
```

We can basically set what we want the title to be for the newly loaded page within the previous page.

The alternative approach is using **`navigation.setOptions`**

For this, we will need to also bring in **`useLayoutEffect`** to make sure this title is rendered before the component is loaded!

```tsx
import { useLayoutEffect } from 'react'

const FooScreen = ({ route, navigation }) => {
  const { foo, bar } = route.params;
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: foo
    })
  }, [navigation])
}
```