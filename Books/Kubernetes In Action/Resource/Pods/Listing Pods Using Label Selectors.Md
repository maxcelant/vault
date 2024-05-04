---
tags:
  - labels
  - pods
  - commands
---
- You can use labels to check if a resource:
	- contains (or does not) a label with a certain key.
	- contains a label with a certain and value.
	- contains a label with a certain key but with a value not equal to the one you specify.

```bash
$ kubectl get po -l creation_method=manual
$ kubectl get po -l env
$ kubectl get po -l '!env'
$ kubectl get po -l 'creation_method!=manual'
$ kubectl get po -l 'env in (prod,devel)'
$ kubectl get po -l 'env notin (prod,devel)'
```

