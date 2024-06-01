```ad-tldr
Allows for creation of robust cli tools in TS/JS.
```

#### Example

```ts
import { program } from 'commander';

const main = (argv) => {
  // Define name and version
  program.name('runway-cli').version('1.0.0');
  
  // Register a command
  program
    .command('info')
    .description('Show helpful information for debugging')
    .action(lazy(() => import('./info').then(m => m.default)));

  // Handle invalid commands
  program.on('command:*'. () => {
    console.log(`Invalid command: ${program.args.join(' ')}`);
  });

  // Parse command
  program.parse(argv);
}
```