```ts
backend.add(
  createServiceFactory({
    service: coreServices.tokenManager,
    deps: {
      config: coreServices.rootConfig,
      logger: coreServices.rootLogger,
    },
    createRootContext({ config, logger }) {
      return ServerTokenManager.fromConfig(config, {
        logger,
      });
    },
    async factory(_deps, tokenManager) {
      console.log('HELLO');
      return tokenManager;
    },
  }),
);
```

