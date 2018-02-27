const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/sendAll',
  handler: (request, reply) => {
    Models.questions.findAll().then((records) => {
      reply(records);
    });
  },
}];
