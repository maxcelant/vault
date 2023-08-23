### Interfaces and Unions
**Interfaces:** Allow you to define fields that multiple types can include. It’s useful when different types have a lot of fields in common.

```graphql
interface Character {
  id: ID!
  name: String!
}

type User implements Character {
  id: ID!
  name: String!
  email: String
}

type Robot implements Character {
  id: ID!
  name: String!
  function: String
}
```

**Unions:** A way of returning multiple types from one field.

```graphql
union SearchResult = User | Robot

type Query {
  search(name: String!): SearchResult
}
```

### Enums
Enumerations are a way to restrict a value to a set of predefined constants.

```graphql
enum userRole {
  ADMIN
  EDITOR
  USER
}

type User {
  id: ID!
  role: UserRole!
}
```

### Input Types
Useful for complex mutations where you need to pass multiple fields.

```graphql
input CreateUserInput {
  name: String!
  email: String!
  role: UserRole = USER
}

type Mutation {
  createUser(input: CreateUserInput!): User
}
```

### Directives
Directives provide a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
    
**Common Directives:**
- `@include(if: Boolean)`: Only include this field in the result if the argument is `true`.
- `@skip(if: Boolean)`: Skip this field if the argument is `true`.
- Custom directives can also be defined to apply custom behavior.
```graphql
query GetUser($withEmail: Boolean!, $skipName: Boolean!) {
  user(id: 1) {
    name @skip(if: $skipName)
    email @include(if: $withEmail)
  }
}
```


