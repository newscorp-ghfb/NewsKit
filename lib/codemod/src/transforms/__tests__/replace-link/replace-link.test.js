const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../../replace-link');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod', () => {
  test('replace-link', () => {
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
});
