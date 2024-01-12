## Creating a database instance for a service

```ts
export const observeDatabaseServiceFactory = createServiceFactory({
  service: observeDatabaseServiceRef,
  deps: { config: coreServices.rootConfig },
  async factory({ config }) {
    // * Create a database instance for observe service
    const databaseManager = DatabaseManager.fromConfig(config);
    const db = databaseManager.forPlugin('observeService');
    return await DatabaseObserveRecordStore.create({
      database: (await db.getClient()) as unknown as Knex,
      config,
    });
  },
});
```

---

- [ ] Turn `Squad360` into a service
- [ ] Turn `NotificationService` into a service
- [ ] Turn `observability-backend` into a catalog module
- [ ] Turn observe service pullrequest and record store into one