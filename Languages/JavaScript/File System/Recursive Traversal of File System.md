```js
const traverseDir = (dirname) => {
  const files = fs.readdirSync(dirname);
  for (const file of files) {
    const fullPath = path.join(dirname, file)
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath)
    } else {
      // do something for file
    }
  }
}
```

If its a folder, we recursively call the function and do something if its a file.

- `statSync` gives us stats about the object, it can tell us whether its a dir or file. 