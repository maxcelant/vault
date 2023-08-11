This is essentially your prep zone for the next commit. When you run **`git commit`**, Git takes a snapshot of the index and saves it as a new commit. This means you can finely control what goes into each commit by managing your staging area.

**`git add`** command is what stages those files.

**`git reset file_name`** or **`git restore --staged file_name`** will just unstage that one file.

**`git restore --staged file_name`**