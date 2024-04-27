A tool for defining and running multi-container Docker applications. Use a YAML file to configure your application's services. Instead of running multiple commands to build each image, start them and connect them, we are going to do all of that at once.

```bash
docker-compose up
```

You can want to run this command in the same directory as your **`docker-compose.yml`**

```bash
docker-compose down
```

This will stop running your app.

```bash
docker-compose ps
```

This will list all running services defined in your `docker-compose.yml`

```bash
docker-compose logs
```

This command will show the logs of your services.

#### Sample Docker Compose

```yaml
version: '3'
services:
  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
    image: my-web-app
    restart: always
    ports:
      - "5000:5000"
    volumes:
      - "/var/www"
    environment:
      - NODE_ENV=production
    networks:
      - backend
    depends_on:
      - db
  db:
    image: postgres:9.6
    volumes:
      - "db-data:/var/lib/postgresql/data"
    networks:
      - backend
networks:
  backend:
volumes:
  db-data:
```

- **`services`:** the start of the section where we define our services. In this case, `web` and `db`.
- **`web`:** 
	- we specify its Dockerfile is located at **`./web`**. Docker Compose will use this to build the image for the service. 
	- If we had named the Dockerfile something different, we would specify that with `dockerfile` field.
	- **`image`** is used to specify a Docker image that the service should use.
		- If a `build` field is also provided, Docker Compose will build an image using the Dockerfile specified and then tag it with the name provided in the `image` field.
		- This is important because when an image is pushed to deployment, you want to pull the pre-built image from the registry!
		- **REMEMBER**: This is NOT the same as `--name`, this is creating an actual image (with the specified name) which you can pull later.
	- We also map port 5000 on host to 5000 on container.
- **`db`:** we specify that is uses **`mongo`** image from Docker Hub. We also mount a volume at **`/data/db`** in the container.
- **`volumes`:** We define a volume called `db-data` which is used by `db` service. 
	- Remember, this will be stored under the directory `/var/lib/docker/volumes` on the host machine. 


#### Networks
By default, they will all be the same network.

#### Scaling
You can run multiple instances of your container like so:
```bash
docker-compose up --scale web=3
```

#### Environment Variables
We can either put them in using `environment` or link to an `env_file`

```yaml
version: '3'
services:
  web:
    image: 'webapp:latest'
	env_file:
	  - web-variables.env
```

#### Environment Variables in Docker 
Before running the docker compose, Docker will replace **`${TAG}`** with the value in your shell.

```yaml
version: "3"
services:
  web:
    image: "webapp:${TAG}"
    ports:
	  - "8000:8000"
```

#### Extending Compose Files
Allows you to extend another service in a different Docker Compose file. Might be handy for sharing configs between multiple services / projects.

Lets say we had a compose file called **`common-services.yml`**.
```yaml
version: "3"
services:
  redis:
    image: redis:alpine
    expose:
      - 6379
```

In your project-specific **`docker-compose.yml`** file, you could then extend this common service like so:

```yaml
version: "3"
services:
  web:
    build: .
    ports:
      - "5000:5000"
    extends:
      file: common-services.yml
      service: redis
```

This means that **`web`** will inherit all the configs from **`redis`** (like image and exposed ports), in addition to its own configs.

#### Example
Let's say we wanted to create a Docker Compose file that deploys a MERN project.

```yaml
version: "3"
services:
  web:
    container_name: web
    build:
      context: ./web  # directory containing Dockerfile for the React app
    volumes:
      - ./web:/usr/src/app # Changes in the code will take effect in container
      - /usr/src/app/node_modules # keeps node modules isolated and persistent
    ports:
      - 3000:3000
    depends_on:
      - api
    environment:
      - REACT_APP_API_URL=http://api:8080

  api:
    container_name: api
    build:
      context: ./api  # directory containing Dockerfile for the Express app
    volumes:
      - ./api:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - 8080:8080
    depends_on:
      - db
    environment:
      - MONGO_URL=mongodb://db:27017/mydatabase

  db:
    container_name: db
    image: mongo:latest
    ports:
      - 27017:27017
    volumes:
      - dbdata:/data/db

volumes:
  dbdata:
```

**What does `/usr/src/app/node_modules` mean?** By using a separate volume for the `node_modules` directory, you ensure that the container has its own separate copy of the `node_modules` directory. This means it won't interfere with your host machine's `node_modules` directory, and vice versa.