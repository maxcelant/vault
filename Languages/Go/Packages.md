- Files in the same folder are considered in the same package
- Capital means public, lowercase means private.
- By keeping the arg param private but keeping the method public, this lets people use the method with a 

```go
import "mymodule/pkg/foo"
```

- `mymodule` is your module in `mod.go`
- `pkg/foo` is the actual directory to the package assuming its `package foo`.
- You can rename the import

```go
import foo "mymodule/pkg/foo"
```

- Using dot notation to import all the utils of a package.

```go
import . "mymodule/pkg/foo"
```

- `cmd` entrypoint for binaries
	- `myapp/cmd/mycli/main.go`
- `pkg` module exports
- `internal` exports only available in the module
- `api` exported API types
- `test` end to end test package 

```bash
go test ./...
```

- Traverses the full directory structure

```bash
go get github.com/foo/bar
go mod tidy
goimports -w <file name>
```

