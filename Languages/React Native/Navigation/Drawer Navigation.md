- Adds a sidebar to the app
- More info [here](https://reactnavigation.org/docs/drawer-based-navigation/)

```tsx
const App = () => {
  return (
    <NavigationContainer>
	  <Drawer.Navigator>
	    <Drawer.Screen 
	      name="Welcome" 
	      component={Welcome}
	      options={{
	        headerStyle: { backgroundColor: 'blue' },
	        headerTintColor: 'white',
	        ...
	      }}  
 .      />
	  </Drawer.Navigator>
	</NavigationContainer>
  )
}
```


