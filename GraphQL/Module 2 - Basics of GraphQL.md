### Queries
Allows clients to request data from GraphQL. 

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

You can even give them aliases.

```graphql
query {
  firstUser: user(id: 1) {
    name
  }
  secondUser: user(id: 2) {
    name
  }
}
```

### Mutations
Allows the client to modify the data (CREATE, UPDATE, DELETE).

First, you must define a mutation in the schema.
```graphql
type Mutation {
  createUser(name: String!, email: String!): User
}
```

Execute mutations with the `mutation` keyword.
```graphql
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
  }
}
```

### Types and Schemas
- **Definition:** The schema is the blueprint of your GraphQL API. It defines types and the relationships between them.
- **Basics:**
    1. Scalar Types: Basic data types like `Int`, `Float`, `String`, `Boolean`, and `ID`.
    2. Custom Object Types: Define your own types.

```graphql
type User {
  id: ID!
  name: String!
  email: String
}
```

  3. Non-nullable fields: Use `!` to ensure a field is always present.
  4. Lists: Define collections using brackets.
```graphql
type Query {
  users: [User!]!
}
```

