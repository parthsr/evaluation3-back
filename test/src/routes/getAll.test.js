const server = require('../../../src/server');

describe('checking for api endpoint /getAll', () => {
  it('checking for the status code', () => {
    const options = {
      method: 'POST',
      url: '/getAll',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
