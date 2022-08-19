const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../../update-linkinline');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod', () => {
  test('replace Link with LinkInline', () => {
    const actual = transform(
      {
        source: read('./actual.js'),
      },
      {jscodeshift},
      {},
    );

    const expected = read('./expected.js');
    expect(actual).toBe(expected);
  });
  test('replace Link with LinkInline for alias', () => {
    const actual = transform(
      {
        source: read('./actual-link-alias.js'),
      },
      {jscodeshift},
      {},
    );

    const expected = read('./expected-link-alias.js');
    expect(actual).toBe(expected);
  });
  test('does not replace next js link component', () => {
    const actual = transform(
      {
        source: read('./actual-link-next.js'),
      },
      {jscodeshift},
      {},
    );

    const expected = read('./expected-link-next.js');
    expect(actual).toMatch(expected);
  });
  test.only('does not replace next js link component when link newskit is there', () => {
    const actual = transform(
      {
        source: read('./actual-link-mixed.js'),
      },
      {jscodeshift},
      {},
    );

    const expected = read('./expected-link-mixed.js');
    expect(actual).toMatch(expected);
  });
});
