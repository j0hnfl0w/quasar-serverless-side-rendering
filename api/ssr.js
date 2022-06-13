const serverless = require('serverless-http');
const app = require('./dist/index.js');
// const app = require('./src/index.js');

// console.log('app', app);

module.exports = app;
module.exports.handler = serverless(app);
