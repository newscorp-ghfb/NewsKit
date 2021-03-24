import {
  getTypographyPreset,
  getSizing,
  getSpacingInset,
  getSpacingStackHorizontal,
  getSpacingStackVertical,
  getSpacingInlineHorizontal,
  getSpacingInlineVertical,
  getStylePreset,
  getSize,
  getSpace,
  getWeight,
  getMinWidth,
  getHeight,
  getMinHeight,
  getResponsiveSpacingInlineHorizontal,
} from '../style';
import {createTheme, compileTheme} from '../../theme';

describe('get component defaults functions', () => {
  const theme: any = compileTheme(
    createTheme({
      name: 'test-theme',
      overrides: {
        typographyPresets: {
          theDefaultToken: {
            fontFamily: 'theDefaultToken-value-typographyPresets',
          },
          theOverrideToken: {
            fontFamily: 'theOverrideToken-value-typographyPresets',
          },
          theNestedOverrideToken: {
            fontFamily: 'theNestedOverrideToken-value-typographyPresets',
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
        spacePresets: {
          theDefaultToken: 'theDefaultToken-value-space',
          theOverrideToken: 'theOverrideToken-value-space',
          theNestedOverrideToken: 'theNestedOverrideToken-value-space',
        },
        componentDefaults: {
          basicTestComponent: {
            typographyPreset: 'theDefaultToken',
            stylePreset: 'theDefaultToken',
            spaceInset: 'theDefaultToken',
            marginPreset: 'theDefaultToken',
            spacePresets: 'theDefaultToken',
            spaceInline: 'theDefaultToken',
            spaceStack: 'theDefaultToken',
          },
          responsiveTestComponent: {
            typographyPreset: {
              xs: 'theDefaultToken',
              md: 'theOverrideToken',
            },
            marginPreset: {
              xs: 'theDefaultToken',
              md: 'theOverrideToken',
            },
            spaceInset: {
              xs: 'theDefaultToken',
              md: 'theOverrideToken',
            },
          },
          responsiveTestComponent2: {
            spaceInline: {
              xs: 'space010',
              md: 'space020',
            },
          },
          basicCCSUnitsComponent: {
            spaceInset: '10px',
            marginPreset: '11px',
            spacePresets: '12px',
            spaceInline: '13px',
            spaceStack: '14px',
            size: '15px',
            space: '10vw',
            weight: '4px',
            minWidth: '100%',
            height: '90vh',
            minHeight: '10cm',
            sizing: '10vh',
          },
          responsiveCCSUnitsComponent: {
            spaceInset: {
              xs: '10px',
              md: '20px',
            },
            spaceInline: {
              xs: '13px',
              md: '23px',
            },
            spaceStack: {
              xs: '14px',
              md: '24px',
            },
          },
          invalidResponsiveCCSUnitsComponent: {
            spaceInset: {
              xs: '10',
              md: '20',
            },
            spaceInline: {
              xs: 'no-valid-token',
              md: 'not-valid-unit',
            },
            spaceStack: {
              xs: '10pz',
              md: '24md',
            },
          },
        },
      },
    }),
  );

  // For new utils, add a test case to this array.
  [
    {
      fnName: 'getTypographyPreset',
      fn: getTypographyPreset as any,
      tokenPathEnd: 'typographyPreset',
      themeSection: 'typographyPresets',
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
      tokenPathEnd: 'spacePresets',
      themeSection: 'sizing',
      tokenPathEndRequired: true,
    },
    {
      fnName: 'getSpacingInset',
      fn: getSpacingInset as any,
      tokenPathEnd: 'spaceInset',
      themeSection: 'spacePresets',
      expectedResultFormatter: (expected: any) => ({padding: expected}),
      responsive: true,
    },
    {
      fnName: 'getSpacingStackHorizontal',
      fn: getSpacingStackHorizontal as any,
      tokenPathEnd: 'spaceStack',
      themeSection: 'spacePresets',
      expectedResultFormatter: (expected: any) => ({marginBottom: expected}),
      responsive: true,
    },
    {
      fnName: 'getSpacingStackVertical',
      fn: getSpacingStackVertical as any,
      tokenPathEnd: 'spaceStack',
      themeSection: 'spacePresets',
      expectedResultFormatter: (expected: any) => ({marginRight: expected}),
      responsive: true,
    },
    {
      fnName: 'getSpacingInlineHorizontal',
      fn: getSpacingInlineHorizontal as any,
      tokenPathEnd: 'spaceInline',
      themeSection: 'spacePresets',
      expectedResultFormatter: (expected: any) => ({marginRight: expected}),
      responsive: true,
    },

    {
      fnName: 'getSpacingInlineVertical',
      fn: getSpacingInlineVertical as any,
      tokenPathEnd: 'spaceInline',
      themeSection: 'spacePresets',
      expectedResultFormatter: (expected: any) => ({marginBottom: expected}),
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

  describe('Component defaults with CSS Units', () => {
    const props = {
      theme,
    };

    const fns = [
      {fn: getSize as any, fnName: 'getSize', path: 'size'},
      {fn: getSpace as any, fnName: 'getSpace', path: 'space'},
      {fn: getWeight as any, fnName: 'getWeight', path: 'weight'},
      {fn: getMinWidth as any, fnName: 'getMinWidth', path: 'minWidth'},
      {fn: getHeight as any, fnName: 'getHeight', path: 'height'},
      {fn: getMinHeight as any, fnName: 'getMinHeight', path: 'minHeight'},
      {fn: getSizing as any, fnName: 'getSizing', path: 'sizing'},
      {
        fn: getSpacingInset as any,
        fnName: 'getSpacingInset',
        path: 'spaceInset',
        expectedResultFormatter: (expected: any) => ({padding: expected}),
        responsive: true,
      },
      {
        fn: getSpacingStackVertical as any,
        fnName: 'getSpacingStackVertical',
        path: 'spaceStack',
        expectedResultFormatter: (expected: any) => ({
          marginRight: expected,
        }),
        responsive: true,
      },
      {
        fn: getSpacingStackHorizontal as any,
        fnName: 'getSpacingStackHorizontal',
        path: 'spaceStack',
        expectedResultFormatter: (expected: any) => ({
          marginBottom: expected,
        }),
        responsive: true,
      },
      {
        fn: getSpacingInlineVertical as any,
        fnName: 'getSpacingInlineVertical',
        path: 'spaceInline',
        expectedResultFormatter: (expected: any) => ({
          marginBottom: expected,
        }),
        responsive: true,
      },
      {
        fn: getSpacingInlineHorizontal as any,
        fnName: 'getSpacingInlineHorizontal',
        path: 'spaceInline',
        expectedResultFormatter: (expected: any) => ({
          marginRight: expected,
        }),
        responsive: true,
      },
    ];

    const identify = (id: string) => id;

    describe('basic CSS Units', () => {
      fns.forEach(({fnName, fn, path, expectedResultFormatter = identify}) => {
        test(fnName, () => {
          expect(fn('basicCCSUnitsComponent')(props)).toEqual(
            expectedResultFormatter(
              theme.componentDefaults.basicCCSUnitsComponent[path],
            ),
          );
        });
      });
    });

    describe('responsive CSS Units', () => {
      fns
        .filter(({responsive}) => responsive)
        .forEach(({fnName, fn}) => {
          test(fnName, () => {
            expect(fn('responsiveCCSUnitsComponent')(props)).toMatchSnapshot();
          });
        });
    });

    describe('invalid responsive CSS Units', () => {
      fns
        .filter(({responsive}) => responsive)
        .forEach(({fnName, fn}) => {
          test(fnName, () => {
            expect(fn('invalidResponsiveCCSUnitsComponent')(props)).toEqual({});
          });
        });
    });
  });

  describe('getResponsiveSpacingInlineHorizontal', () => {
    const props = {
      theme,
    };
    test('return correct CSS Object with tokens', () => {
      const result = getResponsiveSpacingInlineHorizontal(
        'responsiveTestComponent2',
      )(props);
      expect(result).toEqual({
        '@media screen and (max-width: 767px)': {marginRight: '4px'},
        '@media screen and (min-width: 768px)': {marginRight: '8px'},
      });
    });
    test('return correct CSS Object with CSS units', () => {
      const result = getResponsiveSpacingInlineHorizontal(
        'responsiveCCSUnitsComponent',
      )(props);
      expect(result).toEqual({
        '@media screen and (max-width: 767px)': {marginRight: '13px'},
        '@media screen and (min-width: 768px)': {marginRight: '23px'},
      });
    });
  });
});
