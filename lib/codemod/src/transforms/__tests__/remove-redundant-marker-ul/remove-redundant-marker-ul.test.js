const path = require('path');
const jscodeshift = require('jscodeshift');
const removeRedundantMarkerUl = require('../../remove-redundant-marker-ul');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod', () => {
  test('update-token', () => {
    const actual = removeRedundantMarkerUl(
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
