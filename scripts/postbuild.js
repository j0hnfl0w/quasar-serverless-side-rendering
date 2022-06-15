const fs = require('fs');

console.log(':postbuild start...');

// Copy package.json from dist to api
fs.copyFile('dist/package.json', 'api/package.json', (err) => {
  if (err) throw err;
  fs.unlinkSync('dist/package.json');
  console.log(':postbuild done...');
});
