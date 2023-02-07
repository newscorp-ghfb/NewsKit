const jscodeshift = require('jscodeshift');
const updateSelectDefaultStyles = require('../select-default-styles');
const dedent = require('dedent-js');

describe('updateSelectDefaultStyles', () => {
  let source;
  let expected;
  let actual;

  test('adds minHeight, typographyPreset, spaceInset to Select in different sizes', () => {
    source = dedent`
      const componentName = () => (
        <>
          <Select size="small">
            <SelectOption size="small">
              Option
            </SelectOption>
          </Select>
          <Select size="medium">
            <SelectOption size="medium">
              Option
            </SelectOption>
          </Select>
          <Select size="large">
            <SelectOption size="large">
              Option
            </SelectOption>
          </Select>
        </>
      );
    `;

    expected = dedent`
      const componentName = () => (
        <>
          <Select
            size="small"
            overrides={{
              button: {
                minHeight: "sizing060"
              }
            }}>
            <SelectOption size="small" overrides={{}}>
              Option
            </SelectOption>
          </Select>
          <Select
            size="medium"
            overrides={{
              button: {
                spaceInset: "space020",
                typographyPreset: "utilityBody020"
              }
            }}>
            <SelectOption
              size="medium"
              overrides={{
                spaceInset: "spaceInset020",
                minHeight: "sizing080"
              }}>
              Option
            </SelectOption>
          </Select>
          <Select
            size="large"
            overrides={{
              button: {
                spaceInset: "space030"
              }
            }}>
            <SelectOption
              size="large"
              overrides={{
                spaceInset: "spaceInsetStretch030",
                minHeight: "sizing090"
              }}>
              Option
            </SelectOption>
          </Select>
        </>
      );
    `;

    actual = updateSelectDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });
});
