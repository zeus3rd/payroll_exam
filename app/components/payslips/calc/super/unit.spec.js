var calc = require('./index.js'),
  expect = require('expect');

describe('calc > super', () => {
  it('should return a number', () => {
    expect(calc()).toBeA('number');
  });

  it('should return 5000 from 200000 @ 3%', () => {
    expect(calc({annual_salary:200000,super_rate:3})).toBe(500);
  });

  // TODO: Further tests
});