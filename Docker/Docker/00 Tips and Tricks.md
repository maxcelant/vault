
1. Add the things your `.dockerignore` like `node_modules`
	1. It's good practice to build the app in the container itself
	2. Better to RUN  `npm install` in the docker image

2. This is how you would copy the package.json and package-lock.json to the container
```dockerfile
# source -> destination
COPY package*.json ./
```

3. `WORKDIR` changes the working directory inside the Docker container, not the user (host) side. In this case, it changes the directory to `/app` then copies all the files and directories from where the `Dockerfile` is.

```dockerfile
WORKDIR /app

COPY . .
```

4. Docker will automatically create a file path with `WORKDIR` if it doesn't exist.
	1. `/usr/src/app` is a common choice
	2. `/usr` exists when you create a container, others include: `usr/local`, `/var`, `/etc`, `/tmp`

5. `FROM node:14` is built on top of a basic Linux image (Debian or Alpine) and then Node.js is installed on that system.

6. `RUN` is often used for installing software packages, setting up local databases or other related tasks.

```dockerfile
RUN apk add --no-cache python3 && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools
```

7. `CMD` is used to specify the default command to run when the container starts. There can only be one `CMD` in a `Dockerfile`.
	1. `CMD` can be replaced by command-line arguments passed into the docker container

```dockerfile
CMD ["python3", "my_script.py"]
```

8. You normally want to install dependencies at build time (when you run `docker build`)

```dockerfile
RUN npm install
CMD ["npm", "start"]
```

9. Use `ENTRYPOINT` when you want the container to behave as an executable that always runs the same command
	1. Command-line args will not replace `ENTRYPOINT`, they'll just be appended

```dockerfile
ENTRYPOINT ["npm", "run"]
```

10. This is an example of how the replacement would look like:

```dockerfile
FROM debian:stretch
ENTRYPOINT ["echo", "Hello"]
CMD ["Docker"]
```

```shell
$ docker build -t hello-docker .
$ docker run hello-docker
Hello Docker
```

```shell
$ docker run hello-docker World
Hello World
```

As you can see, it replaced the `CMD` when we add the command-line arg

11. `EXPOSE` is a documentation feature used to make it clear which ports should be published. On the other hand, `-p` is an actual command that publishes the port from the container to the host. So you need **both**.

```dockerfile
EXPOSE 8080
```

```shell
docker run -p 80:8080 <image>
```

12. `COPY` takes a src and destination, only lets you copy in a local file or directory from your host machine to the Docker image itself.
	1. Best practice to use this for simple file copying.

14. `ADD` also takes a src and destination, allows you to download files from a URL in the src. This could be useful for downloading database data to the container.

15. `tar` files are files and directories packaged into a single file without any compression. Usually, they are compressed using `gzip`. 
	1. `tar -czvf archive.tar.gz` compresses it
	2. `tar -xzvf archive.tar.gz` uncompresses it

16. Exec form (using the array) for `CMD` is the more reliable and recommended version because it does not involve the shell. 

```dockerfile
CMD echo $HOME -> value of $HOME
CMD ["echo", "$HOME"] -> $HOME
```

17. If you had environment variables and you wanted to them to be safe and send them to your docker container
```
docker run --env-file .env <container name>
```

18. `ENV` in Dockerfile is for general, non-sensitive configuration.

19. If two containers are in the same network and you want to communicate between them, you use the container name instead of localhost in the URL
	1. `http://container_name:8000/route`