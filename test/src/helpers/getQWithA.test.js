const getQWithA = require('../../../src/helpers/getQWithA');

describe('checking if the helper function for getting data from the two apis work or not', () => {
  it('checking if the data returned is an object or not', () => expect(typeof getQWithA()).toBe('object'));
  it('checking if the data returned is an promise or not', () => {
    getQWithA().then(value => expect(typeof value).toBe('object'));
  });
});

