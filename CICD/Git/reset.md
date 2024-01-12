`git reset <commit-hash>`/`git reset HEAD~<number>` is used to undo a local commit. It basically just erases that commit and brings you to the previous one.

`git reset --soft HEAD~1` is particularly useful when you want to undo a commit but keep all the changes for a new commit.

---
#### Example
**Scenario:**
Imagine you've been working on a feature in your project and you've made several changes. You decided to commit these changes, but after committing, you realized you should have split these changes into two separate commits for better clarity and version control. The `--soft` flag can help you achieve this.

**Starting Point:**
You've already added and committed the changes. For example, your commit included changes in two files: `file1.txt` and `file2.txt`.

**Goal:**
You want to split this into two commits: one for `file1.txt` and another for `file2.txt`.

**Steps:**

1. **Undo the Last Commit, Keeping Changes Staged:**
   ```bash
   git reset --soft HEAD~1
   ```
   This command moves the current branch's HEAD back one commit but keeps the changes from that commit in the staging area.

2. **Check the Staging Area:**
   Now, if you run `git status`, you should see that `file1.txt` and `file2.txt` are still staged for commit.

3. **Commit the Changes Separately:**
   - First, unstage the file you don’t want to include in the first commit:
     ```bash
     git reset HEAD file2.txt
     ```
   - Commit the changes in `file1.txt`:
     ```bash
     git commit -m "Commit message for changes in file1.txt"
     ```
   - Now, add the second file back to the staging area and commit:
     ```bash
     git add file2.txt
     git commit -m "Commit message for changes in file2.txt"
     ```

