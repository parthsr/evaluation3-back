const getAll = require('./getAll');
const sendAll = require('./sendAllQ');
const user = require('./user');
const updateUser = require('./updateUser');
const scores = require('./score');
const getAllScores = require('./getAllScores');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(getAll).concat(sendAll).concat(user).concat(updateUser)
  .concat(scores)
  .concat(getAllScores);
