---
tags:
  - docker
  - commands
---
**Building an image from a Dockerfile**
```bash
docker build -t <image-name> <dir>
```

**Running an Image -> Container**
```bash
docker run --name kubia-container -p 8080:8080 -d
```

**List of Docker Images**
```bash
docker images
```

**Listing Running Containers**
- `ps` stands for _process status_.

```bash
docker ps
```

**Detailed Info About Containers**
```bash
docker inspect <container>
```

**Running Shell Inside Existing Container**
- `exit` to get out of the shell.
```bash
docker exec -it kubia-container bash
```


**Stopping and Removing Containers**
```bash
docker stop <container-name>
```

```bash
docker rm <container-name>
```

