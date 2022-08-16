const {toKebabCase} = require('../to-kebab-case');

describe('to-kebab-case', () => {
  test('toKebabCase', () => {
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
    expect(toKebabCase('Hello World')).toBe('hello-world');
  });
});
