### Standalone Plugins
Run entirely in the browser. For example **The Tech Radar Plugin** simply renders hard-coded information. It doesn't make any API requests to other services.

![[Pasted image 20230811130728.png]]

### Service Backed Plugins
These make API requests to a service which is within the purview of the organization running Backstage.

The Lighthouse plugin, for example, makes requests to the [lighthouse-audit-service](https://github.com/spotify/lighthouse-audit-service). The `lighthouse-audit-service` is a microservice which runs a copy of Google's [Lighthouse library](https://github.com/GoogleChrome/lighthouse/) and stores the results in a PostgreSQL database.

![[Pasted image 20230811130828.png]]

The software catalog in Backstage is another example of a service backed plugin.
### Third Party Backed Plugins
Similar to service backed plugins except the service which backs the plugin is hosted outside of the ecosystem of the company hosting Backstage.

The CircleCI plugin is an example of a third-party backed plugin. CircleCI is a SaaS service which can be used without any knowledge of Backstage. It has an API which a Backstage plugin consumes to display content.

![[Pasted image 20230811131112.png]]

