```bash
git blame -w -C -C -C -L <start>,<end> path/to/file
```

OR

```bash
git blam <start>,<end> path/to/file
```

- ignore whitespace
- detect lines moved or copied in the same commit
- the commit that created the file
- any commit at all