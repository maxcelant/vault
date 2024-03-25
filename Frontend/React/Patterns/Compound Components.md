```tsx
import React, { createContext, useContext, useState } from 'react'

const FormContext = createContext();

function Form(props) {
  const [data, setData] = useState(props.formData);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {props.children}
    </FormContext.Provider>
  );
}

function Input({ field }) {
  const { data, setData } = useContext(FormContext);

  const handleChange = (e) => {
    setData(data => ({ ...data, [field]: e.target.value}));
    console.log(data);
  }

  return (
    <input value={data[field]} onChange={handleChange}/>
  );
}

function Submit({ buttonName }) {
  const { data } = useContext(FormContext);

  const handleSubmit = () => {
    console.log('Submitted!', data)
  }

  return (
    <button onClick={handleSubmit}>{buttonName}</button>
  )
}

Form.Input = Input;
Form.Submit = Submit;

export default function FormMenu() {
  return (
    <Form formData={{ name: '', gender: '' }}>
      <Form.Input field="name" />
      <Form.Input field="gender" />
      <Form.Submit buttonName="Submit" />
    </Form>
  )
}
```