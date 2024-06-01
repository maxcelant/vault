#### Dockerfile 
1. **Minimize the number of layers:** This will reduce the final image size.
2. **Don't use `latest` tag:** This can cause problems where you get different versions in different environments.
3. **Include only necessary context:** Keep the context that is sent to Docker daemon as small as possible. Also use a `.dockerignore`.
4. **Avoid installing unnecessary packages:** Reduces complexity, vulnerabilities, and size of final image.

#### Container 
1. **Keep them ephemeral:** Design your containers to be stateless so they can be stopped and started without losing data.
2. **Use volumes for persistent data:** Store persistent data in volumes, not in the Docker container.
3. **Use restart policies:** Make sure your containers have automatic restarts if they fail and reboots.
	1. `docker run -d --restart=always my_image`
	2. You can also do this in your docker-compose file
4. **Don't run processes as root:** Avoid giving too many permissions to your container.

#### Security
1. **Use the least privilege principle:** Give your containers and services only the permissions they need.
2. **Use secure images:** Make sure your base images are secure, up-to-date and trusted.
3. **Regularly scan your images for vulnerabilities:** Use tools like Docker Security Scanning or Clair.
4. **Limit resource usage:** Use Docker's resource constraints to prevent denial-of-service attacks.