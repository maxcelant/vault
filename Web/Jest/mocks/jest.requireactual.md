Allows you to retrieve the original (un-mocked) module when you have overridden it using [[jest.mock]]. There are scenarios where you might want to mock only certain parts of a module.

```js
jest.mock('./userService', () => {
    // Import the actual module
    const actualImplementation = jest.requireActual('./userService');

    return {
        // Mock only the getUser function
        getUser: jest.fn(() => Promise.resolve({ id: 1, name: 'John Doe' })),
        
        // Use the real implementation for deleteUser
        deleteUser: actualImplementation.deleteUser
    };
});
```

In this case, `deleteUser` has it's actual implementation while `getUser` is being mocked.