
1. **User Action**: The user triggers the OAuth flow, usually via a UI element in the application.
2. **Application's OAuth Start Endpoint**:
    - The application's back-end has an endpoint (e.g., `/api/auth/oauth2/start`) that handles this initial request.
    - When this endpoint is called, it constructs an OAuth authorization request to the OAuth provider. In a typical (non-mock) setup, this would redirect the user to the OAuth provider's authorization page.
3. **Interception for Mock**:
    - In a development environment with a mock server, there's usually configuration logic that intercepts this OAuth flow.
    - Instead of redirecting to the real OAuth provider, the application redirects to the mock OAuth server. This is often controlled by environment variables or configuration files that dictate the OAuth endpoints. When in development mode, these endpoints point to the mock server.
4. **Mock Server Handling**:
    - The mock OAuth server, running locally, receives this redirected request. It has endpoints defined (like `/as/authorization.oauth2`) to mimic the behavior of a real OAuth server.
    - The mock server then handles the rest of the flow: it generates a mock authorization code and redirects back to the application, simulating what a real OAuth server would do.
5. **Completing the Mock Flow**:
    - The application receives the mock authorization code from the mock server and proceeds with the next steps in the authentication process, like requesting tokens.