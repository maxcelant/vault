`git push origin foo` pushes the local changes of the branch `foo` to the remote repository named version of [[what is origin?]] (typically your repository on a platform like GitHub, GitLab, etc.) and updating the remote's version of the branch `foo` with your local changes. If the remote doesn't already have a branch named `foo`, it will create one.

This does NOT push the changes of `foo` into the `main` branch.

`git push origin <source>:<destination>` allows you to push a `source` branches commits to a `destination` on the remote.

`git push origin foo^:main` pushes `foo`'s previous commit to the onto `main` on the remote repo.

`git push origin main:newBranch` will create a new branch on the remote and push the changes of `main` to it.

![[Pasted image 20230915185304.png]]