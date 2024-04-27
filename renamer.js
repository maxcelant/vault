
const path = require('path');
const fs = require('fs');

const lower = (fullPath) => {
  const parts = fullPath.split('/');
  parts[parts.length - 1] = parts[parts.length - 1].toLowerCase();
  return parts.join('/');
}

const traverseDir = (dirname) => {
  const files = fs.readdirSync(dirname);
  for (const file of files) {
    const fullPath = path.join(dirname, file)
    const newPath = lower(fullPath)
    if (fs.statSync(fullPath).isDirectory()) {
      fs.renameSync(fullPath, newPath);
      traverseDir(fullPath);
    } else {
      fs.renameSync(fullPath, newPath);
    }
  }
}

traverseDir(__dirname);
