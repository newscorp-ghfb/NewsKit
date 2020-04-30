import {
  styled,
  getDefaultTypePreset,
  getDefaultMarginPreset,
  getDefaultPaddingPreset,
} from '../style';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {getDefaultStylePreset} from '../style-preset';
import {createTheme} from '../../themes';

describe('get default presets functions', () => {
  const theme = createTheme('test-theme', {
    themeOverrider: () => ({
      defaultPresets: {
        articleHeadline: {
          heading: {
            stylePreset: 'articleHeadlineContent',
            typePreset: {
              xs: 'headline100',
              md: 'headline200',
            },
          },
          kicker: {
            typePreset: 'headline100',
            margin: {
              xs: 'spaceInline030',
              sm: 'spaceInline030',
              md: 'spaceInline040',
              lg: 'spaceInline040',
            },
            padding: {
              xs: 'spaceStack020',
              sm: 'spaceStack030',
              md: 'spaceStack040',
            },
          },
        },
      },
    }),
  });

  test('getDefaultTypePreset handles object breakpoints', () => {
    const defaultTestSurface = styled.div`
      display: block;
      ${getDefaultTypePreset('articleHeadline.heading')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      undefined,
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultTypePreset with breakpoints and crop', () => {
    const defaultTestSurface = styled.div`
      display: block;

      ${getDefaultTypePreset('articleHeadline.heading', undefined as never, {
        withCrop: true,
      })}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      undefined,
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultTypePreset without breakpoints and with crop', () => {
    const defaultTestSurface = styled.div`
      display: block;
      ${getDefaultTypePreset('articleHeadline.kicker', undefined as never, {
        withCrop: true,
      })}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      undefined,
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultTypePreset with customProp', () => {
    const defaultTestSurface = styled.div<{customProp: string}>`
      display: block;
      ${getDefaultTypePreset('articleHeadline.heading', 'customProp')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      {
        customProp: 'heading010',
      },
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultStylePreset handles string preset', () => {
    const defaultTestSurface = styled.div`
      display: block;
      ${getDefaultStylePreset('articleHeadline.heading')}
    `;
    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      undefined,
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultStylePreset overwrite preset', () => {
    const defaultTestSurface = styled.p<{customProp: string}>`
      display: block;
      ${getDefaultStylePreset('articleHeadline.heading', 'customProp')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      {
        customProp: 'flagSolidLive',
      },
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultMarginPreset handle breakpoints preset', () => {
    const defaultTestSurface = styled.p`
      display: block;
      ${getDefaultMarginPreset('articleHeadline.kicker')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      undefined,
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultMarginPreset handle overwrite variable', () => {
    const defaultTestSurface = styled.p<{customProp: string}>`
      display: block;
      ${getDefaultMarginPreset('articleHeadline.kicker', 'customProp')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      {
        customProp: 'spaceStack070',
      },
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultPaddingPreset handle breakpoints preset', () => {
    const defaultTestSurface = styled.p`
      display: block;
      ${getDefaultPaddingPreset('articleHeadline.kicker')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      undefined,
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('getDefaultPaddingPreset handle overwrite variable', () => {
    const defaultTestSurface = styled.p<{customProp: string}>`
      display: block;
      ${getDefaultPaddingPreset('articleHeadline.kicker', 'customProp')}
    `;

    const fragment = renderToFragmentWithTheme(
      defaultTestSurface,
      {
        customProp: 'spaceInset050',
      },
      theme,
    );
    expect(fragment).toMatchSnapshot();
  });
});
