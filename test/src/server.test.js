const server = require('../../src/server');

describe('checking if the server works or not', () => {
  test('checking if server sends 200 messsage or not', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
