`git pull` is essentially just a **`git fetch`** followed by a merge of whatever branch was just pulled!

What do we do if our local is out of date and we try to push? It wont let us! This is a possible solutions:

```bash
git fetch
git merge origin/main
git push
```

`git pull --rebase` does this automatically.

```bash
git fetch
git rebase origin/main
git push
```



