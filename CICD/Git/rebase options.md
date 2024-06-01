 - Will plop the commits of a `branch` you specify the branch your checked out on.

```bash
git rebase <branch>
```

- Puts commits of `branch2` after those of `branch1`

```bash
git rebase <branch1> <branch2>
```

- Allows you to move around and omit commits from back to where you put the `number` to.

```bash
git rebase -i HEAD~<num>
```