Create `users` and create the query to get just the name and email.

```js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        users: [User]
    }
`

const users = [
    { id: 1, name: 'Max', email: 'maxcelant@gmail.com' },
    { id: 2, name: 'John', email: 'johndoe@gmail.com' },
]

const resolvers = {
    Query: {
        users: () => users
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})
```

```graphql
query Query {
  users {
    name
    email
  }
}
```