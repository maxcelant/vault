1. **Given a type `Book` with fields `id`, `title`, and `author`, write a query to fetch the title and author of a book with id `3`.**
```graphql
query Query {
  Book(id: 3) {
    title
    author
  }
}
```
    
2. **Given a mutation `addBook(title: String!, author: String!): Book`, write a mutation to add a book with the title "GraphQL Mastery" and author "John Doe".**
```graphql
mutation {
  addBook(title: "GraphQL Master", author: "John Doe") {
    title
    author
  }
}
```

3. **Write a query to fetch the names of all users and alias them as `allNames`.**
```graphql
query {
  allNames: users {
    name
  }
}
```

---

**Coding Problem 2:** Define a schema with given entities and relationships.

**Task:** Given two entities, `Author` and `Book`. The `Author` has fields `id`, `name`, and a list of books they've written. The `Book` has fields `id`, `title`, and an `author`. Define the GraphQL types and a query `getAllAuthors` that returns a list of authors with their books.

```js

type Author {
	id: ID!
	name: String!
}

type Book {
	id: ID!
	title: String!
	author: Author!
}

type Query {
	getAllAuthors: [Author!]!
}
```