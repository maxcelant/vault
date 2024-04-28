Worker Threads in Node.js to split a list and process each half in separate threads is a great example of how to leverage parallel processing for potentially speedier computations. Below, I'll provide an example that shows how to split an array in half, and then have each half processed by a different worker thread.


```javascript
const { Worker } = require('worker_threads');

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

async function main() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example array
    const midPoint = Math.ceil(array.length / 2);
    const firstHalf = array.slice(0, midPoint);
    const secondHalf = array.slice(midPoint);

    const result1 = runService(firstHalf);
    const result2 = runService(secondHalf);

    const results = await Promise.all([result1, result2]);
    console.log(results); // Outputs the results from each worker
}

main();
```

### Worker File: worker.js

```javascript
const { parentPort, workerData } = require('worker_threads');

function processData(data) {
    // Example processing: sum of the array
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum;
}

const result = processData(workerData);
parentPort.postMessage(result);
```

In this example:
- The main script (`main.js`) initializes two worker threads, each receiving a part of the array.
- Each worker (`worker.js`) computes the sum of the array segment it receives and sends the result back.
- The main script collects and logs the results from both workers.
