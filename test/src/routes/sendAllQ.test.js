const server = require('../../../src/server');

describe('checking for api endpoint /sendAll', () => {
  it('checking for the status code', (done) => {
    const options = {
      method: 'GET',
      url: '/sendAll',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
