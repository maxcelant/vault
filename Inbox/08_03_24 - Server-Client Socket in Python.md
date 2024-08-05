- Created a very simple server client socket model in python to understand it more deeply.
- The server has a `recv()` method that is blocking until a client sends a message _across_ the socket.
- A few things need to occur to have a "chat" like effect using this model.
- On the client side...
	- You will need to start a thread that will receive messages from the server and print them in an infinite loop.
	- In the main process, you will also start an infinite loop for sending messages to the server.
	- Here is the pseudocode example of the client

```js
FUNC recieve_message(client_socket)
	LOOP
		SET message TO client_socket.receive_message()
		PRINT message

FUNC main()
	SET client_socket
	client_socket.connect(server_ip, server_port)

	START THREAD for recieve_message(client_socket)

	LOOP
		SET message TO input()
		client_socket.send(message)
		IF message IS "quit"
			BREAK
		END IF
	END LOOP

	CLOSE client_socket
```

- On the server side...
	- You have an infinite loop that listens for joining clients and "accepts" the connection.
	- Once accepted, you start a thread for that client which will handle inputs coming from that client
	- You can then broadcast that info to the other clients, if you keep track of all the clients.
	- Here is the pseudocode:

```js
clients = []

FUNC broadcast(data)
	FOR client OF clients
		client.send(data)
	END FOR

FUNC handle(client)
	ADD client TO clients
	LOOP
		SET data TO client.recv()
		PRINT data
		CALL broadcast(data)
	END LOOP

FUNC main()
	SET server_socket()
	server_socket.bind(server_ip, server_port)
	server_socket.listen(5)

	LOOP
		SET client TO server_socket.accept()
		START THREAD for handle(client)
	END LOOP
```





