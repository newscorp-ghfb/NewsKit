const path = require('path');
const jscodeshift = require('jscodeshift');
const updateListItemMarkerUlValue = require('../../update-list-item-marker-ul-value');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod', () => {
  test('update-list-item-marker-ul-value', () => {
    const actual = updateListItemMarkerUlValue(
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
