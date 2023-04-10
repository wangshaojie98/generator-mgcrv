const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach(file => {
    filesList.push(file.name);
  });
  return filesList;
}

const files = getFiles('./');
console.log(files);