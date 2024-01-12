The "kinds" of entities in Backstage represent different types of items that can exist within the system.

[**Component**](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component): Represents a software component in your ecosystem, like a library, a service, or a website. It's a central entity that can have associated metadata, ownership info, and more.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: Component
	metadata:
	  name: artist-web
	  description: The place to be, for great artists
	spec:
	  type: website
	  lifecycle: production
	  owner: artist-relations-team
	  system: artist-engagement-portal
	  dependsOn:
	    - resource:default/artists-db
	  providesApis:
	    - artist-api
	```

[**Template**](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-template): Represents a predefined blueprint for creating things. In the context of the scaffolder, it's a set of instructions that can be used to create new components or resources.
- YAML code
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

[**API**](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api): Represents an API endpoint, allowing developers to see available APIs, their documentation, and metadata.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: API
	metadata:
	  name: artist-api
	  description: Retrieve artist details
	spec:
	  type: openapi
	  lifecycle: production
	  owner: artist-relations-team
	  system: artist-engagement-portal
	  definition: |
	    openapi: "3.0.0"
	    info:
	      version: 1.0.0
	      title: Artist API
	      license:
	        name: MIT
	    servers:
	      - url: http://artist.spotify.net/v1
	    paths:
	      /artists:
	        get:
	          summary: List all artists
	    ...
	```

[**Group**](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group): Represents a team or group of people in an organization. It can be used to define ownership of components or to set up access controls.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: Group
	metadata:
	  name: infrastructure
	  description: The infra business unit
	spec:
	  type: business-unit
	  profile:
	    displayName: Infrastructure
	    email: infrastructure@example.com
	    picture: https://example.com/groups/bu-infrastructure.jpeg
	  parent: ops
	  children: [backstage, other]
	  members: [jdoe]
	```

[**User**](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-user): Represents an individual person in the system. It can be linked to identity providers so that it reflects actual users in your organization.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: User
	metadata:
	  name: jdoe
	spec:
	  profile:
	    displayName: Jenny Doe
	    email: jenny-doe@example.com
	    picture: https://example.com/staff/jenny-with-party-hat.jpeg
	  memberOf: [team-b, employees]
	```

[**Resource**](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-resource): Represents infrastructure components or other platform resources that a software component might depend on, such as databases, cache systems, or message brokers.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: Resource
	metadata:
	  name: artists-db
	  description: Stores artist details
	spec:
	  type: database
	  owner: artist-relations-team
	  system: artist-engagement-portal
	```

[**System**](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-system): A system is an abstraction that groups resources and components, providing insights into its exposed features without delving deep into component specifics, allowing the owning team to manage published artifacts and APIs.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: System
	metadata:
	  name: artist-engagement-portal
	  description: Handy tools to keep artists in the loop
	spec:
	  owner: artist-relations-team
	  domain: artists
	```

[**Location**](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-location): Indicates where the metadata definitions for entities are stored, like a GitHub repository. Backstage continuously scans and syncs data from these locations.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: Location
	metadata:
	  name: org-data
	spec:
	  type: url
	  targets:
	    - http://github.com/myorg/myproject/org-data-dump/catalog-info-staff.yaml
	    - http://github.com/myorg/myproject/org-data-dump/catalog-info-consultants.yaml
	```

[**Domain**](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-domain): Groups a collection of systems that share terminology, domain models, business purpose, or documentation, i.e. form a bounded context.
- YAML code
	```yaml
	apiVersion: backstage.io/v1alpha1
	kind: Domain
	metadata:
	  name: artists
	  description: Everything about artists
	spec:
	  owner: artist-relations-team
	```