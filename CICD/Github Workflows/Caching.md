---
tags:
  - caching
  - workflows
---
- If its a fresh run and no cache has been made yet, then it will be created _at the end_ of the workflow!

**Example**

```yaml
name: Example Caching with Node.js

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Cache node modules
      uses: actions/cache@v2
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-

    - name: Install Dependencies
      run: npm install
      # If the cache was restored, this step will be much quicker

    - name: Build and Test
      run: |
        npm run build
        npm test

```

- So if the `node_modules` weren't cached yet, they will be at the end of the run so re-occurring runs will be ready.

