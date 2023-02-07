const jscodeshift = require('jscodeshift');
const updateAccordionDefaultStyles = require('../all-default-styles');
const dedent = require('dedent-js');

describe('updateAccordionDefaultStyles', () => {
  let source;
  let expected;
  let actual;

  test('adds overrides.header.stylePreset & overrides.header.transitionPreset prop to Accordion', () => {
    source = dedent`
      const componentName = () => (
        <>
          <Accordion />
          <Accordion
            overrides={{
              header: {
                stylePreset: "accordionHeaderCustom",
              },
            }} />
          <AnotherComponent />
        </>
      );
    `;

    expected = dedent`
      const componentName = () => (
        <>
          <Accordion
            overrides={{
              header: {
                stylePreset: "accordionHeaderOld"
              }
            }} />
          <Accordion
            overrides={{
              header: {
                stylePreset: "accordionHeaderCustom"
              }
            }} />
          <AnotherComponent />
        </>
      );
    `;

    actual = updateAccordionDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });
});
