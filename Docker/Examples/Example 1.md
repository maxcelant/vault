Create three Docker containers and connect them all to the same custom network. From one of the containers, ping the other two using their container names. Then, disconnect one of the containers from the network and try to ping it again. Document your findings.

---

```bash
docker network create my_network

docker run -d --name=container1 --network=my_network alpine sleep 1d
docker run -d --name=container2 --network=my_network alpine sleep 1d
docker run -d --name=container3 --network=my_network alpine sleep 1d

docker exec container1 ping -c 3 container2
docker exec container1 ping -c 3 container3

docker network disconnect my_network container1 
docker network disconnect my_network container2
docker network disconnect my_network container3
```