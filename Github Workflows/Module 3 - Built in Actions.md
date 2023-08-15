You can go to [GitHub Marketplace](https://github.com/marketplace?type=actions) to see all the available pre-made actions.

#### `actions/checkout`
Checks out your repository under `$GITHUB_WORKSPACE` so your workflow can access it. 

```yaml
- name: Checkout code
  uses: actions/checkout@v3
```

#### `actions/setup-node`
Sets up a specific version of Node on the runner.

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v2
  with:
    node-version: '14'
```

#### `actions/cache`
Allows you to cache dependencies and build outputs to improve workflow execution time. 

```yaml
- name: Cache dependencies
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

## Example

```yaml
on:
  pull_request:
    branches: [ main ]

jobs:
  test: # Added job ID
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v2

      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.8' # Updated to a more recent version

      - name: Set up Node
        uses: actions/setup-node@v2
        with:
          node-version: '14' # Updated to a common LTS version

      - name: Install dependencies
        run: yarn install

      - name: Run Unit Tests
        run: yarn test
```
