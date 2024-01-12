Defines a collection of jobs that can run in parallel or sequentially.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Step 1
        run: command1
      - name: Step 2
        run: command2
```