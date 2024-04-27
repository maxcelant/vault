```ts
const cookiePlugin = createBackendPlugin({
  pluginId: 'cookie',
  register(env) {
    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
        http: coreServices.httpRouter,
        identity: coreServices.identity,
        tokenManager: coreServices.tokenManager,
      },
      async init({ config, http, identity, tokenManager }) {
        const authMiddleware = await createAuthMiddleware(
          config,
          identity,
          tokenManager,
        );

        const router = Router();
        router.use(cookieParser());
        // Add a simple endpoint to be used when setting a token cookie
        router.use(authMiddleware, (_req, res) => {
          res.status(200).send('Coming right up');
        });

        http.use(router);
      },
    });
  },
});
```

