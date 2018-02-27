const getAll = require('./getAll');
const sendAll = require('./sendAllQ');
const user = require('./user');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(getAll).concat(sendAll).concat(user);
