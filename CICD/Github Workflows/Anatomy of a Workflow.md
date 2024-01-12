Allows you to build, test and deploy your code from GitHub.

- **Trigger:** Specifies when the workflow should run. Usually things like on a `push`, `pull_request` , `schedule`, or `workflow_dispatch` for manual triggers.
- **Jobs:** Each workflow can have one ore more jobs. Jobs run in parallel by default.
- **Steps:** Sequence of steps within a job. Steps can run commands, run scripts or use external actions.
#### Example of a Simple GitHub Action

```yaml
name: Simple Workflow
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run a basic command
        run: echo "Hello, GitHub Actions!"
```

This YAML file defines a simple workflow that checks out the code from the main branch and runs a basic echo command.