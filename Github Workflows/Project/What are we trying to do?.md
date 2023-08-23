- We want to be notified and put a "late" tag on a ticket if it has not been worked on for ~10 days.

### GitHub Actions
Event to trigger when a certain tag has existed for a certain amount of time.

While GitHub does not have built-in functionality to notify you based on untouched issues with specific labels after a certain amount of time, you can achieve this using a combination of tools and integrations:

1. **GitHub Actions**:
   - Use GitHub Actions to schedule a check (cron job) on your repository.
   - The action can use the GitHub API to fetch issues with a specific label and check the last updated timestamp.
   - If the issue has been untouched for your defined amount of time, trigger a notification.

Here's a rough outline of how you could set this up:

1. **GitHub Action Workflow** (`notify-on-issue.yml`):

```yaml
name: Notify on untouched labeled issues

on:
  schedule:
    - cron: '0 */4 * * *'  # Run every 4 hours, adjust as necessary

jobs:
  check_issues:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Check untouched issues and notify Slack
      run: |
        # Here, you'd have a script that:
        # 1. Uses GitHub API to fetch issues with specific label
        # 2. Checks if they've been untouched for X hours/days
        # 3. Sends a message to Slack if they are untouched using Slack API
      env:
        SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
```

3. **Scripting**:
   - You'd need to write a script (bash, Python, etc.) for the "Check untouched issues and notify Slack" step. This script will fetch issues with the GitHub API, check timestamps, and use the Slack API (with the webhook) to send notifications.

With this setup, every time the GitHub Action runs, it will check for untouched issues with your specified criteria and send notifications to Slack. 

Remember, using GitHub Actions comes with usage limits depending on the type of repository (public/private) and the type of account (free/paid). Ensure that you don't exceed your allotted action minutes. Adjust the cron schedule as needed.
