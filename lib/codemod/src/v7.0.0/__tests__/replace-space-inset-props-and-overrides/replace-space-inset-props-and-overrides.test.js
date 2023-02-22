const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../../replace-space-inset-props-and-overrides');
const {readFile} = require('../../../utils/read-file');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod:', () => {
  test('spaceInset-to-logical-props', () => {
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
