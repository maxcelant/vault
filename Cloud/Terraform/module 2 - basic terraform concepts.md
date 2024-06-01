
### Providers
Providers are a crucial part of Terraform. They are plugins that allow Terraform to manage resources in different cloud platforms like AWS, Google Cloud, Azure, etc.

```hcl
provider "azurerm" {
  features {}
}
```

### Resources
Resources are the most important element in Terraform configurations. They represent actual infrastructure components like servers, databases, etc.

Here's a simple example to provision a resource group and a virtual network in Azure:

```hcl
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "East US"
}

resource "azurerm_virtual_network" "example" {
  name                = "example-network"
  resource_group_name = azurerm_resource_group.example.name
  location            = azurerm_resource_group.example.location
  address_space       = ["10.0.0.0/16"]
}

```