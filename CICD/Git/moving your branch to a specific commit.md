```bash
git branch -f <branch> <commit-hash>
```

- will set the `foo` branch to track `o/main`. If `foo` is currently checked out you can even leave it off: **`git branch -u o/main`**

```bash
git branch -u o/main foo
```
