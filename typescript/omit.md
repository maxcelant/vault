`Omit` let's you build a type from an existing type but leave some fields out. The use-case is similar to that brought up in the [[pick]] example.

```ts
type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
};

type PublicUser = Omit<User, 'password' | 'email'>;

function displayUser(user: PublicUser) {
    console.log(`User: ${user.name}, ID: ${user.id}, Created At: ${user.createdAt}`);
}

const user: PublicUser = {
    id: '123',
    name: 'John Doe',
    createdAt: new Date(),
};

displayUser(user);

```