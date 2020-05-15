import {
  getTypePreset,
  getSizing,
  getPaddingPreset,
  getMarginPreset,
} from '../style';
import {getStylePreset} from '../style-preset';
import {createTheme} from '../../themes';

describe('get default presets functions', () => {
  const theme: any = createTheme('test-theme', {
    themeOverrider: () => ({
      typePresets: {
        theDefaultToken: {
          fontFamily: 'theDefaultToken-value-typePresets',
        },
        theOverrideToken: {
          fontFamily: 'theOverrideToken-value-typePresets',
        },
        theNestedOverrideToken: {
          fontFamily: 'theNestedOverrideToken-value-typePresets',
        },
        realTypePreset: {
          typePreset: {
            xs: 'headline100',
            md: 'headline200',
          },
        },
      },
      stylePresets: {
        theDefaultToken: {
          base: {
            color: '#111111-stylePresets',
          },
        },
        theOverrideToken: {
          base: {
            color: '#222222-stylePresets',
          },
        },
        theNestedOverrideToken: {
          base: {
            color: '#333333-stylePresets',
          },
        },
      },
      sizing: {
        theDefaultToken: 'theDefaultToken-value-sizing',
        theOverrideToken: 'theOverrideToken-value-sizing',
        theNestedOverrideToken: 'theNestedOverrideToken-value-sizing',
      },
      defaultPresets: {
        basicTestComponent: {
          typePreset: 'theDefaultToken',
          stylePreset: 'theDefaultToken',
          paddingPreset: 'theDefaultToken',
          marginPreset: 'theDefaultToken',
          spacePreset: 'theDefaultToken',
        },
        responsiveTestComponent: {
          typePreset: {
            xs: 'theDefaultToken',
            md: 'theDefaultToken',
          },
          marginPreset: {
            xs: 'theDefaultToken',
            md: 'theDefaultToken',
          },
          paddingPreset: {
            xs: 'theDefaultToken',
            md: 'theDefaultToken',
          },
        },
      },
    }),
  });

  // For new utils, add a test case to this array.
  [
    {
      fnName: 'getTypePreset',
      fn: getTypePreset as any,
      tokenPathEnd: 'typePreset',
      themeSection: 'typePresets',
      responsive: true,
    },
    {
      fnName: 'getStylePreset',
      fn: getStylePreset as any,
      tokenPathEnd: 'stylePreset',
      themeSection: 'stylePresets',
      expectedResultFormatter: (expected: {base: any}) => expected.base,
    },
    {
      fnName: 'getSizing',
      fn: getSizing as any,
      tokenPathEnd: 'spacePreset',
      themeSection: 'sizing',
      tokenPathEndRequired: true,
    },
    {
      fnName: 'getPaddingPreset',
      fn: getPaddingPreset as any,
      tokenPathEnd: 'paddingPreset',
      themeSection: 'sizing',
      expectedResultFormatter: (expected: any) => ({padding: expected}),
      responsive: true,
    },
    {
      fnName: 'getMarginPreset',
      fn: getMarginPreset as any,
      tokenPathEnd: 'marginPreset',
      themeSection: 'sizing',
      expectedResultFormatter: (expected: any) => ({margin: expected}),
      responsive: true,
    },
  ].forEach(
    ({
      fnName,
      fn,
      tokenPathEnd,
      themeSection,
      tokenPathEndRequired,
      expectedResultFormatter = (x: any) => x,
      responsive,
    }) => {
      describe(fnName, () => {
        describe('for simple tokens', () => {
          const expectedDefault = expectedResultFormatter(
            theme[themeSection].theDefaultToken,
          );
          const expectedOverride = expectedResultFormatter(
            theme[themeSection].theOverrideToken,
          );

          describe(`returns expected default`, () => {
            [
              {
                theme,
              },
              {
                theme,
                overrides: {},
              },
            ].forEach(props => {
              describe(`when props.overrides is ${JSON.stringify(
                props.overrides,
              )}`, () => {
                test('with no override path provided, with and without token type at the end', () => {
                  if (!tokenPathEndRequired) {
                    expect(fn('basicTestComponent')(props)).toEqual(
                      expectedDefault,
                    );
                  }
                  expect(
                    fn(`basicTestComponent.${tokenPathEnd}`)(props),
                  ).toEqual(expectedDefault);
                });

                test('with override path as empty string', () => {
                  if (!tokenPathEndRequired) {
                    expect(fn('basicTestComponent', '')(props)).toEqual(
                      expectedDefault,
                    );
                  }

                  expect(
                    fn(`basicTestComponent.${tokenPathEnd}`, '')(props),
                  ).toEqual(expectedDefault);
                });

                test('when an override path is provided', () => {
                  if (!tokenPathEndRequired) {
                    expect(
                      fn('basicTestComponent', 'nestedOverride')(props),
                    ).toEqual(expectedDefault);
                  }

                  expect(
                    fn(
                      `basicTestComponent.${tokenPathEnd}`,
                      `nestedOverride.${tokenPathEnd}`,
                    )(props),
                  ).toEqual(expectedDefault);
                });
              });
            });
          });

          describe('when props.overrides is set with override tokens', () => {
            const props = {
              theme,
              overrides: {
                [tokenPathEnd]: 'theOverrideToken',
                nestedOverride: {
                  [tokenPathEnd]: 'theNestedOverrideToken',
                },
              },
            };

            test('when override path is false', () => {
              if (!tokenPathEndRequired) {
                expect(fn('basicTestComponent', false)(props)).toEqual(
                  expectedDefault,
                );
              }
              expect(
                fn(`basicTestComponent.${tokenPathEnd}`, false)(props),
              ).toEqual(expectedDefault);
            });

            if (!tokenPathEndRequired) {
              test('with no override path provided', () => {
                expect(fn('basicTestComponent')(props)).toEqual(
                  expectedOverride,
                );

                expect(fn(`basicTestComponent.${tokenPathEnd}`)(props)).toEqual(
                  expectedOverride,
                );
              });

              test('with override path as empty string', () => {
                expect(fn('basicTestComponent', '')(props)).toEqual(
                  expectedOverride,
                );

                expect(
                  fn(`basicTestComponent.${tokenPathEnd}`, '')(props),
                ).toEqual(expectedOverride);

                expect(
                  fn(`basicTestComponent.${tokenPathEnd}`, '')(props),
                ).toEqual(expectedOverride);
              });
            }

            test('with override path', () => {
              expect(
                fn(`basicTestComponent.${tokenPathEnd}`, tokenPathEnd)(props),
              ).toEqual(expectedOverride);
            });

            test('with nested override path', () => {
              const nestedExpected = expectedResultFormatter(
                theme[themeSection].theNestedOverrideToken,
              );

              if (!tokenPathEndRequired) {
                expect(
                  fn('basicTestComponent', 'nestedOverride')(props),
                ).toEqual(nestedExpected);
              }

              expect(
                fn(
                  `basicTestComponent.${tokenPathEnd}`,
                  `nestedOverride.${tokenPathEnd}`,
                )(props),
              ).toEqual(nestedExpected);
            });
          });
        });

        if (responsive) {
          describe('for responsive tokens', () => {
            test('with no override path provided, with and without token type at the end', () => {
              const props = {
                theme,
              };

              if (!tokenPathEndRequired) {
                expect(fn('responsiveTestComponent')(props)).toMatchSnapshot(
                  'default:no-path-end',
                );
              }

              expect(
                fn(`responsiveTestComponent.${tokenPathEnd}`)(props),
              ).toMatchSnapshot('default:with-path-end');
            });

            describe('when props.overrides is set with single override tokens', () => {
              const singleOverride = expectedResultFormatter(
                theme[themeSection].theOverrideToken,
              );
              const props = {
                theme,
                overrides: {
                  [tokenPathEnd]: 'theOverrideToken',
                },
              };

              if (!tokenPathEndRequired) {
                test('with no override path provided', () => {
                  expect(fn('responsiveTestComponent')(props)).toEqual(
                    singleOverride,
                  );

                  expect(
                    fn(`responsiveTestComponent.${tokenPathEnd}`)(props),
                  ).toEqual(singleOverride);
                });

                test('with override path as empty string', () => {
                  expect(fn('responsiveTestComponent', '')(props)).toEqual(
                    singleOverride,
                  );

                  expect(
                    fn(`responsiveTestComponent.${tokenPathEnd}`, '')(props),
                  ).toEqual(singleOverride);

                  expect(
                    fn(`responsiveTestComponent.${tokenPathEnd}`, '')(props),
                  ).toEqual(singleOverride);
                });
              }

              test('with override path', () => {
                expect(
                  fn(`responsiveTestComponent.${tokenPathEnd}`, tokenPathEnd)(
                    props,
                  ),
                ).toEqual(singleOverride);
              });
            });

            describe('when props.overrides is set with breakpoint object', () => {
              const props = {
                theme,
                overrides: {
                  [tokenPathEnd]: {
                    sm: 'theOverrideToken',
                    lg: 'theOverrideToken',
                  },
                },
              };

              if (!tokenPathEndRequired) {
                test('with no override path provided', () => {
                  expect(fn('responsiveTestComponent')(props)).toMatchSnapshot(
                    'breakpoint-override-object:no-path-end',
                  );

                  expect(
                    fn(`responsiveTestComponent.${tokenPathEnd}`)(props),
                  ).toMatchSnapshot('breakpoint-override-object:with-path-end');
                });

                test('with override path as empty string', () => {
                  expect(
                    fn('responsiveTestComponent', '')(props),
                  ).toMatchSnapshot('breakpoint-override-object:no-path-end');

                  expect(
                    fn(`responsiveTestComponent.${tokenPathEnd}`, '')(props),
                  ).toMatchSnapshot('breakpoint-override-object:with-path-end');

                  expect(
                    fn(`responsiveTestComponent.${tokenPathEnd}`, '')(props),
                  ).toMatchSnapshot('breakpoint-override-object:with-path-end');
                });
              }

              test('with override path', () => {
                expect(
                  fn(`responsiveTestComponent.${tokenPathEnd}`, tokenPathEnd)(
                    props,
                  ),
                ).toMatchSnapshot('breakpoint-override-object:with-path-end');
              });
            });
          });
        }
      });
    },
  );
});
