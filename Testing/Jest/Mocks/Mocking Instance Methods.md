**Concept:**  
In JavaScript, class instance methods reside on the class's prototype. To mock instance methods in Jest, we target the method on the class's prototype.

**Why it's Important:**  
Mocking allows tests to be isolated, fast, and not dependent on external factors. Mocking instance methods is essential when wanting to test how the method is used without executing its actual logic.

**Example:**  
Given a `RestClient` class with a `get` method:

```javascript
class RestClient {
  get(url) {
    // ... actual implementation
  }
}
```

To mock the `get` method in Jest:

```javascript
// Mock the entire module
jest.mock('path-to-restclient');

// Mock the instance method
(RestClient.prototype.get as jest.Mock).mockResolvedValue({ data: 'mockedData' });
```

Now, when creating an instance of `RestClient` and calling its `get` method, Jest will return the mocked data instead of executing its actual logic.

**Note:**  
- This method is specifically for instance methods. For static or class methods, mock directly on the class.
- Always ensure that the mock is reset or cleared between tests to avoid unintended side effects.