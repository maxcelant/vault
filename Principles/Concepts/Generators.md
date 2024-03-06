```ts
// Simulate fetching a page of data asynchronously
async function fetchPage(pageNumber) {
  // Simulating data and a delay to mimic an async API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [`Item ${pageNumber * 3 - 2}`, `Item ${pageNumber * 3 - 1}`, `Item ${pageNumber * 3}`],
        nextPage: pageNumber < 3 ? pageNumber + 1 : null // Just for simulation, 3 pages total
      });
    }, 1000); // Delay of 1 second
  });
}

// Async generator function to paginate through data
async function* paginateData() {
  let currentPage = 1;
  let morePages = true;

  while (morePages) {
    const { data, nextPage } = await fetchPage(currentPage);
    for (const item of data) {
      yield item; // Yield each item one at a time
    }
    currentPage = nextPage;
    morePages = nextPage !== null;
  }
}

// Using the async generator
(async () => {
  for await (const item of paginateData()) {
    console.log(item); // Process each item individually
  }
})();

```