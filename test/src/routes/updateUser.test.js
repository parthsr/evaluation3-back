const server = require('../../../src/server');
const Models = require('../../../models');
const axios = require('axios');

describe('checking if the server works or not', () => {
  afterAll((done) => {
    Models.users.destroy({ truncate: true }).then(() => {
      console.log('deleted wohoo');
      done();
    }).catch(console.log);
  });
  test('checking if the status code is 200 or not when checked whether user is present', (done) => {
    const options = {
      url: '/updateUser',
      method: 'POST',
      payload: { username: 'parth' },
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
