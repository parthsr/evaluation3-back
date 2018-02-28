const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/updateUser',
  handler: (request, reply) => {
    console.log(request);
    Models.users.destroy({
      where: {
        username: request.payload.username,
      },
    }).then(() => {
      Models.users.create({
        username: request.payload.username,
        questions: request.payload.questions,
        answers: request.payload.answers,
      }).then((response) => {
        reply(response);
      });
    });
  },
}];

