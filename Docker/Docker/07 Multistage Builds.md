A powerful feature to keep your images slim and clean.

You have multiple Dockerfiles in one and each one is referred to as a "stage". Each stage starts with a **`FROM`** with **`AS <STAGE NAME>`**.

This is important because you leave out all the source code and build tools and just copy over the compiled application. 

```Dockerfile
# This is the first stage, it uses a Node.js image
# and builds your application's dependencies.
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# This is the second stage, it uses a much smaller image
# because we don't need all the build tools and dependencies in the final image.
FROM node:14-alpine

WORKDIR /app

# Copy only the built artifacts and the necessary files to run the application from the builder stage.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 8080
CMD [ "npm", "start" ]
```

#### Why is this important?
1. **Compiling Languages**: For languages that require a compilation step to an intermediate format (like Java, C++, or Go), you often need build tools that aren't required to run the resulting binary. For instance, you might need the full JDK to compile Java code, but the compiled Java application can run with just a JRE.
2. **Node.js Applications**: In the JavaScript world, you might use tools like Babel to transpile your code, or webpack to bundle it. These tools and the original source code aren't needed to run the final application. You can use a node-based image to perform the build, then copy the built application into a smaller image that only contains the runtime.
3. **Minifying Code**: In some projects, you might use tools to minify your JavaScript or CSS files. These minification tools are needed during the build but aren't required for the running application. A multi-stage build lets you exclude these tools from the final image.
4. **Security**: By using multi-stage builds, the final image doesn't contain unnecessary packages that could potentially have vulnerabilities. This minimizes the attack surface.
5. **Image Size**: Multi-stage builds allow you to drastically decrease the size of the final image by not including all the software and tools necessary for building the application but not running it. This results in faster pull and push times, which can be beneficial in a CI/CD pipeline or a cloud environment.
6. **Consistent Environment**: You can ensure that your application is compiled in an environment that is consistent and controlled, regardless of the developer's local setup. This avoids the "works on my machine" problem.
