const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/user',
  handler: (request, reply) => {
    console.log(request);
    Models.users.findAll({
      where: {
        username: request.payload.username,
      },
    }).then((records) => {
      if (records.length === 0) {
        Models.users.create({
          username: request.payload.username,
          questions: '',
          answers: '',
        });
      }
      reply(records);
    });
  },
}];

