```tsx
<Text>Label</Text>
<TextInput 
  keyboardType='default'
  maxLength=10
  placeholder='foo'
  onChangeText={() => {}}
/>
```

# State Management

```jsx
const [data, setData] = useState({
  amount: '',
  date: '',
  description: ''
})

// `value` param will be set automatically be react native
const handleInput = (key, value) => {
  setData((prevState) => {
    return {
      ...prevState,
	  [key]: value
    }
  })
}

<View>
	<TextInput 
	  keyboardType='default'
	  maxLength=10
	  placeholder='foo'
	  onChangeText={() => handleInput('amount')}
	  value={data.amount}
	/>
</View>
```