- **Definition:** GraphQL is a query language for APIs and a runtime for executing those queries using a type system you define for your data. It was developed by Facebook in 2012 and released as an open-source project in 2015.
    
- **Why it exists:** Traditional RESTful APIs often require loading from multiple URLs, and they can return more data than a client might need. GraphQL allows clients to specify the structure of the response they require, resulting in a flexible and efficient API interaction.
    
- **Benefits:**
    - Precise data fetching: Avoid under-fetching or over-fetching of data.
    - Strongly-typed schema: Ensures that the API returns the right type of data.
    - Single endpoint: Simplifies the versioning of APIs.
    - Development experience: Tools like GraphQL Playground make development faster and easier.

### Lesson 1.2 - GraphQL vs REST
- **Data Fetching:**
    - **REST:** Data is fetched through multiple endpoints, each representing a resource.
    - **GraphQL:** A single endpoint is used to fetch all data, and the client specifies exactly what it needs.
- **Over-fetching and Under-fetching:**
    - **REST:** It's common to either get too much or too little data than needed.
    - **GraphQL:** Fetch precisely what you need, no more, no less.
- **Versioning:**
    - **REST:** New versions might introduce new endpoints or change old ones.
    - **GraphQL:** Avoids versioning by allowing deprecated fields and adding new ones without affecting existing queries.
- **Flexibility:**
    - **REST:** Structure of the response is determined by the server.
    - **GraphQL:** Structure of the response is determined by the client’s request.

### Lesson 1.3: Core Components of GraphQL
- **Queries:** Allow clients to read or fetch data. Equivalent to the GET method in REST.
- **Mutations:** Allow clients to modify data (create, update, delete). Equivalent to POST, PUT, DELETE methods in REST.
- **Schema:** A strongly-typed contract between client and server that defines types and the operations allowed.
- **Resolvers:** Server-side functions that handle the logic for fetching the data for a specific type.

