const Models = require('../../../models');

describe('checking if the database is properly working or not', () => {
  afterAll((done) => {
    Models.questions.destroy({
      truncate: true,
    }).then(() => {
      done();
    }).catch(console.log);
  });
  it('checking if the inserting of data works or not', (done) => {
    Models.questions.create({
      question: 'question',
      questionid: 1,
      options: 'hi',
      rightans: 'rightans',

    }).then(() => 'true').then((value) => {
      expect(value).toBe('true');
      done();
    });
  });
});
