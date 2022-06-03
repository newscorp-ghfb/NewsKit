const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../update-token');
const {readFile} = require('./utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemods', () => {
  test('update-token', () => {
    const actual = transform(
      {
        source: read('./update-token/actual.js'),
      },
      {jscodeshift},
      {},
    );

    const expected = read('./update-token/expected.js');
    expect(actual).toBe(expected);
  });
});
