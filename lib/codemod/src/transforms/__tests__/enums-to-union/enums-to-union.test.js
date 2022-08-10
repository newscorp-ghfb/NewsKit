const path = require('path');
const jscodeshift = require('jscodeshift');
const transform = require('../../enums-to-union');
const {readFile} = require('../utils');

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@newskit/codemod: enums-to-union', () => {
  test('stack', () => {
    const actual = transform(
      {
        source: read('./test-fixture/stack-actual.js'),
      },
      {jscodeshift},
      {componentName: 'Stack', propName: ['flow', 'stackDistribution']},
    );

    const expected = read('./test-fixture/stack-expected.js');
    expect(actual).toBe(expected);
  });
  test('button', () => {
    const actual = transform(
      {
        source: read('./test-fixture/button-actual.js'),
      },
      {jscodeshift},
      {componentName: 'Button', propName: 'size'},
    );

    const expected = read('./test-fixture/button-expected.js');
    expect(actual).toBe(expected);
  });
  test('tabs', () => {
    const actual = transform(
      {
        source: read('./test-fixture/tabs-actual.js'),
      },
      {jscodeshift},
      {
        componentName: 'Tabs',
        propName: ['size', 'align', 'indicatorPosition', 'distribution'],
      },
    );

    const expected = read('./test-fixture/tabs-expected.js');
    expect(actual).toBe(expected);
  });
  test('menu', () => {
    const actual = transform(
      {
        source: read('./test-fixture/menu-actual.js'),
      },
      {jscodeshift},
      {componentName: 'Menu', propName: ['size', 'align']},
    );

    const expected = read('./test-fixture/menu-expected.js');
    expect(actual).toBe(expected);
  });
  test('slider', () => {
    const actual = transform(
      {
        source: read('./test-fixture/slider-actual.js'),
      },
      {jscodeshift},
      {componentName: 'Slider', propName: ['labelPosition']},
    );

    const expected = read('./test-fixture/slider-expected.js');
    expect(actual).toBe(expected);
  });
  test('FormInputTextField', () => {
    const actual = transform(
      {
        source: read('./test-fixture/textField-actual.js'),
      },
      {jscodeshift},
      {componentName: 'FormInputTextField', propName: 'size'},
    );

    const expected = read('./test-fixture/textField-expected.js');
    expect(actual).toBe(expected);
  });
});
