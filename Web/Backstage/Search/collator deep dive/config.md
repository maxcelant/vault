### `defaults`
- Sets some default values for things we've seen previously like `batchSize` and `locationTemplate`.
- Now we can fully understand how that [[defaultcatalogcollatorfactory|applyArgsToFormat()]] works!

```ts
export const defaults = {
  schedule: {
    frequency: { minutes: 10 },
    timeout: { minutes: 15 },
    initialDelay: { seconds: 3 },
  },
  collatorOptions: {
    locationTemplate: '/catalog/:namespace/:kind/:name',
    filter: undefined,
    batchSize: 500,
  },
};
```

### `readScheduleConfigOptions`

```ts
export function readScheduleConfigOptions(
  configRoot: Config,
): TaskScheduleDefinition {
  let schedule: TaskScheduleDefinition | undefined = undefined;

  const config = configRoot.getOptionalConfig(configKey);
  if (config) {
    const scheduleConfig = config.getOptionalConfig('schedule');
    if (scheduleConfig) {
      try {
        schedule = readTaskScheduleDefinitionFromConfig(scheduleConfig);
      } catch (error) {
        throw new InputError(`Invalid schedule at ${configKey}, ${error}`);
      }
    }
  }

  return schedule ?? defaults.schedule;
}
```

### `readCollatorConfigOptions`

```ts
export function readCollatorConfigOptions(configRoot: Config): {
  locationTemplate: string;
  filter: EntityFilterQuery | undefined;
  batchSize: number;
} {
  const config = configRoot.getOptionalConfig(configKey);
  if (!config) {
    return defaults.collatorOptions;
  }

  return {
    locationTemplate:
      config.getOptionalString('locationTemplate') ??
      defaults.collatorOptions.locationTemplate,
    filter:
      config.getOptionalConfig('filter')?.get<EntityFilterQuery>() ??
      defaults.collatorOptions.filter,
    batchSize:
      config.getOptionalNumber('batchSize') ??
      defaults.collatorOptions.batchSize,
  };
}
```