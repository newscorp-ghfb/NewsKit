import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
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

describe('Surface Helper', () => {
  test('getStylePresetFromTheme iconButtonMinimalPrimary', () => {
    const fragment = renderToFragmentWithTheme(TestSurface);
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme with override to interactive020', () => {
    const fragment = renderToFragmentWithTheme(
      OverridableTestSurface,
      {
        stylePresetToUse: 'interactive020',
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive020: {
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

  test('getStylePresetFromTheme iconButtonMinimalPrimary with borderRadius', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      borderRadiusSize: 'sizing030',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme iconButtonMinimalPrimary with disabled state', () => {
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

  test('getStylePresetFromTheme iconButtonMinimalPrimary with loading state', () => {
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

  test('getStylePresetFromTheme iconButtonMinimalPrimary with current state', () => {
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

  test('getStylePresetFromTheme iconButtonMinimalPrimary with loading and current state', () => {
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

  test('getStylePresetFromTheme iconButtonMinimalPrimary with disabled and loading state', () => {
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

  test('getStylePresetFromTheme iconButtonMinimalPrimary without background-color styles', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      omitStyles: ['backgroundColor'],
    });
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme iconButtonMinimalPrimary without disabled state styles', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      omitStates: ['disabled'],
    });
    expect(fragment).toMatchSnapshot();
  });
});
