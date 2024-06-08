1. Rely on abstractions and not on concrete classes.
2. `<T extends Foo>` means `T` is a "subset" of `Foo`.
3. JavaScript's `typeof` is **not** the same as the typescript type.
4. Use type assertions when you know more about the type than typescript does.
5. You can use type assertions to convert from A to B, if either is a subset of the other.
6. Think of sets and subsets like classes and subclasses. Subclasses are usually more specific versions of their superclass.
7. You can use type assertions when you know a value isn't null.
8. Excess property checking does not occur with type assertions.
9. Use function types if you have repeated function signatures.
10. If you want to mimic an existing function type, you can use `const bar: typeof fn...`
11. Interfaces can be augmented. Used for "declaration merging".
12. You can extend interfaces, adding additional fields to it.
13. If you want to create a subset of an interface, you can index into the superset using `Pick`.
14. `keyof` gives you the union of the types of its keys.
15. Generics are equivalent to functions for types.
16. You constrain the parameters of a generic using `extends`.
17. Use interfaces when you want to build on existing interfaces (expand a type).
18. Use index signatures (`[key: string]: string`) for dynamic data, like `csv` file data.
19. For-in loops are much slower than For-of or classic loops.
20. `number[]` is a subtype of `readonly number[]` because it is strictly more capable. You can assign a mutable array to `readonly` but not the other way.
21. If your function does not modify its params, declare them `readonly`.
22. Consider using explicit annotations for object literals and fn return times. Prevents implementation errors.
23. When you write `as const` after a value, ts will infer the narrowest possible type for it.
24. `as const` on arrays can infer them as tuple types.
25. You can use `instanceof` to narrow a type.
26. You can use a tagged union to narrow a type.
27. Typescript determines the type of a variable when it is first introduced.
28. You can use `'key' in object` to narrow a type.
29. Localize your use of `any`, instead of assigning a variable type with `any`, use `as any` where you need it (and know it will be okay).
30. An arrays type can expand by adding different elements to it.
31. `unknown` is not assignable to other types, so a type assertion is necessary.
32. `unknown` is appropriate when you know that there will be a value but you don't know its type.
33. You can use `instanceof` to narrow an `unknown` type.
34. You can create your own type guards using the `foo is SomeType` as the return type.
35. Try `type-coverage` package with `--detail` flag.
36. You can get the return type and parameters of a function using `ReturnType<typeof fn>` and `Parameters<typeof fn>`.
37. Use conditional types if your function should work for multiple data types while having the return type stay consistent.
38. Prefer union of literal types over enums. Enums can get ugly when transpiled to js.
39. Use private fields using the `#`, these are more secure than the `private` keyword.
40. You can set inline defaults when destructuring: `const { foo = 'foo' } = obj.vars`