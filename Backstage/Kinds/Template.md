Template definition describes both the parameters that are rendered in the frontend part of the scaffolding wizard and the steps that are executed when scaffolding that component.

Typically called `template.yaml`

```yaml
apiVersion: backstage.io/v1beta2
kind: Template
# some metadata about the template itself
metadata:
  name: v1beta2-demo
  title: Test Action template
  description: scaffolder v1beta2 template demo
spec:
  owner: backstage/techdocs-core
  type: service

  # these are the steps which are rendered in the frontend with the form input
  parameters:
    - title: Fill in some steps
      required:
        - name
      properties:
        name:
          title: Name
          type: string
          description: Unique name of the component
          ui:autofocus: true
          ui:options:
            rows: 5
    - title: Choose a location
      required:
        - repoUrl
      properties:
        repoUrl:
          title: Repository Location
          type: string
          ui:field: RepoUrlPicker
          ui:options:
            allowedHosts:
              - github.com

  # here's the steps that are executed in series in the scaffolder backend
  steps:
    - id: fetch-base
      name: Fetch Base
      action: fetch:template
      input:
        url: ./template
        values:
          name: '{{ parameters.name }}'

    - id: fetch-docs
      name: Fetch Docs
      action: fetch:plain
      input:
        targetPath: ./community
        url: https://github.com/backstage/community/tree/main/backstage-community-sessions

    - id: publish
      name: Publish
      action: publish:github
      input:
        allowedHosts: ['github.com']
        description: 'This is {{ parameters.name }}'
        repoUrl: '{{ parameters.repoUrl }}'

    - id: register
      name: Register
      action: catalog:register
      input:
        repoContentsUrl: {{ steps['publish'].output.repoContentsUrl }}
        catalogInfoPath: '/catalog-info.yaml'
```

### Parameters
Template variables which can be modified in the frontend as a sequence. Look into [this](https://github.com/rjsf-team/react-jsonschema-form). 

**Repository Picker**
Custom UI tool that simplifies the selection of a repo provider (like GitHub). You can configure some restrictions like `allowedHosts`, `allowedOwners`, and `allowedRepos`. Overall, it helps the user find an appropriate location for their repo.

```yaml
- title: Choose a location
  required:
    - repoUrl
  properties:
    repoUrl:
      title: Repository Location
      type: string
      ui:field: RepoUrlPicker
      ui:options:
        allowedHosts:
          - github.com
```

**Owner**
`owner` is necessary to tell Backstage who owns this new component once it's created. `OwnerPicker` looks that the groups/users already in the catalog to pick an owner from.

```yaml
owner:
  title: Owner
  type: string
  description: Owner of the component
  ui:field: OwnerPicker
  ui:options:
    catalogFilter:
      kind: [Group, User]
```

### Steps
An array of things that you want to happen once the data is inputted.

By default, there are some built in `action`s that you can use. Some include fetching content, registering in the catalog and creating and publishing a git repo.

Head to [here](https://developer.aa.com/create/actions) to see all the premade options. 

Some important ones include `publish:github`, `catalog:register`, `fetch:template`

##### `publish:github`
Initializes a git repo of contents in workspace and publishes it to GitHub.

```yaml
- id: publish
  name: Publish
  action: publish:github
  input:
	access: AAInternal/${{ steps.teamSlugExtractor.output.teamSlug }}
	collaborators:
	  - team: all
		access: pull
	allowedHosts: ["github.com"]
	description: ${{ parameters.description }}
	repoUrl: github.com?repo=${{ parameters.name }}&owner=AAInternal
	repoVisibility: internal
	requireCodeOwnerReviews: true
	defaultBranch: main
	topics: ["runway-generated", "nextjs", "typescript", "react"]
	allowSquashMerge: true
	squashMergeCommitTitle: PR_TITLE
	squashMergeCommitMessage: COMMIT_MESSAGES
	allowRebaseMerge: false
	allowMergeCommit: false
```

##### `catalog:register`
Registers entities from a catalog descriptor file in the workspace into the software catalog.

```yaml
- id: register
  name: Register
  action: catalog:register
  input:
	repoContentsUrl: ${{ steps.publish.output.repoContentsUrl }}
	catalogInfoPath: "/catalog-info.yaml"
```
##### `fetch:template`
Allows you to download a skeleton and insert values into that template.

```yaml
- id: fetch
  name: Template Skeleton
  action: fetch:template
  input:
	url: ./skeleton
	values:
	  name: ${{ parameters.name }}
	  description: ${{ parameters.description }}
	  containerName: ${{ parameters.containerName }}
	  squad: ${{ parameters.squad }}
	  cmdbAppShortName: ${{ parameters.cmdbAppShortName }}
	  createIngress: ${{ parameters.createIngress }}
	  owner: ${{ steps.teamSlugExtractor.output.teamSlug }}
	  breakBuild: ${{parameters.breakBuild}}
```

### Template YAML -> JSON
Could be useful to understand the structure a bit better.
```json
{
  "apiVersion": "scaffolder.backstage.io/v1beta3",
  "kind": "Template",
  "metadata": {
    "name": "NextJSReact",
    "title": "NextJS React Template",
    "description": "Create a Next.js app deployed to Kubernetes",
    "tags": [
      "react",
      "nextjs",
      "typescript"
    ],
    "functionalitySet": [
      "runwayKubernetesV1"
    ]
  },
  "spec": {
    "owner": "runway",
    "type": "website",
    "parameters": [
      {
        "title": "American Airlines Information",
        "required": [
          "squad",
          "cmdbAppShortName"
        ],
        "properties": {
          "squad": {
            "title": "Squad",
            "ui:autofocus": true,
            "description": "Squad360 Squad Name",
            "ui:field": "SquadPickerFieldExtension"
          },
          "cmdbAppShortName": {
            "title": "App Shortname",
            "description": "Archer Application Shortname",
            "ui:field": "AppShortnamePickerFieldExtension"
          }
        }
      },
      {
        "title": "Repo Information",
        "required": [
          "name",
          "description",
          "owner"
        ],
        "properties": {
          "name": {
            "title": "Name",
            "description": "Unique name of the repo",
            "ui:field": "GithubRepoFieldExtension"
          },
          "description": {
            "title": "Description",
            "ui:field": "DescriptionFieldExtension",
            "description": "A description for the component"
          },
          "owner": {
            "title": "GitHub Team",
            "type": "string",
            "description": "The GitHub Team that will own this component",
            "ui:field": "OwnerPicker",
            "ui:options": {
              "allowedKinds": [
                "Group"
              ],
              "allowArbitraryValues": false
            }
          },
          "breakBuild": {
            "title": "Break Build",
            "ui:widget": "checkbox",
            "type": "boolean",
            "default": false,
            "description": "Would you like to Break your build on critical vulnerabilities?"
          }
        }
      },
      {
        "title": "Deployment Information",
        "required": [
          "cluster",
          "containerName",
          "createIngress"
        ],
        "properties": {
          "cluster": {
            "title": "Cluster",
            "description": "Kubernetes Cluster",
            "ui:field": "KubernetesClusterPickerFieldExtension"
          },
          "containerName": {
            "title": "Container Name",
            "type": "string",
            "pattern": "^[a-z0-9]+(?:[\\/._-]{1}[a-z0-9]+)*$",
            "description": "Name of the container saved to Artifactory"
          },
          "createIngress": {
            "title": "Create Ingress",
            "type": "string",
            "ui:widget": "radio",
            "ui:options": {
              "inline": true
            },
            "enum": [
              "AKS Public",
              "None"
            ],
            "default": "AKS Public",
            "description": "Create an ingress to enable traffic to your service/application"
          }
        }
      }
    ],
    "steps": [
      {
        "id": "teamSlugExtractor",
        "name": "Extract Team Slug from Owner",
        "action": "generic:team-slug-extractor",
        "input": {
          "owner": "${{ parameters.owner }}"
        }
      },
      {
        "id": "fetch",
        "name": "Template Skeleton",
        "action": "fetch:template",
        "input": {
          "url": "./skeleton",
          "values": {
            "name": "${{ parameters.name }}",
            "description": "${{ parameters.description }}",
            "containerName": "${{ parameters.containerName }}",
            "squad": "${{ parameters.squad }}",
            "cmdbAppShortName": "${{ parameters.cmdbAppShortName }}",
            "createIngress": "${{ parameters.createIngress }}",
            "owner": "${{ steps.teamSlugExtractor.output.teamSlug }}",
            "breakBuild": "${{parameters.breakBuild}}"
          }
        }
      },
      {
        "id": "fetch-aa-repo-metadata",
        "name": "Template Skeleton",
        "action": "fetch:template",
        "input": {
          "url": "https://github.com/AAInternal/repo-metadata/tree/main/skeleton",
          "values": {
            "squad": "${{ parameters.squad.id }}",
            "cmdbAppShortName": "${{ parameters.cmdbAppShortName.shortName }}"
          }
        }
      },
      {
        "id": "updateNodeNameField",
        "name": "updateNodeNameField",
        "action": "node:updateNodeNameField",
        "input": {
          "path": "name",
          "value": "${{ parameters.name }}"
        }
      },
      {
        "id": "fetch-webapp-linter",
        "name": "Fetch Webapp Linter",
        "action": "fetch:template",
        "input": {
          "url": "https://github.com/AAInternal/runway-operator-kopf/blob/main/example/linter-example",
          "targetPath": "./.github/workflows"
        }
      },
      {
        "id": "publish",
        "name": "Publish",
        "action": "publish:github",
        "input": {
          "access": "AAInternal/${{ steps.teamSlugExtractor.output.teamSlug }}",
          "collaborators": [
            {
              "team": "all",
              "access": "pull"
            }
          ],
          "allowedHosts": [
            "github.com"
          ],
          "description": "${{ parameters.description }}",
          "repoUrl": "github.com?repo=${{ parameters.name }}&owner=AAInternal",
          "repoVisibility": "internal",
          "requireCodeOwnerReviews": true,
          "defaultBranch": "main",
          "topics": [
            "runway-generated",
            "nextjs",
            "typescript",
            "react"
          ],
          "allowSquashMerge": true,
          "squashMergeCommitTitle": "PR_TITLE",
          "squashMergeCommitMessage": "COMMIT_MESSAGES",
          "allowRebaseMerge": false,
          "allowMergeCommit": false
        }
      },
      {
        "id": "register",
        "name": "Register",
        "action": "catalog:register",
        "input": {
          "repoContentsUrl": "${{ steps.publish.output.repoContentsUrl }}",
          "catalogInfoPath": "/catalog-info.yaml"
        }
      },
      {
        "id": "create-argocd-resources",
        "name": "Create ArgoCD Resources",
        "action": "argocd:create-resources",
        "input": {
          "appName": "${{ parameters.name | lower | replace(\"_\", \"-\") }}-nonprod",
          "argoInstance": "${{ parameters.cluster.cluster }}",
          "namespace": "${{ parameters.cluster.namespace }}",
          "repoUrl": "${{ steps.publish.output.remoteUrl }}",
          "labelValue": "${{ parameters.name }}",
          "path": "k8s/nonprod"
        }
      },
      {
        "id": "create_release",
        "name": "Create Release",
        "action": "github:actions:dispatch",
        "input": {
          "repoUrl": "github.com?repo=${{ parameters.name }}&owner=AAInternal",
          "workflowId": "initial-release.yml",
          "branchOrTagName": "main"
        }
      }
    ],
    "output": {
      "links": [
        {
          "title": "Repository",
          "url": "${{ steps.publish.output.remoteUrl }}"
        },
        {
          "title": "Open in catalog",
          "icon": "catalog",
          "entityRef": "${{ steps.register.output.entityRef }}"
        },
        {
          "title": "Go to initial PR",
          "url": "${{steps.pr-metadata.output.remoteUrl}}"
        }
      ]
    }
  }
}
```