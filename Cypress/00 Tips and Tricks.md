1. Here is a simple test in Cypress

```javascript
describe('Login', function() {
    it('successfully logs in', function() {
        cy.visit('/login')                       // 1

        cy.get('input[name=username]')           // 2
            .type('testuser')                    // 3

        cy.get('input[name=password]')           // 4
            .type('testpassword')                // 5

        cy.get('button[type=submit]')            // 6
            .click()                             // 7

        cy.url()                                 // 8
            .should('include', '/dashboard')     // 9
    })
})
```

2. Use `wait()` is used with an alias for a network request

```javascript
// Start a server to begin routing responses to cy.route()
cy.server()

// Manage the route to wait on
cy.route('GET', '/users/*').as('getUser')

// Visit the page that makes the request
cy.visit('/users/123')

// Wait for the request to complete
cy.wait('@getUser')

// Continue with your test
cy.get('.user-name').should('contain', 'John Doe')
```

3. `add()` is used to create custom commands. 'login' is the name of the command.

```javascript
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=password]').type(password)
    cy.get('button[type=submit]').click()
})

cy.login('testuser', 'testpassword')
```

4. `describe` is used to group related tests together

```javascript
describe('Login Page', function() {
    it('displays a login form', function() {
        cy.visit('/login');
        cy.get('form').should('be.visible');
    });

    it('logs in a user when valid credentials are provided', function() {
        cy.visit('/login');
        cy.get('input[name=username]').type('testuser');
        cy.get('input[name=password]').type('testpassword');
        cy.get('button[type=submit]').click();
        cy.url().should('include', '/dashboard');
    });
});
```