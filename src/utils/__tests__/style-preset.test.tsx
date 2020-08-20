import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  getPresetStyles,
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
} from '../style-preset';
import {createTheme, compileTheme} from '../../theme';
import {styled, MQ} from '../style';

const TestSurface = styled.div<GetStylePresetFromThemeOptions>`
  ${options =>
    getStylePresetFromTheme('iconButtonMinimalPrimary', undefined, options)}
`;

const OverridableTestSurface = styled.div<
  GetStylePresetFromThemeOptions & {stylePresetToUse: MQ<string>}
>`
  ${options =>
    getStylePresetFromTheme(
      'iconButtonMinimalPrimary',
      'stylePresetToUse',
      options,
    )}
`;

const OverridableTestSurfaceWithNoDefault = styled.div<
  GetStylePresetFromThemeOptions & {stylePresetToUse: string}
>`
  ${options => getStylePresetFromTheme(undefined, 'stylePresetToUse', options)}
`;

describe('getStylePresetFromTheme', () => {
  test('with default iconButtonMinimalPrimary style preset', () => {
    const fragment = renderToFragmentWithTheme(TestSurface);
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme with override to interactive040', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: 'interactive040',
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              interactive040: {
                base: {
                  backgroundColor: '#FF00FF',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme with interactive010 for xs, interactive020 for sm, and interactive030 for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactive010',
          sm: 'interactive020',
          md: 'interactive030',
        },
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              interactive010: {
                base: {
                  backgroundColor: 'red',
                },
                disabled: {
                  color: 'red',
                },
              },
              interactive020: {
                base: {
                  backgroundColor: 'blue',
                },
              },
              interactive030: {
                base: {
                  backgroundColor: 'green',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme with interactive010 for xs, interactive020 for sm, and incorrect for md breakpoints', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactive010',
          sm: 'interactive020',
          md: 'incorrect',
        },
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              interactive010: {
                base: {
                  backgroundColor: 'red',
                },
                disabled: {
                  color: 'red',
                },
              },
              interactive020: {
                base: {
                  backgroundColor: 'blue',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme with interactive010 for xs, interactive020 for sm, interactive030 for md, and interactive040 for lg breakpoints', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactive010',
          sm: 'interactive020',
          md: 'interactive030',
          lg: 'interactive040',
        },
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              interactive010: {
                base: {
                  backgroundColor: 'red',
                },
              },
              interactive020: {
                base: {
                  backgroundColor: 'blue',
                },
              },
              interactive030: {
                base: {
                  backgroundColor: 'green',
                },
              },
              interactive040: {
                base: {
                  backgroundColor: '#FF00FF',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme with interactive010 for xs, interactive020 for sm, interactive030 for md, interactive040 for lg breakpoints and ignore wrong prop', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: {
          xs: 'interactive010',
          sm: 'interactive020',
          md: 'interactive030',
          lg: 'interactive040',
          wrong: 'interactive050',
        } as any,
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              interactive010: {
                base: {
                  backgroundColor: 'red',
                },
              },
              interactive020: {
                base: {
                  backgroundColor: 'blue',
                },
              },
              interactive030: {
                base: {
                  backgroundColor: 'green',
                },
              },
              interactive040: {
                base: {
                  backgroundColor: '#FF00FF',
                },
              },
              interactive050: {
                base: {
                  backgroundColor: 'white',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with not existing style preset key returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'NotExistingStylePreset',
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              interactives020: {
                base: {
                  backgroundColor: '#FF00FF',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with not existing style preset state returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'testPreset',
        isLoading: true,
      },
      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              testPreset: {
                base: undefined,
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with stateOverwrites without base state fallbacks to empty object for base and returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'testPreset',
        isDisabled: true,
      },

      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              testPreset: {
                base: undefined,
                disabled: {
                  backgroundColor: '#FFFF00',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with disabled state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isDisabled: true,
      },

      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              iconButtonMinimalPrimary: {
                disabled: {
                  backgroundColor: '#FF0000',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with loading state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isLoading: true,
      },

      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              iconButtonMinimalPrimary: {
                loading: {
                  backgroundColor: '#ffff00',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with selected state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isSelected: true,
      },

      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              iconButtonMinimalPrimary: {
                selected: {
                  backgroundColor: '#00ff00',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with loading and selected state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isSelected: true,
        isLoading: true,
      },

      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              iconButtonMinimalPrimary: {
                selected: {
                  backgroundColor: '#00ff00',
                },
                loading: {
                  backgroundColor: '#ffff00',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with disabled and loading state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isDisabled: true,
        isLoading: true,
      },

      compileTheme(
        createTheme({
          name: 'test-style-preset',
          overrides: {
            stylePresets: {
              iconButtonMinimalPrimary: {
                loading: {
                  backgroundColor: '#00ff00',
                },
                disabled: {
                  backgroundColor: '#FF0000',
                },
              },
            },
          },
        }),
      ),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary without background-color styles', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      omitStyles: ['backgroundColor'],
    });
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary without disabled state styles', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      omitStates: ['disabled'],
    });
    expect(fragment).toMatchSnapshot();
  });
});

describe('getPresetStyles', () => {
  test('to return the same styles and empty borderRadius when no options param provided', () => {
    const result = getPresetStyles({backgroundColor: 'red'});
    expect(result).toEqual({backgroundColor: 'red'});
  });

  test('to return backgroundColor when filtering by it', () => {
    const result = getPresetStyles(
      {backgroundColor: 'red', color: 'blue', iconColor: 'green'},
      {filterStyles: ['backgroundColor']},
    );
    expect(result).toEqual({backgroundColor: 'red'});
  });
});
