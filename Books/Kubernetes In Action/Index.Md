# High Level Overviews
```dataview
TABLE
WHERE contains(file.tags, "high-level")
```

# Docker
```dataview
TABLE
WHERE contains(file.tags, "docker")
```

# Commands
```dataview
TABLE
WHERE contains(file.tags, "command") OR contains(file.tags, "kubectl")
```

# Master Node
```dataview
TABLE
WHERE contains(file.tags, "master-node")
```

# Pods
```dataview
TABLE
WHERE contains(file.tags, "pods")
```
# Services
```dataview
TABLE
WHERE contains(file.tags, "service")
```

# Networking
```dataview
TABLE
WHERE contains(file.tags, "networking")
```