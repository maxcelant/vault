- Gets the information from `app-config.yaml` and can be used using the Config API.
- The `config.d.ts` file let's backstage define which values are visible and not visible on the front end. You should NOT add secret info to this file. Because Backstage will send that to the front end.
- Check out the **Visibility** page on Backstage to explore hiding values.
- The visibility could be set to `frontend`, `backend`, `secret`.
- Look into using `secret` for secrets!

```ts
/**
 * @visibility frontend / backend / secret
 **/
```