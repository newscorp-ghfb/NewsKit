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
        source: read('./actual.jsx'),
      },
      {jscodeshift},
      {},
    );

    const expected = read('./expected.jsx');
    expect(actual).toBe(expected);
  });
});
