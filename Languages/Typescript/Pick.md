It's a type that allows you to "pick" specific fields from another type. This can be particularly helpful in conversions like coming from a database user to a user on the frontend. 

```ts
type User = {
  id: number;
  name: string;
  createdAt: Date;
  password: string;
};

type RenderedUser = Pick<User, 'id' | 'name'>;

const user: User = {
  id: 1,
  name: 'John Doe',
  createdAt: new Date(),
  password: 'password',
};

console.log(user);

function convertUser<T extends User>(user: T): RenderedUser {
  return {
    id: user.id,
    name: user.name,
  };
}

const renderedUser = convertUser(user);
console.log(renderedUser);
```

You can also simultaneously _change_ existing properties with the `&` like so:

```ts
type RenderedUser = Pick<User, 'id' | 'name'> & { createdAt: Date };
```

