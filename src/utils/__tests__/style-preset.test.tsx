import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
} from '../style-preset';
import {createTheme} from '../../themes';
import {styled} from '../style';

const TestSurface: React.FC<GetStylePresetFromThemeOptions> = props => {
  const TestElement = styled.div<GetStylePresetFromThemeOptions>`
    ${({theme, ...options}) =>
      getStylePresetFromTheme('interactive010', options)({theme})}
  `;

  return <TestElement {...props}>interactive010</TestElement>;
};

describe('Surface Helper', () => {
  test('getStylePresetFromTheme interactive010', () => {
    const fragment = renderToFragmentWithTheme(TestSurface);
    expect(fragment).toMatchSnapshot();
  });

  test('getStylePresetFromTheme interactive010 with borderRadius', () => {
    const fragment = renderToFragmentWithTheme(TestSurface, {
      borderRadiusSize: 'sizing030',
    });
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
                backgroundColor: '#FFFFFF',
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
                backgroundColor: '#FFFFFF',
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
                backgroundColor: '#FFFFFF',
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
