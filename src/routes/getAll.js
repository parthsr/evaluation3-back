const getQWithA = require('../helpers/getQWithA');

module.exports = [{
  method: 'GET',
  path: '/getAll',
  handler: (request, reply) => {
    const toReply = getQWithA();
    toReply.then((allData) => {
      reply(allData);
    });
  },
}];

