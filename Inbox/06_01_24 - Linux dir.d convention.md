- On Unix-like operating systems, `.d` stands for "directory".
- So `foo/conf.d` are used to store individual config files.

```bash
include /etc/nginx/conf.d/*.conf;
```