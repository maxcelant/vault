- Initializing the controller

```bash
kubebuilder init --domain [domain] --repo [repo] --project-name [project-name]
```

- Creating a resource

```bash
kubebuilder create api --group sync --version v1 --kind MyAwesomeConfigSource \
														--resource --controller
```