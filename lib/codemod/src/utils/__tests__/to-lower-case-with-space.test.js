const {toLowerCaseWithSpace} = require('../to-lower-case-with-space');

describe('to-lower-case-with-space', () => {
  test('toLowerCaseWithSpace', () => {
    expect(toLowerCaseWithSpace('HelloWorld')).toBe('hello world');
    expect(toLowerCaseWithSpace('Hello World')).toBe('hello world');
    expect(toLowerCaseWithSpace('HelloWorldAgain')).toBe('hello world again');
    expect(toLowerCaseWithSpace('HelloWorldcup')).toBe('hello worldcup');
  });
});
