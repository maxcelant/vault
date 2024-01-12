`git branch -f <branch> <commit-hash>` allows you to move your branch to a specific commit.

`git branch -u o/main foo` will set the `foo` branch to track `o/main`. If `foo` is currently checked out you can even leave it off: **`git branch -u o/main`**

You can delete a branch with `git branch -d branch_name` or `git branch -D branch_name`.