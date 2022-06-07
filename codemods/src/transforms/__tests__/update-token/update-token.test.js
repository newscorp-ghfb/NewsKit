const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../../update-token');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemods', () => {
  test('update-token', () => {
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

  test('fail test for CI', () => {
    expect(1).toBe(2);
  });
});
