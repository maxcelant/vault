 ```bash
git fetch
```


- Updates your local repo by adding the commits in the remote repo.
- This will update the **`origin/main`** to point to the correct spot. 
- It essentially brings our _local_ representation of the remote repository into synchronization with what the _actual_ remote repository looks like (right now).
- This will NOT update your **`main`** branch! This is important to understand because a lot of developers think that running `git fetch` will make their local work reflect the state of the remote. 
- Think of fetch as the download step.

---

**Example**
>![[Pasted image 20230907224409.png]]

- `git fetch --all` fetches all remote branches.
- Notice how **`origin/main`** and **`origin/bugFix`** were updated but not **`main`** and **`bugFix`**!
