```js
#!/usr/bin/env node
const path = require('path');

// Figure out whether we're running inside the backstage repo or as an installed dependency
const isLocal = require('fs').existsSync(path.resolve(__dirname, '../src'));

if (!isLocal || process.env.BACKSTAGE_E2E_CLI_TEST) {
  require('..');
} else {
  require('ts-node').register({
    transpileOnly: true,
    project: path.resolve(__dirname, '../../../tsconfig.json'),
    compilerOptions: {
      module: 'CommonJS',
    },
  });

  require('../src');
}
```

- This is the main entry point for the backstage cli.
- 
