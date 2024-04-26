 `git rebase <branch>` will plop the commits of a `branch` you specify the branch your checked out on.

`git rebase branch1 branch2` puts commits of `branch2` after those of `branch1`

`git rebase -i HEAD~<number>` allows you to move around and omit commits from back to where you put the `number` to.