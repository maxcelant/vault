1. **OAuth Flow Start**:
   - The user initiates the OAuth flow, typically by clicking a "Login" button. This action sends a request to start the OAuth process (`GET /api/auth/oauth2/start`). The request includes parameters like `scope`, `origin`, `flow`, and sets the environment to `development`.
   - This request is logged by the `runway` server.

2. **Mock OAuth Server Receives Authorization Request**:
   - The mock OAuth server (`mockOAuth`) receives a request at its mock authorization endpoint (`/as/authorization.oauth2`). This endpoint is part of the mock OAuth server to simulate the authorization process.
   - The server logs the query information, which includes parameters like `response_type`, `redirect_uri`, `scope`, `state`, and `client_id`.

3. **Mock Authorization Code Generation**:
   - The mock OAuth server generates an authorization code and logs this action.
   - The user is then redirected back to the application with the authorization code and state (`authRedirect`).

4. **Application Receives Authorization Code**:
   - The application receives the redirected request with the authorization code and state, and logs this action via `runway`.

5. **Request for Token Exchange**:
   - The application now sends a request to exchange the authorization code for an access token (`POST /api/mock-oauth/as/token.oauth2`).
   - This request is received by the mock OAuth server, which then generates a mock token.

6. **Token Issued to User**:
   - The mock OAuth server sends the generated token back to the application.
   - The `auth` service logs the creation of a new signing key and the issuing of the token to the user.

7. **User Authenticated**:
   - The user is now considered authenticated in the application, and subsequent requests can be made. The logs show requests for a cookie (`GET /api/cookie`), indicating session management or user state persistence.

1. **Additional Service Interaction**:
   - The user or the application interacts with other services, such as the `observeService`, as indicated by the last log entry.
