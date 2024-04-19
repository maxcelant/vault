It bundles several core controllers into a single process. Ultimately to regulate the state of the system, like starting new [[Cloud/Kubernetes/Pods]] and taking down others.

Controller Manager includes several controllers:
- **Node Controller** - Responsible for responding and noticing when nodes go down.
- **Replication Controller** - Ensures correct number of nodes are up.
- **Endpoints Controller** - Populates the Endpoints object.
- **Service Account** - Create default accounts and API access tokens for new namespaces ⭐️
- **Volume Controller** - Manages lifecycle of various volume types

Watches the state using [[API Server]] and makes changes to get current state to desired state.

Supports running multiple concurrent control loops.

In a multi-master set-up, there might be multiple instances of the Controller Manager. To prevent conflicting decisions, usually a leader is elected and the others stay dormant.

