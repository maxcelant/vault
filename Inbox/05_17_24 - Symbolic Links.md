- Symbolic Links are like shortcuts that point to another file or directory.

**Example**
- Suppose you have this folder structure:

```bash
/home/user
  /projects
    /actual
      - file.txt
  /symlink-to-project (this is a symbolic link pointing to /home/user/projects/actual)
```

- `/symlink-to-project` is a symlink that points to `/actual`.
- If we were in the `symlink-to-project` directory and ran `process.cwd()` we would get `/home/user/symlink-to-project`.
- If we use `fs.realpathSync(process.pwd())` we get the true path which the symlink points to (`/home/user/projects/actual`).