| Category              | Type Name                 | Description                                                     |     |
| --------------------- | ------------------------- | --------------------------------------------------------------- | --- |
| **Primitive**         |                           |                                                                 |     |
| Numeric               | i8, i16, i32, i64, i128   | Signed integers                                                 |     |
|                       | u8, u16, u32, u64, u128   | Unsigned integers                                               |     |
|                       | f32, f64                  | Floating-point numbers                                          |     |
| Character             | char                      | Unicode character (4 bytes)                                     |     |
| Boolean               | bool                      | True or false                                                   |     |
| **Compound**          |                           |                                                                 |     |
| Tuple                 | (T1, T2, ..., Tn)         | Fixed-size collection of values                                 |     |
| Array                 | [T; N]                    | Fixed-size collection of values of the same type                |     |
| **Textual**           |                           |                                                                 |     |
|                       | str (usually 'str')       | Immutable string slice                                          |     |
|                       | String                    | Mutable, growable string                                        |     |
| **Custom**            |                           |                                                                 |     |
| Struct                | struct                    | User-defined structure with named fields                        |     |
| Enum                  | enum                      | User-defined type enumerating possible values                   |     |
| **Pointer Types**     |                           |                                                                 |     |
| References            | T, mut T                  | Immutable and mutable borrowed references                       |     |
| Raw Pointers          | const T, mut T            | Less safe than references                                       |     |
| Box                   | Box<T>                    | Heap-allocated pointer                                          |     |
| Function              | fn(T) -> U                | Function type                                                   |     |
| Unit                  | ()                        | Represents no value                                             |     |
| Never                 | !                         | Represents computations that don't return                       |     |
| Option & Result       | Option<T>, Result<T, E>   | Types for optional values and error handling                    |     |
| **Collections (Std)** |                           |                                                                 |     |
| Vector                | Vec<T>                    | Growable array type                                             |     |
| HashMap & HashSet     | HashMap<K, V>, HashSet<T> | Collections for key-value pairs and unique values, respectively |     |
