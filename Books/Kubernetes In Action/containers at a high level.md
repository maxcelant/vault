---
tags:
  - containers
---
- All containers run in their own isolated environment, even though they _actually_ all exist within the same VM and talk to the same kernel.
- This is because they utilize linux groups and namespaces. As well as utilizing linux resource management (_cgroups_) to basically say "hey, you can only use this much memory and CPU, etc".