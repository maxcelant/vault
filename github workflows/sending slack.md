```yaml
name: Unit Test

on:
  push:
    branches:
      - main
      - master
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.9

      - name: Install pipenv
        run: |
          pip install --upgrade pip
          pip install pipenv

      - name: Install dependencies
        run: pipenv install --deploy --ignore-pipfile

      - name: Run tests
        run: pipenv run pytest
      
      - name: Notify Slack on Success
        if: success()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          fields: repo,message,commit,author,action,eventName,ref,workflow,job,took
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_URL }}

      - name: Notify Slack on Failure
        if: failure()
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          fields: repo,message,commit,author,action,eventName,ref,workflow,job,took
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_URL }}
  
          
```