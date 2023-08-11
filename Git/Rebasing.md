### Understanding
Rebasing makes it seem like your commits were part of the master branch instead of making them a separate branch then merging those changes.

With rebasing, it seems as though your work was based directly off the latest version of the `master` (or `main`) branch, even if in reality your work started earlier or was done in parallel with other work on `master`. This makes your commit history simpler and easier to read.

### Code

```bash
# switch to the branch that you want to rebase
git checkout branch_name

# rebase onto master
git rebase master
```

### Example
Suppose you have two branches: `main` and `feature`.

The `main` branch has the following commits:

```cs
A - B - C
```

And your `feature` branch has these commits:

```cs
D - E
```

**Merging**

If you're on the `main` branch and you do a `git merge feature`, Git will integrate the changes from the `feature` branch into the `main` branch. It will then create a new merge commit, let's call it M. This merge commit has two parents, `C` and `E`, representing the last commits of each branch being merged.

After the merge, your commit history will look like this:

```cs
A - B - C - M
 \         /
  D ----- E
```

You can see that the `D` and `E` commits are still separate, and the `M` commit signifies the merge.

**Rebasing**

If instead of merging you do a `git rebase main` while on the `feature` branch, Git will "replay" your `feature` branch commits on top of the `main` branch.

First, it would take the changes in commit `D` and apply them on top of commit `C`, resulting in a new commit, `D'`. It would then take the changes in commit `E` and apply them on top of commit `D'`, creating another new commit, `E'`.

Your commit history would then look like this:

```
A - B - C - D' - E'
```

The rebasing method results in a linear history. Note that the original `D` and `E` commits are gone and replaced with `D'` and `E'`.

In both cases, the final code is the same, it's just the commit history that differs. The choice between merge and rebase often comes down to how you want your project history to look.