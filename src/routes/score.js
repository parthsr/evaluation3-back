const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/score',
  handler: (request, reply) => {
    console.log(request);
    Models.scores.destroy({
      where: {
        username: request.payload.username,
      },
    }).then(() => {
      Models.scores.create({
        username: request.payload.username,
        score: request.payload.score,
      }).then((response) => {
        reply(response);
      });
    });
  },
}];
