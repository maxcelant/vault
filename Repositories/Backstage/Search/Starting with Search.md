**[Link](https://backstage.io/docs/features/search/getting-started)**

- Refers to adding a `Search` component to your main page with the route `/search`.
- You can also add search to the backend

```ts
// Establish a search engine
const searchEngine = new SearchEngine({ logger });

// Establish index builder
const indexBuilder = new IndexBuilder({ logger, searchEngine});


```