### Exercise 1: Basic Generic Function

#### Task
Create a generic function `reverse` that takes an array of any type and returns a new array with the elements reversed.

### Exercise 2: Generic Stack Class

#### Task
Implement a generic `Stack` class that supports typical stack operations (`push`, `pop`, `peek`) for any data type.

### Exercise 3: Generic Constraints with Interface

#### Task
Define a generic interface `KeyValuePair` with properties `key` and `value`. The `key` should be a string, and the `value` should be of any type.

### Exercise 4: Generic Utility Type

#### Task
Create a utility type `Optional` that makes all properties of a type `T` optional.

### Exercise 5: Generic Function with Constraints

#### Task
Write a generic function `merge` that takes two objects and merges them. Ensure the function constraints the second object to have keys that exist on the first object.

### Exercise 6: Generic Function with Default Type

#### Task
Create a generic function `createArray` that returns an array of a given length filled with a default value. Provide a default type for the function's generic parameter.

### Exercise 7: Generic Interface for Function

#### Task
Define a generic interface `Mapper` for a function that takes a value of type `T` and returns a value of type `U`.

### Exercise 8: Generic Type Alias

#### Task
Create a generic type alias `Response<T>` that represents an object with a `data` property of type `T` and an `error` property of type `string | null`.

### Exercise 9: Generic Method in Class

#### Task
Add a generic method `updateProperty` to a class `Config` that updates a specified property with a given value, ensuring the property exists on the configuration object.

### Exercise 10: Generic Recursive Type

#### Task
Define a generic type `Tree<T>` that represents a node with a value of type `T` and an array of children, each of which is also a `Tree<T>`.