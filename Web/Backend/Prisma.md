- [Documentation](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
- When creating prisma schemas, you should establish foreign keys and the objects themselves.
- Notice how both `authorId` (foreign key) and `author` (relation) exist in `Post` model.
- This allows you to get `User` data when making an API call about a `Post`.
- The `relation` is established on the ONE side of the ONE-to-MANY relationship.

```java
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id]) // Establishing relation
  authorId  Int?  // This is the foreign key
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[] // Establishes one-to-many relationship with Post
}
```

