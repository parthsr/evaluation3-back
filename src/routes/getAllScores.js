const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/getAllScores',
  handler: (request, reply) => {
    Models.scores.findAll().then((records) => {
      reply(records);
    });
  },
}];

