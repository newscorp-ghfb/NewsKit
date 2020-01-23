import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
} from '../style-preset';
import {createTheme} from '../../themes';
import {styled} from '../style';

const TestSurface = styled.div<GetStylePresetFromThemeOptions>`
  ${options => getStylePresetFromTheme('interactive010', undefined, options)}
`;

const OverridableTestSurface = styled.div<
  GetStylePresetFromThemeOptions & {stylePresetToUse: string}
>`
  ${options =>
    getStylePresetFromTheme('interactive010', 'stylePresetToUse', options)}
`;

describe('Surface Helper', () => {
  test('getStylePresetFromTheme interactive010', () => {
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

  test('getStylePresetFromTheme interactive010 with borderRadius', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      borderRadiusSize: 'sizing030',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme interactive010 with disabled state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isDisabled: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive010: {
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

  test('getStylePresetFromTheme interactive010 with loading state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isLoading: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive010: {
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

  test('getStylePresetFromTheme interactive010 with current state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isCurrent: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive010: {
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

  test('getStylePresetFromTheme interactive010 with loading and current state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isCurrent: true,
        isLoading: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive010: {
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

  test('getStylePresetFromTheme interactive010 with disabled and loading state', () => {
    const fragment = renderToFragmentWithTheme(
      TestSurface,
      {
        isDisabled: true,
        isLoading: true,
      },
      createTheme('test-style-preset', {
        themeOverrider: () => ({
          stylePresets: {
            interactive010: {
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

  test('getStylePresetFromTheme interactive010 without background-color styles', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      omitStyles: ['backgroundColor'],
    });
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme interactive010 without disabled state styles', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      omitStates: ['disabled'],
    });
    expect(fragment).toMatchSnapshot();
  });
});
