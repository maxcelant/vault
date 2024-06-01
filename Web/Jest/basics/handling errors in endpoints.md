For an endpoint like this:
```ts
  router.get('/application/:appId', async (req: Request, res: Response) => {
    const appId = req.params.appId;
    if (appId === undefined) {
      res.status(400).send({ status: 'error', error: 'No app id in the request' });
    }

    try {
      const token = await squad360API.getBearerToken();
      const status = await squad360API.getApplication(Number(appId), token);
      res.send(status);
    } catch (error: any) {
      res.status(error.response.status || 500).send({
        message: error.message || 'Ooops. Something is broken.',
        details: error.response.data || 'No further details available',
      });
    }
```

It can be handled like this:

```ts
    it('returns error if getApplication fails', async () => {
      const mockError = {
        response: {
          status: 400,
          data: 'Mock Error',
        },
        message: 'Sample Error Message',
      };

      mockGetBearerToken.mockResolvedValueOnce('moo');
      mockGetApplication.mockRejectedValueOnce(mockError)
      const response = await request(app).get('/application/123').set('Authorization', 'Bearer moo');
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('details');
      expect(Object.keys(response.body)).toEqual(['message', 'details'])
    });
```