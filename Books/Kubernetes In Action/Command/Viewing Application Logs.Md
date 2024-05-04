---
tags:
  - commands
  - kubectl
---
```bash
kubectl logs kubia-manual
```

- Container logs are automatically rotated daily and every time the log file reaches 10MB in size. 
- The kubectl logs command only shows the log entries from the last rotation.

