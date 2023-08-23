**Task:** You're designing a system for a library. Given entities `Author`, `Book`, and `Member`. An `Author` has multiple `Books`. A `Book` can be on loan to a `Member`.

1. Define an `Author` and `Book` type, ensuring that a `Book` knows which `Author` wrote it and an `Author` knows their books.
2. Define a `Member` type that has a list of `Books` they've borrowed.
3. Create an `enum` for `BookGenre` (e.g., `FICTION`, `NON_FICTION`, `SCI_FI`, etc.).
4. Create an input type for a new `Book`.


```graphql
enum BookGenre = {
	FICTION,
	NON_FICTION,
	SCI_FI
}

type Book {
  id: ID!
  title: String!
  author: Author!
  genre: BookGenre!
  borrowedBy: Member
}

type Author{
  id: ID!
  name: String!
  books: [Book!]!
}

type Member{
  id: ID!
  name: String!
  booksBorrowed: [Book!]!
}

input NewBookInput {
  title: String!
  authorId: ID!
  genre: BookGenre!
}
```