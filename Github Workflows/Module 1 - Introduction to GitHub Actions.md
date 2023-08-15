Allows you to build, test and deploy your code from GitHub.

#### Use Cases
- **Continuous Integration:** Automating the building and testing of your code whenever a new commit is pushed.
- **Continuous Deployment:** Once your code passes CI, sending it to production, staging or other environments.
- **Issue & PR Automation:** Automate certain responses when issues or PRs are created. 
- **Scheduling Jobs:** Run scripts or tasks at specific times, similar to cron jobs.
- **External Integration:** Interact with other services like Slack or Jira.

#### Anatomy of a Workflow
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