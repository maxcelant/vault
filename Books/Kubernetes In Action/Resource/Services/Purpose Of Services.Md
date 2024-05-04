---
tags:
  - question
  - service
---
- Pods are ephemeral. They pop up and go down, and can sometimes show up in different nodes. This means their IPs are constantly changing.
- When a service is created, it has a static IP. This service then transfers the connection to the indicated pod(s).
- 