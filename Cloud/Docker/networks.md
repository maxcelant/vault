Connect docker containers with each other and the outside world.

There are different networking drivers to support different use-cases:

- **Bridge Network**: Default, All containers have an internal IP and can communicate with each other over this network.
- **Host Network**: Uses the host's network directly.

#### Creating a Network
You can create your own networks to allow containers to speak to each other.

```bash
docker network create my_network
```

#### Connecting a Container to a Network

```bash
docker run -d --network=my_network --name=my_container my_image
```

This will start a new container named `my_container`, running the `my_image` image, and it will use the `my_network` network.

#### Communication Between Containers
If two containers are on the same network, they can communicate using hostnames.

```bash
$ docker run -d --name=container1 --network=my_network alpine sleep 1d
$ docker run -d --name=container2 --network=my_network alpine sleep 1d
```

```bash
$ docker exec container1 ping -c 3 container2
```

The `ping -c 3` command sends 3 ICMP echo requests to `container2`. If everything is set up correctly, you should see `container1` receiving responses from `container2`.

#### Disconnecting Containers From A Network

```bash
docker network disconnect my_network my_container
```

#### Removing a Network

```bash
docker network rm my_network
```

#### Demo using MERN App

The architecture you are referring to is commonly called a "microservices architecture". It's where different components of your application are split into smaller, independent services (like your Node.js backend and React frontend), and they communicate with each other typically via HTTP.

To make this happen with Docker, you'd need to create a Docker network and have both containers join the same network.

**Step 1: Create a Docker Network**

```
$ docker network create myapp-network
```


**Step 2: Build and Run your Express App**

Assume that your Express app resides in the `./backend` directory and you have a `Dockerfile` for it.

```bash
$ docker build -t myapp-backend ./backend
$ docker run -d --name=my_app-backend --network=myapp-network -p 8080:8080 myapp-backend
```


Here, `-p 8080:8080` is used to expose your backend service on port 8080 to the host machine.

**Step 3: Build and Run your React App**

Assume that your React app resides in the `./frontend` directory and you have a `Dockerfile` for it.

```bash
$ docker build -t myapp-frontend ./frontend
$ docker run -d --name=myapp-frontend --network=myapp-network -p 3000:3000 myapp-frontend
```


Here, `-p 3000:3000` is used to expose your frontend service on port 3000 to the host machine.

**Step 4: Make Your React App Aware of Your Express App**

Now, your Express app and your React app are running in two different containers on the same network. The React app can access the Express app at `http://myapp-backend:8080`.

If your React app makes requests to the relative URL `/api/`, you need to set up a proxy in the `package.json` of the React app:

```json
"proxy": "http://myapp-backend:8080"
```


If your React app uses the full URL (e.g., `http://localhost:8080/api/`), you need to change it to `http://myapp-backend:8080/api/`.

This way, when your React app is running inside the Docker container, it will be able to send HTTP requests to your Express app. Note that this only works if you have the express app listening for requests on the correct port (8080 in this case).

For a production environment, the React app typically compiles to static files that are served by a web server like Nginx. The API URL should be an environment variable that is injected during the build process or when the app starts up.

Please note that the above examples use Docker commands, but the process would be similar if you were using Podman; simply replace `docker` with `podman` in all commands.