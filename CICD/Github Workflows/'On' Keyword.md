The `on` keyword defines the event that triggers this workflow.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
  schedule:
    - cron: '0 0 * * *'
```