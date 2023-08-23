### Azure
1. **ARM Template**:
    - Define all resources: VM, Azure SQL Database, and Blob Storage in a single ARM template.
    - Specify their configurations, relationships, dependencies, etc.
2. **Deployment**:
    - Deploy the ARM template to create a resource group "MyWebApp" with all the defined resources. This way, you don't have to manually set up each resource; the ARM template does it for you in a consistent manner.
3. **Azure Role-Based Access Control (RBAC)**:
    - Set permissions on the "MyWebApp" resource group level, so permissions apply to all contained resources.