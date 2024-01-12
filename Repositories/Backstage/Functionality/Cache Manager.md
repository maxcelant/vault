Allows you to cache data:

```ts
export interface RouterOptions {
  cache: PluginCacheManager;
}

export function createRouter(options: RouterOptions): Promise<express.Router> {
  const { logger, cache } = options;
  const cacheClient = cache.getClient();

  const squad360API = new Squad360Service(cacheClient);

...


```

```ts
export class Squad360Service {

  constructor(
    private cacheClient: CacheClient,
 . ) {}
  
  private const CACHE_TIME = 14400000;
  
  async getAllSquadsSimple(token: string): Promise<SimpleSquad[]> {
    const key = '/simple/squads';
    const cached = await this.cacheClient.get<SimpleSquad[]>(key);
    if (cached) return cached;

    const res = await axios.get(url);
    
    const simpleSquads: SimpleSquad[] = res.data;

    await this.cacheClient.set(key, simpleSquads, { ttl: CACHE_TIME });

    return simpleSquads;
  }
```

- `ttl` stands for **time to live**, basically how long it lasts until it gets stale!
- `PluginCacheManager` can create the clients.
- `getClient()`: "Give me the tool (client) that directly talks to the cache, so I can use it in more specific or advanced ways."
- 