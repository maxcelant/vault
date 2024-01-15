- `Text` containers dont support rounded borders on iOS so surround them in a `View`.

- Styles do NOT cascade in React Native.

- Put **`ScrollView`**'s inside of **`View`** s to control their spacing

- **`FlatList`** has a **`renderItem`** prop that returns a **`data`** object which contains your `item` as well as other attributes.
	- If your items have a `key` property, it will automatically be used by your `FlatList`.
	- you can choose the number of items / row with **`numColumns={n}`**
- You can set a default background color in the `app.json` file.

- `SafeAreaView` is used to set a minimum border for the screen.

- Create a `./utils/colors.js` folder for colors. Make a `Colors` object with all the possible reusable colors.

- You can pass an array of styles to a component.

- Use `@expo/vector-icons` for Icons.

- For Fonts...
	- Use `expo install expo-font` for Fonts

```ts
const [fontsLoaded] = useFonts({
  'font-name': require('./folder/to/font.ttf')
})

...

const styles = StyleSheet.create({
  title: {
    fontFamily: 'font-name'
  }
})
```

- Use **`expo install expo-app-loading`** for loading state
	- `<AppLoading />`

- For images use **`<Image source={require('./folder/to/image')} />`**

- If you set the **`max-width: '80%'`** that means the containers width can stretch up to 80% of its containing elements width.

- `Dimensions` is an API you can use to get information about the device.
	- Can also use **`const { width, height } = useWindowDimensions();`** 

- Use **`KeyboardAvoidingView`** to access content when keyboard is open.
	- You should give a **`behavior`** prop to tell it how to act.
	- Use **`ScrollView`** to make sure the content isn't smushed, and scrolls up or down when the keyboard comes onto the screen.

- Use **`Platform`** if you want to do specific logic for just iOS or Android.
	- **`Platform.select({ ios: 0, android: 2})`**

- **`StatusBar`** is the bar at the top of your device. You can modify it