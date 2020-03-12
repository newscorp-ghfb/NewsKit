import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  getPresetStyles,
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
} from '../style-preset';
import {createTheme} from '../../themes';
import {styled} from '../style';

const TestSurface = styled.div<GetStylePresetFromThemeOptions>`
  ${options =>
    getStylePresetFromTheme('iconButtonMinimalPrimary', undefined, options)}
`;

const OverridableTestSurface = styled.div<
  GetStylePresetFromThemeOptions & {stylePresetToUse: string}
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
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive040: {
              base: {
                backgroundColor: '#FF00FF',
              },
            },
          },
        }),
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('with not existing style preset key returns empty fragment', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurfaceWithNoDefault,
      {
        stylePresetToUse: 'NotExistingStylePreset',
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactives020: {
              base: {
                backgroundColor: '#FF00FF',
              },
            },
          },
        }),
      }),
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
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            testPreset: {
              base: undefined,
            },
          },
        }),
      }),
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
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            testPreset: {
              base: undefined,
              disabled: {
                backgroundColor: '#FFFF00',
              },
            },
          },
        }),
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with disabled state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isDisabled: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            iconButtonMinimalPrimary: {
              disabled: {
                backgroundColor: '#FF0000',
              },
            },
          },
        }),
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with loading state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isLoading: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            iconButtonMinimalPrimary: {
              loading: {
                backgroundColor: '#ffff00',
              },
            },
          },
        }),
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with current state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isCurrent: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            iconButtonMinimalPrimary: {
              current: {
                backgroundColor: '#00ff00',
              },
            },
          },
        }),
      }),
    );
    expect(fragment).toMatchSnapshot();
  });

  test('iconButtonMinimalPrimary with loading and current state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isCurrent: true,
        isLoading: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            iconButtonMinimalPrimary: {
              current: {
                backgroundColor: '#00ff00',
              },
              loading: {
                backgroundColor: '#ffff00',
              },
            },
          },
        }),
      }),
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
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            iconButtonMinimalPrimary: {
              current: {
                backgroundColor: '#00ff00',
              },
              disabled: {
                backgroundColor: '#FF0000',
              },
            },
          },
        }),
      }),
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
