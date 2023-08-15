#### Workflow Files
Defined in `.github/workflows`

#### Naming Workflows
You can name a workflow by using the `name` keyword in the yaml file.

```yaml
name: My Workflow
```

#### On: Define Events
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

#### Jobs and Job Lifecycle
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

#### 'Run' Keyword
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

#### 'Uses' Keyword
The `uses` keyword points to an action. An action is a reusable piece of code. Actions can be part of the repository the workflow resides in, from a public repository, or even from Docker Hub.

```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v2
  - name: Setup Node.js
    uses: actions/setup-node@v2
    with:
      node-version: '14'
  - name: Install dependencies
    run: npm install
```

#### Environment Variables
Can be defined at the workflow, job or step level.

```yaml
env:
  VAR_NAME: Value
```
