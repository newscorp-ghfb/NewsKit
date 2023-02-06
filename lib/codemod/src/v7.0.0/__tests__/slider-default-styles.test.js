const jscodeshift = require('jscodeshift');
const updateSliderDefaultStyles = require('../slider-default-styles');
const dedent = require('dedent-js');

describe('updateSliderDefaultStyles', () => {
  let source;
  let expected;
  let actual;

  test('adds track.size and labels stylePreset to Slider', () => {
    source = dedent`
      const componentName = () => (
        <>
          <Slider />
          <Slider
            overrides={{
            labels: {
              stylePreset: "sliderLabelsCustom"
            },

            track: {size: 'sizing010'}
          }} />
          <AnotherComponent />
        </>
      );
    `;

    expected = dedent`
      const componentName = () => (
        <>
          <Slider
            overrides={{
              labels: {
                stylePreset: "sliderLabelsOld"
              },

              track: {
                size: "sizing030"
              }
            }} />
          <Slider
            overrides={{
              labels: {
                stylePreset: "sliderLabelsCustom"
              },

              track: {
                size: "sizing010"
              }
            }} />
          <AnotherComponent />
        </>
      );
    `;

    actual = updateSliderDefaultStyles({source}, {jscodeshift});

    expect(actual).toEqual(expected);
  });
});
