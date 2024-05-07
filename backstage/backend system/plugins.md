- Plugins provide the actual features, just like in the existing system.
- They operate completely independently of each other.
- If plugins want to communicate with each other, they must do so "over the wire". 
- There can be no direct communication between plugins through code.
- Because of this constraint, each plugin can be considered to be its own microservice.

[[Backstage/backend system/★ index|Return]]