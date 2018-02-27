const store = require('../helpers/store');

module.exports = [{
  method: 'POST',
  path: '/getAll',
  handler: (request, reply) => {
    store().then(() => {
      reply('database created').code(200);
    }).catch(() => {
      reply('database transaction failed').code(500);
    });
  },
}];

