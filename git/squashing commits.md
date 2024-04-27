1. **Open your terminal or command line interface** and navigate to your git repository.

```bash
cd path/to/your/repository
```

2. **Check your commit history** to decide how many commits you want to squash. You can view your commit history using:

```bash
git log --oneline
```

3. **Start an interactive rebase for the last N commits** you want to squash. For example, if you want to squash the last 4 commits:

```bash
git rebase -i HEAD~4
```

4. **In the interactive rebase file that opens**, you'll see a list of commits with the word `pick` in front of each commit. It looks something like this:

```
pick e3a1b35 Commit message #4
pick 7ac9a67 Commit message #3
pick 1d2a3f4 Commit message #2
pick 4f3e5d6 Commit message #1
```

5. **Change `pick` to `squash` (or just `s` for short) for the commits you want to combine**, except the first one. Your goal is to squash commits #3, #2, and #1 into #4, so it should look like this:

```
pick e3a1b35 Commit message #4
squash 7ac9a67 Commit message #3
squash 1d2a3f4 Commit message #2
squash 4f3e5d6 Commit message #1
```

6. **Save and close** the editor. Git will then attempt to squash the commits into one. If there are no conflicts, it will prompt you to edit the commit message for the new squashed commit.
7. **Edit the commit message**. This new commit message will represent all the squashed commits. Save and close the editor after editing.
8. **Complete the rebase**. If everything goes smoothly, your commits are now squashed into one.
