- We can use the **`@react-navigation`** library.
- **`createStackNavigator`** is kind of like creating your routes in a regular **React** app.
- We use **`navigation.navigate('PageName')`** to go to that page.
- Checkout **Bottom Tabs Navigator** -> [here](https://reactnavigation.org/docs/tab-based-navigation)

## Example
```jsx
import React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
