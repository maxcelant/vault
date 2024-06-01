| Command  | Action                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `FROM`   | Initializes a new build stage and sets the base image for subsequent instructions                                                       |
| `RUN`    | This instruction will execute any commands in a new layer and commit the results                                                        |
| `CMD`    | Provides defaults for an executing container. These commands will run when you launch the created Docker container from a Docker image. |
| `COPY`   | Used to copying local files into the container                                                                                          |
| `ADD`    | You can download files from the internet as well as what `COPY` does                                                                    |
| `EXPOSE` | Informs Docker that the container listens on a specified port at runtime                                                                |
| `ENV`    | Sets the environment variable `<key>` to the value `<value>` for general, non-sensitive configuration.                                                                           |
|          |                                                                                                                                         |

1. Copy current directory into the Docker image at root /
```docker
COPY . /
```

2. Creates a container based off of a Dockerfile
```
docker build -t image_name
docker run image_name
```

##### `build` Command
Used to build an image from a Dockerfile.

```bash
docker build [OPTIONS] PATH | URL | -
```

- **`OPTIONS`** - Optional flags
	- **`t, --tag`** - add a name and tag to a docker image 'name:tag'
	- **`--file, -f`** - Name of the dockerfile. Useful if file is named something other than default name.
- **`PATH | URL | -`** - Indicates the build context. The build process can use any files in the context for things like copying to the image. Typically set to `.` (current directory), but can also be a different directory or URL to a git repo

```bash
docker build -t my-app:1.0
```