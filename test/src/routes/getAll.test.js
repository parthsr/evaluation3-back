const server = require('../../../src/server');
const Models = require('../../../models');

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

describe('checking if the server works or not', () => {
  afterAll((done) => {
    Models.questions.destroy({ truncate: true }).then(() => {
      console.log('deleted wohoo');
      done();
    }).catch(console.log);
  });
  test('checking if the status code is 200 or not', (done) => {
    const options = {
      url: '/getAll',
      method: 'POST',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
