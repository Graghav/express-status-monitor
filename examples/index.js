const restify = require('restify');
const server = restify.createServer({
  name: 'status-monitor-example',
  version: '0.1.0'
});
const config = {
  path: '/',
  title: 'Restify Status',
  spans: [{
    interval: 1,
    retention: 60
  }, {
    interval: 5,
    retention: 60
  }, {
    interval: 15,
    retention: 60
  }]
}

server.use(require('../index')(config));

server.listen(3000, () => {
  console.log('🌏  http://0.0.0.0:3000');
});
