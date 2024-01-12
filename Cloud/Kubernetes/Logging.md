```bash
kubectl logs <podname>
kubectl logs <type/name>
```

- Will display all logs for the `deployment/pingpong`
```bash
kubectl logs deploy/pingpong
```

- Will log out the last line and continue to print out any new ones
```bash
kubectl logs deploy/pingpong --tail 1 --follow
```