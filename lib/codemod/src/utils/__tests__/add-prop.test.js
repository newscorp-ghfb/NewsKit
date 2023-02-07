const jscodeshift = require('jscodeshift');
const addProp = require('../add-prop');
const dedent = require('dedent-js');

describe('@newskit/codemod', () => {
  let source;
  let expected;
  let actual;

  test('should add string literal prop', () => {
    source = `
      const componentName = () => <ComponentName />;
    `;

    expected = `
      const componentName = () => <ComponentName propName="someValue" />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName',
      'someValue',
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });

  test('should add non-string prop as expression', () => {
    source = `
      const componentName = () => <ComponentName />;
    `;

    expected = `
      const componentName = () => <ComponentName propName={false} />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName',
      false,
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });

  test('should not override existing value', () => {
    source = `
      const componentName = () => <ComponentName propName="existingValue" />;
    `;

    expected = `
      const componentName = () => <ComponentName propName="existingValue" />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName',
      'newValue',
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });

  test('should add nested value', () => {
    source = dedent`
      const componentName = () => <ComponentName />;
    `;

    expected = dedent`
      const componentName = () => <ComponentName
        propName={{
          nested: {
            prop: "someValue"
          }
        }} />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName.nested.prop',
      'someValue',
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });

  test('should support size prop overrides for nested value', () => {
    source = dedent`
      const componentName = () => <ComponentName size="small" />;
    `;

    expected = dedent`
      const componentName = () => <ComponentName
        size="small"
        propName={{
          nested: {
            prop: "someValue"
          }
        }} />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName.small.nested.prop',
      'someValue',
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });

  test('should not override existing nested value', () => {
    source = dedent`
      const componentName = () => <ComponentName
        propName={{
          nested: {
            prop: "existingValue"
          }
        }} />;
    `;

    expected = dedent`
      const componentName = () => <ComponentName
        propName={{
          nested: {
            prop: "existingValue"
          }
        }} />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName.nested.prop',
      'someValue',
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });

  test('should add to existing nested object', () => {
    source = dedent`
      const componentName = () => <ComponentName
        propName={{
          nested: {
            otherProp: "value1"
          },
          nbProp: 1001,
          boolProp: false
        }} />;
    `;

    expected = dedent`
      const componentName = () => <ComponentName
        propName={{
          nested: {
            prop: "someValue",
            otherProp: "value1"
          },

          nbProp: 1001,
          boolProp: false
        }} />;
    `;

    actual = addProp(
      jscodeshift(source),
      'ComponentName',
      'propName.nested.prop',
      'someValue',
      jscodeshift,
    ).toSource();

    expect(actual).toEqual(expected);
  });
});
