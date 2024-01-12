- "ref" is like a magic hand, it allows direct access or modification to a component.
- The default bubble is how React function components act, not allowing refs to touch them.
- `React.forwardRef` changes this behavior, allowing refs to interact with the component

Here is an example with a custom TextField, normally React does not want us to touch it externally but we need to since we are using `useForm`.
```ts
const UsernameTextField = React.forwardRef((props, ref: Ref<any> ) => {
    return (
        <>
        <TextField
            {...props}
            ref={ref}
            label="Username"
            aria-label="namespace-input"
            fullWidth
            required
        />
        </>
    )
})
```