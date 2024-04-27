1. Add the mocked oauth server routes if we are running in development mode this allows for us to complete the oauth flow locally without hitting an external IDP

```ts
  if (process.env.NODE_ENV === 'development') {
    router.use('/mock-oauth', await createRouter(mockOAuth));
  }
```

1. Sets up a number of routes

```ts
export async function createRouter({ logger, config }: RouterOptions): Promise<Router> {
  const router = Router();

  router.get('/as/authorization.oauth2', async (req, res) => {
    logger.info(`Query Info: ${JSON.stringify(req.query)}`)
    logger.info(`Received development mock-oauth request at mock authorization endpoint`);

    const authCodeMax = 1000;
    const authorizationCode = Math.floor(Math.random() * authCodeMax);

    const query = {
      env: 'development',
      code: authorizationCode,
      state: req.query.state,
    };

    logger.info(`Responding to mock-oauth request with authorization_code: ${authorizationCode}`);

    const queryString = `?env=${query.env}&state=${query.state}&code=${query.code}`;
    const authRedirect = `${req.query.redirect_uri}${queryString}`;
    res.redirect(authRedirect);
  });
  
  router.post('/as/token.oauth2', async (_, res) => {
    const configProfile = config.get<MockTokenConfig>('mockAuth.identity.user');

    logger.info(`Received request at mocked token endpoint, generating a local token`);

    const token = jwt.sign(
      { aaId: configProfile.aaId, email: configProfile.email, displayName: configProfile.name },
      'topsecretkey',
    );

    res.status(200);
    res.json({
      access_token: token,
      refresh_token: token,
    });
  });

  return router;
}

```

2. Start up a local mock server

```ts
  if (process.env.NODE_ENV === 'development' && ...) {
    mockServer.listen();
  }
```

3. Setup handlers for mock authentication along with other routes like observe and GitHub.

```ts
export const handlers = [
  // request oauth token for azure
  http.post('https://login.microsoftonline.com/:tenantId/oauth2/token', () =>
    HttpResponse.json({ access_token: 'dummy_access_token' }),
  ),

  // observe service
  http.post('https://runway-mgw-np02....', () => {
    console.log('mocking calls to observe service');
    return HttpResponse.json(undefined, { status: 200 });
  }),

  // contributors
  http.get('https://api.github.com/repos/:owner/:repo/stats/contributors', () =>
    HttpResponse.json([
      {
        author: {
          login: 'kpr284',
          avatar_url: 'https://avatars.githubusercontent.com/',
        },
        total: 6,
      },
      {
        author: {
          login: 'johnkahn',
          avatar_url: 'https://avatars.githubusercontent.com/u/',
        },
        total: 15,
      },
    ]),
  ),

  ...squadHandlers,
  ...dataLakeHandlers,
  ...cloudElevatedAccessHandlers,
];
```

- For some reason, it's hitting the real route instead of the mock route
- Could it be a problem with the endpoint name itself?
- `redirect_uri` showing up as `undefined`, confused on what the `redirect_uri` should be 

## How it works in the old system

Hits the oauth2 API endpoint:

```
/api/auth/oauth2/start?scope=openid%20profile%20email&origin=http%3A%2F%2Flocalhost%3A3000&flow=popup&env=development
```

Then calls this endpoint

```

```

Contains this info

```json
Query Info: 
{
  "response_type":"code",
  "redirect_uri":"http://localhost:7007/api/auth/oauth2/handler/frame",
  "scope":"openid profile email",
  "state":"344235325",
  "client_id":"somerandomid"
}
```


```bash
runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "GET /api/auth/oauth2/start?scope=openid%20profile%20email&origin=http%3A%2F%2Flocalhost%3A3000&flow=popup&env=development HTTP/1.1" 302 0 "http://localhost:3000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest

mockOAuth info Query Info: {"response_type":"code","redirect_uri":"http://localhost:7007/api/auth/oauth2/handler/frame","scope":"openid profile email","state":"6e6f6e63653d5144253242546a5939324d3342447047253242625a737831785125334425334426656e763d646576656c6f706d656e74266f726967696e3d687474702533412532462532466c6f63616c686f73742533413330303026666c6f773d706f707570","client_id":"somerandomid"} type=plugin

mockOAuth info Received development mock-oauth request at mock authorization endpoint type=plugin

mockOAuth info Responding to mock-oauth request with authorization_code: 220 type=plugin
THIS IS THE AUTH REDIRECT http://localhost:7007/api/auth/oauth2/handler/frame?env=development&state=6e6f6e63653d5144253242546a5939324d3342447047253242625a737831785125334425334426656e763d646576656c6f706d656e74266f726967696e3d687474702533412532462532466c6f63616c686f73742533413330303026666c6f773d706f707570&code=220

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "GET /api/mock-oauth/as/authorization.oauth2?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A7007%2Fapi%2Fauth%2Foauth2%2Fhandler%2Fframe&scope=openid%20profile%20email&state=6e6f6e63653d5144253242546a5939324d3342447047253242625a737831785125334425334426656e763d646576656c6f706d656e74266f726967696e3d687474702533412532462532466c6f63616c686f73742533413330303026666c6f773d706f707570&client_id=somerandomid HTTP/1.1" 302 634 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest

mockOAuth info Received request at mocked token endpoint, generating a local token type=plugin

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "POST /api/mock-oauth/as/token.oauth2 HTTP/1.1" 200 430 "-" "Node-oauth" type=incomingRequest

auth info Created new signing key 32dce6fa-bc60-4389-80f4-06ac41a7a542 type=plugin component=token-factory

auth info Issuing token for user:default/my-github-username, with entities user:default/my-github-username,group:default/group1,group:default/group2 type=plugin component=token-factory

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "GET /api/auth/oauth2/handler/frame?env=development&state=6e6f6e63653d5144253242546a5939324d3342447047253242625a737831785125334425334426656e763d646576656c6f706d656e74266f726967696e3d687474702533412532462532466c6f63616c686f73742533413330303026666c6f773d706f707570&code=220 HTTP/1.1" 200 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "GET /api/cookie HTTP/1.1" 304 - "http://localhost:3000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "GET /api/cookie HTTP/1.1" 304 - "http://localhost:3000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "GET /api/cookie HTTP/1.1" 304 - "http://localhost:3000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest

observeService info [object Object] type=plugin

runway info ::1 - - [24/Jan/2024:19:36:09 +0000] "POST /api/observe/records HTTP/1.1" 200 25 "http://localhost:3000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" type=incomingRequest
```

---

