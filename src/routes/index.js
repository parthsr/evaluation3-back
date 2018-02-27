const getAll = require('./getAll');
const sendAll = require('./sendAllQ');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('HelloWorld');
  },
}].concat(getAll).concat(sendAll);
