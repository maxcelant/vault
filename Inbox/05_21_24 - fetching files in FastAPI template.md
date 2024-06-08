- This is getting the workflows located at the `url` and then inputting the placeholders in the `values` object.

```yaml
    - id: fetch-cicd-workflows-copy
      name: Fetch CI/CD Workflows
      if: ${{ parameters.componentInformation.rwSelection === 'selfManaged' }}
      action: fetch:template
      input:
        url: https://github.com/AAInternal/dte-reusable-workflows/blob/v5/templates/Python/workflows
        targetPath: ./.github/workflows
        values:
          ciReusableWorkflowsPath: ./.github/workflows/python_ci_workflow.yaml
          cdReusableWorkflowsPath: ./.github/workflows/cd_workflow.yaml
          containerName: ${{ parameters.componentInformation.containerName }}
          cmdbAppShortName: ${{ parameters.componentInformation.shortName }}
          squad: ${{ parameters.componentInformation.squad }}
          name: ${{ parameters.componentInformation.repoName }}
```