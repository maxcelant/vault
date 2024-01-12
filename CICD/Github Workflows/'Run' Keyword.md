This is used to execute a command directly on the runner. These are typically shell commands like so:

```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v2
  - name: Install dependencies
    run: npm install
  - name: Run tests
    run: npm test
```