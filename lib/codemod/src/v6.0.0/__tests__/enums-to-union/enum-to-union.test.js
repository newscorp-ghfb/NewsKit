const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../../enum-to-union');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod:', () => {
  test('enum-to-union', () => {
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
