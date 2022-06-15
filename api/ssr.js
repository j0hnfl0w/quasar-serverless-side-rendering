const serverless = require('serverless-http');
const app = require('./dist/index.js');

module.exports = app;
module.exports.handler = serverless(app);
