You create a validator schema file that has everything you want to be validated in it. You then give that schema to `ajv` using their `compile` method.

```js
const validator = ajv.compile(require('../schema.json'));
```

Then you can validate your JSON file against this created schema by doing:

```js
if(!validator(fileContentsJson)) {
  throw new Error('metadata.annotations validation failed: ' +
      `${validator.errors.map(e => e.message).join(' | ')}
    `);
  }
```

birth certificate - upload my.aa.com -> benefits service center -> dependent verification