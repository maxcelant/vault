**Deleting a File from a Repo**
```bash
git rm --cached your-file-name.txt
git commit -m "removed"
git push origin master
```

---
**Add, Commit, Push**
```bash
 git config --global alias.pushit '!f() { git add . && git commit -m "$2" && git push origin $1; }; f'  
```

```bash
git pushit <branch> "message"
```

---
**Checking out a specific file from a branch**
Useful for resolving merge conflicts a file at a time.
```bash
git checkout <branch> -- /path/to/file
```

---
**Renaming a Branch**
```bash
git branch -m <new name>
```

---
**Merging with Upstream branch**
```bash
git merge upstream/main
```
