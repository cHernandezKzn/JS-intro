const expect = require('chai').expect;
const myModule = require('./index');

describe('index main function', () => {
  it('should exist', () => {
    expect(myModule.test).to.exist;
    expect(myModule.test).be.a.function;
  });

  it('should return Hello World', () => {
    expect(myModule.test()).to.equal('Hello World');
  });

  it('should return Hello World', () => {
    expect('hello').to.not.be.equal('ahello');
  });
});

