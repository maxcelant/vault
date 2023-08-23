Infrastructure as Code (IaC) software tool. Allows you to define and provision data center infrastructure using declarative configuration language `HCL`.

#### Why Use Terraform
- **Declarative Language:** What to do, not how to do it.
- **Platform Agnostic:** Doesn't matter which cloud platform provider you're using.
- **Immutable Infrastructure:** Rather than making in-place updates to existing infrastructure, Terraform provisions a new set of resources as defined in the configuration.

#### How Terraform Works
- `plan` - seeing what changes will be made
- `apply` - performing those changes
- `destroy` - tearing down resources

### Terraform Core Concepts
**Providers:** AWS, GCP, Azure, etc.
**Resources:** A piece of infrastructure: VM, database instance, or even a resource group.
**Variables:** Variables allow for configuration reuse and parameterization. They can come from a variety of sources, including file-based variable definitions or environment variables.
**Outputs:** These are a way to extract information about the resources Terraform creates. This could be an IP address, a URL, or any other attribute of a resource.
**State:** Terraform saves the current state of your infrastructure in a file. It compares your infrastructure's desired state (from your configuration) to its actual state (in the real world) to determine what changes need to be made.