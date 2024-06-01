1. **Install Navigation Dependencies**: You need to install `@react-navigation/native`, the stack navigator, and the bottom tabs navigator. You can do this using npm or yarn. If you haven't already, you'll also need to install the necessary peer dependencies.

    ```bash
    npm install @react-navigation/native
    npm install @react-navigation/stack
    npm install @react-navigation/bottom-tabs
    npm install react-native-screens react-native-safe-area-context
    ```

2. **Create the Stack Navigator**: The stack navigator allows you to present screens in a card-like mode, where one screen slides over the other.

    ```javascript
    import { createStackNavigator } from '@react-navigation/stack';

    const Stack = createStackNavigator();

    function MyStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          // Add other screens here
        </Stack.Navigator>
      );
    }
    ```

3. **Create the Bottom Tabs Navigator**: This navigator provides a tab bar at the bottom of the screen to switch between different views.

    ```javascript
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

    const Tab = createBottomTabNavigator();

    function MyTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          // Add other tabs here
        </Tab.Navigator>
      );
    }
    ```

4. **Nesting the Navigators**: To nest the stack navigator inside one of the bottom tab screens, simply use the stack navigator as the component for a tab screen.

    ```javascript
    function AppNavigator() {
      return (
        <MyTabs.Navigator>
          <MyTabs.Screen name="HomeStack" component={MyStack} />
          // ... other tabs
        </MyTabs.Navigator>
      );
    }
    ```

5. **Wrap in Navigation Container**: Finally, wrap your top-level navigator in a `NavigationContainer`.

    ```javascript
    import { NavigationContainer } from '@react-navigation/native';

    function App() {
      return (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      );
    }
    ```