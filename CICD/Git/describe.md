`git describe <ref>`, Where `<ref>` is anything git can resolve into a commit. If you don't specify a ref, git just uses where you're checked out right now (`HEAD`). 

The output of the command looks like: **`<tag>_<numCommits>_g<hash>`**. Where `tag` is the closest ancestor [[tag]] in history, `numCommits` is how many commits away that tag is, and `<hash>` is the hash of the commit being described.

![[Pasted image 20230907113237.png]]

Whereas **`git describe side`** would output: `v2_1_gC4`