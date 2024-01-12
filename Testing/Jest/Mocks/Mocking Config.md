For this config:
```ts
const token = config.getString('github.ghec.orionGhecToken');
```

You would write it like this:

```ts
const config = ConfigReader.fromConfigs([
    {
      context: '',
      data: {
        github: {
          ghec: {
            orionGhecToken: 'ghtoken'
          }
        }
      },
    },
  ]);
```



