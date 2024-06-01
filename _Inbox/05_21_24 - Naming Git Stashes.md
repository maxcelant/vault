```zsh
git stash push -m "foo"
```

```zsh
git stash list
```

```zsh
stash@{0}: On branch-name: foo
stash@{1}: On another-branch: another-descriptive-name
```

```zsh
git stash pop stash@{0}
```