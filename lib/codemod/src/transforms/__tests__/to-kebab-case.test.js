const {toKebabCase} = require('../utils');

describe('to-kebab-case', () => {
  test('toKebabCase', () => {
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
    expect(toKebabCase('Hello World')).toBe('hello-world');
  });
});
