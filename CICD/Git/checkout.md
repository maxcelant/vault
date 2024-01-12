`git checkout main^2` will go to the second parent of a merge. (for reference `git checkout main^1` would've brought us to **C1**).
 
the modifier on **`^`** specifies which parent reference to follow from a merge commit. Remember that merge commits have multiple parents, so the path to choose is ambiguous.

These can be chained like so `git checkout HEAD~^2~2`.
You can also create a branch if you do `git checkout -b <branch-name> HEAD~^2~2


Discards all changes in your working directory
```git
git checkout -- .
```

