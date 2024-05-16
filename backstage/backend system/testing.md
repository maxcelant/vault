- Available at `@backstage/backend-test-utils`
- `startTestBackend` can be used with `supertest` to test a plugin

```ts
import { startTestBackend } from '@backstage/backend-test-utils';
import request from 'supertest';

describe('My plugin tests', () => {
  it('should return 200', async () => {
    const { server } = await startTestBackend({
      features: [myPlugin()],
    });

    const response = await request(server).get('/api/example/hello');
    expect(response.status).toBe(200);
  });
});
```

[[Backstage/Backend System/★ index|Return]]