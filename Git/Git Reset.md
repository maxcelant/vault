**`git reset HEAD`** moves the `HEAD` pointer to the previous commit. There are three flags that change how it works. Note that **`~N`** can be a number of commits back you want to jump.
1. **`git reset --soft HEAD~N`:** Moves the `HEAD` to a specific commit but leaves the changes you haven't committed yet and [[staging index]] alone.
2. **`git reset --mixed HEAD` or `git reset HEAD`:** Default mode. Changes your staging index to match this commit but changes in your working directory that you haven't committed yet will still be there.
3. **`git reset --hard HEAD~N`:** Moves the **`HEAD`** to a specific commit and changes both the staging index and your working directory to match this commit. Any changes you haven't commit will be lost.
`CreateRancherProjectAndNamespace`
`DeleteArgoAppDialog.tsx`
`api.ts`
