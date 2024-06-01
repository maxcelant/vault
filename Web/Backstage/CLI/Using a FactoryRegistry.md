- When looking at the `new` command, Backstage uses a `FactoryRegistry` to turn each possible resource (`frontend plugin`, `backend plugin`, etc) into their own compact object.
- You choose which resource "factory" you want by choosing it with inquirer.
- Then when your factory is chosen, it runs `factory.create()` method on it which actually performs the functionality.

# Files to Checkout

```ts
export interface Factory<TOptions extends AnyOptions> {
  name: string;
  description: string;
  optionsDiscovery?(): Promise<Partial<TOptions>>;
  optionsPrompts?: ReadonlyArray<Prompt<TOptions>>;
  create(options: TOptions, context?: CreateContext): Promise<void>;
}

export type AnyFactory = Factory<AnyOptions>;

export function createFactory<TOptions extends AnyOptions>(
  config: Factory<TOptions>,
): AnyFactory {
  return config as AnyFactory;
}
```

```ts
export const frontendPlugin = createFactory<Options>({
  name: 'plugin',
  description: 'A new frontend plugin',
  optionsDiscovery: async () => ({
    codeOwnersPath: await getCodeownersFilePath(paths.targetRoot),
  }),
  optionsPrompts: [pluginIdPrompt(), ownerPrompt()],
  async create(options: Options, ctx: CreateContext) {
	  // do some work...
  },
});
```

```ts
export default async (opts: OptionValues) => {
  const factory = await FactoryRegistry.interactiveSelect(opts.select);
  try {
    await factory.create(options, {
      isMonoRepo: await isMonoRepo(),
      defaultVersion,
      scope: opts.scope?.replace(/^@/, ''),
      npmRegistry: opts.npmRegistry,
      private: Boolean(opts.private),
      createTemporaryDirectory,
      markAsModified() {
        modified = true;
      },
    });
  catch (...) {
    ...
  }
}
```