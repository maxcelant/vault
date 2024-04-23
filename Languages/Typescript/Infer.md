- Infer allows you to pick out a type and use it.
- Used in _conditional types_

**Example**
```typescript
const func = () => '1234'

type ReturnType = typeof func extends (
  ...args: any
) => infer R
  ? R
  : never;

```

- This is basically saying if `typeof func` extends the basic layout of a function (`(...args) => `), then infer the return type of that function.
- In the above example `ReturnType` would be `string`
- If it does not then return `never` because the type of the thing passed in is not a function, we can make this example more concrete

```typescript
const func = () => '1234'
const foo = {}

type ReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : never;

type FuncResult = ReturnType<typeof func>; // works! -- string
type FooResult = ReturnType<typeof foo>;   // fails! -- never
```

**Example**
```typescript
type GetFromDeepObject<T extends {
  a: {
    b: {
      c: infer C ? C : never
    },
  },
}>

const obj = {
  a: {
    b: {
      c: false
    },
  },
}

type C = GetFromDeepObject<type obj> // C -> boolean!
```