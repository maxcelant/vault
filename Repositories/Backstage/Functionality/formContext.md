Gives you the ability to grab data from a previous stepper in the scaffolder process.

```tsx
export const InferredNames = (props: InferredNamesProps) => {
  const {
    onChange,
    formData,
    formContext,
    rawErrors,
    uiSchema: { 'ui:options': uiOptions },
  } = props;
  const title = !uiOptions?.title
    ? (formContext?.formData?.title as string)
    : uiOptions.title;
  const defaultState =
    formData?.componentName ? formData : inferName({ title });
  const [state, setState] = useState<InferredNamesData>(defaultState);

  return (
    <>
      <FormControl
        margin="normal"
        required
        error={rawErrors?.length > 0 && !formData}
      >
        <InputLabel>Component Name</InputLabel>
        <Input
          value={state.componentName}
          onChange={event => {
            const newName = String(event.target.value);
            if (newName) {
              setState(prevState => {
                const newState = { ...prevState, componentName: newName };
                onChange(newState);
                return newState;
              });
            }
          }}
        />
      </FormControl>
    </>
  );
};
```